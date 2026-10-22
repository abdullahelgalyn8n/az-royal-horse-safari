export type Language = 'en' | 'ar' | 'de';
export type ThemeMode = 'dark' | 'light';
export type RideCategory = 'all' | 'sea' | 'desert' | 'cultural' | 'vip-photo';

export interface RidePackage {
  id: string;
  slug: string;
  category: Exclude<RideCategory, 'all'>;
  durationHours: number;
  durationLabel: {
    en: string;
    ar: string;
    de: string;
  };
  groupPriceEur: number;
  vipPriceEur: number;
  skillLevel: {
    en: string;
    ar: string;
    de: string;
  };
  bestTime: {
    en: string;
    ar: string;
    de: string;
  };
  image: string;
  galleryImages: string[];
  featured: boolean;
  title: {
    en: string;
    ar: string;
    de: string;
  };
  subtitle: {
    en: string;
    ar: string;
    de: string;
  };
  description: {
    en: string;
    ar: string;
    de: string;
  };
  highlights: {
    en: string[];
    ar: string[];
    de: string[];
  };
  included: {
    en: string[];
    ar: string[];
    de: string[];
  };
  itinerary: {
    time: string;
    title: { en: string; ar: string; de: string };
    detail: { en: string; ar: string; de: string };
  }[];
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: {
    en: string;
    ar: string;
    de: string;
  };
  image: string;
  languages: string[];
  experienceYears: number;
  specialty: {
    en: string;
    ar: string;
    de: string;
  };
  bio: {
    en: string;
    ar: string;
    de: string;
  };
  phone?: string;
}

export interface SalesContact {
  id: string;
  name: string;
  phone: string;
  whatsappUrl: string;
  languages: {
    en: string;
    ar: string;
    de: string;
  };
  role: {
    en: string;
    ar: string;
    de: string;
  };
}

export interface CataloguePage {
  pageNumber: number;
  title: { en: string; ar: string; de: string };
  subtitle: { en: string; ar: string; de: string };
  body: { en: string; ar: string; de: string };
  image: string;
  highlightStat?: string;
}

export const RIDES: RidePackage[] = [
  {
    id: 'sea-desert-tour',
    slug: 'sea-and-desert-tour',
    category: 'sea',
    durationHours: 2,
    durationLabel: {
      en: '2 Hours',
      ar: 'ساعتان',
      de: '2 Stunden',
    },
    groupPriceEur: 45,
    vipPriceEur: 60,
    skillLevel: {
      en: 'All Levels (Beginner to Advanced)',
      ar: 'جميع المستويات (مبتدئ إلى متقدم)',
      de: 'Alle Niveaus (Anfänger bis Fortgeschrittene)',
    },
    bestTime: {
      en: 'Morning (08:30) or Sunset (15:30)',
      ar: 'صباحاً (08:30) أو الغروب (15:30)',
      de: 'Morgens (08:30) oder Sonnenuntergang (15:30)',
    },
    image: '/assets/extracted/ride-sea-desert.jpg',
    galleryImages: [
      '/assets/extracted/ride-sea-desert.jpg',
      '/assets/extracted/gallery-2.jpg',
      '/assets/extracted/story-sunset.jpg',
    ],
    featured: true,
    title: {
      en: 'Sea & Desert Tour',
      ar: 'جولة البحر والصحراء',
      de: 'Meer- & Wüstentour',
    },
    subtitle: {
      en: 'Where Golden Dunes Meet the Turquoise Red Sea',
      ar: 'حيث تلتقي الكثبان الذهبية بمياه البحر الأحمر الفيروزية',
      de: 'Wo goldene Dünen auf das türkisfarbene Rote Meer treffen',
    },
    description: {
      en: 'Our signature dual-landscape ride in Marsa Alam. Begin across untouched desert trails before arriving at the pristine shores of the Red Sea. Ideal for riders of every background seeking calm connection, coastal breezes, and panoramic desert horizons.',
      ar: 'جولتنا المميزة التي تجمع بين الطبيعتين في مرسى علم. ابدأ عبر مسارات الصحراء البكر قبل الوصول إلى الشواطئ الفيروزية للبحر الأحمر. مثالية لجميع الفرسان الباحثين عن الهدوء والطبيعة الساحرة.',
      de: 'Unsere charakteristische Tour durch zwei Landschaften in Marsa Alam. Reiten Sie durch unberührte Wüstenpfade bis hin zu den traumhaften Ufern des Roten Meeres.',
    },
    highlights: {
      en: [
        'Peaceful ride for all levels',
        'Desert & beach views',
        'Free transfer in Port Ghalib',
      ],
      ar: [
        'جولة هادئة تناسب جميع المستويات',
        'إطلالات ساحرة على الصحراء والشاطئ',
        'توصيل مجاني داخل بورت غالب',
      ],
      de: [
        'Friedlicher Ausritt für alle Niveaus',
        'Wüsten- & Strandblick',
        'Kostenloser Transfer in Port Ghalib',
      ],
    },
    included: {
      en: [
        'Round-trip hotel transfer within Port Ghalib',
        'Safety helmet & riding equipment',
        'Personal horse matched to your riding comfort',
        'Professional multilingual guide & trainer',
        'Personal camera photography along the shore',
        'Bottled water & welcome refreshments at the stable',
      ],
      ar: [
        'توصيل ذهاب وعودة مجاناً من فنادق بورت غالب',
        'خوذة الأمان ومعدات الفروسية الكاملة',
        'حصان مخصص يناسب مستوى خبرتك وراحتك',
        'مدرب ومرشد محترف متعدد اللغات',
        'تصوير بكاميرتك الخاصة على طول الشاطئ',
        'مياه معدنية ومشروب ترحيبي في الإسطبل',
      ],
      de: [
        'Hin- und Rücktransfer innerhalb von Port Ghalib',
        'Sicherheitshelm & Reitausrüstung',
        'Individuell ausgewähltes Pferd',
        'Professioneller mehrsprachiger Guide',
        'Fotos mit Ihrer eigenen Kamera am Strand',
        'Trinkwasser & Erfrischungen im Stall',
      ],
    },
    itinerary: [
      {
        time: '00:00',
        title: {
          en: 'Hotel Pickup & Stable Welcome',
          ar: 'الاستقبال من الفندق والترحيب في الإسطبل',
          de: 'Hotelabholung & Begrüßung im Stall',
        },
        detail: {
          en: 'Complimentary transfer from Port Ghalib, safety briefing, and horse introduction.',
          ar: 'توصيل مجاني من بورت غالب، شرح إرشادات السلامة والتعرف على الخيل.',
          de: 'Kostenloser Transfer, Sicherheitseinweisung und Kennenlernen der Pferde.',
        },
      },
      {
        time: '00:30',
        title: {
          en: 'Desert Valley Trail Ride',
          ar: 'الانطلاق عبر مسارات الوادي الصحراوي',
          de: 'Wüstental-Ausritt',
        },
        detail: {
          en: 'Ride through open desert plains with views of the Red Sea mountain range.',
          ar: 'ركوب الخيل عبر السهول الصحراوية المفتوحة مع إطلالات على جبال البحر الأحمر.',
          de: 'Ritt durch offene Wüstenebenen mit Blick auf die Bergkette.',
        },
      },
      {
        time: '01:15',
        title: {
          en: 'Red Sea Shoreline & Photo Stop',
          ar: 'ساحل البحر الأحمر ومحطة التصوير',
          de: 'Küste des Roten Meeres & Fotostopp',
        },
        detail: {
          en: 'Walk and canter along the unspoiled coastline with time for memorable photos.',
          ar: 'المشي والانطلاق على طول الساحل البكر مع وقت مخصص لالتقاط أجمل الصور.',
          de: 'Entlang der unberührten Küste reiten mit Zeit für Erinnerungsfotos.',
        },
      },
    ],
  },
  {
    id: 'swimming-with-horses',
    slug: 'swimming-with-horses',
    category: 'sea',
    durationHours: 2.5,
    durationLabel: {
      en: '2.5 Hours',
      ar: '٢.٥ ساعة',
      de: '2,5 Stunden',
    },
    groupPriceEur: 75,
    vipPriceEur: 90,
    skillLevel: {
      en: 'All Levels (Guided Sea Entry)',
      ar: 'جميع المستويات (دخول البحر بإشراف كامل)',
      de: 'Alle Niveaus (Geführter Meereinstieg)',
    },
    bestTime: {
      en: 'Late Morning (10:00) or Warm Afternoon (14:00)',
      ar: 'الضحى (10:00) أو بعد الظهر (14:00)',
      de: 'Spätvormittag (10:00) oder Nachmittag (14:00)',
    },
    image: '/assets/extracted/ride-swimming.jpg',
    galleryImages: [
      '/assets/extracted/ride-swimming.jpg',
      '/assets/extracted/gallery-3.jpg',
      '/assets/extracted/gallery-2.jpg',
    ],
    featured: true,
    title: {
      en: 'Swimming with Horses',
      ar: 'السباحة مع الخيل في البحر',
      de: 'Schwimmen mit Pferden',
    },
    subtitle: {
      en: 'Bareback Harmony in Crystal-Clear Red Sea Waters',
      ar: 'تناغم فريد بدون سرج في مياه البحر الأحمر الكريستالية',
      de: 'Einklang ohne Sattel im kristallklaren Wasser des Roten Meeres',
    },
    description: {
      en: 'Experience one of the rarest equestrian moments on earth. Ride across the golden desert to a secluded lagoon where we unsaddle the horses and wade together into the warm, buoyant waters of the Red Sea.',
      ar: 'عش واحدة من أندر تجارب الفروسية في العالم. انطلق عبر الصحراء الذهبية إلى بحيرة هادئة حيث نزيل السروج وندخل مع الخيل في مياه البحر الأحمر الدافئة والكريستالية.',
      de: 'Erleben Sie einen der seltensten Reitmomente der Welt. Reiten Sie zu einer ruhigen Lagune und schwimmen Sie ohne Sattel mit den Pferden im warmen Roten Meer.',
    },
    highlights: {
      en: [
        'Desert & beach riding',
        'Swim with horses in the sea',
        'Unforgettable experience',
      ],
      ar: [
        'ركوب الخيل في الصحراء والشاطئ',
        'السباحة مع الخيل داخل مياه البحر',
        'تجربة استثنائية لا تُنسى',
      ],
      de: [
        'Wüsten- & Strandreiten',
        'Mit Pferden im Meer schwimmen',
        'Unvergessliches Erlebnis',
      ],
    },
    included: {
      en: [
        'Complimentary Port Ghalib hotel transfers',
        'Bareback sea swimming preparation & waterproof gear storage',
        'Full trainer supervision in shallow & deep water',
        'Freshwater rinse & towel station guidance',
        'Action & shoreline photos with your phone/camera',
      ],
      ar: [
        'توصيل مجاني من وإلى فنادق بورت غالب',
        'تجهيز الخيل للسباحة بدون سرج وحفظ المتعلقات الشخصية',
        'إشراف كامل من المدربين في المياه الضحلة والعميقة',
        'تصوير لحظات السباحة والشاطئ بهاتفك أو كاميرتك',
        'مشروبات منعشة واستراحة في الإسطبل',
      ],
      de: [
        'Kostenloser Hoteltransfer in Port Ghalib',
        'Vorbereitung auf das Schwimmen ohne Sattel',
        'Volle Trainerbetreuung im Wasser',
        'Fotos im Wasser und am Strand mit Ihrer Kamera',
      ],
    },
    itinerary: [
      {
        time: '00:00',
        title: {
          en: 'Stable Briefing & Desert Approach',
          ar: 'التجهيز في الإسطبل والانطلاق نحو الساحل',
          de: 'Einweisung & Ritt zur Küste',
        },
        detail: {
          en: 'Meet your horse and ride 45 minutes across scenic coastal dunes.',
          ar: 'تعرف على حصانك وانطلق لمدة 45 دقيقة عبر الكثبان الساحلية.',
          de: 'Lernen Sie Ihr Pferd kennen und reiten Sie 45 Minuten durch die Dünen.',
        },
      },
      {
        time: '00:50',
        title: {
          en: 'Unsaddling & Red Sea Swim',
          ar: 'إزالة السروج والسباحة في البحر الأحمر',
          de: 'Absatteln & Schwimmen im Roten Meer',
        },
        detail: {
          en: 'Enter the calm turquoise lagoon bareback and feel the horses glide through the sea.',
          ar: 'ادخل المياه الفيروزية الهادئة واشعر بانسيابية الخيل داخل البحر.',
          de: 'Gleiten Sie ohne Sattel mit den Pferden durch die türkisfarbene Lagune.',
        },
      },
      {
        time: '01:50',
        title: {
          en: 'Sun-Dry Trail Back to Stable',
          ar: 'جولة العودة تحت أشعة الشمس إلى الإسطبل',
          de: 'Rückritt in der Sonne zum Stall',
        },
        detail: {
          en: 'Relaxing return ride along the warm beach breeze back to Pilot Stable.',
          ar: 'عودة هادئة وممتعة مع نسيم البحر الدافئ إلى إسطبل بايلوت.',
          de: 'Entspannter Rückritt entlang der warmen Meeresbrise.',
        },
      },
    ],
  },
  {
    id: 'camel-ride',
    slug: 'camel-ride',
    category: 'desert',
    durationHours: 2,
    durationLabel: {
      en: '2 Hours',
      ar: 'ساعتان',
      de: '2 Stunden',
    },
    groupPriceEur: 45,
    vipPriceEur: 60,
    skillLevel: {
      en: 'Family Friendly (All Ages)',
      ar: 'مناسب للعائلات وجميع الأعمار',
      de: 'Familienfreundlich (Alle Altersgruppen)',
    },
    bestTime: {
      en: 'Sunrise (05:30) or Golden Sunset (16:00)',
      ar: 'الشروق (05:30) أو الغروب الذهبي (16:00)',
      de: 'Sonnenaufgang (05:30) oder Sonnenuntergang (16:00)',
    },
    image: '/assets/extracted/ride-camel.jpg',
    galleryImages: [
      '/assets/extracted/ride-camel.jpg',
      '/assets/extracted/story-sunset.jpg',
      '/assets/extracted/about-hero.jpg',
    ],
    featured: true,
    title: {
      en: 'Camel Ride',
      ar: 'رحلة الجمال الأصيلة',
      de: 'Kamelritt-Abenteuer',
    },
    subtitle: {
      en: 'Timeless Caravan Journey Across the Red Sea Coast',
      ar: 'رحلة قوافل تقليدية عبر صحراء وساحل البحر الأحمر',
      de: 'Zeitlose Karawanenreise entlang der Küste des Roten Meeres',
    },
    description: {
      en: 'Step into the unhurried rhythm of the desert aboard our gentle, well-cared-for camels. Choose sunrise or sunset to watch the Red Sea sky transform into gold and crimson while traveling ancient caravan paths.',
      ar: 'استمتع بإيقاع الصحراء الهادئ على ظهر جمالنا الوديعة والمعتنى بها بعناية فائقة. اختر وقت الشروق أو الغروب لمشاهدة سماء البحر الأحمر وهي تكتسي باللون الذهبي.',
      de: 'Erleben Sie den ruhigen Rhythmus der Wüste auf unseren sanften Kamelen bei Sonnenaufgang oder Sonnenuntergang.',
    },
    highlights: {
      en: [
        'Sea & desert adventure',
        'Sunset or sunrise option',
        'Traditional experience',
      ],
      ar: [
        'مغامرة تجمع بين البحر والصحراء',
        'خيارات متاحة وقت الشروق أو الغروب',
        'تجربة بدوية تقليدية أصيلة',
      ],
      de: [
        'Meer- & Wüstenabenteuer',
        'Sonnenaufgangs- oder Sonnenuntergangsoption',
        'Traditionelles Erlebnis',
      ],
    },
    included: {
      en: [
        'Free hotel pickup & drop-off in Port Ghalib',
        'Padded traditional camel saddles (single or shared)',
        'Experienced Bedouin caravan guide',
        'Sunset or sunrise panoramic viewpoint stop',
        'Complimentary Bedouin herbal tea at rest point',
      ],
      ar: [
        'توصيل مجاني من وإلى الفندق في بورت غالب',
        'سروج جمال تقليدية مريحة ومبطنة',
        'مرشد قوافل بدوي خبير',
        'توقف في نقطة بانورامية لمشاهدة الشروق أو الغروب',
        'شاي بدوي بالأعشاب مجاناً في نقطة الاستراحة',
      ],
      de: [
        'Kostenloser Hoteltransfer in Port Ghalib',
        'Gepolsterte traditionelle Kamelsättel',
        'Erfahrener Beduinen-Guide',
        'Panoramastopp bei Sonnenaufgang oder Sonnenuntergang',
        'Kostenloser Beduinentee',
      ],
    },
    itinerary: [
      {
        time: '00:00',
        title: {
          en: 'Caravan Preparation',
          ar: 'تجهيز القافلة والانطلاق',
          de: 'Karawanen-Vorbereitung',
        },
        detail: {
          en: 'Meet our gentle camels, learn mounting posture, and set off into the desert.',
          ar: 'التعرف على الجمال وطريقة الركوب المريحة والانطلاق نحو الصحراء.',
          de: 'Lernen Sie unsere sanften Kamele kennen und starten Sie in die Wüste.',
        },
      },
      {
        time: '00:45',
        title: {
          en: 'Coastal Ridge & Golden Horizon',
          ar: 'المرتفعات الساحلية والأفق الذهبي',
          de: 'Küstenkamm & Goldener Horizont',
        },
        detail: {
          en: 'Pause at elevated sand ridges overlooking the Red Sea for sunset/sunrise photos.',
          ar: 'توقف عند التلال الرملية المطلة على البحر الأحمر لالتقاط صور الشروق أو الغروب.',
          de: 'Pause auf erhöhten Sanddünen mit Blick auf das Rote Meer.',
        },
      },
    ],
  },
  {
    id: 'bedouin-village-tour',
    slug: 'bedouin-village-tour',
    category: 'cultural',
    durationHours: 4,
    durationLabel: {
      en: '4 Hours',
      ar: '٤ ساعات',
      de: '4 Stunden',
    },
    groupPriceEur: 100,
    vipPriceEur: 120,
    skillLevel: {
      en: 'All Levels (Horse or Camel Option)',
      ar: 'جميع المستويات (بالخيل أو الجمال)',
      de: 'Alle Niveaus (Pferd oder Kamel)',
    },
    bestTime: {
      en: 'Afternoon into Starry Evening (14:30 - 18:30)',
      ar: 'من العصر حتى المساء تحت النجوم (14:30 - 18:30)',
      de: 'Nachmittag bis in den Sternenabend (14:30 - 18:30)',
    },
    image: '/assets/extracted/ride-bedouin.jpg',
    galleryImages: [
      '/assets/extracted/ride-bedouin.jpg',
      '/assets/extracted/story-sunset.jpg',
      '/assets/extracted/ride-camel.jpg',
    ],
    featured: true,
    title: {
      en: 'Bedouin Village Tour',
      ar: 'جولة القرية البدوية التراثية',
      de: 'Beduinendorf-Kulturtour',
    },
    subtitle: {
      en: 'Cultural Journey & Authentic Desert Hospitality',
      ar: 'رحلة ثقافية عميقة وضيافة بدوية أصيلة في قلب الصحراء',
      de: 'Kulturelle Reise & authentische Wüstengastfreundschaft',
    },
    description: {
      en: 'A deep cultural journey into the Eastern Desert featuring authentic Bedouin hospitality, freshly baked desert bread, and a traditional Habak tea ceremony cooked over glowing embers.',
      ar: 'رحلة ثقافية متكاملة في أعماق الصحراء الشرقية تتضمن الضيافة البدوية الأصيلة، والخبز البدوي الطازج على الصاج، ومراسم الشاي البدوي بالحبق المطهو على الجمر.',
      de: 'Eine tiefgehende Kulturreise in die Wüste mit authentischer Beduinen-Gastfreundschaft und traditioneller Teezeremonie.',
    },
    highlights: {
      en: [
        'Deep cultural journey',
        'Authentic Bedouin hospitality',
        'Traditional tea ceremony',
      ],
      ar: [
        'رحلة ثقافية عميقة في قلب الصحراء',
        'ضيافة بدوية أصيلة وتجربة الخبز الطازج',
        'جلسة شاي بدوي تقليدية على الجمر',
      ],
      de: [
        'Tiefgehende Kulturreise',
        'Authentische Beduinen-Gastfreundschaft',
        'Traditionelle Teezeremonie',
      ],
    },
    included: {
      en: [
        'Free transfer from Port Ghalib hotels',
        'Guided 4-hour desert trail ride (horse or camel)',
        'Authentic Bedouin tent welcome & cultural storytelling',
        'Traditional charcoal-brewed Bedouin tea & roasted coffee',
        'Fresh desert flatbread (Farasheeh) baking demonstration',
      ],
      ar: [
        'توصيل مجاني من فنادق بورت غالب',
        'جولة لمدة 4 ساعات بالخيل أو الجمال مع مرشد خبير',
        'استقبال في الخيمة البدوية والتعرف على عادات القبائل',
        'شاي بدوي على الفحم وقهوة عربية محمصة',
        'تجربة إعداد الخبز البدوي الطازج في الصحراء',
      ],
      de: [
        'Kostenloser Transfer aus Port Ghalib',
        'Geführter 4-Stunden-Wüstenritt',
        'Empfang im Beduinenzelt & Geschichten',
        'Traditioneller Beduinentee & frisches Fladenbrot',
      ],
    },
    itinerary: [
      {
        time: '00:00',
        title: {
          en: 'Departure into the Deep Wadi',
          ar: 'الانطلاق نحو الوادي الصحراوي العميق',
          de: 'Aufbruch in das tiefe Wadi',
        },
        detail: {
          en: 'Ride through ancient dry riverbeds framed by golden acacia trees.',
          ar: 'ركوب الخيل عبر الأودية القديمة المحاطة بأشجار السنط الذهبية.',
          de: 'Ritt durch alte Flussbetten und Akazienbäume.',
        },
      },
      {
        time: '01:30',
        title: {
          en: 'Bedouin Settlement & Tea Ceremony',
          ar: 'القرية البدوية ومراسم الشاي على الجمر',
          de: 'Beduinensiedlung & Teezeremonie',
        },
        detail: {
          en: 'Rest inside handwoven tents, share freshly brewed tea, and learn desert navigation.',
          ar: 'استراحة داخل الخيام المنسوجة يدوياً وتناول الشاي البدوي والتعرف على حياة الصحراء.',
          de: 'Pause in handgewebten Zelten mit frisch gebrühtem Tee.',
        },
      },
      {
        time: '03:00',
        title: {
          en: 'Twilight Return Ride',
          ar: 'جولة العودة وقت الشفق والغروب',
          de: 'Rückritt in der Abenddämmerung',
        },
        detail: {
          en: 'Ride back under the warm colors of dusk toward the Red Sea coast.',
          ar: 'العودة تحت ألوان الغروب الدافئة باتجاه ساحل البحر الأحمر.',
          de: 'Rückritt unter den warmen Farben der Abenddämmerung.',
        },
      },
    ],
  },
  {
    id: 'professional-photo-session',
    slug: 'professional-photo-session',
    category: 'vip-photo',
    durationHours: 2,
    durationLabel: {
      en: '2 Hours',
      ar: 'ساعتان',
      de: '2 Stunden',
    },
    groupPriceEur: 130,
    vipPriceEur: 150,
    skillLevel: {
      en: 'All Levels (Posed & Action Guidance)',
      ar: 'جميع المستويات (توجيه كامل للوضعيات والحركة)',
      de: 'Alle Niveaus (Posing- & Action-Begleitung)',
    },
    bestTime: {
      en: 'Golden Hour Sunset (16:00) or Sunrise (05:30)',
      ar: 'الساعة الذهبية عند الغروب (16:00) أو الشروق (05:30)',
      de: 'Goldene Stunde bei Sonnenuntergang (16:00) oder Sonnenaufgang (05:30)',
    },
    image: '/assets/extracted/ride-photo.jpg',
    galleryImages: [
      '/assets/extracted/ride-photo.jpg',
      '/assets/extracted/gallery-1.jpg',
      '/assets/extracted/team-sara.jpg',
    ],
    featured: true,
    title: {
      en: 'Professional Photo Session',
      ar: 'جلسة تصوير احترافية سينمائية',
      de: 'Professionelles Fotoshooting',
    },
    subtitle: {
      en: 'Cinematic Equestrian Portraits at Golden Hour',
      ar: 'صور سينمائية فاخرة مع الخيل العربية في الساعة الذهبية',
      de: 'Kinoreife Pferdeporträts zur Goldenen Stunde',
    },
    description: {
      en: 'Capture timeless memories with our purebred Arabian and coastal horses. Accompanied by a dedicated equestrian photographer, we stage breathtaking silhouettes along the Red Sea shoreline and golden desert crests.',
      ar: 'وثق ذكريات لا تُنسى مع خيولنا العربية الأصيلة على شاطئ البحر الأحمر. يرافقك مصور محترف متخصص لالتقاط لقطات سينمائية ساحرة عند غروب الشمس أو شروقها.',
      de: 'Halten Sie zeitlose Erinnerungen mit unseren arabischen Pferden und einem spezialisierten Fotografen am Roten Meer fest.',
    },
    highlights: {
      en: [
        'Dedicated photographer',
        'Cinematic quality photos',
        'Personalized experience',
      ],
      ar: [
        'مصور فوتوغرافي محترف مخصص لك',
        'صور عالية الدقة بجودة سينمائية',
        'تجربة مخصصة بالكامل حسب رغبتك',
      ],
      de: [
        'Eigener professioneller Fotograf',
        'Fotos in Kinoqualität',
        'Individuell gestaltetes Erlebnis',
      ],
    },
    included: {
      en: [
        'Dedicated professional photographer with full-frame camera gear',
        '35+ high-resolution color-graded digital photographs + raw reels clips',
        'Choice of purebred white Arabian or Pinto stallion',
        'Traditional ornate Egyptian tack or minimalist bareback styling',
        'Private handler to position the horse safely for dramatic shots',
      ],
      ar: [
        'مصور محترف بمعدات احترافية طوال الجلسة',
        'أكثر من 35 صورة عالية الدقة ومعدلة احترافياً بالإضافة لمقاطع فيديو قصيرة',
        'اختيار الحصان العربي الأبيض أو الخيول الملونة المميزة',
        'إمكانية التصوير باللجام المصري التراثي أو بدون سرج على الشاطئ',
        'مساعد خاص لتوجيه الحصان بأمان للحصول على لقطات مثالية',
      ],
      de: [
        'Eigener Profifotograf mit Vollformat-Kamera',
        '35+ hochauflösende bearbeitete Fotos & kurze Videoclips',
        'Wahl eines weißen Araberpferdes oder Schecken',
        'Privater Pferdeführer für sichere & dramatische Posen',
      ],
    },
    itinerary: [
      {
        time: '00:00',
        title: {
          en: 'Styling & Horse Selection',
          ar: 'اختيار الحصان وتنسيق الإطلالة',
          de: 'Styling & Pferdeauswahl',
        },
        detail: {
          en: 'Choose your horse and tack style at Pilot Stable with outfit coordination advice.',
          ar: 'اختيار الحصان واللجام المناسب في الإسطبل مع نصائح لتنسيق اللقطات.',
          de: 'Wählen Sie Ihr Pferd und Zaumzeug im Stall aus.',
        },
      },
      {
        time: '00:30',
        title: {
          en: 'Dune Silhouette & Shoreline Shoot',
          ar: 'التصوير على الكثبان الرملية وشاطئ البحر',
          de: 'Dünen-Silhouetten & Strandshooting',
        },
        detail: {
          en: '90 minutes of golden-hour shooting across desert ridges and splashing waves.',
          ar: '90 دقيقة من التصوير الاحترافي في الساعة الذهبية بين الرمال وأمواج البحر.',
          de: '90 Minuten Shooting zur Goldenen Stunde in den Dünen und Wellen.',
        },
      },
    ],
  },
  {
    id: 'royal-sunset-private-escapade',
    slug: 'royal-sunset-private-escapade',
    category: 'vip-photo',
    durationHours: 3,
    durationLabel: {
      en: '3 Hours',
      ar: '٣ ساعات',
      de: '3 Stunden',
    },
    groupPriceEur: 95,
    vipPriceEur: 125,
    skillLevel: {
      en: 'Couples & Private Groups (All Levels)',
      ar: 'للأزواج والمجموعات الخاصة (جميع المستويات)',
      de: 'Paare & Privatgruppen (Alle Niveaus)',
    },
    bestTime: {
      en: 'Late Afternoon to Twilight (15:00 - 18:00)',
      ar: 'قبل الغروب حتى المساء (15:00 - 18:00)',
      de: 'Spätnachmittag bis Dämmerung (15:00 - 18:00)',
    },
    image: '/assets/extracted/story-sunset.jpg',
    galleryImages: [
      '/assets/extracted/story-sunset.jpg',
      '/assets/extracted/gallery-1.jpg',
      '/assets/extracted/ride-sea-desert.jpg',
    ],
    featured: false,
    title: {
      en: 'Royal Sunset Private Escapade',
      ar: 'رحلة الغروب الملكية الخاصة',
      de: 'Königlicher Sonnenuntergangs-Ritt',
    },
    subtitle: {
      en: 'Tailor-Made Quiet Luxury Along Untouched Coastal Trails',
      ar: 'فخامة هادئة ومخصصة بالكامل على مسارات ساحلية بكر',
      de: 'Maßgeschneiderter stiller Luxus auf unberührten Küstenpfaden',
    },
    description: {
      en: 'Designed for couples, families, and discerning riders who value unhurried privacy. Enjoy a custom-paced trail combining panoramic coral cliffs, quiet shoreline riding, and a private sunset lounge setup with fresh seasonal fruits and lantern-lit Bedouin tea.',
      ar: 'مصممة خصيصاً للأزواج والعائلات والفرسان الباحثين عن الخصوصية والهدوء. استمتع بمسار مخصص يجمع بين إطلالات الشعب المرجانية والشاطئ الهادئ مع جلسة غروب خاصة على ضوء الفوانيس.',
      de: 'Entwickelt für Paare und Familien, die ungestörte Privatsphäre und einen Sonnenuntergangs-Lounge-Stopp am Meer schätzen.',
    },
    highlights: {
      en: [
        '100% private tailor-made pace',
        'Sunset lantern lounge & refreshments',
        'Extended sea & desert panoramic route',
      ],
      ar: [
        'خصوصية تامة ومسار مخصص حسب سرعتك',
        'جلسة غروب خاصة مع فوانيس ومشروبات وفاكهة',
        'مسار بانورامي ممتد يجمع البحر والصحراء',
      ],
      de: [
        '100% privates, maßgeschneidertes Tempo',
        'Sonnenuntergangs-Laternen-Lounge',
        'Erweiterte Panorama-Route',
      ],
    },
    included: {
      en: [
        'Private VIP vehicle pickup & drop-off in Port Ghalib / Marsa Alam',
        'Dedicated senior guide for your party only',
        'Sunset carpet lounge on the dunes with fresh fruits & herbal tea',
        'Personal camera photo & video assistance throughout',
      ],
      ar: [
        'سيارة خاصة للاستقبال والعودة من بورت غالب ومرسى علم',
        'مدرب أول مخصص لمجموعتكم فقط',
        'جلسة عربية على الكثبان وقت الغروب مع الفاكهة والشاي البدوي',
        'مساعدة كاملة في التصوير الفوتوغرافي والفيديو طوال الرحلة',
      ],
      de: [
        'Privater VIP-Transfer in Port Ghalib / Marsa Alam',
        'Eigener Senior-Guide nur für Ihre Gruppe',
        'Sonnenuntergangs-Lounge in den Dünen mit Obst & Tee',
      ],
    },
    itinerary: [
      {
        time: '00:00',
        title: {
          en: 'VIP Pickup & Custom Horse Pairing',
          ar: 'استقبال VIP واختيار الخيل المناسب',
          de: 'VIP-Abholung & Pferdeauswahl',
        },
        detail: {
          en: 'Private transfer and unhurried introduction to our finest horses.',
          ar: 'انتقال خاص وجلسة تعارف هادئة مع نخبة خيول الإسطبل.',
          de: 'Privater Transfer und entspanntes Kennenlernen unserer Pferde.',
        },
      },
      {
        time: '01:30',
        title: {
          en: 'Private Sunset Dune Lounge',
          ar: 'استراحة الغروب الخاصة على الكثبان',
          de: 'Private Sonnenuntergangs-Lounge',
        },
        detail: {
          en: 'Watch the sun dip below the Red Sea mountains with lantern-lit refreshments.',
          ar: 'مشاهدة غروب الشمس خلف جبال البحر الأحمر في أجواء هادئة على ضوء الفوانيس.',
          de: 'Beobachten Sie den Sonnenuntergang bei Tee und Laternenlicht.',
        },
      },
    ],
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'ahmed-imam',
    slug: 'ahmed-imam',
    name: 'Ahmed Imam',
    role: {
      en: 'Founder & Co-Founder',
      ar: 'المؤسس والشريك المؤسس',
      de: 'Gründer & Mitbegründer',
    },
    image: '/assets/extracted/team-ahmed.jpg',
    languages: ['English', 'Arabic'],
    experienceYears: 9,
    specialty: {
      en: 'Arabian Horse Horsemanship & Desert Trail Leadership',
      ar: 'فروسية الخيل العربية وقيادة رحلات الصحراء والبحر',
      de: 'Arabische Pferdekunde & Wüstentour-Leitung',
    },
    bio: {
      en: 'Founded Pilot Stable in 2017 out of a lifelong bond with horses. In 2022, Ahmed brought his vision to Marsa Alam with two horses and one camel, building a sanctuary dedicated to ethical horse care and authentic quiet-luxury rides.',
      ar: 'أسس إسطبل بايلوت في عام 2017 انطلاقاً من شغفه العميق بالخيل. وفي عام 2022 انتقل إلى مرسى علم بحصانين وجمل واحد ليصنع وجهة رائدة تقوم على الرعاية الأخلاقية للخيل والرحلات الأصيلة.',
      de: 'Gründete Pilot Stable 2017 aus tiefer Verbundenheit zu Pferden und baute in Marsa Alam ein Zentrum für ethische Pferdehaltung auf.',
    },
    phone: '+20 106 334 5261',
  },
  {
    id: 'sami-mohamed',
    slug: 'sami-mohamed',
    name: 'Sami Mohamed',
    role: {
      en: 'Operations Manager',
      ar: 'مدير العمليات والتشغيل',
      de: 'Betriebsleiter',
    },
    image: '/assets/extracted/team-sami.jpg',
    languages: ['English', 'Arabic', 'Italian'],
    experienceYears: 8,
    specialty: {
      en: 'Coastal Logistics, Guest Safety & Sea Swimming Expeditions',
      ar: 'إدارة الرحلات الساحلية وسلامة الضيوف وتجارب السباحة مع الخيل',
      de: 'Küstenlogistik, Gästesicherheit & Meeresschwimmen',
    },
    bio: {
      en: 'Coordinates every Port Ghalib transfer, route schedule, and shoreline safety protocol so guests enjoy a seamless, worry-free adventure from hotel pickup to return.',
      ar: 'يشرف على كافة تفاصيل النقل من بورت غالب وجدولة المسارات وبروتوكولات السلامة لضمان تجربة سلسة وآمنة لكل ضيف من لحظة الاستقبال حتى العودة.',
      de: 'Koordiniert alle Transfers in Port Ghalib und sorgt für höchste Sicherheitsstandards am Strand und in der Wüste.',
    },
  },
  {
    id: 'sara-efkrein',
    slug: 'sara-efkrein',
    name: 'Sara Efkrein',
    role: {
      en: 'Supervisors Manager',
      ar: 'مديرة المشرفين وتجربة الضيوف',
      de: 'Leiterin der Gästebetreuung',
    },
    image: '/assets/extracted/team-sara.jpg',
    languages: ['English', 'French', 'Arabic'],
    experienceYears: 7,
    specialty: {
      en: 'Guest Relations, Multilingual Guiding & Beginner Confidence',
      ar: 'علاقات الضيوف والإرشاد متعدد اللغات وتدريب المبتدئين',
      de: 'Gästebetreuung, mehrsprachige Führung & Anfängertraining',
    },
    bio: {
      en: 'Leads supervisor training and welcomes international riders in English, French, and Arabic, ensuring first-time riders and families feel completely at ease.',
      ar: 'تقود فريق المشرفين وترحب بالفرسان الدوليين بالإنجليزية والفرنسية والعربية، وتضمن شعور المبتدئين والعائلات بالثقة والراحة التامة.',
      de: 'Leitet das Betreuerteam und begleitet Gäste auf Englisch, Französisch und Arabisch mit viel Einfühlungsvermögen.',
    },
    phone: '+20 101 386 8852',
  },
  {
    id: 'sultan-yahia',
    slug: 'sultan-yahia',
    name: 'Sultan Yahia',
    role: {
      en: 'Horse Care Associate',
      ar: 'أخصائي رعاية وتأهيل الخيل',
      de: 'Spezialist für Pferdepflege',
    },
    image: '/assets/extracted/team-sultan.jpg',
    languages: ['Arabic', 'English'],
    experienceYears: 6,
    specialty: {
      en: 'Equine Nutrition, Grooming & Gentle Saddle Conditioning',
      ar: 'تغذية الخيل والعناية اليومية والتجهيز الهادئ للرحلات',
      de: 'Pferdeernährung, Pflege & sanfte Konditionierung',
    },
    bio: {
      en: 'Dedicated to the daily wellbeing, hydration, and calm temperament of every horse and camel at Pilot Stable Egypt.',
      ar: 'مكرس للعناية اليومية بصحة وتغذية وهدوء كل حصان وجمل في إسطبل بايلوت مصر.',
      de: 'Verantwortlich für das tägliche Wohlbefinden, die Pflege und die Ausgeglichenheit unserer Pferde und Kamele.',
    },
  },
  {
    id: 'christina',
    slug: 'christina',
    name: 'Christina',
    role: {
      en: 'Co-Founder',
      ar: 'شريك مؤسس',
      de: 'Mitbegründerin',
    },
    image: '/assets/extracted/team-christina.jpg',
    languages: ['German', 'English', 'Polish'],
    experienceYears: 10,
    specialty: {
      en: 'European Equestrian Standards & Ethical Welfare',
      ar: 'معايير الفروسية الأوروبية ورعاية الخيل الأخلاقية',
      de: 'Europäische Reitstandards & ethischer Tierschutz',
    },
    bio: {
      en: 'Brings international equestrian expertise and a deep commitment to animal welfare, pairing riders with the ideal horse for harmonious sea and desert trails.',
      ar: 'تقدم خبرة دولية واسعة في الفروسية والتزاماً عميقاً برفاهية الحيوان، وتساعد في اختيار الحصان الأنسب لكل فارس.',
      de: 'Bringt internationale Reiterfahrung und höchstes Engagement für das Tierwohl in jede Tour ein.',
    },
  },
  {
    id: 'nadine',
    slug: 'nadine',
    name: 'Nadine Heller',
    role: {
      en: 'Co-Founder',
      ar: 'شريك مؤسس ومسؤولة التواصل الأوروبي',
      de: 'Mitbegründerin & Kundenbetreuung',
    },
    image: '/assets/extracted/team-nadine.jpg',
    languages: ['German', 'English'],
    experienceYears: 9,
    specialty: {
      en: 'Tailor-Made Private Tours & Guest Consultation',
      ar: 'الرحلات الخاصة المخصصة واستشارات الحجز للضيوف',
      de: 'Maßgeschneiderte Privattouren & Gästeberatung',
    },
    bio: {
      en: 'Passionate equestrian and co-founder helping German and international guests plan bespoke Red Sea riding holidays and private celebrations.',
      ar: 'فارسة شغوفة وشريك مؤسس تساعد الضيوف الألمان والدوليين في تخطيط رحلات فروسية مخصصة على ساحل البحر الأحمر.',
      de: 'Unterstützt deutschsprachige und internationale Gäste bei der Planung unvergesslicher Reitabenteuer am Roten Meer.',
    },
    phone: '+49 162 317 3710',
  },
];

export const SALES_CONTACTS: SalesContact[] = [
  {
    id: 'sales-ahmed',
    name: 'Ahmed Imam',
    phone: '+20 106 334 5261',
    whatsappUrl: 'https://wa.me/201063345261',
    languages: {
      en: 'English, Arabic',
      ar: 'العربية، الإنجليزية',
      de: 'Englisch, Arabisch',
    },
    role: {
      en: 'Co-Founder & Direct Bookings',
      ar: 'المؤسس والحجز المباشر',
      de: 'Mitbegründer & Direktbuchung',
    },
  },
  {
    id: 'sales-sara',
    name: 'Sara Ifkirene',
    phone: '+20 101 386 8852',
    whatsappUrl: 'https://wa.me/201013868852',
    languages: {
      en: 'English, French, Arabic',
      ar: 'العربية، الفرنسية، الإنجليزية',
      de: 'Englisch, Französisch, Arabisch',
    },
    role: {
      en: 'Supervisors Manager & Guest Desk',
      ar: 'مديرة المشرفين وخدمة الضيوف',
      de: 'Gästebetreuung (EN/FR/AR)',
    },
  },
  {
    id: 'sales-nadine',
    name: 'Nadine Heller',
    phone: '+49 162 317 3710',
    whatsappUrl: 'https://wa.me/491623173710',
    languages: {
      en: 'German, English',
      ar: 'الألمانية، الإنجليزية',
      de: 'Deutsch, Englisch',
    },
    role: {
      en: 'Co-Founder & European Desk',
      ar: 'شريك مؤسس وخدمة الضيوف الألمان',
      de: 'Mitbegründerin & Deutsche Beratung',
    },
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    image: '/assets/extracted/gallery-1.jpg',
    category: 'desert',
    title: {
      en: 'Golden Sunset Riding with Purebred White Arabian',
      ar: 'ركوب الخيل العربي الأبيض الأصيل عند الغروب الذهبي',
      de: 'Sonnenuntergangsritt auf weißem Araber',
    },
    location: 'Marsa Alam Desert Ridge',
  },
  {
    id: 'gal-2',
    image: '/assets/extracted/gallery-2.jpg',
    category: 'sea',
    title: {
      en: 'Peaceful Bond by the Turquoise Red Sea Shore',
      ar: 'تناغم وهدوء على شاطئ البحر الأحمر الفيروزي',
      de: 'Harmonie am türkisfarbenen Ufer des Roten Meeres',
    },
    location: 'Port Ghalib Lagoon',
  },
  {
    id: 'gal-3',
    image: '/assets/extracted/gallery-3.jpg',
    category: 'sea',
    title: {
      en: 'Shallow Water Coastal Ride at Twilight',
      ar: 'جولة ساحلية في المياه الضحلة وقت الشفق',
      de: 'Küstenritt im flachen Wasser in der Dämmerung',
    },
    location: 'Red Sea Coastline',
  },
  {
    id: 'gal-4',
    image: '/assets/extracted/story-sunset.jpg',
    category: 'cultural',
    title: {
      en: 'Sunset Caravan Across the Untouched Eastern Desert',
      ar: 'قافلة الغروب عبر الصحراء الشرقية البكر',
      de: 'Sonnenuntergangs-Karawane in der Ostwüste',
    },
    location: 'Wadi El Gemal Approaches',
  },
  {
    id: 'gal-5',
    image: '/assets/extracted/ride-swimming.jpg',
    category: 'sea',
    title: {
      en: 'Swimming Bareback with Horses in the Red Sea',
      ar: 'السباحة بدون سرج مع الخيل في مياه البحر الأحمر',
      de: 'Schwimmen ohne Sattel mit Pferden im Roten Meer',
    },
    location: 'Marsa Alam Coral Bay',
  },
  {
    id: 'gal-6',
    image: '/assets/extracted/team-sara.jpg',
    category: 'vip-photo',
    title: {
      en: 'Portrait Elegance & Mutual Trust',
      ar: 'أناقة البورتريه والثقة المتبادلة بين الفارس والخيل',
      de: 'Porträt-Eleganz & gegenseitiges Vertrauen',
    },
    location: 'Pilot Stable Paddock',
  },
  {
    id: 'gal-7',
    image: '/assets/extracted/team-ahmed.jpg',
    category: 'vip-photo',
    title: {
      en: 'Purebred Arabian Stallion Heritage',
      ar: 'أصالة الخيل العربي المصري في إسطبل بايلوت',
      de: 'Reinrassiges arabisches Hengsterbe',
    },
    location: 'Port Ghalib Stable',
  },
  {
    id: 'gal-8',
    image: '/assets/extracted/ride-photo.jpg',
    category: 'vip-photo',
    title: {
      en: 'Cinematic Silhouette Photography Session',
      ar: 'جلسة تصوير سلويت سينمائية وقت الغروب',
      de: 'Kinoreifes Silhouetten-Fotoshooting',
    },
    location: 'Red Sea Sunset Crest',
  },
];

export const CATALOGUE_PAGES: CataloguePage[] = [
  {
    pageNumber: 1,
    title: {
      en: 'Pilot Stable Egypt — Founded in 2017 by Ahmed Emam',
      ar: 'إسطبل بايلوت مصر — تأسس عام 2017 على يد أحمد إمام',
      de: 'Pilot Stable Egypt — Gegründet 2017 von Ahmed Emam',
    },
    subtitle: {
      en: 'One of the most trusted and respected riding experiences by the Red Sea "Marsa Alam"',
      ar: 'واحدة من أكثر تجارب الفروسية موثوقية واحتراماً على ساحل البحر الأحمر بمرسى علم',
      de: 'Eines der vertrauenswürdigsten Reiterlebnisse am Roten Meer in Marsa Alam',
    },
    body: {
      en: 'Presented by Sara Ifkirene (Supervisor). Where passion meets the desert and turquoise sea, guided by authenticity, ethical care, and mutual respect.',
      ar: 'تقديم المشرفة سارة إفكيرين. حيث يلتقي الشغف بالصحراء والبحر الفيروزي، بقيادة الأصالة والرعاية الأخلاقية والاحترام المتبادل.',
      de: 'Präsentiert von Sara Ifkirene. Wo Leidenschaft auf Wüste und Meer trifft.',
    },
    image: '/assets/extracted/catalogue-cover.jpg',
    highlightStat: 'Est. 2017 · Port Ghalib',
  },
  {
    pageNumber: 2,
    title: {
      en: 'Our Origin Story — From Two Horses to a Coastal Sanctuary',
      ar: 'قصة البداية — من حصانين وجمل إلى ملاذ ساحلي للفروسية',
      de: 'Unsere Geschichte — Von zwei Pferden zum Küsten-Refugium',
    },
    subtitle: {
      en: '2017 Vision · 2022 Marsa Alam Expansion',
      ar: 'رؤية ٢٠١٧ · توسع مرسى علم ٢٠٢٢',
      de: 'Vision 2017 · Expansion nach Marsa Alam 2022',
    },
    body: {
      en: 'In 2022, with just two horses and one camel, Ahmed made the bold decision to move to Marsa Alam. Every trail was mapped to avoid mass tourism and celebrate quiet luxury.',
      ar: 'في عام 2022، وبحصانين وجمل واحد فقط، اتخذ أحمد قراراً جريئاً بالانتقال إلى مرسى علم لتقديم تجارب بعيدة عن السياحة الصاخبة.',
      de: '2022 zog Ahmed mit zwei Pferden und einem Kamel nach Marsa Alam, um authentische Reittouren abseits des Massentourismus anzubieten.',
    },
    image: '/assets/extracted/story-sunset.jpg',
    highlightStat: '5,000+ Happy Riders',
  },
  {
    pageNumber: 3,
    title: {
      en: 'Ethical Welfare & Purebred Arabian Care',
      ar: 'الرعاية الأخلاقية وسلامة الخيل العربية الأصيلة',
      de: 'Ethische Haltung & Pflege arabischer Pferde',
    },
    subtitle: {
      en: 'Partners in a Shared Journey Built on Trust',
      ar: 'شركاء في رحلة مشتركة مبنية على الثقة والهدوء',
      de: 'Partner auf einer gemeinsamen Reise voller Vertrauen',
    },
    body: {
      en: 'For us, horses are never tools. They enjoy shaded paddocks, balanced nutrition, fresh water, veterinary care, and well-fitted tack tailored to each animal.',
      ar: 'بالنسبة لنا، الخيل ليست مجرد وسيلة بل شركاء. نوفر لها حظائر مظللة، تغذية متوازنة، رعاية بيطرية دورية، ومعدات مريحة.',
      de: 'Für uns sind Pferde Partner, keine Werkzeuge. Sie genießen schattige Koppeln, beste Ernährung und angepasste Sättel.',
    },
    image: '/assets/extracted/team-ahmed.jpg',
    highlightStat: '100% Ethical Care',
  },
  {
    pageNumber: 4,
    title: {
      en: 'Signature Experience: Swimming with Horses in the Red Sea',
      ar: 'التجربة الأشهر: السباحة مع الخيل في البحر الأحمر',
      de: 'Signature-Erlebnis: Schwimmen mit Pferden im Roten Meer',
    },
    subtitle: {
      en: '2.5 Hours · Group 75€ / VIP 90€',
      ar: '٢.٥ ساعة · مجموعات 75€ / خاص VIP 90€',
      de: '2,5 Stunden · Gruppe 75€ / VIP 90€',
    },
    body: {
      en: 'Unsaddle at a calm turquoise lagoon and glide through crystal waters bareback alongside our trained coastal horses.',
      ar: 'ندخل بدون سروج إلى بحيرة فيروزية هادئة لنسبح مع خيولنا المدربة في مياه البحر الأحمر الصافية.',
      de: 'Schwimmen Sie ohne Sattel mit unseren ruhigen Küstenpferden in einer türkisfarbenen Lagune.',
    },
    image: '/assets/extracted/ride-swimming.jpg',
    highlightStat: '75€ Group · 90€ VIP',
  },
  {
    pageNumber: 5,
    title: {
      en: 'Sea & Desert Tour — The Classic Port Ghalib Trail',
      ar: 'جولة البحر والصحراء — المسار الكلاسيكي في بورت غالب',
      de: 'Meer- & Wüstentour — Der Klassiker in Port Ghalib',
    },
    subtitle: {
      en: '2 Hours · Group 45€ / VIP 60€',
      ar: 'ساعتان · مجموعات 45€ / خاص VIP 60€',
      de: '2 Stunden · Gruppe 45€ / VIP 60€',
    },
    body: {
      en: 'Ideal for beginners, families, and experienced equestrians. Includes complimentary hotel pickup and drop-off within Port Ghalib.',
      ar: 'مثالية للمبتدئين والعائلات والفرسان المحترفين، وتشمل التوصيل المجاني من وإلى فنادق بورت غالب.',
      de: 'Ideal für Anfänger, Familien und Fortgeschrittene inklusive kostenlosem Transfer in Port Ghalib.',
    },
    image: '/assets/extracted/ride-sea-desert.jpg',
    highlightStat: '45€ Group · 60€ VIP',
  },
  {
    pageNumber: 6,
    title: {
      en: 'Camel Caravan & Bedouin Village Cultural Immersion',
      ar: 'قوافل الجمال ورحلة القرية البدوية التراثية',
      de: 'Kamelkarawane & Beduinendorf-Kulturreise',
    },
    subtitle: {
      en: 'Sunrise, Sunset & 4-Hour Cultural Expeditions',
      ar: 'رحلات الشروق والغروب وجولات ثقافية لمدة ٤ ساعات',
      de: 'Sonnenaufgang, Sonnenuntergang & 4-Stunden-Expeditionen',
    },
    body: {
      en: 'Experience authentic Bedouin hospitality, ember-brewed herbal tea, and golden desert horizons.',
      ar: 'عش كرم الضيافة البدوية الأصيلة، والشاي المطهو على الجمر، وإطلالات الغروب الذهبية.',
      de: 'Erleben Sie echte Beduinen-Gastfreundschaft, frisch gebrühten Tee und goldene Wüstenhorizonte.',
    },
    image: '/assets/extracted/ride-camel.jpg',
    highlightStat: 'From 45€ to 120€',
  },
  {
    pageNumber: 7,
    title: {
      en: 'Professional Golden-Hour Photo Sessions',
      ar: 'جلسات التصوير الاحترافية في الساعة الذهبية',
      de: 'Professionelle Fotoshootings zur Goldenen Stunde',
    },
    subtitle: {
      en: '2 Hours · Dedicated Photographer · Group 130€ / VIP 150€',
      ar: 'ساعتان · مصور خاص محترف · 130€ / VIP 150€',
      de: '2 Stunden · Eigener Fotograf · 130€ / VIP 150€',
    },
    body: {
      en: 'Editorial-grade portraits and dramatic sunset silhouettes with purebred Arabian horses along the water edge.',
      ar: 'صور بورتريه ولقطات سلويت سينمائية مع الخيل العربية الأصيلة عند التقاء الرمال بمياه البحر.',
      de: 'Kinoreife Porträts und dramatische Silhouetten bei Sonnenuntergang am Meer.',
    },
    image: '/assets/extracted/ride-photo.jpg',
    highlightStat: '35+ Edited Photos',
  },
  {
    pageNumber: 8,
    title: {
      en: 'Multilingual International Team',
      ar: 'فريق دولي محترف يتحدث ٧ لغات',
      de: 'Mehrsprachiges internationales Expertenteam',
    },
    subtitle: {
      en: 'English · German · Polish · Italian · Czech · French · Arabic',
      ar: 'العربية · الإنجليزية · الألمانية · الفرنسية · الإيطالية · البولندية · التشيكية',
      de: 'Deutsch · Englisch · Französisch · Italienisch · Polnisch · Tschechisch · Arabisch',
    },
    body: {
      en: 'Our 10+ expert guides and co-founders ensure clear communication, safety briefings, and warm hospitality in your native language.',
      ar: 'أكثر من 10 خبراء ومدربين يضمنون تواصلاً واضحاً وإرشادات سلامة دقيقة بلغتك الأم.',
      de: 'Unsere über 10 Experten sorgen für klare Sicherheitseinweisungen und herzliche Betreuung.',
    },
    image: '/assets/extracted/team-sara.jpg',
    highlightStat: '7 Languages Spoken',
  },
  {
    pageNumber: 9,
    title: {
      en: 'Safety Standards & Family-Friendly Guarantee',
      ar: 'معايير السلامة الصارمة وملاءمة العائلات',
      de: 'Sicherheitsstandards & Familienfreundlichkeit',
    },
    subtitle: {
      en: 'Certified Helmets · Lead-Rope Support · Calm Horses',
      ar: 'خوذات معتمدة · مرافقة خاصة للأطفال والمبتدئين · خيول هادئة',
      de: 'Zertifizierte Helme · Führstrick-Begleitung · Ruhige Pferde',
    },
    body: {
      en: 'Whether it is your child’s very first time on a horse or you are an experienced dressage rider, we customize pace and supervision.',
      ar: 'سواء كانت هذه المرة الأولى لطفلك على ظهر الخيل أو كنت فارساً متمرساً، نخصص سرعة الجولة ومستوى الإشراف ليناسبك.',
      de: 'Ob Anfänger, Kind oder erfahrener Reiter – wir passen Tempo und Betreuung individuell an.',
    },
    image: '/assets/extracted/gallery-1.jpg',
    highlightStat: '100% Supervised',
  },
  {
    pageNumber: 10,
    title: {
      en: 'Book Your Red Sea Adventure Today',
      ar: 'احجز مغامرتك على ساحل البحر الأحمر اليوم',
      de: 'Buchen Sie Ihr Abenteuer am Roten Meer',
    },
    subtitle: {
      en: 'Port Ghalib, Marsa Alam · Free Hotel Transfers Included',
      ar: 'بورت غالب، مرسى علم · التوصيل المجاني من الفندق مشمول',
      de: 'Port Ghalib, Marsa Alam · Kostenloser Hoteltransfer inklusive',
    },
    body: {
      en: 'Contact Ahmed Imam (+20 106 334 5261), Sara Ifkirene (+20 101 386 8852), or Nadine Heller (+49 162 317 3710) or book directly online.',
      ar: 'تواصل مع أحمد إمام أو سارة إفكيرين أو نادين هيلر عبر واتساب أو احجز مباشرة عبر الموقع.',
      de: 'Kontaktieren Sie Ahmed, Sara oder Nadine per WhatsApp oder buchen Sie direkt online.',
    },
    image: '/assets/extracted/gallery-2.jpg',
    highlightStat: 'Instant Confirmation',
  },
];
