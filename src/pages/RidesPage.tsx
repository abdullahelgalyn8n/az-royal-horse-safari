import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Truck, Camera, ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { RIDES, RideCategory } from '../data/siteData';
import { filterRidesByCategory } from '../utils/bookingLogic';
import { RideCard } from '../components/RideCard';

const CATEGORY_TABS: {
  id: RideCategory;
  label: { en: string; ar: string; de: string };
}[] = [
  {
    id: 'all',
    label: { en: 'All Experiences', ar: 'جميع التجارب', de: 'Alle Touren' },
  },
  {
    id: 'sea',
    label: {
      en: 'Sea & Beach Rides',
      ar: 'جولات البحر والسباحة',
      de: 'Meer & Strand',
    },
  },
  {
    id: 'desert',
    label: {
      en: 'Camel & Desert',
      ar: 'قوافل الجمال والصحراء',
      de: 'Kamel & Wüste',
    },
  },
  {
    id: 'cultural',
    label: {
      en: 'Bedouin Culture',
      ar: 'القرية البدوية والتراث',
      de: 'Beduinen-Kultur',
    },
  },
  {
    id: 'vip-photo',
    label: {
      en: 'Photo Sessions & VIP',
      ar: 'جلسات التصوير و VIP',
      de: 'Fotoshooting & VIP',
    },
  },
];

export function RidesPage() {
  const { lang, openBookingModal } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState<RideCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRides = filterRidesByCategory(
    RIDES,
    selectedCategory,
    searchQuery
  );

  return (
    <div>
      {/* 1. PAGE HEADER */}
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
              ? 'رحلاتنا والأسعار'
              : lang === 'de'
              ? 'UNSERE REITTOUREN'
              : 'OUR RIDES'}
          </p>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[var(--gold-text)] gold-title-glow">
            {lang === 'ar'
              ? 'التجارب والأسعار'
              : lang === 'de'
              ? 'Erlebnisse & Preise'
              : 'Experiences & Prices'}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'اختر من بين تجاربنا المصممة بعناية لتصنع ذكريات تدوم طويلاً وتربطك بجمال ساحل البحر الأحمر في مصر.'
              : "Choose from our carefully crafted experiences, each designed to create lasting memories while connecting you with the beauty of Egypt's Red Sea coast."}
          </p>
        </div>
      </section>

      {/* 2. FILTER BAR & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Segmented Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter Rides by Category"
            className="flex items-center gap-1.5 p-1.5 rounded-xl border overflow-x-auto"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            {CATEGORY_TABS.map((tab) => {
              const active = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(tab.id)}
                  className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
                  style={{
                    backgroundColor: active ? '#DFAC42' : 'transparent',
                    color: active ? '#181410' : 'var(--text-secondary)',
                  }}
                >
                  {tab.label[lang]}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              aria-label="Search Rides"
              placeholder={
                lang === 'ar'
                  ? 'ابحث عن جولة (سباحة، غروب، جمال...)'
                  : 'Search experiences (swim, camel, photo...)'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-primary)',
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. ORGANIZED PRODUCT CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredRides.length === 0 ? (
          <div
            className="rounded-2xl border p-12 text-center space-y-4"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <p className="font-serif-display text-2xl font-semibold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'لم يتم العثور على جولات مطابقة لبحثك'
                : 'No experiences match your current filter'}
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-lg text-xs font-bold"
              style={{ backgroundColor: '#DFAC42', color: '#181410' }}
            >
              {lang === 'ar' ? 'عرض جميع الرحلات' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredRides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        )}
      </section>

      {/* 4. COMPREHENSIVE RATE CARD & COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-text)]">
            {lang === 'ar'
              ? 'مقارنة شاملة للباقات'
              : 'TRANSPARENT RATE CARD'}
          </p>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            {lang === 'ar'
              ? 'جدول مقارنة الرحلات والأسعار'
              : 'Compare All Packages at a Glance'}
          </h2>
        </div>

        <div
          className="rounded-2xl border overflow-x-auto"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-subtle)',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr
                className="border-b text-[var(--gold-text)] uppercase text-[11px] tracking-wider"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-secondary)',
                }}
              >
                <th className="py-4 px-5 font-semibold">
                  {lang === 'ar' ? 'اسم الجولة' : 'Experience'}
                </th>
                <th className="py-4 px-4 font-semibold">
                  {lang === 'ar' ? 'المدة' : 'Duration'}
                </th>
                <th className="py-4 px-4 font-semibold">
                  {lang === 'ar' ? 'المستوى المناسب' : 'Skill Level'}
                </th>
                <th className="py-4 px-4 font-semibold text-right">
                  {lang === 'ar' ? 'سعر المجموعة' : 'Group Price'}
                </th>
                <th className="py-4 px-4 font-semibold text-right">
                  {lang === 'ar' ? 'سعر VIP الخاص' : 'VIP Private'}
                </th>
                <th className="py-4 px-5 font-semibold text-right">
                  {lang === 'ar' ? 'الحجز والتفاصيل' : 'Action'}
                </th>
              </tr>
            </thead>
            <tbody>
              {RIDES.map((ride) => (
                <tr
                  key={ride.id}
                  className="border-b last:border-b-0 hover:bg-[var(--bg-surface-hover)] transition-colors"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <td className="py-4 px-5 font-semibold text-[var(--text-primary)]">
                    <Link
                      to={`/rides/${ride.slug}`}
                      className="hover:text-[var(--gold-text)] inline-flex items-center gap-1"
                    >
                      <span>{ride.title[lang]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--gold-text)]" />
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-[var(--text-secondary)] whitespace-nowrap">
                    {ride.durationLabel[lang]}
                  </td>
                  <td className="py-4 px-4 text-[var(--text-secondary)]">
                    {ride.skillLevel[lang]}
                  </td>
                  <td className="py-4 px-4 text-right font-serif-display text-lg font-bold text-[var(--gold-text)] tabular-nums">
                    {ride.groupPriceEur}€
                  </td>
                  <td className="py-4 px-4 text-right font-serif-display text-lg font-bold text-[var(--gold-text)] tabular-nums">
                    {ride.vipPriceEur}€
                  </td>
                  <td className="py-4 px-5 text-right whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() =>
                        openBookingModal({ rideId: ride.id, tier: 'vip' })
                      }
                      className="px-3.5 py-1.5 rounded-lg text-xs font-bold transition-transform active:scale-95"
                      style={{
                        backgroundColor: '#DFAC42',
                        color: '#181410',
                      }}
                    >
                      {lang === 'ar' ? 'احجز الآن' : 'Book'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Included Guarantees Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div
            className="rounded-xl border p-5 flex items-start gap-3.5"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <Truck className="w-5 h-5 text-[var(--gold-text)] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                {lang === 'ar'
                  ? 'توصيل مجاني داخل بورت غالب'
                  : 'Free Port Ghalib Transfers'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                {lang === 'ar'
                  ? 'نستقبلك من الفندق ونعيدك بعد انتهاء الجولة مجاناً داخل منطقة بورت غالب.'
                  : 'Complimentary round-trip hotel pickup and drop-off for all Port Ghalib resorts.'}
              </p>
            </div>
          </div>

          <div
            className="rounded-xl border p-5 flex items-start gap-3.5"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <ShieldCheck className="w-5 h-5 text-[var(--gold-text)] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                {lang === 'ar'
                  ? 'معدات سلامة وإشراف كامل'
                  : 'Certified Safety & Supervision'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                {lang === 'ar'
                  ? 'خوذات أمان ومرافقة شخصية للمبتدئين والأطفال لضمان أقصى درجات الراحة.'
                  : 'Safety helmets, calm horses matched to your level, and dedicated trainer support.'}
              </p>
            </div>
          </div>

          <div
            className="rounded-xl border p-5 flex items-start gap-3.5"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
            }}
          >
            <Camera className="w-5 h-5 text-[var(--gold-text)] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[var(--text-primary)]">
                {lang === 'ar'
                  ? 'التصوير بكاميرتك مشمول مجاناً'
                  : 'Complimentary Guide Photos'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                {lang === 'ar'
                  ? 'يساعدك مرشدونا في التقاط أجمل الصور ومقاطع الفيديو بهاتفك على الشاطئ.'
                  : 'Our guides happily capture photos and videos on your phone at the best coastal spots.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
