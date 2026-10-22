import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { SALES_CONTACTS } from '../data/siteData';
import { validateContactForm } from '../utils/bookingLogic';

export function ContactPage() {
  const { lang } = useAppContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm({ name, email, message });
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div>
      {/* 1. CONTACT HEADER */}
      <section
        className="py-16 border-b text-center"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold-text)]">
            {lang === 'ar'
              ? 'ابق على تواصل'
              : lang === 'de'
              ? 'KONTAKTIEREN SIE UNS'
              : 'GET IN TOUCH'}
          </p>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[var(--gold-text)] gold-title-glow">
            {lang === 'ar'
              ? 'تواصل معنا'
              : lang === 'de'
              ? 'Kontakt'
              : 'Contact Us'}
          </h1>
        </div>
      </section>

      {/* 2. SALES CONTACTS + SEND A MESSAGE FORM (Matching Screenshot) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sales Contacts */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'فريق المبيعات والحجز المباشر'
                : lang === 'de'
                ? 'Ansprechpartner & Buchung'
                : 'Sales Contacts'}
            </h2>

            <div className="space-y-4">
              {SALES_CONTACTS.map((contact) => (
                <div
                  key={contact.id}
                  className="rounded-xl border p-5 flex items-center justify-between gap-4 transition-colors hover:border-[var(--gold-accent)]"
                  style={{
                    backgroundColor: 'var(--bg-surface)',
                    borderColor: 'var(--border-subtle)',
                    boxShadow: 'var(--card-shadow)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#DFAC42]/15 text-[var(--gold-text)] border border-[#DFAC42]/30 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[var(--text-primary)]">
                        {contact.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] tabular-nums">
                        {contact.phone}
                      </p>
                      <p className="text-xs font-medium text-[var(--gold-text)] mt-0.5">
                        {contact.languages[lang]}
                      </p>
                    </div>
                  </div>

                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`WhatsApp ${contact.name}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-colors hover:bg-[#DFAC42] hover:text-[#181410]"
                    style={{
                      borderColor: 'var(--border-strong)',
                      color: 'var(--gold-text)',
                    }}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              ))}

              {/* Location Card */}
              <div
                className="rounded-xl border p-5 flex items-center gap-4"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <MapPin className="w-5 h-5 text-[var(--gold-text)] shrink-0" />
                <span className="text-sm text-[var(--text-secondary)]">
                  Port Ghalib, Marsa Alam, Red Sea, Egypt
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'أرسل لنا رسالة'
                : lang === 'de'
                ? 'Nachricht Senden'
                : 'Send a Message'}
            </h2>

            {submitted ? (
              <div
                className="rounded-2xl border p-8 text-center space-y-4"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                }}
              >
                <div className="w-14 h-14 rounded-full mx-auto flex items-center justify-center bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display text-2xl font-bold text-[var(--gold-text)]">
                  {lang === 'ar'
                    ? 'تم إرسال رسالتك بنجاح!'
                    : 'Message Sent Successfully!'}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {lang === 'ar'
                    ? `شكراً لتواصلك معنا يا ${name}. سيقوم فريقنا بالرد عليك في أقرب وقت.`
                    : `Thank you, ${name}. Our team in Port Ghalib has received your inquiry and will reply shortly.`}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="px-5 py-2.5 rounded-lg text-xs font-bold"
                  style={{ backgroundColor: '#DFAC42', color: '#181410' }}
                >
                  {lang === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs sm:text-sm font-semibold mb-1.5 text-[var(--text-primary)]"
                  >
                    {lang === 'ar' ? 'الاسم' : 'Name'}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={
                      lang === 'ar' ? 'أدخل اسمك الكامل' : 'Your full name'
                    }
                    className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-[#DFAC42]"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: errors.name
                        ? '#EF4444'
                        : 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  />
                  {errors.name && (
                    <p role="alert" className="text-xs text-red-400 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs sm:text-sm font-semibold mb-1.5 text-[var(--text-primary)]"
                  >
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-[#DFAC42]"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: errors.email
                        ? '#EF4444'
                        : 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  />
                  {errors.email && (
                    <p role="alert" className="text-xs text-red-400 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs sm:text-sm font-semibold mb-1.5 text-[var(--text-primary)]"
                  >
                    {lang === 'ar' ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      lang === 'ar'
                        ? 'اكتب استفسارك أو تفاصيل الجولة المطلوبة...'
                        : 'Tell us about your preferred ride, dates, or hotel in Marsa Alam...'
                    }
                    className="w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:border-[#DFAC42]"
                    style={{
                      backgroundColor: 'var(--bg-surface)',
                      borderColor: errors.message
                        ? '#EF4444'
                        : 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  />
                  {errors.message && (
                    <p role="alert" className="text-xs text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg text-sm font-bold transition-transform active:scale-98"
                  style={{
                    backgroundColor: '#DFAC42',
                    color: '#181410',
                  }}
                >
                  {lang === 'ar'
                    ? 'إرسال الرسالة'
                    : lang === 'de'
                    ? 'Nachricht Senden'
                    : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
