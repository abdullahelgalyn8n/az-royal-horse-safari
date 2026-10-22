import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Globe,
  Award,
  Phone,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { TEAM_MEMBERS } from '../data/siteData';

export function TeamPage() {
  const { lang, openBookingModal } = useAppContext();
  const { slug } = useParams<{ slug?: string }>();

  const selectedMember = slug
    ? TEAM_MEMBERS.find((m) => m.slug === slug)
    : undefined;

  if (selectedMember) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <Link
          to="/team"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--gold-text)] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            {lang === 'ar'
              ? 'العودة إلى جميع أعضاء الفريق'
              : 'Back to All Team Members'}
          </span>
        </Link>

        <div
          className="rounded-2xl border p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-strong)',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <div className="md:col-span-5">
            <div className="aspect-[3/4] rounded-xl overflow-hidden border border-[#DFAC42]/30">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--gold-text)]">
                {selectedMember.role[lang]}
              </p>
              <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-[var(--text-primary)] mt-1">
                {selectedMember.name}
              </h1>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              {selectedMember.bio[lang]}
            </p>

            <div
              className="p-4 rounded-xl border space-y-2.5 text-xs sm:text-sm"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[var(--gold-text)] shrink-0" />
                <span className="font-semibold text-[var(--text-primary)]">
                  {lang === 'ar' ? 'التخصص:' : 'Specialty:'}
                </span>
                <span className="text-[var(--text-secondary)]">
                  {selectedMember.specialty[lang]}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[var(--gold-text)] shrink-0" />
                <span className="font-semibold text-[var(--text-primary)]">
                  {lang === 'ar' ? 'اللغات:' : 'Languages:'}
                </span>
                <span className="text-[var(--text-secondary)]">
                  {selectedMember.languages.join(' · ')}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[var(--gold-text)] shrink-0" />
                <span className="font-semibold text-[var(--text-primary)]">
                  {lang === 'ar' ? 'سنوات الخبرة:' : 'Experience:'}
                </span>
                <span className="text-[var(--text-secondary)] tabular-nums">
                  {selectedMember.experienceYears}+ Years in Red Sea & Arabian
                  Horsemanship
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="px-6 py-3 rounded-lg text-xs sm:text-sm font-bold"
                style={{
                  backgroundColor: '#DFAC42',
                  color: '#181410',
                }}
              >
                {lang === 'ar'
                  ? `احجز جولتك مع فريق ${selectedMember.name}`
                  : `Book a Ride with ${selectedMember.name}`}
              </button>

              {selectedMember.phone && (
                <a
                  href={`https://wa.me/${selectedMember.phone.replace(
                    /[^0-9]/g,
                    ''
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold border"
                  style={{
                    borderColor: 'var(--border-strong)',
                    color: 'var(--gold-text)',
                  }}
                >
                  <Phone className="w-4 h-4" />
                  <span className="tabular-nums">{selectedMember.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <section
        className="py-16 border-b text-center"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--gold-text)]">
            {lang === 'ar' ? 'تعرف على فريقنا' : 'MEET THE TEAM'}
          </p>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[var(--gold-text)] gold-title-glow">
            {lang === 'ar'
              ? 'خبراؤنا'
              : lang === 'de'
              ? 'Unsere Experten'
              : 'Our Experts'}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto">
            {lang === 'ar'
              ? 'يجمع فريقنا الشغوف عقوداً من الخبرة المشتركة في رعاية الخيل وتدريبها وصناعة تجارب ركوب لا تُنسى.'
              : 'Our passionate team brings decades of combined experience in horse care, training, and creating unforgettable riding experiences.'}
          </p>
        </div>
      </section>

      {/* Team Members Grid with Full Cards & Dedicated Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <div>
                <Link
                  to={`/team/${member.slug}`}
                  className="block relative aspect-[4/5] overflow-hidden bg-[#1D1812]"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <h2 className="font-serif-display text-2xl font-bold text-white">
                        {member.name}
                      </h2>
                      <p className="text-xs font-medium text-[#DFAC42]">
                        {member.role[lang]}
                      </p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-black/60 text-[#DFAC42] flex items-center justify-center border border-[#DFAC42]/40">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>

                <div className="p-6 space-y-3">
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {member.bio[lang]}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--text-primary)]">
                      {lang === 'ar' ? 'اللغات:' : 'Languages:'}
                    </strong>{' '}
                    {member.languages.join(' · ')}
                  </p>
                </div>
              </div>

              <div
                className="px-6 py-4 border-t flex items-center justify-between"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <Link
                  to={`/team/${member.slug}`}
                  className="text-xs font-semibold text-[var(--gold-text)] hover:underline inline-flex items-center gap-1"
                >
                  <span>
                    {lang === 'ar' ? 'عرض الملف الشخصي' : 'View Expert Profile'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <span className="text-xs text-[var(--text-muted)] tabular-nums">
                  {member.experienceYears}+ Yrs Exp
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
