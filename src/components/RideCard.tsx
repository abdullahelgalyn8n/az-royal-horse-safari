import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Users, Crown, ArrowUpRight, Clock } from 'lucide-react';
import { RidePackage } from '../data/siteData';
import { useAppContext } from '../context/AppContext';

interface RideCardProps {
  ride: RidePackage;
}

export function RideCard({ ride }: RideCardProps) {
  const { lang, openBookingModal } = useAppContext();

  const detailsLabel =
    lang === 'ar'
      ? 'التفاصيل والبرنامج'
      : lang === 'de'
      ? 'Details & Ablauf'
      : 'View Details';

  return (
    <article
      className="rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
      style={{
        backgroundColor: 'var(--bg-surface)',
        borderColor: 'var(--border-subtle)',
        boxShadow: 'var(--card-shadow)',
      }}
    >
      {/* Top Media Header */}
      <div>
        <div className="relative h-48 w-full overflow-hidden bg-[#1D1812]">
          <img
            src={ride.image}
            alt={ride.title[lang]}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Clean Duration Badge positioned to cover the original badge area */}
          <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C1610] border border-[#DFAC42]/50 text-xs font-semibold text-[#DFAC42] shadow-md">
            <Clock className="w-3.5 h-3.5" />
            <span>{ride.durationLabel[lang]}</span>
          </div>

          {/* Dedicated Page Link Icon */}
          <Link
            to={`/rides/${ride.slug}`}
            aria-label={`${ride.title[lang]} - ${detailsLabel}`}
            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-[#1C1610]/85 hover:bg-[#DFAC42] text-white hover:text-[#181410] flex items-center justify-center transition-colors border border-white/15"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Title & Highlights List */}
        <div className="p-5 pb-3 space-y-3">
          <Link
            to={`/rides/${ride.slug}`}
            className="font-serif-display text-xl font-bold text-[var(--text-primary)] hover:text-[var(--gold-text)] transition-colors block leading-snug"
          >
            {ride.title[lang]}
          </Link>
          <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)]">
            {ride.highlights[lang].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[var(--gold-text)] shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pricing & Actions Footer */}
      <div className="p-5 pt-2 space-y-4">
        <div
          className="pt-3 border-t space-y-1.5 text-xs sm:text-sm"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          <div className="flex items-center justify-between">
            <span className="uppercase tracking-wider text-[11px] font-semibold text-[var(--text-muted)]">
              GROUP
            </span>
            <span className="font-serif-display text-lg font-bold text-[var(--gold-text)] tabular-nums">
              {ride.groupPriceEur}€
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="uppercase tracking-wider text-[11px] font-semibold text-[var(--text-muted)]">
              VIP PRIVATE
            </span>
            <span className="font-serif-display text-lg font-bold text-[var(--gold-text)] tabular-nums">
              {ride.vipPriceEur}€
            </span>
          </div>
        </div>

        {/* Group / VIP Booking Buttons */}
        <div className="grid grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() =>
              openBookingModal({ rideId: ride.id, tier: 'group' })
            }
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold border transition-colors hover:border-[var(--gold-accent)] whitespace-nowrap shrink-0"
            style={{
              borderColor: 'var(--border-strong)',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--bg-surface-hover)',
            }}
          >
            <Users className="w-3.5 h-3.5 text-[var(--gold-text)]" />
            <span>{lang === 'ar' ? 'حجز مجموعة' : 'Group'}</span>
          </button>

          <button
            type="button"
            onClick={() => openBookingModal({ rideId: ride.id, tier: 'vip' })}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold transition-transform active:scale-95 whitespace-nowrap shrink-0"
            style={{
              backgroundColor: '#DFAC42',
              color: '#181410',
            }}
          >
            <Crown className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'حجز VIP' : 'VIP'}</span>
          </button>
        </div>

        {/* Dedicated Page Link */}
        <div className="text-center pt-1">
          <Link
            to={`/rides/${ride.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--gold-text)] hover:underline"
          >
            <span>{detailsLabel}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
