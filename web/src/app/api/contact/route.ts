import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured. Set RESEND_API_KEY in your environment." },
      { status: 500 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, company, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !company?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "All fields (name, email, company, message) are required." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "contact@sales.greenfundr.com",
      to: "sales@greenfundr.com",
      reply_to: email.trim(),
      subject: `New contact form submission from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        `Company: ${company.trim()}`,
        "",
        `Message:`,
        message.trim(),
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected error sending email.";
    return NextResponse.json({ error: `Failed to send email: ${message}` }, { status: 500 });
  }
}
