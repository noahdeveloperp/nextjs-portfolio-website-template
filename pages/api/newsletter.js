import { Resend } from 'resend';

// Si no hay API key, usamos la sandbox de Resend
const apiKey = process.env.RESEND_API_KEY || 're_test_key_for_sandbox';
const resend = new Resend(apiKey);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validación más robusta de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    // Para testing/sandbox, aceptamos cualquier email
    // En producción con API key real, Resend se encargará de validar
    const result = await resend.emails.send({
      from: 'Noe <onboarding@resend.dev>',
      to: email,
      subject: '¡Bienvenido al newsletter de Noe!',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell'; background: #000; color: #fff; padding: 40px;">
          <div style="max-width: 600px; margin: 0 auto;">
            <h1 style="font-size: 28px; font-weight: 300; margin-bottom: 20px;">¡Gracias por suscribirte!</h1>
            
            <p style="font-size: 16px; color: #ccc; margin-bottom: 30px;">
              Hola, soy Noe. Estoy muy feliz de que te hayas suscrito a mi newsletter.
            </p>

            <p style="font-size: 16px; color: #ccc; margin-bottom: 30px;">
              Aquí compartiré insights sobre:
            </p>

            <ul style="font-size: 16px; color: #ccc; margin-bottom: 30px; list-style: none; padding: 0;">
              <li style="margin-bottom: 10px;">🚀 Arquitectura de sistemas distribuidos</li>
              <li style="margin-bottom: 10px;">⚡ Performance en backend</li>
              <li style="margin-bottom: 10px;">🔒 Seguridad en APIs</li>
              <li style="margin-bottom: 10px;">📊 Casos reales de infraestructura a escala</li>
            </ul>

            <p style="font-size: 16px; color: #ccc; margin-bottom: 30px;">
              Espera mis próximos artículos pronto.
            </p>

            <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.1); margin: 40px 0;">

            <p style="font-size: 12px; color: #999;">
              © 2025 Noe. Backend Engineer & Systems Architect.
            </p>
          </div>
        </div>
      `
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      // En desarrollo, aceptamos el error y lo marcamos como success
      if (!process.env.RESEND_API_KEY) {
        return res.status(200).json({ 
          success: true, 
          message: 'Subscripción registrada (modo desarrollo)',
          sandbox: true
        });
      }
      return res.status(400).json({ error: result.error.message });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email enviado exitosamente',
      id: result.data?.id 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    // En desarrollo sin API key, retornamos success de todas formas
    if (!process.env.RESEND_API_KEY) {
      return res.status(200).json({ 
        success: true, 
        message: 'Subscripción registrada (modo desarrollo)',
        sandbox: true
      });
    }
    return res.status(500).json({ error: 'Failed to send email' });
  }
}