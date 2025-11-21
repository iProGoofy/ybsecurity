// app/api/sollicitatie/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, motivation, vacature, cv } = body;

    // Validatie
    if (!firstName || !lastName || !email || !phone || !motivation || !cv) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      );
    }

    // Configureer nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // bijv. 'smtp.gmail.com'
      port: parseInt(process.env.SMTP_PORT || '587'),// true voor 465, false voor andere poorten
      auth: {
        user: process.env.SMTP_USER, // je email
        pass: process.env.SMTP_PASS, // je app-specifiek wachtwoord
      },
    });

    // Email opties
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to:'info@ybsecurity.nl', // Ontvanger email
      subject: `Nieuwe Sollicitatie: ${vacature} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">Nieuwe Sollicitatie</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Vacature</h3>
            <p style="font-size: 16px; font-weight: bold;">${vacature}</p>
          </div>

          <h3>Persoonlijke gegevens</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Naam:</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Telefoon:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
          </table>

          <h3>Motivatie</h3>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
            ${motivation}
          </div>

          <p style="margin-top: 30px; color: #666; font-size: 14px;">
            CV is bijgevoegd als bijlage.
          </p>
        </div>
      `,
      attachments: [
        {
          filename: cv.filename,
          content: cv.content,
          encoding: 'base64',
          contentType: cv.contentType
        }
      ]
    };

    // Verstuur email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Sollicitatie succesvol verzonden' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Er is een fout opgetreden bij het verzenden van de email' },
      { status: 500 }
    );
  }
}