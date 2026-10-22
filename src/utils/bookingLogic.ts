import { RIDES, RideCategory, RidePackage } from '../data/siteData';

export interface BookingCalculationInput {
  rideId: string;
  tier: 'group' | 'vip';
  guests: number;
  transferZone?: 'port-ghalib' | 'marsa-alam-north' | 'marsa-alam-south';
}

export interface BookingCalculationResult {
  unitPriceEur: number;
  subtotalEur: number;
  transferFeeEur: number;
  totalEur: number;
  rideTitleEn: string;
}

export function filterRidesByCategory(
  rides: RidePackage[],
  category: RideCategory,
  searchQuery = ''
): RidePackage[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return rides.filter((ride) => {
    const matchesCategory = category === 'all' || ride.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const haystacks = [
      ride.title.en,
      ride.title.ar,
      ride.title.de,
      ride.subtitle.en,
      ride.description.en,
      ...ride.highlights.en,
    ].map((s) => s.toLowerCase());

    return haystacks.some((text) => text.includes(normalizedQuery));
  });
}

export function calculateBookingPrice(
  input: BookingCalculationInput
): BookingCalculationResult {
  const ride = RIDES.find((r) => r.id === input.rideId) ?? RIDES[0];
  const validGuests = Math.max(1, Math.min(20, Math.floor(input.guests || 1)));
  const unitPriceEur =
    input.tier === 'vip' ? ride.vipPriceEur : ride.groupPriceEur;
  const subtotalEur = unitPriceEur * validGuests;

  // Port Ghalib transfer is always free; outer Marsa Alam zones have optional modest transfer supplement
  let transferFeeEur = 0;
  if (input.transferZone === 'marsa-alam-north') {
    transferFeeEur = 15;
  } else if (input.transferZone === 'marsa-alam-south') {
    transferFeeEur = 25;
  }

  return {
    unitPriceEur,
    subtotalEur,
    transferFeeEur,
    totalEur: subtotalEur + transferFeeEur,
    rideTitleEn: ride.title.en,
  };
}

export interface ContactValidationInput {
  name: string;
  email: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export function validateContactForm(
  input: ContactValidationInput
): ValidationResult {
  const errors: ValidationResult['errors'] = {};
  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedMessage = input.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please enter a message of at least 10 characters.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export interface ContrastPair {
  name: string;
  foregroundHex: string;
  backgroundHex: string;
}

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
}

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getContrastRatio(hex1: string, hex2: string): number {
  const l1 = relativeLuminance(hex1);
  const l2 = relativeLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return Number(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}
