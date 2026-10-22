import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { GALLERY_ITEMS } from '../data/siteData';

export function GalleryPage() {
  const { lang } = useAppContext();
  const [startIndex, setStartIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<
    (typeof GALLERY_ITEMS)[0] | null
  >(null);

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % filteredItems.length);
  };

  // Top 3 featured carousel items matching the screenshot
  const carouselTriple = [0, 1, 2].map(
    (offset) => filteredItems[(startIndex + offset) % filteredItems.length]
  );

  return (
    <div>
      {/* 1. GALLERY HEADER */}
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
              ? 'معرض الصور'
              : lang === 'de'
              ? 'GALERIE'
              : 'GALLERY'}
          </p>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[var(--gold-text)] gold-title-glow">
            {lang === 'ar'
              ? 'لحظات من السحر'
              : lang === 'de'
              ? 'Magische Momente'
              : 'Moments of Magic'}
          </h1>
        </div>
      </section>

      {/* 2. FEATURED 3-PORTRAIT CAROUSEL (Matching Screenshot) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Gallery Slide"
            className="hidden sm:flex w-11 h-11 rounded-full border items-center justify-center shrink-0 transition-colors hover:border-[var(--gold-accent)] hover:text-[var(--gold-text)]"
            style={{
              borderColor: 'var(--border-strong)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* 3 Large Vertical Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {carouselTriple.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden border bg-[#1D1812] cursor-pointer"
                style={{
                  borderColor: 'var(--border-strong)',
                  boxShadow: 'var(--card-shadow)',
                }}
                onClick={() => setLightboxItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxItem(item);
                  }}
                  aria-label={`View full size: ${item.title[lang]}`}
                  className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-[#DFAC42] hover:text-[#181410] flex items-center justify-center transition-colors"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#DFAC42]">
                    {item.location}
                  </p>
                  <h2 className="font-serif-display text-lg font-bold text-white leading-snug mt-0.5">
                    {item.title[lang]}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Gallery Slide"
            className="hidden sm:flex w-11 h-11 rounded-full border items-center justify-center shrink-0 transition-colors hover:border-[var(--gold-accent)] hover:text-[var(--gold-text)]"
            style={{
              borderColor: 'var(--border-strong)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-primary)',
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Dots Indicator */}
        <div className="flex items-center justify-center gap-2">
          {filteredItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setStartIndex(idx)}
              aria-label={`Go to gallery image ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${
                startIndex % filteredItems.length === idx
                  ? 'w-7 bg-[#DFAC42]'
                  : 'w-2 bg-[var(--text-muted)] opacity-40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 3. FULL FILTERABLE GALLERY COLLECTION */}
      <section
        className="py-16 border-t"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-subtle)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              {lang === 'ar'
                ? 'جميع لقطات البحر والصحراء'
                : 'Complete Red Sea & Desert Portfolio'}
            </h2>

            <div
              className="flex items-center gap-1.5 p-1 rounded-xl border"
              style={{
                backgroundColor: 'var(--bg-surface)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              {[
                { id: 'all', label: lang === 'ar' ? 'الكل' : 'All Photos' },
                { id: 'sea', label: lang === 'ar' ? 'البحر' : 'Red Sea' },
                { id: 'desert', label: lang === 'ar' ? 'الصحراء' : 'Desert' },
                {
                  id: 'vip-photo',
                  label: lang === 'ar' ? 'بورتريه' : 'Portraits',
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(tab.id);
                    setStartIndex(0);
                  }}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors"
                  style={{
                    backgroundColor:
                      selectedCategory === tab.id ? '#DFAC42' : 'transparent',
                    color:
                      selectedCategory === tab.id
                        ? '#181410'
                        : 'var(--text-secondary)',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxItem(item)}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border text-left focus:outline-none"
                style={{
                  borderColor: 'var(--border-subtle)',
                  backgroundColor: 'var(--bg-surface)',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-wider text-[#DFAC42] font-semibold">
                    {item.location}
                  </span>
                  <span className="font-serif-display text-sm font-bold text-white">
                    {item.title[lang]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden border border-[#DFAC42]/40 bg-[#181410]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Close Lightbox"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 text-white hover:bg-[#DFAC42] hover:text-[#181410] flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxItem.image}
              alt={lightboxItem.title[lang]}
              referrerPolicy="no-referrer"
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-[#DFAC42] font-semibold uppercase tracking-wider">
                  {lightboxItem.location}
                </p>
                <h3 className="font-serif-display text-xl font-bold text-white">
                  {lightboxItem.title[lang]}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
