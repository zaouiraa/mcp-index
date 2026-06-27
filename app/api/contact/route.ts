import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('[v0] RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const contactFromEmail = process.env.CONTACT_FROM_EMAIL || 'noreply@mcpindex.dev';
    const contactToEmail = process.env.CONTACT_TO_EMAIL || 'contact@mcpindex.dev';

    // Send email to team
    const data = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 12px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 12px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background: white; padding: 12px; border-radius: 4px; margin-top: 8px;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the MCPIndex contact form.
          </p>
        </div>
      `,
    });

    if (data.error) {
      console.error('[v0] Resend error:', data.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
