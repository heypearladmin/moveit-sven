import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY  = process.env.GHL_API_KEY!;
const GHL_LOCATION = process.env.GHL_LOCATION_ID!;
const GHL_BASE     = "https://services.leadconnectorhq.com";

// Workflow IDs in Sven's subaccount
const WORKFLOW_NURTURE = "35288ed3-bb00-4ba5-a6be-3329a981d04f"; // New Lead Nurture (Fast 5)
const WORKFLOW_ALERT   = "702bcbf7-e19d-4dea-80f7-f6b77e485d79"; // HeyPearl Lead Alert

// Pipeline: Marketing Pipeline → New Lead stage
const PIPELINE_ID    = "JMWrm4hrK1cAXSXQAxBM";
const STAGE_NEW_LEAD = "edcd190e-c459-43c0-9583-2c23c8d2bc43";

const ghlHeaders = {
  "Authorization": `Bearer ${GHL_API_KEY}`,
  "Version": "2021-07-28",
  "Content-Type": "application/json",
};

async function createContact(data: {
  firstName: string; lastName: string;
  email: string; phone: string; community: string;
}) {
  const res = await fetch(`${GHL_BASE}/contacts/`, {
    method: "POST",
    headers: ghlHeaders,
    body: JSON.stringify({
      locationId: GHL_LOCATION,
      firstName:  data.firstName,
      lastName:   data.lastName,
      email:      data.email,
      phone:      data.phone,
      source:     "Move With Sven — DMV Market Snapshot",
      tags: [
        "market-snapshot",
        `community-${data.community.toLowerCase().replace(/\s+/g, "-")}`,
        "website-lead",
        "heypearl-lead",
      ],
      customFields: [
        { id: "1WLpqj3OvCbjCqxV2mPz", field_value: data.community },
      ],
    }),
  });
  const json = await res.json();

  if (res.ok) return json?.contact?.id as string;

  if (res.status === 400 || res.status === 422) {
    const existingId = json?.meta?.contactId as string | undefined;
    if (existingId) return existingId;
  }

  throw new Error(`Contact creation failed: ${res.status} — ${JSON.stringify(json)}`);
}

async function addToWorkflow(contactId: string, workflowId: string) {
  await fetch(`${GHL_BASE}/contacts/${contactId}/workflow/${workflowId}`, {
    method: "POST",
    headers: ghlHeaders,
  }).catch((err) => console.warn(`Workflow ${workflowId} add failed:`, err));
}

async function createOpportunity(contactId: string, name: string, community: string) {
  await fetch(`${GHL_BASE}/opportunities/`, {
    method: "POST",
    headers: ghlHeaders,
    body: JSON.stringify({
      locationId: GHL_LOCATION,
      pipelineId: PIPELINE_ID,
      stageId:    STAGE_NEW_LEAD,
      contactId,
      name:       `${name} — ${community} Market Snapshot`,
      status:     "open",
      source:     "Move With Sven Website",
    }),
  }).catch((err) => console.warn("Opportunity creation failed:", err));
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, community } = await req.json();

    if (!name || !email || !phone || !community) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const parts     = name.trim().split(/\s+/);
    const firstName = parts[0] ?? name;
    const lastName  = parts.slice(1).join(" ") || "";
    const fullName  = `${firstName} ${lastName}`.trim();

    // 1. Create contact in GHL
    let contactId: string | null = null;
    try {
      contactId = await createContact({ firstName, lastName, email, phone, community });
    } catch (ghlErr) {
      console.warn("GHL contact creation failed:", ghlErr);
    }

    if (contactId) {
      // 2. Add to New Lead Nurture workflow
      await addToWorkflow(contactId, WORKFLOW_NURTURE);
      // 3. Trigger HeyPearl Lead Alert workflow (sends notification to Sven)
      await addToWorkflow(contactId, WORKFLOW_ALERT);
      // 4. Create opportunity in Marketing Pipeline → New Lead stage
      await createOpportunity(contactId, fullName, community);
    }

    return NextResponse.json({ success: true, contactId });

  } catch (err) {
    console.error("Snapshot API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
