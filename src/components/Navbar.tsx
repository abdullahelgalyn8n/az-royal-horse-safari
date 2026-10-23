import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { Language } from '../data/siteData';

const NAV_ITEMS = [
  {
    path: '/',
    label: { en: 'Home', ar: 'الرئيسية', de: 'Startseite' },
  },
  {
    path: '/about',
    label: { en: 'About Us', ar: 'من نحن', de: 'Über Uns' },
  },
  {
    path: '/team',
    label: { en: 'Our Team', ar: 'فريقنا', de: 'Unser Team' },
  },
  {
    path: '/rides',
    label: { en: 'Our Rides', ar: 'رحلاتنا والأسعار', de: 'Reittouren' },
  },
  {
    path: '/gallery',
    label: { en: 'Gallery', ar: 'معرض الصور', de: 'Galerie' },
  },
  {
    path: '/contact',
    label: { en: 'Contact', ar: 'تواصل معنا', de: 'Kontakt' },
  },
];

const LANG_OPTIONS: { code: Language; short: string; label: string }[] = [
  { code: 'en', short: 'GB', label: 'English' },
  { code: 'ar', short: 'EG', label: 'العربية' },
  { code: 'de', short: 'DE', label: 'Deutsch' },
];

export function Navbar() {
  const { theme, toggleTheme, lang, setLang } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();

  const currentLangObj =
    LANG_OPTIONS.find((l) => l.code === lang) ?? LANG_OPTIONS[0];

  const bookNowLabel =
    lang === 'ar' ? 'احجز الآن' : lang === 'de' ? 'Jetzt Buchen' : 'Book Now';

  return (
    <header
      className="sticky top-0 z-40 w-full backdrop-blur-md transition-colors duration-200 border-b"
      style={{
        backgroundColor: 'var(--header-bg)',
        borderColor: 'var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <img
            src="/assets/extracted/logo.png"
            alt="Pilot Stable Egypt Logo"
            referrerPolicy="no-referrer"
            className="h-11 w-auto object-contain rounded"
          />
          <span className="font-serif-display text-base sm:text-2xl font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--gold-text)] transition-colors truncate max-w-[150px] sm:max-w-none">
            Pilot Stable Egypt
          </span>
        </Link>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150"
                style={{
                  color: isActive
                    ? 'var(--gold-text)'
                    : 'var(--text-primary)',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {item.label[lang]}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--gold-accent)' }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Zone 3: Language, Theme Toggle & Book Now CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-label="Select Language"
              aria-expanded={langMenuOpen}
              className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap shrink-0"
              style={{
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--bg-surface)',
              }}
            >
              <Globe className="w-4 h-4 text-[var(--gold-text)]" />
              <span className="text-[11px] opacity-75 font-semibold">
                {currentLangObj.short}
              </span>
              <span className="hidden sm:inline">{currentLangObj.label}</span>
            </button>

            {langMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-36 rounded-xl border py-1.5 shadow-xl z-50"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                }}
              >
                {LANG_OPTIONS.map((opt) => (
                  <button
                    key={opt.code}
                    type="button"
                    onClick={() => {
                      setLang(opt.code);
                      setLangMenuOpen(false);
                    }}
                    className="w-full px-3.5 py-2 text-left text-xs sm:text-sm flex items-center justify-between transition-colors hover:bg-[var(--bg-surface-hover)]"
                    style={{
                      color:
                        lang === opt.code
                          ? 'var(--gold-text)'
                          : 'var(--text-primary)',
                      fontWeight: lang === opt.code ? 600 : 400,
                    }}
                  >
                    <span>{opt.label}</span>
                    <span className="text-[11px] opacity-70">{opt.short}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* High-Contrast Light / Dark Mode Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'
            }
            title={
              theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'
            }
            className="hidden sm:flex p-2.5 rounded-lg border transition-colors items-center justify-center shrink-0"
            style={{
              borderColor: 'var(--border-subtle)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
            }}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[var(--gold-text)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--gold-text)]" />
            )}
          </button>

          {/* Primary Action: Book Now */}
          <Link
            to="/book"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-transform active:scale-95 whitespace-nowrap shrink-0"
            style={{
              backgroundColor: '#DFAC42',
              color: '#181410',
            }}
          >
            {bookNowLabel}
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-lg border"
            style={{
              borderColor: 'var(--border-subtle)',
              color: 'var(--text-primary)',
            }}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden border-t px-4 pt-3 pb-6 space-y-2"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium"
              style={({ isActive }) => ({
                color: isActive ? 'var(--gold-text)' : 'var(--text-primary)',
                backgroundColor: isActive
                  ? 'var(--bg-surface-hover)'
                  : 'transparent',
              })}
            >
              {item.label[lang]}
            </NavLink>
          ))}
          <div className="pt-2">
            <Link
              to="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold"
              style={{
                backgroundColor: '#DFAC42',
                color: '#181410',
              }}
            >
              {bookNowLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
