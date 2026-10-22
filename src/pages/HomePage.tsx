import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Facebook,
  Instagram,
  ArrowRight,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { RIDES, TEAM_MEMBERS } from '../data/siteData';
import { RideCard } from '../components/RideCard';

const HERO_SLIDES = [
  {
    id: 'bedouin-village-tour',
    kicker: {
      en: 'MARSA ALAM, RED SEA COAST',
      ar: 'مرسى علم، ساحل البحر الأحمر',
      de: 'MARSA ALAM, KÜSTE DES ROTEN MEERES',
    },
    title: {
      en: 'Bedouin Village Tour',
      ar: 'جولة القرية البدوية',
      de: 'Beduinendorf-Tour',
    },
    goldSubtitle: {
      en: 'Cultural Journey',
      ar: 'رحلة ثقافية أصيلة',
      de: 'Kulturelle Reise',
    },
    description: {
      en: 'A deep cultural journey into the desert featuring authentic Bedouin hospitality and traditional tea ceremony.',
      ar: 'رحلة ثقافية عميقة في قلب الصحراء تتضمن الضيافة البدوية الأصيلة ومراسم الشاي البدوي على الجمر.',
      de: 'Eine tiefgehende Kulturreise in die Wüste mit authentischer Beduinen-Gastfreundschaft und Teezeremonie.',
    },
    image: '/assets/extracted/story-sunset.jpg',
    slug: 'bedouin-village-tour',
  },
  {
    id: 'swimming-with-horses',
    kicker: {
      en: 'PORT GHALIB, MARSA ALAM',
      ar: 'بورت غالب، مرسى علم',
      de: 'PORT GHALIB, MARSA ALAM',
    },
    title: {
      en: 'Swimming with Horses',
      ar: 'السباحة مع الخيل',
      de: 'Schwimmen mit Pferden',
    },
    goldSubtitle: {
      en: 'Red Sea Harmony',
      ar: 'تناغم مياه البحر الأحمر',
      de: 'Harmonie im Roten Meer',
    },
    description: {
      en: 'Unsaddle along a pristine turquoise lagoon and swim bareback with our gentle horses in crystal-clear waters.',
      ar: 'انطلق بدون سرج في بحيرة فيروزية نقية واسبح مع خيولنا الهادئة في مياه البحر الأحمر الكريستالية.',
      de: 'Schwimmen Sie ohne Sattel mit unseren sanften Pferden im kristallklaren Wasser des Roten Meeres.',
    },
    image: '/assets/extracted/ride-swimming.jpg',
    slug: 'swimming-with-horses',
  },
  {
    id: 'sea-desert-tour',
    kicker: {
      en: 'MARSA ALAM, EGYPT',
      ar: 'مرسى علم، مصر',
      de: 'MARSA ALAM, ÄGYPTEN',
    },
    title: {
      en: 'Sea & Desert Tour',
      ar: 'جولة البحر والصحراء',
      de: 'Meer- & Wüstentour',
    },
    goldSubtitle: {
      en: 'Golden Horizon Trail',
      ar: 'مسار الأفق الذهبي',
      de: 'Goldener Horizont-Pfad',
    },
    description: {
      en: 'Peaceful riding for all skill levels where untouched desert valleys meet the turquoise shoreline of Port Ghalib.',
      ar: 'جولة هادئة تناسب جميع المستويات حيث تلتقي الوديان الصحراوية البكر بساحل بورت غالب الفيروزي.',
      de: 'Friedlicher Ausritt für alle Niveaus, wo unberührte Wüstentäler auf die Küste von Port Ghalib treffen.',
    },
    image: '/assets/extracted/about-hero.jpg',
    slug: 'sea-and-desert-tour',
  },
];

export function HomePage() {
  const { lang, openBookingModal } = useAppContext();
  const [heroIndex, setHeroIndex] = useState(0);
  const [carouselOffset, setCarouselOffset] = useState(0);

  const activeHero = HERO_SLIDES[heroIndex];

  const handlePrevRide = () => {
    setCarouselOffset((prev) => (prev === 0 ? RIDES.length - 1 : prev - 1));
  };

  const handleNextRide = () => {
    setCarouselOffset((prev) => (prev + 1) % RIDES.length);
  };

  // Display 4 cards in the carousel view, rotating cleanly
  const visibleRides = [0, 1, 2, 3].map(
    (idx) => RIDES[(carouselOffset + idx) % RIDES.length]
  );

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Media with strong dark contrast scrim */}
        <div className="absolute inset-0 bg-[#120F0C]">
          <img
            src={activeHero.image}
            alt={activeHero.title[lang]}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-65 transition-all duration-700 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-[#181410]" />
        </div>

        {/* Left Social Rail (matching screenshot) */}
        <div className="hidden xl:flex flex-col gap-3.5 absolute left-8 top-1/2 -translate-y-1/2 z-20">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DFAC42] text-white hover:text-[#181410] backdrop-blur-sm flex items-center justify-center transition-colors border border-white/15"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DFAC42] text-white hover:text-[#181410] backdrop-blur-sm flex items-center justify-center transition-colors border border-white/15"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        {/* Center Hero Typography */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5 py-20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.28em] text-[#DFAC42] font-semibold">
            {activeHero.kicker[lang]}
          </p>

          <h1
            className="font-serif-display font-bold text-white leading-tight"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              textWrap: 'balance',
            }}
          >
            {activeHero.title[lang]}
            <span className="block text-[#DFAC42] gold-title-glow mt-1">
              {activeHero.goldSubtitle[lang]}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-stone-200 max-w-xl mx-auto leading-relaxed">
            {activeHero.description[lang]}
          </p>

          {/* Primary Hero Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                openBookingModal({ rideId: activeHero.id, tier: 'vip' })
              }
              className="px-7 py-3.5 rounded-lg text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg"
              style={{
                backgroundColor: '#DFAC42',
                color: '#181410',
              }}
            >
              {lang === 'ar'
                ? 'احجز الآن'
                : lang === 'de'
                ? 'Jetzt Buchen'
                : 'Book Now'}
            </button>

            <Link
              to={`/rides/${activeHero.slug}`}
              className="px-6 py-3.5 rounded-lg text-sm font-semibold text-white border border-white/30 hover:border-[#DFAC42] hover:text-[#DFAC42] backdrop-blur-sm transition-colors"
            >
              {lang === 'ar'
                ? 'استكشف تفاصيل الجولة'
                : lang === 'de'
                ? 'Tour-Details ansehen'
                : 'Explore Tour Details'}
            </Link>
          </div>

          {/* Hero Slide Switcher Controls */}
          <div className="pt-6 flex items-center justify-center gap-2.5">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setHeroIndex(idx)}
                aria-label={`Slide ${idx + 1}: ${slide.title.en}`}
                className={`h-2 rounded-full transition-all ${
                  heroIndex === idx
                    ? 'w-8 bg-[#DFAC42]'
                    : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. KPI STRIP (7+ Years Experience, 5K+ Happy Riders, 10+ Expert Team) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-12 relative z-20">
        <div
          className="rounded-2xl border p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-strong)',
            boxShadow: 'var(--card-shadow)',
          }}
        >
          <div className="space-y-1">
            <p className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--gold-text)] tabular-nums">
              7+
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {lang === 'ar'
                ? 'سنوات من الخبرة'
                : lang === 'de'
                ? 'Jahre Erfahrung'
                : 'Years Experience'}
            </p>
          </div>

          <div
            className="space-y-1 sm:border-x"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <p className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--gold-text)] tabular-nums">
              5K+
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {lang === 'ar'
                ? 'فارس وضيف سعيد'
                : lang === 'de'
                ? 'Glückliche Reiter'
                : 'Happy Riders'}
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--gold-text)] tabular-nums">
              10+
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
              {lang === 'ar'
                ? 'مدرب وخبير متخصص'
                : lang === 'de'
                ? 'Experten-Team'
                : 'Expert Team'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Framed Image */}
          <div className="lg:col-span-6 relative">
            <div
              className="rounded-2xl overflow-hidden border p-2"
              style={{
                borderColor: 'var(--border-strong)',
                backgroundColor: 'var(--bg-surface)',
              }}
            >
              <img
                src="/assets/extracted/story-sunset.jpg"
                alt="Sunset desert caravan at Pilot Stable Egypt"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] sm:h-[520px] object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-text)]">
              {lang === 'ar'
                ? 'قصتنا'
                : lang === 'de'
                ? 'UNSERE GESCHICHTE'
                : 'OUR STORY'}
            </p>

            <h2 className="font-serif-display text-2xl sm:text-3xl italic font-semibold text-[var(--gold-text)]">
              {lang === 'ar'
                ? 'رحلة من الشغف والتفاني'
                : lang === 'de'
                ? 'Eine Reise voller Leidenschaft & Hingabe'
                : 'A Journey of Passion & Dedication'}
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                {lang === 'ar'
                  ? 'تأسس إسطبل بايلوت مصر في عام 2017 على يد أحمد إمام، ثمرة علاقة عميقة بين الإنسان والخيل تقوم على الأصالة والرعاية والاحترام. بالنسبة لأحمد، الخيول ليست مجرد أدوات، بل شركاء في رحلة مبنية على الثقة والطاقة الهادئة.'
                  : 'Founded in 2017 by Ahmed Emam, Pilot Stable Egypt was born from a deep bond between man and horse, guided by authenticity, care, and respect. For Ahmed, horses are not tools but partners in a shared journey built on trust and calm energy.'}
              </p>
              <p>
                {lang === 'ar'
                  ? 'في عام 2022، انتقل أحمد إلى مرسى علم برؤية طموحة وحصانين وجمل واحد، ليبتكر تجارب ركوب خيل حميمية على طول البحر الأحمر وعبر صحراء مصر البكر. منذ البداية، عكست كل تفصيلة التزاماً بالمعاملة الأخلاقية والاهتمام الشخصي.'
                  : "In 2022, Ahmed moved to Marsa Alam with a vision, two horses, and a camel, creating intimate riding experiences along the Red Sea and through Egypt's untouched desert. From the start, every detail reflected a commitment to ethical treatment and personal attention."}
              </p>
              <p>
                {lang === 'ar'
                  ? 'يقع إسطبل بايلوت حيث يلتقي البحر الأحمر بالصحراء المفتوحة، ويقدم مغامرات حصرية بالخيل والجمال للباحثين عن الهدوء والتواصل والتجارب ذات المعنى — من جولات الشاطئ والصحراء، وجلسات الشروق والغروب، إلى السباحة مع الخيل.'
                  : 'Located where the Red Sea meets the open desert, Pilot Stable Egypt offers exclusive horse and camel adventures designed for those seeking calm, connection, and meaningful experiences.'}
              </p>
              <p className="font-semibold text-[var(--text-primary)]">
                {lang === 'ar'
                  ? 'في إسطبل بايلوت مصر، نحن لا نتبع السياحة الجماعية الصاخبة. نحن نصنع لحظات فخامة هادئة وأصيلة حيث تروي كل جولة قصة من التناغم والثقة والحرية.'
                  : 'At Pilot Stable Egypt, we do not follow mass tourism. We create authentic, quiet luxury moments where every ride tells a story of harmony, trust, and freedom.'}
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold border transition-colors hover:bg-[var(--gold-accent)] hover:text-[#181410]"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--gold-text)',
                }}
              >
                <span>
                  {lang === 'ar'
                    ? 'اعرف المزيد عنا وعن الكتالوج'
                    : lang === 'de'
                    ? 'Mehr über uns erfahren'
                    : 'Learn More About Us'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR EXPERIENCES SECTION */}
      <section
        className="py-24 border-y"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-text)]">
              {lang === 'ar'
                ? 'تجاربنا المميزة'
                : lang === 'de'
                ? 'UNSERE ERLEBNISSE'
                : 'OUR EXPERIENCES'}
            </p>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[var(--gold-text)] gold-title-glow">
              {lang === 'ar'
                ? 'مغامرات فروسية لا تُنسى'
                : lang === 'de'
                ? 'Unvergessliche Reitabenteuer'
                : 'Unforgettable Riding Adventures'}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              {lang === 'ar'
                ? 'اختر من بين تجاربنا المصممة بعناية لتصنع ذكريات تدوم طويلاً وتربطك بجمال ساحل البحر الأحمر في مصر.'
                : "Choose from our carefully crafted experiences, each designed to create lasting memories while connecting you with the beauty of Egypt's Red Sea coast."}
            </p>
          </div>

          {/* Carousel Controls + 4-Card Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visibleRides.map((ride) => (
                <RideCard key={ride.id} ride={ride} />
              ))}
            </div>

            {/* Carousel Pagination & View All Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevRide}
                  aria-label="Previous Experience"
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-[var(--gold-accent)] hover:text-[var(--gold-text)]"
                  style={{
                    borderColor: 'var(--border-strong)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextRide}
                  aria-label="Next Experience"
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:border-[var(--gold-accent)] hover:text-[var(--gold-text)]"
                  style={{
                    borderColor: 'var(--border-strong)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs text-[var(--text-muted)] ml-2">
                  {lang === 'ar'
                    ? `عرض ${RIDES.length} باقات متكاملة`
                    : `Showing ${RIDES.length} curated experiences`}
                </span>
              </div>

              <Link
                to="/rides"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold border transition-colors hover:bg-[var(--gold-accent)] hover:text-[#181410]"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--gold-text)',
                }}
              >
                <span>
                  {lang === 'ar'
                    ? 'عرض ومقارنة جميع الرحلات والأسعار'
                    : 'Compare All Experiences & Prices'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-text)]">
            {lang === 'ar'
              ? 'تعرف على فريقنا'
              : lang === 'de'
              ? 'UNSER TEAM'
              : 'MEET THE TEAM'}
          </p>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[var(--gold-text)] gold-title-glow">
            {lang === 'ar'
              ? 'خبراؤنا'
              : lang === 'de'
              ? 'Unsere Experten'
              : 'Our Experts'}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            {lang === 'ar'
              ? 'يجمع فريقنا الشغوف عقوداً من الخبرة المشتركة في رعاية الخيل وتدريبها وصناعة تجارب ركوب لا تُنسى.'
              : 'Our passionate team brings decades of combined experience in horse care, training, and creating unforgettable riding experiences.'}
          </p>
        </div>

        {/* 6 Team Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <Link
              key={member.id}
              to={`/team/${member.slug}`}
              className="group text-center space-y-3 block focus:outline-none"
            >
              <div
                className="aspect-[3/4] rounded-xl overflow-hidden border transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[var(--gold-accent)]"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-serif-display text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--gold-text)] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {member.role[lang]}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            to="/team"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest border transition-colors hover:bg-[var(--gold-accent)] hover:text-[#181410]"
            style={{
              borderColor: 'var(--border-strong)',
              color: 'var(--gold-text)',
            }}
          >
            {lang === 'ar'
              ? 'تعرف على جميع أعضاء الفريق'
              : 'MEET ALL TEAM MEMBERS'}
          </Link>
        </div>
      </section>

      {/* 6. READY FOR YOUR ADVENTURE CTA SECTION */}
      <section
        className="py-24 border-t text-center"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[var(--gold-text)] gold-title-glow">
            {lang === 'ar'
              ? 'هل أنت مستعد لمغامرتك؟'
              : lang === 'de'
              ? 'Bereit für Ihr Abenteuer?'
              : 'Ready for Your Adventure?'}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            {lang === 'ar'
              ? 'احجز تجربة ركوب الخيل التي لا تُنسى اليوم. سواء كنت مبتدئاً أو فارساً ذا خبرة، لدينا المغامرة المثالية في انتظارك.'
              : "Book your unforgettable riding experience today. Whether you're a beginner or an experienced rider, we have the perfect adventure waiting for you."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/book"
              className="px-7 py-3.5 rounded-lg text-sm font-bold transition-transform hover:scale-105"
              style={{
                backgroundColor: '#DFAC42',
                color: '#181410',
              }}
            >
              {lang === 'ar' ? 'احجز أونلاين الآن' : 'Book Online Now'}
            </Link>

            <a
              href="https://wa.me/201063345261"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold border transition-colors hover:bg-[var(--bg-surface-hover)]"
              style={{
                borderColor: 'var(--border-strong)',
                color: 'var(--gold-text)',
              }}
            >
              <Phone className="w-4 h-4" />
              <span>{lang === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Us'}</span>
            </a>
          </div>

          <p className="text-xs text-[var(--text-muted)] pt-2">
            {lang === 'ar'
              ? 'توصيل مجاني داخل بورت غالب · التصوير بكاميرتك الشخصية مشمول مجاناً'
              : 'Free transfers within Port Ghalib · Personal camera photography included'}
          </p>
        </div>
      </section>
    </div>
  );
}
