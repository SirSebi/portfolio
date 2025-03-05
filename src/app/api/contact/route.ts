import { NextResponse } from 'next/server';

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

    // Hier würde normalerweise der E-Mail-Versand stattfinden
    // Um nodemailer zu verwenden, müssten Sie es installieren:
    // npm install nodemailer
    // Und dann den folgenden Code verwenden:
    
    /*
    import nodemailer from 'nodemailer';
    
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      secure: true,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Kontaktanfrage von ${name}`,
      text: message,
      html: `
        <div>
          <h1>Neue Kontaktanfrage</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Nachricht:</strong> ${message}</p>
        </div>
      `,
    });
    */

    // Alternativ können Sie einen E-Mail-Service wie SendGrid, Mailgun oder AWS SES verwenden
    
    // Für Testzwecke simulieren wir eine Verzögerung
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Hier könnten Sie die Nachricht in einer Datenbank speichern
    console.log('Kontaktanfrage erhalten:', { name, email, message });

    // Erfolgreiche Antwort
    return NextResponse.json({ 
      success: true,
      message: 'Nachricht erfolgreich empfangen. In der Produktionsumgebung würde hier eine E-Mail versendet werden.'
    });
  } catch (error) {
    console.error('Fehler beim Verarbeiten der Kontaktanfrage:', error);
    return NextResponse.json(
      { error: 'Fehler beim Verarbeiten der Anfrage' },
      { status: 500 }
    );
  }
} 