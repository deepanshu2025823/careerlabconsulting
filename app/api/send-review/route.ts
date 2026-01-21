import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_frKBbEjB_Jqd5s34dxKmXAVcLJ8ZzpksN');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, review, rating, ip, to, bcc } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: [to],
      bcc: [bcc],
      subject: `New Review: ${name} (${rating} Stars)`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #2563eb;">New Success Story Submission</h2>
          <hr />
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Rating:</strong> ${rating} / 5 Stars</p>
          <p><strong>Review:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 15px; border-left: 5px solid #2563eb; margin: 10px 0;">
            "${review}"
          </blockquote>
          <hr />
          <p style="font-size: 12px; color: #666;">
            <strong>Security Tracking Info:</strong><br />
            IP Address: ${ip}<br />
            Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error); 
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Email sent successfully", data });
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}