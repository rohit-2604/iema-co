import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Gauge,
  LineChart,
  Monitor,
  ShieldCheck,
  Zap,
} from 'lucide-react'

const navItems = ['Features', 'Solutions', 'Industries', 'Resources']

const heroStats = [
  {
    icon: Monitor,
    title: 'Real-time Monitoring',
    detail: '24/7 live tracking',
  },
  {
    icon: Cloud,
    title: 'Smart Alerts',
    detail: 'Instant notifications',
  },
  {
    icon: LineChart,
    title: 'AI Analytics',
    detail: 'Predict future risks',
  },
  {
    icon: CheckCircle2,
    title: 'Compliance Ready',
    detail: 'Stay audit prepared',
  },
]

const featureCards = [
  {
    icon: Monitor,
    title: 'Real-time Visibility',
    detail: 'Monitor CO levels in real-time across all your facilities.',
    tone: 'text-[#0077ff] bg-[#eaf3ff]',
  },
  {
    icon: BarChart3,
    title: 'Predictive Insights',
    detail: 'AI-powered analytics predict risks and prevent violations.',
    tone: 'text-[#10b967] bg-[#e9fbf1]',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    detail: 'Instant alerts and notifications for critical events and anomalies.',
    tone: 'text-[#9a4dff] bg-[#f5edff]',
  },
  {
    icon: Gauge,
    title: 'Compliance Made Easy',
    detail: 'Automated reports and audit-ready data to stay compliant always.',
    tone: 'text-[#ff7a18] bg-[#fff1e7]',
  },
  {
    icon: ShieldCheck,
    title: 'Scalable & Secure',
    detail: 'Enterprise-grade security with scalable infrastructure you can trust.',
    tone: 'text-[#05a9c7] bg-[#e9fbff]',
  },
]

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-[#f6f8fc] text-slate-950">
      <section className="relative min-h-screen overflow-hidden bg-[#01154A] text-white md:min-h-[700px] lg:min-h-[740px]">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-full bg-[#01154a] md:w-[54%] lg:w-[50%]" />
          <div className="absolute inset-y-0 right-0 w-full md:w-[58%] lg:w-[56%]">
            <img
              src="/LandingBackground.png"
              alt="Industrial monitoring facility"
              className="h-full w-full object-contain object-right-bottom"
            />
          </div>
        </div>

        <header className="relative z-10 flex w-full items-center justify-between px-4 py-4 md:px-7 lg:px-10">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <img
              src="/co-logo.png"
              alt="CO Monitor Logo"
              className="h-8 w-8 shrink-0 object-contain md:h-9 md:w-9 lg:h-10 lg:w-10"
            />

            <div className="min-w-0">
              <p className="font-inter text-[14px] font-bold leading-none tracking-wide text-white md:text-[16px] lg:text-[18px]">
                CO MONITOR
              </p>
              <p className="font-jetbrains mt-1 hidden text-[7px] font-semibold uppercase tracking-[0.24em] text-blue-100/75 md:block">
                Smart emissions. Safer future.
              </p>
            </div>
          </a>

          <nav className="font-inter hidden items-center gap-4 text-[11px] font-medium text-blue-50/90 md:flex lg:gap-7 lg:text-[12px]">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="flex items-center gap-1 transition hover:text-white"
              >
                {item}
                <ChevronDown className="h-3.5 w-3.5" />
              </a>
            ))}
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#about" className="transition hover:text-white">
              About Us
            </a>
          </nav>

          <div className="font-inter flex items-center gap-2 md:gap-3">
            <a
              href="/client/login"
              className="hidden h-8 items-center rounded-lg border border-white/20 bg-white/5 px-4 text-[11px] font-bold text-white shadow-sm transition hover:bg-white/10 md:flex lg:h-9 lg:px-5 lg:text-[12px]"
            >
              Log In
            </a>
            <a
              href="#demo"
              className="flex h-8 items-center rounded-lg bg-[#0077ff] px-4 text-[11px] font-bold text-white shadow-[0_12px_30px_rgba(0,119,255,0.35)] transition hover:bg-[#1686ff] md:h-9 md:px-5 md:text-[12px]"
            >
              Get Started Free
            </a>
          </div>
        </header>

        <div className="relative z-10 w-full px-4 pb-6 pt-4 md:w-[58%] md:px-7 md:pb-8 md:pt-10 lg:w-[50%] lg:px-10 lg:pt-12">
          <div className="max-w-full md:max-w-[540px] lg:max-w-[520px]">
            <div className="font-jetbrains mb-4 inline-flex items-center gap-2 rounded-full border border-[#0077ff]/40 bg-[#0077ff]/20 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.24em] text-[#5cc3ff] md:mb-5 md:px-4 md:py-2.5 md:text-[9px]">
              <Zap className="h-3 w-3" />
              Powerful emission monitoring platform
            </div>

            <h1 className="font-sora mt-4 text-[28px] font-bold leading-[1.1] tracking-tight text-white md:mt-6 md:text-[38px] lg:text-[48px]">
              Smarter Monitoring.
              <br />
              Cleaner <span className="text-[#0077ff]">Tomorrow.</span>
            </h1>

            <p className="font-inter mt-3 max-w-full text-[13px] leading-6 text-blue-100/80 md:mt-5 md:max-w-[480px] md:text-[15px] md:leading-7">
              Real-time monitoring, predictive analysis and intelligent alerts
              help industries reduce emissions, ensure compliance and build a
              sustainable future.
            </p>

            <div className="font-inter mt-6 flex flex-col gap-2 md:mt-8 md:flex-row md:gap-3 lg:gap-4">
              <a
                href="#demo"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#0077ff] px-6 text-[13px] font-semibold text-white shadow-[0_20px_40px_rgba(0,119,255,0.35)] transition hover:bg-[#1686ff] md:px-8 md:text-[14px] hover:shadow-[0_20px_48px_rgba(0,119,255,0.45)]"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/client/login"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/8 px-6 text-[13px] font-semibold text-white backdrop-blur transition hover:bg-white/15 md:px-8 md:text-[14px] hover:border-white/40"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-4 w-full px-4 pb-4 md:mt-6 md:px-7 md:pb-6 lg:mt-8 lg:px-10 lg:pb-8">
          <div className="font-inter grid w-full gap-0 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-white/8 to-white/5 shadow-[0_32px_64px_rgba(0,119,255,0.1)] backdrop-blur-md grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {heroStats.map(({ icon: Icon, title, detail }) => (
              <div
                key={title}
                className="flex items-center gap-3 border-white/10 px-4 py-4 md:px-6 md:py-5 md:border-r last:border-r-0 transition hover:bg-white/5 lg:min-h-[110px]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-[#61e3ff] backdrop-blur-sm md:h-10 md:w-10">
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white md:text-[12px]">{title}</p>
                  <p className="mt-0.5 text-[9px] font-medium text-blue-100/70 md:mt-1 md:text-[10px]">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto w-full max-w-full px-4 py-6 md:px-8 md:py-8 lg:max-w-[1320px] lg:px-10 lg:py-10"
      >
        <div className="mb-6 md:mb-8">
          <p className="font-jetbrains text-center text-[9px] font-bold uppercase tracking-[0.32em] text-[#0077ff] md:text-[10px]">
            Built for industries that care
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-5 lg:gap-6">
          {featureCards.map(({ icon: Icon, title, detail, tone }) => (
            <article
              key={title}
              className="group min-h-[220px] rounded-lg border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:shadow-[0_24px_48px_rgba(15,23,42,0.12)] hover:border-slate-300 md:min-h-[240px] md:rounded-xl md:p-7"
            >
              <div
                className={`mb-5 flex h-9 w-9 items-center justify-center rounded-md transition group-hover:scale-110 md:mb-7 md:h-11 md:w-11 md:rounded-lg ${tone}`}
              >
                <Icon className="h-4 w-4 md:h-5 md:w-5" />
              </div>

              <h3 className="font-sora text-[15px] font-bold leading-snug text-slate-950 md:text-[17px]">
                {title}
              </h3>
              <p className="font-inter mt-3 text-[12px] leading-5 text-slate-600 md:mt-4 md:text-[13px] md:leading-6">
                {detail}
              </p>
            </article>
          ))}
        </div>
      </section>


    </main>
  )
}

export default LandingPage

