import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Check,
  Users,
  Crown,
  Sparkles,
  Compass,
  Calendar,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { RIDES } from '../data/siteData';
import { RideCard } from '../components/RideCard';

export function RideDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang, openBookingModal } = useAppContext();
  const [selectedTier, setSelectedTier] = useState<'group' | 'vip'>('vip');

  const ride = RIDES.find((r) => r.slug === slug) ?? RIDES[0];
  const relatedRides = RIDES.filter((r) => r.id !== ride.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Breadcrumb Back Link */}
      <div>
        <Link
          to="/rides"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--gold-text)] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {lang === 'ar'
              ? 'العودة إلى جميع الرحلات والأسعار'
              : 'Back to All Experiences & Prices'}
          </span>
        </Link>
      </div>

      {/* Main Split Product Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left 7 Columns: Gallery & Detailed Story/Itinerary */}
        <div className="lg:col-span-7 space-y-8">
          <div
            className="rounded-2xl overflow-hidden border aspect-[16/10] bg-[#1D1812] relative"
            style={{
              borderColor: 'var(--border-strong)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <img
              src={ride.image}
              alt={ride.title[lang]}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1C1610] text-[#DFAC42] text-xs font-semibold border border-[#DFAC42]/50 shadow-md">
              <Clock className="w-4 h-4" />
              <span>{ride.durationLabel[lang]}</span>
            </div>
          </div>

          {/* Overview Prose */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-text)]">
              {ride.subtitle[lang]}
            </p>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-[var(--text-primary)]">
              {ride.title[lang]}
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {ride.description[lang]}
            </p>
          </div>

          {/* What's Included Box */}
          <div
            className="rounded-2xl border p-6 sm:p-8 space-y-4"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <h2 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'ما الذي تشمله هذه الباقة؟'
                : 'What Is Included in Your Package'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[var(--text-secondary)]">
              {ride.included[lang].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[var(--gold-text)] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Timeline Itinerary */}
          <div
            className="rounded-2xl border p-6 sm:p-8 space-y-6"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <h2 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'البرنامج الزمني للرحلة'
                : 'Step-by-Step Ride Itinerary'}
            </h2>
            <div className="space-y-5">
              {ride.itinerary.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 pb-5 border-b last:border-b-0 last:pb-0"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#DFAC42]/15 text-[var(--gold-text)] border border-[#DFAC42]/30 shrink-0 tabular-nums">
                    +{step.time}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm sm:text-base text-[var(--text-primary)]">
                      {step.title[lang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                      {step.detail[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Interactive Sticky Booking & Tier Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div
            className="rounded-2xl border p-6 sm:p-8 space-y-6"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-strong)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
              <div>
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] block">
                  {selectedTier === 'vip' ? 'VIP Private Experience' : 'Small Group Ride'}
                </span>
                <span className="font-serif-display text-4xl font-bold text-[var(--gold-text)] tabular-nums">
                  {selectedTier === 'vip' ? ride.vipPriceEur : ride.groupPriceEur}€
                </span>
                <span className="text-xs text-[var(--text-muted)] ml-1">
                  / person
                </span>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-md bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                Free Port Ghalib Transfer
              </span>
            </div>

            {/* Interactive Tier Selector */}
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                {lang === 'ar' ? 'اختر فئة الحجز' : 'Choose Experience Tier'}
              </label>

              <div className="grid grid-cols-1 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedTier('group')}
                  className="p-4 rounded-xl border text-left flex items-center justify-between transition-all"
                  style={{
                    borderColor:
                      selectedTier === 'group'
                        ? '#DFAC42'
                        : 'var(--border-subtle)',
                    backgroundColor:
                      selectedTier === 'group'
                        ? 'var(--bg-surface-hover)'
                        : 'var(--bg-primary)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[var(--gold-text)]" />
                    <div>
                      <p className="text-sm font-bold text-[var(--text-primary)]">
                        {lang === 'ar'
                          ? 'مجموعة صغيرة (Group)'
                          : 'Small Group Tour'}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {lang === 'ar'
                          ? 'جولة ممتعة بصحبة فرسان من نفس المستوى'
                          : 'Shared ride matched by riding pace'}
                      </p>
                    </div>
                  </div>
                  <span className="font-serif-display text-2xl font-bold text-[var(--gold-text)] tabular-nums">
                    {ride.groupPriceEur}€
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedTier('vip')}
                  className="p-4 rounded-xl border text-left flex items-center justify-between transition-all"
                  style={{
                    borderColor:
                      selectedTier === 'vip'
                        ? '#DFAC42'
                        : 'var(--border-subtle)',
                    backgroundColor:
                      selectedTier === 'vip'
                        ? 'var(--bg-surface-hover)'
                        : 'var(--bg-primary)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Crown className="w-5 h-5 text-[var(--gold-text)]" />
                    <div>
                      <p className="text-sm font-bold text-[var(--text-primary)]">
                        {lang === 'ar'
                          ? 'جولة خاصة (VIP Private)'
                          : 'VIP Private Guide & Pace'}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">
                        {lang === 'ar'
                          ? 'مدرب خاص ومسار مخصص بالكامل لكم فقط'
                          : '100% private trail & personal photographer guide'}
                      </p>
                    </div>
                  </div>
                  <span className="font-serif-display text-2xl font-bold text-[var(--gold-text)] tabular-nums">
                    {ride.vipPriceEur}€
                  </span>
                </button>
              </div>
            </div>

            {/* Metadata Specifications */}
            <div className="space-y-2.5 text-xs sm:text-sm text-[var(--text-secondary)] pt-2">
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[var(--gold-text)] shrink-0" />
                <span>
                  <strong className="text-[var(--text-primary)]">
                    Skill Level:
                  </strong>{' '}
                  {ride.skillLevel[lang]}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[var(--gold-text)] shrink-0" />
                <span>
                  <strong className="text-[var(--text-primary)]">
                    Best Time:
                  </strong>{' '}
                  {ride.bestTime[lang]}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-[var(--gold-text)] shrink-0" />
                <span>
                  <strong className="text-[var(--text-primary)]">
                    Highlights:
                  </strong>{' '}
                  {ride.highlights[lang].join(' · ')}
                </span>
              </div>
            </div>

            {/* Primary Book CTA */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() =>
                  openBookingModal({ rideId: ride.id, tier: selectedTier })
                }
                className="w-full py-4 rounded-xl text-sm font-bold transition-transform active:scale-98 shadow-lg"
                style={{
                  backgroundColor: '#DFAC42',
                  color: '#181410',
                }}
              >
                {lang === 'ar'
                  ? `احجز هذه التجربة الآن (${
                      selectedTier === 'vip'
                        ? ride.vipPriceEur
                        : ride.groupPriceEur
                    }€)`
                  : `Book ${ride.title.en} (${
                      selectedTier === 'vip'
                        ? ride.vipPriceEur
                        : ride.groupPriceEur
                    }€)`}
              </button>

              <Link
                to={`/book?ride=${ride.id}&tier=${selectedTier}`}
                className="w-full py-3 rounded-xl text-xs font-semibold border flex items-center justify-center transition-colors hover:border-[var(--gold-accent)]"
                style={{
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
              >
                {lang === 'ar'
                  ? 'الانتقال إلى حاسبة الحجز المفصلة'
                  : 'Open Full Booking Calculator Page'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* More Experiences Section */}
      <div className="pt-12 border-t space-y-8" style={{ borderColor: 'var(--border-subtle)' }}>
        <h2 className="font-serif-display text-3xl font-bold text-[var(--gold-text)]">
          {lang === 'ar'
            ? 'تجارب أخرى قد تعجبك'
            : 'More Red Sea Riding Adventures'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedRides.map((r) => (
            <RideCard key={r.id} ride={r} />
          ))}
        </div>
      </div>
    </div>
  );
}
