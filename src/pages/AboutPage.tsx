import React, { useState } from 'react';
import {
  Eye,
  Target,
  Shield,
  Heart,
  Sparkles,
  Award,
  Leaf,
  Users,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  Pause,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { CATALOGUE_PAGES } from '../data/siteData';

const CORE_VALUES = [
  {
    id: 'safety-first',
    icon: Shield,
    title: {
      en: 'Safety First',
      ar: 'السلامة أولاً',
      de: 'Sicherheit Zuerst',
    },
    desc: {
      en: 'Full supervision from expert trainers ensures your safety throughout every ride.',
      ar: 'إشراف كامل من مدربين خبراء يضمن سلامتك طوال فترة الجولة.',
      de: 'Volle Aufsicht durch erfahrene Trainer garantiert Ihre Sicherheit.',
    },
  },
  {
    id: 'customer-happiness',
    icon: Heart,
    title: {
      en: 'Customer Happiness',
      ar: 'سعادة الضيوف',
      de: 'Kundenzufriedenheit',
    },
    desc: {
      en: 'We constantly strive to exceed your expectations and create joyful memories.',
      ar: 'نسعى باستمرار لتجاوز توقعاتك وصناعة ذكريات مبهجة لا تُنسى.',
      de: 'Wir streben danach, Ihre Erwartungen zu übertreffen.',
    },
  },
  {
    id: 'authentic-experiences',
    icon: Sparkles,
    title: {
      en: 'Authentic Experiences',
      ar: 'تجارب أصيلة',
      de: 'Authentische Erlebnisse',
    },
    desc: {
      en: 'Moments that reflect local culture in both the sea and desert settings.',
      ar: 'لحظات تعكس الثقافة المحلية الأصيلة في بيئتي البحر والصحراء.',
      de: 'Momente, die die lokale Kultur am Meer und in der Wüste widerspiegeln.',
    },
  },
  {
    id: 'professionalism',
    icon: Award,
    title: {
      en: 'Professionalism',
      ar: 'الاحترافية العالية',
      de: 'Professionalität',
    },
    desc: {
      en: 'High-quality equipment and well-trained animals for the best experience.',
      ar: 'معدات عالية الجودة وخيول مدربة بعناية لتقديم أفضل تجربة فروسية.',
      de: 'Hochwertige Ausrüstung und bestens ausgebildete Pferde.',
    },
  },
  {
    id: 'respect-for-nature',
    icon: Leaf,
    title: {
      en: 'Respect for Nature',
      ar: 'احترام الطبيعة',
      de: 'Respekt vor der Natur',
    },
    desc: {
      en: 'Promoting eco-friendly tourism and sustainable practices.',
      ar: 'تعزيز السياحة البيئية الصديقة للطبيعة والممارسات المستدامة.',
      de: 'Förderung von umweltfreundlichem Tourismus und Nachhaltigkeit.',
    },
  },
  {
    id: 'family-friendly',
    icon: Users,
    title: {
      en: 'Family Friendly',
      ar: 'مناسب لجميع أفراد العائلة',
      de: 'Familienfreundlich',
    },
    desc: {
      en: 'Experiences suitable for all ages and skill levels.',
      ar: 'تجارب مصممة لتناسب جميع الأعمار ومستويات الخبرة من المبتدئين للمحترفين.',
      de: 'Erlebnisse geeignet für alle Altersgruppen und Erfahrungsstufen.',
    },
  },
];

export function AboutPage() {
  const { lang } = useAppContext();
  const [catPageIndex, setCatPageIndex] = useState(0);
  const [zoomPercent, setZoomPercent] = useState(80);
  const [fullScreenCatalogue, setFullScreenCatalogue] = useState(false);
  const [actionReelPlaying, setActionReelPlaying] = useState(false);

  const currentCatPage = CATALOGUE_PAGES[catPageIndex];

  const handlePrevCat = () => {
    setCatPageIndex((prev) =>
      prev === 0 ? CATALOGUE_PAGES.length - 1 : prev - 1
    );
  };

  const handleNextCat = () => {
    setCatPageIndex((prev) => (prev + 1) % CATALOGUE_PAGES.length);
  };

  const handleZoomOut = () => {
    setZoomPercent((z) => Math.max(60, z - 10));
  };

  const handleZoomIn = () => {
    setZoomPercent((z) => Math.min(110, z + 10));
  };

  return (
    <div>
      {/* 1. ABOUT HERO BANNER */}
      <section className="relative h-[380px] sm:h-[430px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#181410]">
          <img
            src="/assets/extracted/about-hero.jpg"
            alt="About Pilot Stable Egypt"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#181410]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#DFAC42]">
            {lang === 'ar'
              ? 'اكتشف رحلتنا'
              : lang === 'de'
              ? 'ENTDECKEN SIE UNSERE REISE'
              : 'DISCOVER OUR JOURNEY'}
          </p>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-white">
            {lang === 'ar'
              ? 'عن إسطبل بايلوت'
              : lang === 'de'
              ? 'Über Pilot Stable'
              : 'About Pilot Stable'}
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-xl mx-auto">
            {lang === 'ar'
              ? 'حيث يلتقي الشغف بالصحراء، لنصنع تجارب فروسية لا تُنسى على ساحل البحر الأحمر'
              : 'Where passion meets the desert, creating unforgettable equestrian experiences'}
          </p>
        </div>
      </section>

      {/* 2. OUR STORY + INTERACTIVE 10-PAGE CATALOGUE VIEWER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: A Dream Born from Passion */}
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-text)]">
              {lang === 'ar' ? 'قصتنا' : 'OUR STORY'}
            </p>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'حلم وُلد من رحم الشغف'
                : lang === 'de'
                ? 'Ein Traum aus Leidenschaft geboren'
                : 'A Dream Born from Passion'}
            </h2>
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
              <p>
                {lang === 'ar'
                  ? 'بدأت رحلتنا في عام 2017 عندما اكتشف المؤسس أحمد شغفه العميق بالخيول. ما بدأ كارتباط شخصي بهذه الكائنات النبيلة سرعان ما تطور إلى رؤية طموحة.'
                  : 'Our journey began in 2017 when founder Ahmed discovered his profound passion for horses. What started as a personal connection with these majestic animals soon evolved into an ambitious vision.'}
              </p>
              <p>
                {lang === 'ar'
                  ? 'في عام 2022، وبحصانين وجمل واحد فقط، اتخذ أحمد القرار الجريء بالانتقال إلى مرسى علم على ساحل البحر الأحمر الخلاب في مصر. كان حلمه واضحاً: إنشاء مكان يمكن للناس فيه تجربة سحر الخيول في واحدة من أجمل البيئات الطبيعية في العالم.'
                  : "In 2022, with just two horses and one camel, Ahmed made the bold decision to move to Marsa Alam on Egypt's stunning Red Sea coast. His dream was clear: to create a place where people could experience the magic of horses in one of the world's most beautiful natural settings."}
              </p>
              <p>
                {lang === 'ar'
                  ? 'اليوم، تحول هذا الحلم إلى مشروع مزدهر يركز على الاحترام المتبادل بين الإنسان والخيل. نحن نقدم تجارب صحراوية وبحرية أصيلة تربط الناس بالطبيعة والثقافة المحلية والرابط الأبدي بين الفارس والجواد.'
                  : 'Today, that dream has transformed into a thriving project focused on mutual respect between humans and horses. We offer authentic desert and sea experiences that connect people with nature, local culture, and the timeless bond between horse and rider.'}
              </p>
            </div>
          </div>

          {/* Right: Interactive 10-Page Catalogue Widget */}
          <div className="lg:col-span-6">
            <div
              className={`rounded-2xl border p-5 transition-all ${
                fullScreenCatalogue
                  ? 'fixed inset-6 z-50 flex flex-col justify-between overflow-y-auto'
                  : ''
              }`}
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-strong)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              {/* Top Bar of Catalogue */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-[var(--gold-text)]">
                  {lang === 'ar' ? 'كتالوج الإسطبل التفاعلي' : 'Catalogue'}
                </span>
                <button
                  type="button"
                  onClick={() => setFullScreenCatalogue((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--gold-text)] hover:underline"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>
                    {fullScreenCatalogue
                      ? lang === 'ar'
                        ? 'إغلاق ملء الشاشة'
                        : 'Exit Full Screen'
                      : lang === 'ar'
                      ? 'ملء الشاشة'
                      : 'Full Screen'}
                  </span>
                </button>
              </div>

              {/* Catalogue Slide Display */}
              <div className="relative rounded-xl overflow-hidden border bg-[#120F0C] border-white/10">
                {catPageIndex === 0 ? (
                  <img
                    src="/assets/extracted/catalogue-cover.jpg"
                    alt={currentCatPage.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-full h-72 sm:h-80 object-cover transition-transform duration-300"
                    style={{ transform: `scale(${zoomPercent / 80})` }}
                  />
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-12 min-h-[290px] sm:min-h-[320px]">
                    <div className="sm:col-span-5 relative">
                      <img
                        src={currentCatPage.image}
                        alt={currentCatPage.title[lang]}
                        referrerPolicy="no-referrer"
                        className="w-full h-48 sm:h-full object-cover"
                      />
                    </div>
                    <div className="sm:col-span-7 p-6 flex flex-col justify-between bg-[#1D1812] text-stone-100">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] text-[#DFAC42] uppercase tracking-wider font-semibold">
                          <span>Pilot Stable Egypt</span>
                          <span>{currentCatPage.highlightStat}</span>
                        </div>
                        <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white leading-snug">
                          {currentCatPage.title[lang]}
                        </h3>
                        <p className="text-xs font-medium text-[#DFAC42]">
                          {currentCatPage.subtitle[lang]}
                        </p>
                        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
                          {currentCatPage.body[lang]}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400">
                        <span>Port Ghalib · Marsa Alam</span>
                        <span>Page {currentCatPage.pageNumber} of 10</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Catalogue Controls (Zoom & Page 1 / 10 switcher) */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleZoomOut}
                    aria-label="Zoom Out Catalogue"
                    className="p-2 rounded-lg border hover:border-[var(--gold-accent)] transition-colors"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-mono tabular-nums text-[var(--text-secondary)] px-1">
                    {zoomPercent}%
                  </span>
                  <button
                    type="button"
                    onClick={handleZoomIn}
                    aria-label="Zoom In Catalogue"
                    className="p-2 rounded-lg border hover:border-[var(--gold-accent)] transition-colors"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevCat}
                    aria-label="Previous Catalogue Page"
                    className="p-2 rounded-lg border hover:border-[var(--gold-accent)] transition-colors"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span
                    className="px-3 py-1 rounded-md text-xs font-semibold tabular-nums border"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {catPageIndex + 1} / {CATALOGUE_PAGES.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNextCat}
                    aria-label="Next Catalogue Page"
                    className="p-2 rounded-lg border hover:border-[var(--gold-accent)] transition-colors"
                    style={{
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VISION & OUR MISSION */}
      <section
        className="py-16 border-y"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div
            className="rounded-2xl border p-8 space-y-4"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#DFAC42]/15 text-[var(--gold-text)] border border-[#DFAC42]/30">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'رؤيتنا'
                : lang === 'de'
                ? 'Unsere Vision'
                : 'Our Vision'}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {lang === 'ar'
                ? 'أن نصبح المزود الرائد للمغامرات الخارجية وتجارب ركوب الخيل والجمال الفريدة في منطقة البحر الأحمر، والمعروفين بالتزامنا بالتميز والسلامة والارتباط الأصيل بالطبيعة.'
                : 'To become the leading provider of outdoor adventures and unique horse and camel riding experiences in the Red Sea region, known for our commitment to excellence, safety, and authentic connections with nature.'}
            </p>
          </div>

          {/* Mission Card */}
          <div
            className="rounded-2xl border p-8 space-y-4"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-subtle)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-[#DFAC42]/15 text-[var(--gold-text)] border border-[#DFAC42]/30">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'رسالتنا'
                : lang === 'de'
                ? 'Unsere Mission'
                : 'Our Mission'}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {lang === 'ar'
                ? 'صناعة تجارب ركوب خيل لا تُنسى تربط الناس بالطبيعة والثقافة مع ضمان أعلى معايير السلامة ورفاهية الحيوان والخدمة الاستثنائية لكل ضيف ينضم إلى مغامراتنا.'
                : 'Creating unforgettable riding experiences that connect people with nature and culture while ensuring the highest standards of safety, animal welfare, and exceptional service for every guest who joins our adventures.'}
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US — OUR CORE VALUES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-text)]">
            {lang === 'ar' ? 'لماذا تختارنا' : 'WHY CHOOSE US'}
          </p>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[var(--gold-text)] gold-title-glow">
            {lang === 'ar'
              ? 'قيمنا الأساسية'
              : lang === 'de'
              ? 'Unsere Grundwerte'
              : 'Our Core Values'}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            {lang === 'ar'
              ? 'تسترشد كل تجربة في إسطبل بايلوت بالتزامنا بالتميز والسلامة وصناعة روابط حقيقية مع الطبيعة.'
              : 'Every experience at Pilot Stable is guided by our commitment to excellence, safety, and creating authentic connections with nature.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_VALUES.map((val) => {
            const IconComponent = val.icon;
            return (
              <div
                key={val.id}
                className="rounded-2xl border p-6 space-y-3 transition-transform hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#DFAC42]/15 text-[var(--gold-text)] border border-[#DFAC42]/30">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h3 className="font-serif-display text-xl font-bold text-[var(--text-primary)]">
                  {val.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                  {val.desc[lang]}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. EXPERIENCE THE MAGIC — SEE US IN ACTION */}
      <section
        className="py-20 border-t"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-center">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold-text)]">
              {lang === 'ar' ? 'عش السحر' : 'EXPERIENCE THE MAGIC'}
            </p>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'شاهدنا على أرض الواقع'
                : lang === 'de'
                ? 'Erleben Sie Uns in Aktion'
                : 'See Us in Action'}
            </h2>
          </div>

          {/* Interactive Sunset Caravan Reel Showcase */}
          <div
            className="relative rounded-2xl overflow-hidden border aspect-video bg-[#120F0C] group"
            style={{
              borderColor: 'var(--border-strong)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <img
              src={
                actionReelPlaying
                  ? '/assets/extracted/story-sunset.jpg'
                  : '/assets/extracted/video-poster.jpg'
              }
              alt="Pilot Stable Egypt Caravan in Action"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover transition-transform duration-[4000ms] ${
                actionReelPlaying ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            <button
              type="button"
              onClick={() => setActionReelPlaying((p) => !p)}
              aria-label={
                actionReelPlaying ? 'Pause Showcase Reel' : 'Play Showcase Reel'
              }
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#DFAC42] text-[#181410] flex items-center justify-center shadow-2xl transition-transform hover:scale-110"
            >
              {actionReelPlaying ? (
                <Pause className="w-7 h-7" />
              ) : (
                <Play className="w-7 h-7 ml-0.5" />
              )}
            </button>

            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-white/90 font-mono">
              <span>
                {actionReelPlaying ? '0:08 / 0:17 · Playing Sunset Caravan' : '0:00 / 0:17'}
              </span>
              <span>Marsa Alam · Red Sea Coast</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
