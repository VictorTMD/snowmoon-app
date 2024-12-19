import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json(); // Parsear el cuerpo de la solicitud
    const { name, email, message } = body;

    // Configuración del transporte SMTP con Hostalia
    const transporter = nodemailer.createTransport({
      host: 'smtp.servidor-correo.net', // Reemplaza con tu dominio de Hostalia
      port: 587, // Usualmente es 587 para conexiones seguras o 465 si usas SSL
      // secure: true, // Cambia a 'true' si usas SSL
      auth: {
        user: process.env.NEXT_USER, // Tu correo de Hostalia
        pass: process.env.NEXT_PASS, // La contraseña de tu correo
      },
    });

    // Opciones para el correo
    const mailOptions = {
      from: email, // Correo del usuario que envía el mensaje
      to: 'info@snowmoonartesania.com', // Tu correo de Hostalia
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nCorreo: ${email}\nMensaje:\n${message}`, // Cuerpo del mensaje
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Respuesta de éxito
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Correo enviado correctamente',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Hubo un error al enviar el correo',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
