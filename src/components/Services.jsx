import { Server, Laptop, Users, GraduationCap, Headphones, Code2 } from 'lucide-react';

const services = [
  {
    title: 'Business Process Outsourcing',
    desc: 'End-to-end back office, data operations, and customer support with measurable SLAs.',
    Icon: Users,
  },
  {
    title: 'IT Managed Services',
    desc: 'Monitoring, maintenance, and support to keep your systems reliable and secure.',
    Icon: Server,
  },
  {
    title: 'Digital & IT Solutions',
    desc: 'Web and application development tailored to your workflow and growth goals.',
    Icon: Laptop,
  },
  {
    title: 'Staffing & Recruitment',
    desc: 'On-demand professional talent to strengthen your project teams and operations.',
    Icon: GraduationCap,
  },
  {
    title: 'Customer Experience',
    desc: 'Omnichannel support and CRM optimization to delight your customers at scale.',
    Icon: Headphones,
  },
  {
    title: 'Custom Software',
    desc: 'Build tools that automate work and create competitive advantage for your business.',
    Icon: Code2,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-sky-600 font-semibold tracking-wide uppercase text-sm text-center">Our Services</h3>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 text-center">What we can do for you</h2>
        <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">
          We bring together people, process, and technology to deliver outcomes you can measure and scale.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-12 w-12 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-slate-900">{title}</h4>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 text-sm font-medium text-sky-700 opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
