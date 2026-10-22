import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, Users, Crown, Calendar, MapPin, MessageCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { RIDES } from '../data/siteData';
import { calculateBookingPrice } from '../utils/bookingLogic';

export function BookingModal() {
  const {
    bookingModalOpen,
    closeBookingModal,
    bookingPrefill,
    lang,
    incrementBookingsCount,
  } = useAppContext();

  const [rideId, setRideId] = useState(
    bookingPrefill.rideId ?? 'sea-desert-tour'
  );
  const [tier, setTier] = useState<'group' | 'vip'>(
    bookingPrefill.tier ?? 'vip'
  );
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-10-25');
  const [timeSlot, setTimeSlot] = useState('15:30 (Golden Sunset)');
  const [hotelName, setHotelName] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [transferZone, setTransferZone] = useState<
    'port-ghalib' | 'marsa-alam-north' | 'marsa-alam-south'
  >('port-ghalib');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (bookingModalOpen) {
      if (bookingPrefill.rideId) setRideId(bookingPrefill.rideId);
      if (bookingPrefill.tier) setTier(bookingPrefill.tier);
      setSubmitted(false);
      setErrorMsg('');
    }
  }, [bookingModalOpen, bookingPrefill]);

  if (!bookingModalOpen) return null;

  const selectedRide = RIDES.find((r) => r.id === rideId) ?? RIDES[0];
  const priceSummary = calculateBookingPrice({
    rideId,
    tier,
    guests,
    transferZone,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim().length < 2) {
      setErrorMsg(
        lang === 'ar'
          ? 'يرجى إدخال الاسم الكامل لإتمام الحجز.'
          : 'Please enter your full name to confirm the reservation.'
      );
      return;
    }
    if (guestPhone.trim().length < 6) {
      setErrorMsg(
        lang === 'ar'
          ? 'يرجى إدخال رقم الهاتف أو واتساب للتواصل.'
          : 'Please enter a valid phone or WhatsApp number.'
      );
      return;
    }
    setErrorMsg('');
    incrementBookingsCount();
    setSubmitted(true);
  };

  const whatsappText = encodeURIComponent(
    `Hello Pilot Stable Egypt! I would like to book:\n- Ride: ${selectedRide.title.en}\n- Tier: ${tier.toUpperCase()}\n- Guests: ${guests}\n- Date: ${date} (${timeSlot})\n- Hotel: ${hotelName || 'Port Ghalib'}\n- Name: ${guestName}\n- Total: ${priceSummary.totalEur}€`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
    >
      <div
        className="relative w-full max-w-xl rounded-2xl border p-6 sm:p-8 my-8 transition-all"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderColor: 'var(--border-strong)',
          color: 'var(--text-primary)',
        }}
      >
        <button
          type="button"
          onClick={closeBookingModal}
          aria-label="Close Booking Modal"
          className="absolute top-4 right-4 p-2 rounded-lg border hover:border-[var(--gold-accent)] transition-colors"
          style={{
            borderColor: 'var(--border-subtle)',
            color: 'var(--text-secondary)',
          }}
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3
              id="booking-modal-title"
              className="font-serif-display text-3xl font-bold text-[var(--gold-text)]"
            >
              {lang === 'ar'
                ? 'تم تأكيد طلب الحجز بنجاح!'
                : 'Reservation Request Confirmed!'}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              {lang === 'ar'
                ? `شكراً لك يا ${guestName}. تم تسجيل حجزك لرحلة (${selectedRide.title.ar}) لعدد ${guests} أفراد بإجمالي ${priceSummary.totalEur}€.`
                : `Thank you, ${guestName}. Your booking request for ${selectedRide.title.en} (${tier.toUpperCase()}, ${guests} guests — ${priceSummary.totalEur}€) has been registered.`}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/201063345261?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {lang === 'ar'
                    ? 'إرسال تفاصيل الحجز عبر واتساب'
                    : 'Send Instant WhatsApp Confirmation'}
                </span>
              </a>
              <button
                type="button"
                onClick={closeBookingModal}
                className="px-5 py-3 rounded-lg text-sm font-semibold border"
                style={{
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
              >
                {lang === 'ar' ? 'إغلاق' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--gold-text)]">
                {lang === 'ar'
                  ? 'حجز سريع ومباشر'
                  : 'INSTANT RIDE RESERVATION'}
              </span>
              <h2
                id="booking-modal-title"
                className="font-serif-display text-2xl sm:text-3xl font-bold mt-1"
              >
                {selectedRide.title[lang]}
              </h2>
            </div>

            {errorMsg && (
              <div
                role="alert"
                className="p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-red-400 text-xs font-medium"
              >
                {errorMsg}
              </div>
            )}

            {/* Select Ride & Tier */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="modal-ride-select"
                  className="block text-xs font-medium mb-1.5 text-[var(--text-secondary)]"
                >
                  {lang === 'ar' ? 'اختر الجولة' : 'Select Experience'}
                </label>
                <select
                  id="modal-ride-select"
                  value={rideId}
                  onChange={(e) => setRideId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {RIDES.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.title[lang]} ({r.groupPriceEur}€ / {r.vipPriceEur}€)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-xs font-medium mb-1.5 text-[var(--text-secondary)]">
                  {lang === 'ar' ? 'نوع الجولة' : 'Experience Tier'}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTier('group')}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border text-xs font-semibold transition-colors"
                    style={{
                      borderColor:
                        tier === 'group'
                          ? 'var(--gold-accent)'
                          : 'var(--border-subtle)',
                      backgroundColor:
                        tier === 'group'
                          ? 'var(--bg-surface-hover)'
                          : 'var(--bg-primary)',
                      color:
                        tier === 'group'
                          ? 'var(--gold-text)'
                          : 'var(--text-secondary)',
                    }}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Group ({selectedRide.groupPriceEur}€)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier('vip')}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border text-xs font-semibold transition-colors"
                    style={{
                      borderColor:
                        tier === 'vip' ? '#DFAC42' : 'var(--border-subtle)',
                      backgroundColor:
                        tier === 'vip' ? '#DFAC42' : 'var(--bg-primary)',
                      color:
                        tier === 'vip' ? '#181410' : 'var(--text-secondary)',
                    }}
                  >
                    <Crown className="w-3.5 h-3.5" />
                    <span>VIP ({selectedRide.vipPriceEur}€)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Guests, Date, Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label
                  htmlFor="modal-guests"
                  className="block text-xs font-medium mb-1 text-[var(--text-secondary)]"
                >
                  {lang === 'ar' ? 'عدد الأفراد' : 'Riders'}
                </label>
                <input
                  id="modal-guests"
                  type="number"
                  min={1}
                  max={15}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg border text-sm tabular-nums"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="modal-date"
                  className="block text-xs font-medium mb-1 text-[var(--text-secondary)]"
                >
                  <Calendar className="w-3.5 h-3.5 inline mr-1 text-[var(--gold-text)]" />
                  {lang === 'ar' ? 'التاريخ' : 'Preferred Date'}
                </label>
                <input
                  id="modal-date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="modal-time"
                  className="block text-xs font-medium mb-1 text-[var(--text-secondary)]"
                >
                  {lang === 'ar' ? 'التوقيت' : 'Time Slot'}
                </label>
                <select
                  id="modal-time"
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <option value="05:30 (Sunrise)">05:30 (Sunrise)</option>
                  <option value="09:00 (Morning)">09:00 (Morning)</option>
                  <option value="15:30 (Golden Sunset)">
                    15:30 (Golden Sunset)
                  </option>
                </select>
              </div>
            </div>

            {/* Guest Info & Hotel Transfer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-name"
                  className="block text-xs font-medium mb-1 text-[var(--text-secondary)]"
                >
                  {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                </label>
                <input
                  id="modal-name"
                  type="text"
                  placeholder="e.g. Lukas Müller"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="modal-phone"
                  className="block text-xs font-medium mb-1 text-[var(--text-secondary)]"
                >
                  {lang === 'ar'
                    ? 'رقم الواتساب / الهاتف *'
                    : 'WhatsApp / Phone *'}
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  placeholder="+49 162 317 3710"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="modal-zone"
                  className="block text-xs font-medium mb-1 text-[var(--text-secondary)]"
                >
                  <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--gold-text)]" />
                  {lang === 'ar' ? 'منطقة التوصيل' : 'Pickup Zone'}
                </label>
                <select
                  id="modal-zone"
                  value={transferZone}
                  onChange={(e) =>
                    setTransferZone(
                      e.target.value as
                        | 'port-ghalib'
                        | 'marsa-alam-north'
                        | 'marsa-alam-south'
                    )
                  }
                  className="w-full px-3 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <option value="port-ghalib">
                    Port Ghalib Hotels (Free Transfer)
                  </option>
                  <option value="marsa-alam-north">
                    Marsa Alam North / Coraya (+15€)
                  </option>
                  <option value="marsa-alam-south">
                    Marsa Alam South / Abu Dabbab (+25€)
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="modal-hotel"
                  className="block text-xs font-medium mb-1 text-[var(--text-secondary)]"
                >
                  {lang === 'ar'
                    ? 'اسم الفندق ورقم الغرفة'
                    : 'Hotel & Room Number'}
                </label>
                <input
                  id="modal-hotel"
                  type="text"
                  placeholder="e.g. Steigenberger Coraya, Room 312"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg border text-sm"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border-subtle)',
                    color: 'var(--text-primary)',
                  }}
                />
              </div>
            </div>

            {/* Live Price Breakdown */}
            <div
              className="p-4 rounded-xl border flex items-center justify-between"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-subtle)',
              }}
            >
              <div className="text-xs space-y-0.5 text-[var(--text-secondary)]">
                <p className="font-semibold text-[var(--text-primary)]">
                  {guests} × {priceSummary.unitPriceEur}€ ({tier.toUpperCase()})
                  {priceSummary.transferFeeEur > 0
                    ? ` + ${priceSummary.transferFeeEur}€ Transfer`
                    : ' · Free Port Ghalib Transfer'}
                </p>
                <p>No prepayment required — pay at the stable in EUR/USD/EGP</p>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase text-[var(--text-muted)] block">
                  Total
                </span>
                <span className="font-serif-display text-2xl font-bold text-[var(--gold-text)] tabular-nums">
                  {priceSummary.totalEur}€
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-bold transition-transform active:scale-98"
              style={{
                backgroundColor: '#DFAC42',
                color: '#181410',
              }}
            >
              {lang === 'ar'
                ? 'تأكيد طلب الحجز الآن'
                : 'Confirm Booking Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
