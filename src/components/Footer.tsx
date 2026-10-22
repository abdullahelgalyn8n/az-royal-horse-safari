import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { SALES_CONTACTS } from '../data/siteData';

export function Footer() {
  const { lang } = useAppContext();

  return (
    <footer
      className="border-t transition-colors duration-200"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/assets/extracted/logo.png"
                alt="Pilot Stable Egypt"
                referrerPolicy="no-referrer"
                className="h-12 w-auto object-contain rounded"
              />
              <div>
                <span className="font-serif-display text-xl font-semibold block text-[var(--gold-text)]">
                  Pilot Stable
                </span>
                <span className="text-xs tracking-widest uppercase text-[var(--text-muted)]">
                  EGYPT
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {lang === 'ar'
                ? 'عش سحر ساحل البحر الأحمر من خلال مغامرات ركوب الخيل والجمال التي لا تُنسى في بورت غالب، مرسى علم.'
                : lang === 'de'
                ? 'Erleben Sie die Magie der Küste des Roten Meeres bei unvergesslichen Reitabenteuern in Marsa Alam.'
                : 'Experience the magic of the Red Sea coast through unforgettable horseback adventures in Marsa Alam.'}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif-display text-lg font-semibold mb-4 text-[var(--gold-text)]">
              {lang === 'ar'
                ? 'روابط سريعة'
                : lang === 'de'
                ? 'Schnellzugriff'
                : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors"
                >
                  {lang === 'ar' ? 'الرئيسية' : lang === 'de' ? 'Startseite' : 'Home'}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors"
                >
                  {lang === 'ar' ? 'من نحن' : lang === 'de' ? 'Über Uns' : 'About Us'}
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors"
                >
                  {lang === 'ar' ? 'فريق الخبراء' : lang === 'de' ? 'Unser Team' : 'Our Team'}
                </Link>
              </li>
              <li>
                <Link
                  to="/rides"
                  className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors"
                >
                  {lang === 'ar' ? 'رحلاتنا والأسعار' : lang === 'de' ? 'Reittouren' : 'Our Rides'}
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors"
                >
                  {lang === 'ar' ? 'معرض الصور' : lang === 'de' ? 'Galerie' : 'Gallery'}
                </Link>
              </li>
              <li>
                <Link
                  to="/book"
                  className="text-[var(--text-secondary)] hover:text-[var(--gold-text)] transition-colors font-medium"
                >
                  {lang === 'ar' ? 'احجز الآن' : lang === 'de' ? 'Jetzt Buchen' : 'Book Now'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Us & Sales Numbers */}
          <div>
            <h3 className="font-serif-display text-lg font-semibold mb-4 text-[var(--gold-text)]">
              {lang === 'ar'
                ? 'تواصل معنا'
                : lang === 'de'
                ? 'Kontakt'
                : 'Contact Us'}
            </h3>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--gold-text)] shrink-0 mt-1" />
                <span>Port Ghalib, Marsa Alam, Red Sea, Egypt</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--gold-text)] shrink-0" />
                <a
                  href="mailto:info@pilotstable.com"
                  className="hover:text-[var(--gold-text)] transition-colors"
                >
                  info@pilotstable.com
                </a>
              </div>

              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-text)] mb-2">
                  {lang === 'ar'
                    ? 'أرقام الحجز والمبيعات'
                    : lang === 'de'
                    ? 'Buchung & Beratung'
                    : 'Sales Numbers'}
                </p>
                <div className="space-y-2.5">
                  {SALES_CONTACTS.map((contact) => (
                    <div key={contact.id} className="flex items-start gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-[var(--gold-text)] shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-[var(--text-primary)] leading-tight">
                          {contact.name}
                        </p>
                        <a
                          href={contact.whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-[var(--text-muted)] hover:text-[var(--gold-text)] tabular-nums"
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Follow Us & Languages */}
          <div>
            <h3 className="font-serif-display text-lg font-semibold mb-4 text-[var(--gold-text)]">
              {lang === 'ar'
                ? 'تابعنا'
                : lang === 'de'
                ? 'Folgen Sie Uns'
                : 'Follow Us'}
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-[var(--gold-accent)] hover:text-[var(--gold-text)]"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                }}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-[var(--gold-accent)] hover:text-[var(--gold-text)]"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                }}
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-text)] mb-1.5">
                {lang === 'ar'
                  ? 'اللغات المتاحة'
                  : lang === 'de'
                  ? 'Verfügbare Sprachen'
                  : 'Languages Available'}
              </p>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                English · German · Polish · Italian · Czech · French · Arabic
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <p>جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">A.Z Agency</a> 2026 ©</p>
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="hover:text-[var(--gold-text)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/contact"
              className="hover:text-[var(--gold-text)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
