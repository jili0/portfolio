import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  // Initialize Resend only when the API route is called, not at build time
  const resend = new Resend(process.env.RESEND_API_KEY);
  console.log('API route called');
  
  try {
    const { name, email, message } = await request.json();
    console.log('Received data:', { name, email, message });

    // Validate input
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email...');

    try {
      // Send email using Resend
      const data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'jingli0319@gmail.com',
        subject: `New message from ${name}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email,
      });

      console.log('Email sent successfully:', data);
      return NextResponse.json({ success: true, message: 'Email sent successfully', data });
    } catch (resendError) {
      console.error('Resend error:', resendError);
      return NextResponse.json(
        { error: `Resend error: ${resendError instanceof Error ? resendError.message : 'Unknown error'}` },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('General error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}