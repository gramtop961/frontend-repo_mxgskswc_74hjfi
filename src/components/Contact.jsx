import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:hello@ptwinsi.co.id?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-sky-600 font-semibold tracking-wide uppercase text-sm">Contact</h3>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900">Let’s build a win-win together</h2>
          <p className="mt-3 text-slate-600">
            Share your goals and challenges—our team will get back within one business day.
          </p>

          <div className="mt-8 space-y-4">
            <a href="mailto:hello@ptwinsi.co.id" className="flex items-center gap-3 text-slate-700 hover:text-slate-900">
              <Mail className="h-5 w-5 text-sky-600" /> hello@ptwinsi.co.id
            </a>
            <a href="tel:+622112345678" className="flex items-center gap-3 text-slate-700 hover:text-slate-900">
              <Phone className="h-5 w-5 text-sky-600" /> +62 21 123 456 78
            </a>
            <p className="flex items-start gap-3 text-slate-700">
              <MapPin className="h-5 w-5 text-sky-600 mt-0.5" /> Jakarta, Indonesia
            </p>
          </div>

          <p className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} PT. Winwin Solution Indo. All rights reserved.</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Tell us about your project"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-sky-600 text-white px-5 py-3 text-sm font-medium hover:bg-sky-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
