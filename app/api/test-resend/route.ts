import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const key = process.env.RESEND_API_KEY;

  if (!key) {
    return NextResponse.json({ error: "RESEND_API_KEY is missing from environment" }, { status: 500 });
  }

  try {
    const resend = new Resend(key);
    const result = await resend.emails.send({
      from:    "HeyPearl <admin@heypearl.io>",
      to:      "dale@heypearl.io",
      subject: "Resend Test — Move With Sven",
      html:    "<p>Resend is working correctly from Vercel production.</p>",
    });

    return NextResponse.json({ success: true, id: result.data?.id, error: result.error });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
