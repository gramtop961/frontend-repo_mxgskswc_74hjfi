import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-sky-600 font-semibold tracking-wide uppercase text-sm">About Us</h3>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">PT. Winwin Solution Indo (PT. WINSI)</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We are a solutions-driven company focused on creating mutual value. From technology to operations,
            we deliver practical, scalable, and measurable outcomes that help our clients grow sustainably.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Our approach is partnership-first: we listen, analyze, and implement with clarity and speed.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              'Client-first mindset with long-term partnerships',
              'Process discipline and transparent performance metrics',
              'Local expertise with global best practices',
              'Secure, compliant, and reliable delivery',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-sky-50 p-4">
              <p className="text-sky-700 text-sm">Industry focus</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">Finance, Telco, Retail</p>
            </div>
            <div className="rounded-xl bg-indigo-50 p-4">
              <p className="text-indigo-700 text-sm">Coverage</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">Nationwide</p>
            </div>
            <div className="rounded-xl bg-emerald-50 p-4">
              <p className="text-emerald-700 text-sm">Delivery model</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">On-site & Remote</p>
            </div>
            <div className="rounded-xl bg-amber-50 p-4">
              <p className="text-amber-700 text-sm">Engagement</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">Project & Managed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
