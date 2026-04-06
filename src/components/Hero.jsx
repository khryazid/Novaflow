import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cta/5 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56,189,248,0.3) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative section-wrap pt-32 pb-16 lg:pt-40 lg:pb-24">
        {/* Two-column on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-sm text-accent font-medium mb-6 animate-fade-in-up"
            >
              <span className="w-1.5 h-1.5 bg-cta rounded-full animate-pulse" />
              Automatización inteligente para B2B
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-text mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Escala tu agencia{' '}
              <span className="text-accent">sin contratar más personal</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg text-text-muted font-medium max-w-xl mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Implementamos flujos de automatización que eliminan tareas repetitivas, 
              reducen errores y liberan a tu equipo para que se enfoquen en lo que importa: 
              cerrar más ventas.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <a href="#diagnostico" className="btn-cta animate-pulse-soft">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#beneficios" className="btn-ghost">
                <Play className="w-4 h-4" />
                Ver cómo funciona
              </a>
            </div>

            {/* Social proof strip */}
            <div
              className="mt-10 flex flex-wrap items-center gap-6 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {[
                { value: '40+', label: 'Empresas automatizadas' },
                { value: '120h', label: 'Ahorradas al mes' },
                { value: '98%', label: 'Satisfacción' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-accent">{s.value}</span>
                  <span className="text-xs text-text-muted font-medium leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual element */}
          <div
            className="order-1 lg:order-2 mb-10 lg:mb-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative">
              {/* Dashboard mockup */}
              <div className="card p-0 overflow-hidden">
                <div className="bg-surface-light/30 px-4 py-3 flex items-center gap-2 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                  </div>
                  <span className="text-xs text-text-muted ml-2 font-medium">NovaFlow Dashboard</span>
                </div>
                <div className="p-6 space-y-4">
                  {/* Simulated automation flow */}
                  {[
                    { step: '01', name: 'Lead capturado', status: 'Completado', color: 'bg-cta' },
                    { step: '02', name: 'Email de bienvenida', status: 'Completado', color: 'bg-cta' },
                    { step: '03', name: 'Asignar a vendedor', status: 'En proceso', color: 'bg-accent' },
                    { step: '04', name: 'Seguimiento automático', status: 'Pendiente', color: 'bg-surface-light' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4 p-3 rounded-lg bg-primary/50 border border-border">
                      <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                        {item.step}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-text truncate">{item.name}</div>
                        <div className="text-xs text-text-muted">{item.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-cta text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-cta/20 animate-pulse-soft hidden sm:block">
                ⚡ 4 flujos activos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
