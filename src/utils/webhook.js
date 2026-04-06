/**
 * Simulates sending diagnostic data via webhook.
 * Replace the console.log with a real fetch() to Formspree/Netlify/N8N when ready.
 */
export async function sendDiagnostic(data) {
  console.log('📡 [Webhook] Datos del diagnóstico enviados:', data)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Uncomment below for a real integration:
  // const res = await fetch('https://formspree.io/f/YOUR_ID', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // if (!res.ok) throw new Error('Webhook failed')

  return { success: true }
}
