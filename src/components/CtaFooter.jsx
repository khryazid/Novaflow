import { ArrowRight, Zap } from 'lucide-react'

export default function CtaFooter() {
  return (
    <>
      {/* Final CTA */}
      <section className="relative section-spacing overflow-hidden">
        <div className="section-divider" />

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cta/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative section-wrap pt-16 lg:pt-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text leading-tight mb-6">
              ¿Listo para{' '}
              <span className="text-accent">automatizar y escalar</span>{' '}
              tu operación?
            </h2>
            <p className="text-text-muted font-medium text-base sm:text-lg mb-8 max-w-lg mx-auto">
              Agenda una consultoría gratuita de 30 minutos. Te mostramos exactamente 
              qué automatizar primero y el ROI esperado.
            </p>
            <a href="#diagnostico" className="btn-cta animate-pulse-soft text-base sm:text-lg !py-4 !px-8">
              Agendar Consultoría Gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-text-muted text-xs font-medium mt-5">
              Sin compromiso · Sin tarjeta · Resultados en 30 min
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-cta flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-sm font-extrabold text-text">
              Nova<span className="text-accent">Flow</span>
            </span>
          </a>
          <p className="text-text-muted text-xs font-medium">
            © {new Date().getFullYear()} NovaFlow Systems. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-text transition-colors text-xs font-medium">Privacidad</a>
            <a href="#" className="text-text-muted hover:text-text transition-colors text-xs font-medium">Términos</a>
          </div>
        </div>
      </footer>
    </>
  )
}
