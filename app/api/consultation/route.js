import nodemailer from 'nodemailer';

// Try multiple common SMTP configurations for shared hosting
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // allow self-signed certs (common on shared hosting)
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email) {
      return Response.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const transporter = createTransporter();

    // Verify connection before sending
    await transporter.verify();

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111215; color: #ffffff; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #72c192, #5ac0ec); padding: 28px 32px;">
          <h1 style="margin: 0; color: #111215; font-size: 1.4rem;">New Free Consultation Request</h1>
          <p style="margin: 6px 0 0; color: rgba(17,18,21,0.8); font-size: 0.9rem;">Submitted via InterNative Labs website</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #72c192; font-weight: 600; width: 140px; font-size: 0.9rem;">Full Name</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 0.9rem;">${name}</td>
            </tr>
            <tr style="border-top: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 10px 0; color: #72c192; font-weight: 600; font-size: 0.9rem;">Email</td>
              <td style="padding: 10px 0; color: #5ac0ec; font-size: 0.9rem;"><a href="mailto:${email}" style="color: #5ac0ec;">${email}</a></td>
            </tr>
            ${phone ? `<tr style="border-top: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 10px 0; color: #72c192; font-weight: 600; font-size: 0.9rem;">Phone</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 0.9rem;">${phone}</td>
            </tr>` : ''}
            ${company ? `<tr style="border-top: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 10px 0; color: #72c192; font-weight: 600; font-size: 0.9rem;">Company</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 0.9rem;">${company}</td>
            </tr>` : ''}
            ${service ? `<tr style="border-top: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 10px 0; color: #72c192; font-weight: 600; font-size: 0.9rem;">Service</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 0.9rem;">${service}</td>
            </tr>` : ''}
            ${budget ? `<tr style="border-top: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 10px 0; color: #72c192; font-weight: 600; font-size: 0.9rem;">Budget</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 0.9rem;">${budget}</td>
            </tr>` : ''}
            ${message ? `<tr style="border-top: 1px solid rgba(255,255,255,0.08);">
              <td style="padding: 10px 0; color: #72c192; font-weight: 600; font-size: 0.9rem; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #ffffff; font-size: 0.9rem; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>` : ''}
          </table>
        </div>
        <div style="padding: 16px 32px; background: rgba(255,255,255,0.04); border-top: 1px solid rgba(255,255,255,0.08); font-size: 0.8rem; color: #989bb3;">
          Sent automatically from internativelabs.com — Free Consultation Form
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"InterNative Labs Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `New Consultation Request — ${name}${company ? ` (${company})` : ''}`,
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error.message, error.code);
    return Response.json({
      error: `Failed to send: ${error.message}`,
    }, { status: 500 });
  }
}
