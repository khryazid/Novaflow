import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Calendar, BarChart3, Target, ArrowLeft, Zap } from 'lucide-react'

export default function ThankYouPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cta/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-xl mx-auto w-full text-center">
        {/* Success icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cta/10 flex items-center justify-center animate-counter-up">
          <CheckCircle className="w-8 h-8 text-cta" />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text mb-3 animate-fade-in-up">
          ¡<span className="text-gradient">Excelente</span> decisión!
        </h1>

        <p className="text-text-muted font-medium mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Tu diagnóstico ha sido enviado. El siguiente paso es agendar tu consultoría 
          gratuita para revisar los resultados juntos.
        </p>

        {/* Calendly card */}
        <div className="card mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-lg font-extrabold text-text mb-6 flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            Agenda tu Llamada
          </h2>

          {/* Placeholder */}
          <div className="rounded-xl bg-primary border border-border p-8 flex flex-col items-center justify-center min-h-[200px] mb-6">
            <Calendar className="w-12 h-12 text-accent/30 mb-3" />
            <p className="text-text font-semibold mb-1">Widget de Calendly</p>
            <p className="text-text-muted text-xs font-medium text-center max-w-xs">
              Conecta tu enlace de Calendly para reservas directas.
            </p>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-cta !text-sm mt-5">
              Agendar Ahora <Zap className="w-4 h-4" />
            </a>
          </div>

          {/* What to expect */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Target, text: 'Análisis personalizado' },
              { icon: BarChart3, text: 'Plan de automatización' },
              { icon: Zap, text: 'ROI estimado' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.text} className="bg-primary rounded-xl p-3 border border-border text-center">
                  <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
                  <div className="text-text text-xs font-semibold">{item.text}</div>
                </div>
              )
            })}
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
      </div>
    </div>
  )
}
