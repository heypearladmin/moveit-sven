import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const getResend = () => new Resend(process.env.RESEND_API_KEY);

const GHL_API_KEY  = process.env.GHL_API_KEY!;
const GHL_LOCATION = process.env.GHL_LOCATION_ID!;
const GHL_BASE     = "https://services.leadconnectorhq.com";

// Workflow IDs in Sven's subaccount
const WORKFLOW_NURTURE      = "35288ed3-bb00-4ba5-a6be-3329a981d04f"; // New Lead Nurture (Fast 5)
const WORKFLOW_ALERT        = "702bcbf7-e19d-4dea-80f7-f6b77e485d79"; // HeyPearl Lead Alert

// Pipeline: Marketing Pipeline → New Lead stage
const PIPELINE_ID           = "JMWrm4hrK1cAXSXQAxBM";
const STAGE_NEW_LEAD        = "edcd190e-c459-43c0-9583-2c23c8d2bc43";

const ghlHeaders = {
  "Authorization": `Bearer ${GHL_API_KEY}`,
  "Version": "2021-07-28",
  "Content-Type": "application/json",
};

// ── helpers ──────────────────────────────────────────────────────────────────

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
      tags:       [
        "market-snapshot",
        `community-${data.community.toLowerCase().replace(/\s+/g, "-")}`,
        "website-lead",
      ],
      customFields: [
        { id: "1WLpqj3OvCbjCqxV2mPz", field_value: data.community },
      ],
    }),
  });
  const json = await res.json();

  // Success — return new contact id
  if (res.ok) return json?.contact?.id as string;

  // 400 / 422 = duplicate contact — GHL includes the existing contactId in meta
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

async function sendSvenNotification(data: {
  name: string; email: string; phone: string; community: string;
}) {
  await getResend().emails.send({
    from:    "HeyPearl <admin@heypearl.io>",
    replyTo: "admin@heypearl.io",
    to:      "sven@movewithsven.com",
    subject: `New Lead — ${data.name} is interested in ${data.community}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a2744;">
        <div style="background:#1a2744;padding:24px 32px;">
          <p style="color:#c4972a;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin:0;">HeyPearl · Lead Alert</p>
        </div>
        <div style="padding:32px;background:#f8f5ee;">
          <p style="font-size:22px;font-weight:700;margin:0 0 8px;">Hello Sven,</p>
          <p style="font-size:15px;color:#444;margin:0 0 24px;line-height:1.6;">
            You have received a new lead from HeyPearl.<br/>
            Below are the details for your immediate attention:
          </p>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #e0d9cc;width:100px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#c4972a;">Name</td><td style="padding:10px 0;border-bottom:1px solid #e0d9cc;font-size:15px;color:#1a2744;font-weight:600;">${data.name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e0d9cc;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#c4972a;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #e0d9cc;font-size:15px;color:#1a2744;">${data.phone}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #e0d9cc;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#c4972a;">Email</td><td style="padding:10px 0;border-bottom:1px solid #e0d9cc;font-size:15px;color:#1a2744;">${data.email}</td></tr>
            <tr><td style="padding:10px 0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#c4972a;">Community</td><td style="padding:10px 0;font-size:15px;color:#1a2744;">${data.community}</td></tr>
          </table>
          <div style="margin-top:28px;padding:16px 20px;background:#1a2744;border-radius:8px;">
            <p style="color:#c4972a;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin:0 0 4px;">Next Step</p>
            <p style="color:#f8f5ee;font-size:14px;margin:0;line-height:1.5;">Follow up within the hour to maximise your conversion rate.</p>
          </div>
        </div>
        <div style="padding:16px 32px;background:#e8e2d6;">
          <p style="font-size:11px;color:#888;margin:0;text-align:center;">Sent by HeyPearl on behalf of Move With Sven · movewithsven.com</p>
        </div>
      </div>
    `,
  }).catch((err) => console.warn("Resend notification failed:", err));
}

async function createOpportunity(contactId: string, name: string, community: string) {
  await fetch(`${GHL_BASE}/opportunities/`, {
    method: "POST",
    headers: ghlHeaders,
    body: JSON.stringify({
      locationId:  GHL_LOCATION,
      pipelineId:  PIPELINE_ID,
      stageId:     STAGE_NEW_LEAD,
      contactId,
      name:        `${name} — ${community} Market Snapshot`,
      status:      "open",
      source:      "Move With Sven Website",
    }),
  }).catch((err) => console.warn("Opportunity creation failed:", err));
}

// ── handler ──────────────────────────────────────────────────────────────────

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

    // 1. Send HeyPearl → Sven notification email FIRST
    // Always fires regardless of GHL status — uses raw form data so phone shows exactly as typed
    await sendSvenNotification({ name: fullName, email, phone, community });

    // 2. Create contact in GHL (best effort — invalid phone won't block the notification)
    let contactId: string | null = null;
    try {
      contactId = await createContact({ firstName, lastName, email, phone, community });
    } catch (ghlErr) {
      console.warn("GHL contact creation failed (non-blocking):", ghlErr);
    }

    if (contactId) {
      // 3. Add to New Lead Nurture workflow
      await addToWorkflow(contactId, WORKFLOW_NURTURE);
      // 4. Alert via HeyPearl Lead Alert workflow (GHL internal)
      await addToWorkflow(contactId, WORKFLOW_ALERT);
      // 5. Create opportunity in Marketing Pipeline → New Lead stage
      await createOpportunity(contactId, fullName, community);
    }

    return NextResponse.json({ success: true, contactId });

  } catch (err) {
    console.error("Snapshot API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
