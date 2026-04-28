import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, interest, message, isRealtor, realtorName, brokerage, clientName } = await request.json()

    // Validate required fields
    if (isRealtor) {
      if (!realtorName || !clientName || !email || !message) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        )
      }
    } else {
      if (!firstName || !lastName || !email || !message) {
        return NextResponse.json(
          { error: 'Missing required fields' },
          { status: 400 }
        )
      }
    }

    const { data, error } = await resend.emails.send({
      from: 'Charterstone Contact <contact@mycharterstonehome.com>',
      to: ['info@mycharterstonehome.com'],
      replyTo: email,
      subject: `${isRealtor ? '[Realtor Inquiry] ' : ''}New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        ${isRealtor ? `
        <div style="background:#f9f5f0;border-left:3px solid #7d1935;padding:12px 16px;margin-bottom:16px;">
          <p style="margin:0 0 4px;font-weight:bold;color:#7d1935;">Realtor Inquiry</p>
          <p style="margin:0;"><strong>Realtor:</strong> ${realtorName}</p>
          <p style="margin:0;"><strong>Brokerage:</strong> ${brokerage || 'Not provided'}</p>
          <p style="margin:0;"><strong>Client:</strong> ${clientName}</p>
        </div>
        ` : ''}
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interest || 'Not specified'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
