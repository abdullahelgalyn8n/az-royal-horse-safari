import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateBookingPrice,
  filterRidesByCategory,
  getContrastRatio,
  validateContactForm,
} from './bookingLogic';
import { RIDES } from '../data/siteData';

test('filterRidesByCategory returns all rides when category is all', () => {
  const all = filterRidesByCategory(RIDES, 'all');
  assert.equal(all.length, RIDES.length);
});

test('filterRidesByCategory filters sea and cultural rides accurately', () => {
  const seaRides = filterRidesByCategory(RIDES, 'sea');
  assert.equal(
    seaRides.every((r) => r.category === 'sea'),
    true
  );
  assert.equal(seaRides.length >= 2, true);

  const searchSwimming = filterRidesByCategory(RIDES, 'all', 'Swimming');
  assert.equal(searchSwimming.length, 1);
  assert.equal(searchSwimming[0].id, 'swimming-with-horses');
});

test('calculateBookingPrice computes Group and VIP totals accurately', () => {
  // Sea & Desert Tour: Group 45€, VIP 60€
  const groupCalc = calculateBookingPrice({
    rideId: 'sea-desert-tour',
    tier: 'group',
    guests: 3,
    transferZone: 'port-ghalib',
  });
  assert.equal(groupCalc.unitPriceEur, 45);
  assert.equal(groupCalc.subtotalEur, 135);
  assert.equal(groupCalc.transferFeeEur, 0);
  assert.equal(groupCalc.totalEur, 135);

  // Swimming with Horses VIP: 90€ * 2 + 15€ Marsa Alam North transfer = 195€
  const vipCalc = calculateBookingPrice({
    rideId: 'swimming-with-horses',
    tier: 'vip',
    guests: 2,
    transferZone: 'marsa-alam-north',
  });
  assert.equal(vipCalc.unitPriceEur, 90);
  assert.equal(vipCalc.subtotalEur, 180);
  assert.equal(vipCalc.transferFeeEur, 15);
  assert.equal(vipCalc.totalEur, 195);
});

test('validateContactForm enforces name, email, and message rules', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    message: 'short',
  });
  assert.equal(invalid.valid, false);
  assert.equal(Boolean(invalid.errors.name), true);
  assert.equal(Boolean(invalid.errors.email), true);
  assert.equal(Boolean(invalid.errors.message), true);

  const valid = validateContactForm({
    name: 'Ahmed Rider',
    email: 'rider@example.com',
    message: 'We would love to book a sunset ride for 4 people in Port Ghalib.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('Light mode and Dark mode palettes pass WCAG AA contrast (> 4.5:1)', () => {
  // Light Mode: #1C1610 primary text on #FAF7F2 warm ivory canvas
  const lightPrimaryRatio = getContrastRatio('#1C1610', '#FAF7F2');
  assert.equal(lightPrimaryRatio >= 12, true);

  // Light Mode: #4A3E30 secondary text on #FFFFFF card surface
  const lightSecondaryRatio = getContrastRatio('#4A3E30', '#FFFFFF');
  assert.equal(lightSecondaryRatio >= 8, true);

  // Light Mode: #94660E antique gold text on #FAF7F2 warm ivory canvas
  const lightGoldRatio = getContrastRatio('#94660E', '#FAF7F2');
  assert.equal(lightGoldRatio >= 4.5, true);

  // Dark Mode: #F7F3EB primary text on #181410 obsidian canvas
  const darkPrimaryRatio = getContrastRatio('#F7F3EB', '#181410');
  assert.equal(darkPrimaryRatio >= 14, true);

  // Dark Mode: #DFAC42 gold text on #181410 obsidian canvas
  const darkGoldRatio = getContrastRatio('#DFAC42', '#181410');
  assert.equal(darkGoldRatio >= 7, true);
});
