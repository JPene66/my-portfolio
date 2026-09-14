import { Resend } from "resend";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["stevejordansteve940@gmail.com"],
      replyTo: email,
      subject: `New message from ${name} — Portfolio Contact`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b101d; color: #f8fafc; padding: 40px; border-radius: 12px;">
          <div style="margin-bottom: 32px; padding-bottom: 20px; border-bottom: 1px solid #263352;">
            <h1 style="font-size: 22px; font-weight: 700; color: #1ba098; margin: 0;">
              New Portfolio Message
            </h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0;">
              Received via your portfolio contact form
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; width: 90px;">Name</td>
              <td style="padding: 10px 0; color: #f8fafc; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 10px 0; color: #1ba098; font-size: 15px;">
                <a href="mailto:${email}" style="color: #1ba098; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </table>

          <div style="background: #151d30; border: 1px solid #263352; border-radius: 8px; padding: 20px;">
            <p style="color: #94a3b8; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 12px;">Message</p>
            <p style="color: #cbd5e1; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #263352; text-align: center;">
            <a href="mailto:${email}" style="display: inline-block; background: #1ba098; color: #ffffff; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600; text-decoration: none;">
              Reply to ${name}
            </a>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { success: false, error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
