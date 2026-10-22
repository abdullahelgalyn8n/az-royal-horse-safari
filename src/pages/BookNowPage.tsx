import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  Users,
  Crown,
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { RIDES } from '../data/siteData';
import { calculateBookingPrice } from '../utils/bookingLogic';

export function BookNowPage() {
  const { lang, incrementBookingsCount } = useAppContext();
  const [searchParams] = useSearchParams();

  const initialRide = searchParams.get('ride') ?? 'sea-desert-tour';
  const initialTier =
    searchParams.get('tier') === 'group' ? 'group' : ('vip' as const);

  const [rideId, setRideId] = useState(
    RIDES.some((r) => r.id === initialRide) ? initialRide : 'sea-desert-tour'
  );
  const [tier, setTier] = useState<'group' | 'vip'>(initialTier);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-10-25');
  const [timeSlot, setTimeSlot] = useState('15:30 (Golden Sunset)');
  const [transferZone, setTransferZone] = useState<
    'port-ghalib' | 'marsa-alam-north' | 'marsa-alam-south'
  >('port-ghalib');
  const [hotelName, setHotelName] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const selectedRide = RIDES.find((r) => r.id === rideId) ?? RIDES[0];
  const priceCalc = calculateBookingPrice({
    rideId,
    tier,
    guests,
    transferZone,
  });

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim().length < 2) {
      setError(
        lang === 'ar'
          ? 'يرجى إدخال الاسم الكامل لإتمام الحجز.'
          : 'Please enter your full name.'
      );
      return;
    }
    if (phone.trim().length < 6) {
      setError(
        lang === 'ar'
          ? 'يرجى إدخال رقم الهاتف أو الواتساب.'
          : 'Please enter a valid WhatsApp or phone number.'
      );
      return;
    }
    setError('');
    incrementBookingsCount();
    setConfirmed(true);
  };

  return (
    <div>
      {/* Header */}
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
              ? 'حجز مباشر ومؤكد'
              : 'DIRECT STABLE RESERVATION'}
          </p>
          <h1 className="font-serif-display text-4xl sm:text-6xl font-bold text-[var(--gold-text)] gold-title-glow">
            {lang === 'ar'
              ? 'احجز مغامرتك الآن'
              : lang === 'de'
              ? 'Jetzt Reittour Buchen'
              : 'Book Your Experience'}
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            {lang === 'ar'
              ? 'توصيل مجاني من فنادق بورت غالب · الدفع نقداً عند الوصول للإسطبل بدون دفعة مقدمة'
              : 'Free Port Ghalib hotel transfers · No online prepayment required'}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {confirmed ? (
          <div
            className="max-w-2xl mx-auto rounded-2xl border p-8 sm:p-12 text-center space-y-6"
            style={{
              backgroundColor: 'var(--bg-surface)',
              borderColor: 'var(--border-strong)',
              boxShadow: 'var(--card-shadow)',
            }}
          >
            <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[var(--gold-text)]">
              {lang === 'ar'
                ? 'تم تسجيل حجزك بنجاح!'
                : 'Your Reservation Is Confirmed!'}
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-secondary)]">
              {lang === 'ar'
                ? `شكراً يا ${fullName}. تم حجز جولة (${selectedRide.title.ar}) لعدد ${guests} فرسان بتاريخ ${date} (${timeSlot}) بإجمالي ${priceCalc.totalEur}€.`
                : `Thank you, ${fullName}! We have reserved ${selectedRide.title.en} (${tier.toUpperCase()}) for ${guests} riders on ${date} at ${timeSlot}. Total: ${priceCalc.totalEur}€.`}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`https://wa.me/201063345261?text=${encodeURIComponent(
                  `Booking Confirmation: ${selectedRide.title.en} (${tier.toUpperCase()}), ${guests} riders, ${date} ${timeSlot}, Hotel: ${hotelName || 'Port Ghalib'}, Name: ${fullName}, Total: ${priceCalc.totalEur}€`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {lang === 'ar'
                    ? 'إرسال التأكيد عبر واتساب'
                    : 'Send Details via WhatsApp'}
                </span>
              </a>
              <Link
                to="/rides"
                className="px-6 py-3.5 rounded-xl text-sm font-semibold border"
                style={{
                  borderColor: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
              >
                {lang === 'ar' ? 'العودة إلى الرحلات' : 'Explore More Rides'}
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleConfirm}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            {/* Left 7 Columns: Step-by-Step Builder */}
            <div className="lg:col-span-7 space-y-8">
              {error && (
                <div
                  role="alert"
                  className="p-4 rounded-xl bg-red-500/15 border border-red-500/40 text-red-400 text-sm font-medium"
                >
                  {error}
                </div>
              )}

              {/* Step 1: Choose Ride */}
              <div
                className="rounded-2xl border p-6 space-y-4"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <h2 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
                  1.{' '}
                  {lang === 'ar'
                    ? 'اختر تجربة الفروسية'
                    : 'Choose Your Experience'}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {RIDES.map((r) => {
                    const active = r.id === rideId;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setRideId(r.id)}
                        className="p-3.5 rounded-xl border text-left transition-all flex items-center gap-3"
                        style={{
                          borderColor: active
                            ? '#DFAC42'
                            : 'var(--border-subtle)',
                          backgroundColor: active
                            ? 'var(--bg-surface-hover)'
                            : 'var(--bg-primary)',
                        }}
                      >
                        <img
                          src={r.image}
                          alt={r.title[lang]}
                          referrerPolicy="no-referrer"
                          className="w-14 h-14 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-semibold text-xs sm:text-sm text-[var(--text-primary)] truncate">
                            {r.title[lang]}
                          </p>
                          <p className="text-xs text-[var(--gold-text)] font-bold tabular-nums">
                            Group {r.groupPriceEur}€ · VIP {r.vipPriceEur}€
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Tier, Riders, Date & Pickup */}
              <div
                className="rounded-2xl border p-6 space-y-5"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <h2 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
                  2.{' '}
                  {lang === 'ar'
                    ? 'تفاصيل الموعد وعدد الأفراد'
                    : 'Tier, Riders & Date'}
                </h2>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setTier('group')}
                    className="p-4 rounded-xl border text-left flex items-center justify-between"
                    style={{
                      borderColor:
                        tier === 'group' ? '#DFAC42' : 'var(--border-subtle)',
                      backgroundColor:
                        tier === 'group'
                          ? 'var(--bg-surface-hover)'
                          : 'var(--bg-primary)',
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <Users className="w-5 h-5 text-[var(--gold-text)]" />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                          Group Tour
                        </p>
                        <p className="text-[11px] text-[var(--text-muted)]">
                          Standard shared pace
                        </p>
                      </div>
                    </div>
                    <span className="font-serif-display text-xl font-bold text-[var(--gold-text)] tabular-nums">
                      {selectedRide.groupPriceEur}€
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTier('vip')}
                    className="p-4 rounded-xl border text-left flex items-center justify-between"
                    style={{
                      borderColor:
                        tier === 'vip' ? '#DFAC42' : 'var(--border-subtle)',
                      backgroundColor:
                        tier === 'vip'
                          ? 'var(--bg-surface-hover)'
                          : 'var(--bg-primary)',
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <Crown className="w-5 h-5 text-[var(--gold-text)]" />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                          VIP Private
                        </p>
                        <p className="text-[11px] text-[var(--text-muted)]">
                          100% private guide
                        </p>
                      </div>
                    </div>
                    <span className="font-serif-display text-xl font-bold text-[var(--gold-text)] tabular-nums">
                      {selectedRide.vipPriceEur}€
                    </span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="book-guests"
                      className="block text-xs font-semibold mb-1.5 text-[var(--text-secondary)]"
                    >
                      {lang === 'ar' ? 'عدد الفرسان' : 'Number of Riders'}
                    </label>
                    <input
                      id="book-guests"
                      type="number"
                      min={1}
                      max={20}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm tabular-nums"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="book-date"
                      className="block text-xs font-semibold mb-1.5 text-[var(--text-secondary)]"
                    >
                      <Calendar className="w-3.5 h-3.5 inline mr-1 text-[var(--gold-text)]" />
                      {lang === 'ar' ? 'التاريخ' : 'Preferred Date'}
                    </label>
                    <input
                      id="book-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="book-slot"
                      className="block text-xs font-semibold mb-1.5 text-[var(--text-secondary)]"
                    >
                      <Clock className="w-3.5 h-3.5 inline mr-1 text-[var(--gold-text)]" />
                      {lang === 'ar' ? 'الفترة' : 'Time Slot'}
                    </label>
                    <select
                      id="book-slot"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
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
              </div>

              {/* Step 3: Guest Contact & Hotel Pickup */}
              <div
                className="rounded-2xl border p-6 space-y-4"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-subtle)',
                }}
              >
                <h2 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
                  3.{' '}
                  {lang === 'ar'
                    ? 'بيانات الضيف والتوصيل من الفندق'
                    : 'Guest Details & Hotel Transfer'}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="book-fullname"
                      className="block text-xs font-semibold mb-1.5 text-[var(--text-secondary)]"
                    >
                      {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      id="book-fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Anna Schmidt"
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="book-phone"
                      className="block text-xs font-semibold mb-1.5 text-[var(--text-secondary)]"
                    >
                      {lang === 'ar'
                        ? 'رقم الواتساب أو الهاتف *'
                        : 'WhatsApp / Phone *'}
                    </label>
                    <input
                      id="book-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+49 162 317 3710"
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="book-zone"
                      className="block text-xs font-semibold mb-1.5 text-[var(--text-secondary)]"
                    >
                      <MapPin className="w-3.5 h-3.5 inline mr-1 text-[var(--gold-text)]" />
                      {lang === 'ar' ? 'منطقة الفندق' : 'Hotel Zone'}
                    </label>
                    <select
                      id="book-zone"
                      value={transferZone}
                      onChange={(e) =>
                        setTransferZone(
                          e.target.value as
                            | 'port-ghalib'
                            | 'marsa-alam-north'
                            | 'marsa-alam-south'
                        )
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <option value="port-ghalib">
                        Port Ghalib Resorts (Free Transfer)
                      </option>
                      <option value="marsa-alam-north">
                        Marsa Alam North / Coraya Bay (+15€)
                      </option>
                      <option value="marsa-alam-south">
                        Marsa Alam South / Abu Dabbab (+25€)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="book-hotel"
                      className="block text-xs font-semibold mb-1.5 text-[var(--text-secondary)]"
                    >
                      {lang === 'ar'
                        ? 'اسم الفندق ورقم الغرفة'
                        : 'Hotel Name & Room Number'}
                    </label>
                    <input
                      id="book-hotel"
                      type="text"
                      value={hotelName}
                      onChange={(e) => setHotelName(e.target.value)}
                      placeholder="Palace Port Ghalib, Room 204"
                      className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-primary)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="book-notes"
                    className="block text-xs font-semibold mb-1.5 text-[var(--text-secondary)]"
                  >
                    {lang === 'ar'
                      ? 'مستوى الخبرة أو ملاحظات إضافية'
                      : 'Riding Experience Level / Special Requests'}
                  </label>
                  <textarea
                    id="book-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Beginner, intermediate, children ages, or photography preferences..."
                    className="w-full px-3.5 py-2.5 rounded-lg border text-sm"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-primary)',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Live Summary Receipt */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div
                className="rounded-2xl border p-6 sm:p-8 space-y-6"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  borderColor: 'var(--border-strong)',
                  boxShadow: 'var(--card-shadow)',
                }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={selectedRide.image}
                    alt={selectedRide.title[lang]}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold-text)]">
                      {selectedRide.durationLabel[lang]}
                    </span>
                    <h3 className="font-serif-display text-2xl font-bold text-[var(--text-primary)]">
                      {selectedRide.title[lang]}
                    </h3>
                  </div>
                </div>

                <div
                  className="border-y py-4 space-y-2.5 text-xs sm:text-sm"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Tier:</span>
                    <span className="font-semibold uppercase text-[var(--text-primary)]">
                      {tier} ({priceCalc.unitPriceEur}€ / rider)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">
                      Riders:
                    </span>
                    <span className="font-semibold tabular-nums text-[var(--text-primary)]">
                      {guests}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">
                      Date & Time:
                    </span>
                    <span className="font-semibold text-[var(--text-primary)]">
                      {date} · {timeSlot}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">
                      Hotel Transfer:
                    </span>
                    <span className="font-semibold text-emerald-500">
                      {priceCalc.transferFeeEur === 0
                        ? 'FREE (Port Ghalib)'
                        : `+${priceCalc.transferFeeEur}€`}
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[var(--text-muted)] block">
                      Total Estimated Price
                    </span>
                    <span className="text-xs text-[var(--text-secondary)]">
                      Payable at the stable (EUR / USD / EGP)
                    </span>
                  </div>
                  <span className="font-serif-display text-4xl font-bold text-[var(--gold-text)] tabular-nums">
                    {priceCalc.totalEur}€
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold transition-transform active:scale-98 shadow-lg"
                  style={{
                    backgroundColor: '#DFAC42',
                    color: '#181410',
                  }}
                >
                  {lang === 'ar'
                    ? 'تأكيد الحجز الآن'
                    : 'Complete Reservation'}
                </button>

                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] justify-center">
                  <ShieldCheck className="w-4 h-4 text-[var(--gold-text)]" />
                  <span>Free cancellation up to 12 hours before pickup</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
