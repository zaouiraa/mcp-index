import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanMessage = String(message).trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    const { error: dbError } = await supabase.from("contact_messages").insert([
      {
        name: cleanName,
        email: cleanEmail,
        message: cleanMessage,
      },
    ]);

    if (dbError) {
      return NextResponse.json(
        { error: dbError.message || "Failed to save message" },
        { status: 500 }
      );
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail =
      process.env.CONTACT_TO_EMAIL || "mcpindext@gmail.com";

    const { error: emailError } = await resend.emails.send({
      from: `MCPIndex Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: cleanEmail,
      subject: `New contact message from ${cleanName}`,
      text: `
Name: ${cleanName}
Email: ${cleanEmail}

Message:
${cleanMessage}
      `.trim(),
    });

    if (emailError) {
      return NextResponse.json(
        {
          error: "Message saved, but email sending failed",
          details: emailError.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
