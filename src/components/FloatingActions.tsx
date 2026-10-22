import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export function FloatingActions() {
  const { openBookingModal, lang } = useAppContext();

  return (
    <div className="fixed bottom-4 right-4 sm:right-auto sm:left-5 z-30 flex flex-col gap-2.5">
      {/* Top Gold Quick-Message / Booking Trigger */}
      <button
        type="button"
        onClick={() => openBookingModal()}
        aria-label={lang === 'ar' ? 'حجز سريع' : 'Quick Booking & Inquiry'}
        title={lang === 'ar' ? 'حجز سريع' : 'Quick Booking & Inquiry'}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{
          backgroundColor: '#DFAC42',
          color: '#181410',
        }}
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Bottom Green WhatsApp Direct Contact */}
      <a
        href="https://wa.me/201063345261"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Pilot Stable Egypt"
        title="WhatsApp +20 106 334 5261"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
}
