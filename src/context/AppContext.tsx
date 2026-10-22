import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, ThemeMode } from '../data/siteData';

export interface BookingModalPrefill {
  rideId?: string;
  tier?: 'group' | 'vip';
}

interface AppContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  bookingModalOpen: boolean;
  bookingPrefill: BookingModalPrefill;
  openBookingModal: (prefill?: BookingModalPrefill) => void;
  closeBookingModal: () => void;
  savedBookingsCount: number;
  incrementBookingsCount: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const saved = localStorage.getItem('pilot_stable_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch {
      // ignore storage errors
    }
    return 'dark';
  });

  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('pilot_stable_lang');
      if (saved === 'en' || saved === 'ar' || saved === 'de') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<BookingModalPrefill>({
    rideId: 'sea-desert-tour',
    tier: 'vip',
  });
  const [savedBookingsCount, setSavedBookingsCount] = useState<number>(0);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('pilot_stable_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    try {
      localStorage.setItem('pilot_stable_lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const setTheme = (next: ThemeMode) => setThemeState(next);
  const toggleTheme = () =>
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const setLang = (next: Language) => setLangState(next);

  const openBookingModal = (prefill?: BookingModalPrefill) => {
    if (prefill) {
      setBookingPrefill((prev) => ({
        rideId: prefill.rideId ?? prev.rideId,
        tier: prefill.tier ?? prev.tier,
      }));
    }
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => setBookingModalOpen(false);
  const incrementBookingsCount = () => setSavedBookingsCount((c) => c + 1);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        lang,
        setLang,
        bookingModalOpen,
        bookingPrefill,
        openBookingModal,
        closeBookingModal,
        savedBookingsCount,
        incrementBookingsCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return ctx;
}
