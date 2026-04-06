import { Star, Quote } from 'lucide-react'

const TOOLS = [
  { name: 'Make', emoji: '⚙️' },
  { name: 'Zapier', emoji: '⚡' },
  { name: 'OpenAI', emoji: '🧠' },
  { name: 'Python', emoji: '🐍' },
  { name: 'n8n', emoji: '🔗' },
  { name: 'ChatGPT', emoji: '🤖' },
  { name: 'Slack', emoji: '💬' },
  { name: 'HubSpot', emoji: '🟠' },
  { name: 'Airtable', emoji: '📊' },
  { name: 'Notion', emoji: '📝' },
]

const TESTIMONIALS = [
  {
    name: 'María González',
    role: 'Directora · Agencia Pixel',
    text: 'Pasamos de responder leads en 24 horas a menos de 2 minutos. Nuestros cierres aumentaron un 45%.',
    avatar: 'MG',
  },
  {
    name: 'Carlos Ruiz',
    role: 'CEO · Inmobiliaria Atlas',
    text: 'Automatizamos la gestión de prospectos. Ahora nuestros agentes se dedican a cerrar, no a perseguir.',
    avatar: 'CR',
  },
  {
    name: 'Dra. Ana Méndez',
    role: 'Directora · Consultorio Vital',
    text: 'Citas que se agendan solas, recordatorios automáticos y las cancelaciones bajaron un 60%.',
    avatar: 'AM',
  },
]

export default function SocialProof() {
  return (
    <section id="resultados" className="relative section-spacing">
      <div className="section-divider" />

      <div className="section-wrap pt-16 lg:pt-24">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Resultados comprobados
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text mt-3 leading-tight">
            Empresas que ya{' '}
            <span className="text-gradient">transformaron su operación</span>
          </h2>
        </div>

        {/* Tool marquee */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="flex animate-marquee w-max gap-4 items-center">
              {[...TOOLS, ...TOOLS].map((tool, i) => (
                <div key={i} className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface border border-border shrink-0 hover:border-accent/30 transition-colors">
                  <span className="text-xl">{tool.emoji}</span>
                  <span className="text-sm font-semibold text-text-muted whitespace-nowrap">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card flex flex-col">
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-text font-medium leading-relaxed mb-6 flex-1">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm font-extrabold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-text font-semibold text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
