import { Bot, Clock, TrendingUp } from 'lucide-react'

const BENEFITS = [
  {
    icon: Clock,
    title: 'Ahorra +30 horas al mes',
    desc: 'Automatiza respuestas a leads, agendamiento, seguimiento y reportes. Tu equipo se enfoca en vender, no en copiar y pegar datos.',
    highlight: '30h/mes',
  },
  {
    icon: Bot,
    title: 'IA que trabaja 24/7',
    desc: 'Chatbots, clasificación de leads y respuestas inteligentes que funcionan mientras duermes. Ningún prospecto sin responder.',
    highlight: '24/7',
  },
  {
    icon: TrendingUp,
    title: 'Escala sin más nómina',
    desc: 'Duplica tu capacidad operativa sin contratar más personal. Flujos de trabajo que se adaptan al crecimiento de tu empresa.',
    highlight: '2x',
  },
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="relative section-spacing">
      <div className="section-divider" />

      <div className="section-wrap pt-16 lg:pt-24">
        {/* Heading */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            ¿Por qué automatizar?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text mt-3 leading-tight">
            Tu competencia ya{' '}
            <span className="text-accent">automatiza sus procesos</span>
          </h2>
          <p className="text-text-muted font-medium mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Cada minuto que tu equipo pasa en tareas manuales es un minuto que no dedica 
            a cerrar ventas. Estas son las ventajas de automatizar con NovaFlow:
          </p>
        </div>

        {/* Benefits grid: 1 col mobile, 3 cols desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className="card !p-6 sm:!p-8 group animate-slide-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Highlight number */}
                <div className="text-3xl font-extrabold text-accent mb-2">{b.highlight}</div>

                <h3 className="text-lg font-extrabold text-text mb-3">{b.title}</h3>
                <p className="text-text-muted font-medium text-sm leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
