import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, E-Mail und Nachricht sind erforderlich' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // E-Mail-Konfiguration aus Umgebungsvariablen
    const emailHost = process.env.EMAIL_SERVER_HOST;
    const emailPort = parseInt(process.env.EMAIL_SERVER_PORT || '587', 10);
    const emailUser = process.env.EMAIL_SERVER_USER;
    const emailPass = process.env.EMAIL_SERVER_PASSWORD;
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;

    // Überprüfen, ob alle erforderlichen Umgebungsvariablen vorhanden sind
    if (!emailHost || !emailUser || !emailPass || !emailFrom || !emailTo) {
      console.error('Fehlende E-Mail-Konfiguration in Umgebungsvariablen');
      
      // Im Entwicklungsmodus: Simuliere erfolgreichen Versand
      if (process.env.NODE_ENV === 'development') {
        console.log('Entwicklungsmodus: Simuliere E-Mail-Versand');
        console.log('Kontaktanfrage:', { name, email, message });
        
        // Simuliere Verzögerung
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        return NextResponse.json({ 
          success: true,
          message: 'E-Mail-Versand im Entwicklungsmodus simuliert'
        });
      }
      
      return NextResponse.json(
        { error: 'E-Mail-Server nicht konfiguriert' },
        { status: 500 }
      );
    }

    // Nodemailer-Transporter erstellen
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465, // true für Port 465, false für andere Ports
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // E-Mail-Inhalt
    const mailOptions = {
      from: `"Kontaktformular" <${emailFrom}>`,
      to: emailTo,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
Name: ${name}
E-Mail: ${email}

Nachricht:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">Neue Kontaktanfrage</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
  <div style="margin-top: 20px;">
    <p><strong>Nachricht:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
      ${message.replace(/\n/g, '<br>')}
    </div>
  </div>
</div>
      `,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    // Erfolgreiche Antwort
    return NextResponse.json({ 
      success: true,
      message: 'Nachricht erfolgreich gesendet'
    });
  } catch (error) {
    console.error('Fehler beim Verarbeiten der Kontaktanfrage:', error);
    return NextResponse.json(
      { error: 'Fehler beim Verarbeiten der Anfrage' },
      { status: 500 }
    );
  }
} 