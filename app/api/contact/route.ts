import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  console.log('[v0] Contact API route hit')
  console.log('[v0] RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY)
  
  try {
    const body = await request.json()
    console.log('[v0] Request body received:', JSON.stringify(body))
    const { firstName, lastName, email, phone, interest, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Charterstone Contact <onboarding@resend.dev>',
      to: ['mathew@newrootseb5.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Interest:</strong> ${interest || 'Not specified'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.log('[v0] Resend error details:', JSON.stringify(error, null, 2))
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.log('[v0] Contact form catch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
