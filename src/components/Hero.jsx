import { Rocket, Shield, Workflow } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-sky-600 text-white grid place-items-center font-bold">W</div>
            <div>
              <p className="text-sm text-sky-700 font-semibold tracking-wide">PT. WINSI</p>
              <h1 className="text-lg font-semibold text-slate-800">PT. Winwin Solution Indo</h1>
            </div>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition">
            <Rocket className="h-4 w-4" /> Get in touch
          </a>
        </header>

        <div className="grid lg:grid-cols-2 gap-10 items-center mt-14">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-3 py-1 text-xs font-medium">
              <Shield className="h-4 w-4" /> Trusted business partner
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Win-win solutions for ambitious Indonesian businesses
            </h2>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              We help companies streamline operations, elevate customer experience, and scale with confidence
              through practical technology, reliable support, and people-first services.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#services" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 text-white px-5 py-3 text-sm font-medium hover:bg-sky-700 transition">
                Explore Services
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 text-slate-800 px-5 py-3 text-sm font-medium hover:bg-slate-50 transition">
                Learn More
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="text-3xl font-bold text-slate-900">10+</p>
                <p className="text-xs text-slate-500 mt-1">Years experience</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="text-3xl font-bold text-slate-900">50+</p>
                <p className="text-xs text-slate-500 mt-1">Happy clients</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 bg-white">
                <p className="text-3xl font-bold text-slate-900">98%</p>
                <p className="text-xs text-slate-500 mt-1">Satisfaction rate</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-full w-full grid grid-rows-2 gap-4">
                <div className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 p-5 text-white flex items-end justify-between">
                  <div>
                    <p className="text-sm text-white/80">Process excellence</p>
                    <p className="text-xl font-semibold mt-1">Operational efficiency</p>
                  </div>
                  <Workflow className="h-10 w-10" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-sm text-slate-500">Service Level</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">99.9%</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <p className="text-sm text-slate-500">Avg. Response</p>
                    <p className="text-2xl font-bold text-slate-900 mt-1">&lt; 2h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
