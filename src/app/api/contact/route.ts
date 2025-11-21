import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, subject, message } = body;

    // Validatie
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'Alle verplichte velden moeten ingevuld zijn' },
        { status: 400 }
      );
    }

    // Maak transporter aan voor TransIP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.transip.email
      port: 465, // TransIP gebruikt port 465
      secure: true, // true voor port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Extra opties voor betere compatibiliteit
      tls: {
        rejectUnauthorized: false
      }
    });

    // Test de verbinding eerst
    await transporter.verify();
    console.log('SMTP verbinding succesvol!');

    // Verstuur email naar jezelf
    await transporter.sendMail({
      from: process.env.SMTP_USER, // Moet je eigen email zijn bij TransIP
      to: 'info@ybsecurity.nl',
      replyTo: email, // Reply-to is het email adres van de verzender
      subject: `Nieuw contactformulier: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
            Nieuw bericht van contactformulier
          </h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefoon:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${company ? `<p><strong>Bedrijf:</strong> ${company}</p>` : ''}
            <p><strong>Onderwerp:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="margin-top: 0;">Bericht:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px; font-size: 12px; color: #666;">
            <p>Dit bericht is verzonden via het contactformulier op ybsecurity.nl</p>
          </div>
        </div>
      `,
    });

    console.log('Email succesvol verzonden!');

    // Optioneel: Verstuur bevestigingsmail naar klant
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: 'Bevestiging - Wij hebben je bericht ontvangen',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #000;">Bedankt voor je bericht!</h2>
            
            <p>Beste ${firstName},</p>
            
            <p>We hebben je bericht goed ontvangen en nemen zo snel mogelijk contact met je op, 
            meestal binnen 24 uur.</p>
            
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Jouw bericht:</strong></p>
              <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p>Met vriendelijke groet,</p>
            <p><strong>Team YBSecurity</strong></p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            
            <p style="font-size: 12px; color: #666;">
              YBSecurity<br>
              Byronstraat 47, 5924 XL Venlo<br>
              Tel: 010 - 123 4567<br>
              Email: info@ybsecurity.nl
            </p>
          </div>
        `,
      });
      console.log('Bevestigingsmail verzonden naar klant');
    } catch (confirmError) {
      console.error('Bevestigingsmail mislukt (hoofd email wel verzonden):', confirmError);
      // We gooien hier geen error, want de hoofdmail is wel verzonden
    }

    return NextResponse.json({ 
      success: true,
      message: 'Email succesvol verzonden'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Geef meer details over de error
    let errorMessage = 'Er is een fout opgetreden bij het verzenden';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email',
        details: errorMessage 
      },
      { status: 500 }
    );
  }
}