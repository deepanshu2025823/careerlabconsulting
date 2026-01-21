import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 're_frKBbEjB_Jqd5s34dxKmXAVcLJ8ZzpksN');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, review, rating, ip, to } = body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [to], 
      subject: `New Review: ${name} (${rating} Stars)`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #2563eb;">New Review Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Rating:</strong> ${rating}/5</p>
          <p><strong>Message:</strong> ${review}</p>
          <hr />
          <p style="font-size: 11px; color: #999;">IP: ${ip}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ message: "Success", data });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}