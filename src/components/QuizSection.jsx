import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendDiagnostic } from '../utils/webhook'
import { ArrowRight, Building2, Users, Wrench, Loader2, CheckCircle } from 'lucide-react'

const INDUSTRIES = [
  { id: 'agencia', label: 'Agencia de Marketing', icon: Building2 },
  { id: 'inmobiliaria', label: 'Inmobiliaria', icon: Building2 },
  { id: 'consultorio', label: 'Consultorio / Clínica', icon: Building2 },
  { id: 'ecommerce', label: 'E-commerce', icon: Building2 },
  { id: 'otro', label: 'Otro', icon: Wrench },
]

const TEAM_SIZES = ['1-5', '6-15', '16-50', '50+']

const SAVINGS_MAP = {
  agencia: { hours: 35, money: 12000 },
  inmobiliaria: { hours: 28, money: 9500 },
  consultorio: { hours: 22, money: 7800 },
  ecommerce: { hours: 45, money: 18000 },
  otro: { hours: 30, money: 10000 },
}

const TEAM_MULTIPLIER = { '1-5': 0.7, '6-15': 1, '16-50': 1.4, '50+': 2 }

export default function QuizSection() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ industry: '', teamSize: '', name: '', email: '' })
  const [result, setResult] = useState(null)
  const [sending, setSending] = useState(false)

  const totalSteps = 3
  const progress = Math.min(((step + 1) / totalSteps) * 100, 100)

  const handleIndustry = (id) => { setForm((f) => ({ ...f, industry: id })); setStep(1) }
  const handleTeam = (size) => { setForm((f) => ({ ...f, teamSize: size })); setStep(2) }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return
    setStep(3)
    setSending(true)
    try {
      await sendDiagnostic(form)
      const base = SAVINGS_MAP[form.industry] || SAVINGS_MAP.otro
      const mult = TEAM_MULTIPLIER[form.teamSize] || 1
      setResult({ hours: Math.round(base.hours * mult), money: Math.round(base.money * mult) })
      setStep(4)
    } catch { setStep(2) }
    finally { setSending(false) }
  }

  return (
    <section id="diagnostico" className="relative section-spacing">
      <div className="section-divider" />

      <div className="section-wrap pt-16 lg:pt-24">
        {/* Two-column layout on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: copy */}
          <div className="mb-10 lg:mb-0 lg:sticky lg:top-28">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Diagnóstico con IA
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text mt-3 leading-tight">
              Descubre tu{' '}
              <span className="text-gradient">potencial de ahorro</span>{' '}
              en 60 segundos
            </h2>
            <p className="text-text-muted font-medium mt-4 text-base sm:text-lg max-w-lg">
              Responde 3 preguntas y nuestro motor de IA calculará exactamente 
              cuánto tiempo y dinero puedes recuperar automatizando.
            </p>

            <div className="mt-8 space-y-4 hidden lg:block">
              {['Análisis personalizado por industria', 'Resultado instantáneo', 'Sin compromiso ni tarjeta'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cta shrink-0" />
                  <span className="text-text-muted font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: quiz card */}
          <div className="card">
            {/* Progress */}
            {step < 4 && (
              <div className="mb-6">
                <div className="flex justify-between text-xs text-text-muted mb-2 font-medium">
                  <span>Paso {Math.min(step + 1, totalSteps)} de {totalSteps}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 bg-primary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-cta rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Step 0 */}
            {step === 0 && (
              <div className="animate-fade-in-up">
                <h3 className="text-lg font-extrabold text-text mb-5">¿En qué industria opera tu empresa?</h3>
                <div className="flex flex-col gap-2.5">
                  {INDUSTRIES.map((ind) => {
                    const Icon = ind.icon
                    return (
                      <button
                        key={ind.id}
                        id={`industry-${ind.id}`}
                        onClick={() => handleIndustry(ind.id)}
                        className="flex items-center gap-3 p-3.5 rounded-xl border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 text-left text-text font-medium cursor-pointer bg-transparent"
                      >
                        <Icon className="w-5 h-5 text-accent shrink-0" />
                        {ind.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Step 1 */}
            {step === 1 && (
              <div className="animate-fade-in-up">
                <h3 className="text-lg font-extrabold text-text mb-5">¿Cuántas personas tiene tu equipo?</h3>
                <div className="grid grid-cols-2 gap-3">
                  {TEAM_SIZES.map((size) => (
                    <button
                      key={size}
                      id={`team-${size}`}
                      onClick={() => handleTeam(size)}
                      className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 text-text font-bold text-lg cursor-pointer bg-transparent"
                    >
                      <Users className="w-4 h-4 text-accent" />
                      {size}
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(0)} className="mt-4 text-text-muted hover:text-text text-sm font-medium transition-colors bg-transparent border-none cursor-pointer">
                  ← Atrás
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <form onSubmit={handleSubmit} className="animate-fade-in-up">
                <h3 className="text-lg font-extrabold text-text mb-5">¿A dónde enviamos tu diagnóstico?</h3>
                <div className="flex flex-col gap-3.5">
                  <input id="quiz-name" type="text" placeholder="Tu nombre" value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="input-field" required />
                  <input id="quiz-email" type="email" placeholder="tu@email.com" value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="input-field" required />
                  <button id="quiz-submit" type="submit" className="btn-cta w-full" disabled={sending}>
                    Calcular mi ahorro <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <button type="button" onClick={() => setStep(1)} className="mt-4 text-text-muted hover:text-text text-sm font-medium transition-colors bg-transparent border-none cursor-pointer">
                  ← Atrás
                </button>
              </form>
            )}

            {/* Step 3: Loading */}
            {step === 3 && (
              <div className="text-center py-10 animate-fade-in">
                <Loader2 className="w-12 h-12 text-accent mx-auto animate-spin mb-5" />
                <h3 className="text-lg font-extrabold text-text mb-2">Analizando tu negocio...</h3>
                <p className="text-text-muted font-medium text-sm">Nuestra IA está procesando tus datos.</p>
              </div>
            )}

            {/* Step 4: Result */}
            {step === 4 && result && (
              <div className="text-center animate-fade-in-up">
                <CheckCircle className="w-14 h-14 text-cta mx-auto mb-5" />
                <h3 className="text-xl font-extrabold text-text mb-2">¡Diagnóstico listo!</h3>
                <p className="text-text-muted font-medium text-sm mb-6">Tu potencial de automatización:</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-primary rounded-xl p-5 border border-border">
                    <div className="text-3xl font-extrabold text-accent">{result.hours}h</div>
                    <div className="text-text-muted text-xs font-medium mt-1">Ahorradas / mes</div>
                  </div>
                  <div className="bg-primary rounded-xl p-5 border border-border">
                    <div className="text-3xl font-extrabold text-cta">${result.money.toLocaleString()}</div>
                    <div className="text-text-muted text-xs font-medium mt-1">Ahorro / año</div>
                  </div>
                </div>

                <button id="quiz-agendar" onClick={() => navigate('/gracias')} className="btn-cta w-full animate-pulse-soft">
                  Agendar Consultoría Gratuita <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-text-muted text-xs font-medium mt-3">30 min · Sin compromiso · 100% gratis</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
