import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { RateLimiterMemory, RateLimiterRes } from "rate-limiter-flexible";

const limiter = new RateLimiterMemory({
  points: 5, // 5 requests
  duration: 60, // per 60 seconds per IP
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    await limiter.consume(ip); // throws if too many requests

    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlBody = `
      <div style="
        font-family: Inter, Arial, sans-serif;
        max-width: 640px;
        margin: 0 auto;
        background: #f9fafb;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      ">
        <div style="
          background: linear-gradient(135deg, #002F6C, #004C99);
          padding: 24px 32px;
          color: #fff;
        ">
          <h2 style="margin: 0; font-size: 22px; font-weight: 600;">
            New Message from Entrogx Contact Form
          </h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">
            You’ve received a new inquiry.
          </p>
        </div>

        <div style="padding: 32px; background: #ffffff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 8px 0; font-weight: 600;">Name</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Email</td><td>${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Company</td><td>${
              company || "N/A"
            }</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 600;">Message</td><td style="white-space: pre-line;">${message}</td></tr>
          </table>
          <div style="margin: 32px 0 0; text-align: center;">
            <a href="mailto:${email}" style="
              background: #002F6C;
              color: #fff;
              text-decoration: none;
              padding: 10px 20px;
              border-radius: 6px;
              font-size: 14px;
            ">Reply to ${name}</a>
          </div>
        </div>

        <div style="
          background: #f3f4f6;
          padding: 16px 24px;
          text-align: center;
          font-size: 13px;
          color: #6b7280;
        ">
          Sent automatically from <strong>Entrogx Contact Form</strong> · ${new Date().toLocaleDateString()}
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Entrogx Contact Form" <${process.env.SMTP_USER}>`,
      to: "ahmdzulfiqar01@gmail.com",
      subject: `📩 New Contact Form Message from ${name}`,
      html: htmlBody,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof RateLimiterRes) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    console.error("❌ Email sending failed:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
