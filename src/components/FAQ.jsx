import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQ_ITEMS = [
  {
    q: '¿Cuánto tiempo toma implementar una automatización?',
    a: 'La mayoría de los flujos se configuran en 1-2 semanas. Proyectos complejos pueden tomar hasta 4 semanas. Empezamos con un flujo de alto impacto para que veas resultados desde la primera semana.',
  },
  {
    q: '¿Necesito saber de programación?',
    a: 'No. Nosotros nos encargamos de toda la implementación técnica. Tú solo defines qué procesos quieres automatizar y nosotros los construimos.',
  },
  {
    q: '¿Qué procesos se pueden automatizar?',
    a: 'Captura y respuesta a leads, agendamiento de citas, seguimiento de prospectos, propuestas, reportes, onboarding, facturación, recordatorios… prácticamente cualquier proceso repetitivo.',
  },
  {
    q: '¿Cuánto cuesta el servicio?',
    a: 'Tenemos planes desde $500 USD/mes según la complejidad. La consultoría inicial es 100% gratuita. Te mostramos el ROI esperado antes de que inviertas.',
  },
  {
    q: '¿Qué pasa si no obtengo resultados?',
    a: 'Garantía de 30 días. Si en el primer mes no ves resultados medibles, te devolvemos tu inversión completa. Sin preguntas.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="relative section-spacing">
      <div className="section-divider" />

      <div className="section-wrap pt-16 lg:pt-24">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Preguntas Frecuentes
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text mt-3">
              Todo lo que necesitas{' '}
              <span className="text-gradient">saber</span>
            </h2>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`bg-surface rounded-xl border transition-all duration-300 ${
                    isOpen ? 'border-accent/30' : 'border-border'
                  }`}
                >
                  <button
                    id={`faq-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left bg-transparent border-none cursor-pointer text-text"
                  >
                    <span className="font-semibold text-sm sm:text-base pr-4">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-5 text-text-muted font-medium text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
