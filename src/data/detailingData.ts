import { ServicePackage, Review, AddOnOption } from '../types';
import heroImage from '../assets/images/hero_detail_gloss_1792463321207.jpg';
import interiorImage from '../assets/images/service_interior_detail_1792463321886.jpg';
import exteriorImage from '../assets/images/service_exterior_wash_1792463321515.jpg';
import paintProtectionImage from '../assets/images/service_paint_protection_1792463321512.jpg';

export { heroImage, interiorImage, exteriorImage, paintProtectionImage };

export const BUSINESS_INFO = {
  name: 'Hawkeye Auto Detail',
  tagline: 'Wichita Falls Premier Automotive Detailing & Ceramic Coatings',
  street: 'Christine Rd',
  city: 'Wichita Falls',
  state: 'TX',
  zip: '76302',
  phone: '(940) 555-4295',
  phoneRaw: '+19405554295',
  email: 'service@hawkeyeautodetail.com',
  rating: 5.0,
  reviewCount: 128,
  hours: [
    { days: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
    { days: 'Saturday', hours: '8:00 AM – 4:00 PM' },
    { days: 'Sunday', hours: 'By Advance Appointment' },
  ],
  serviceAreas: [
    'Wichita Falls (All Neighborhoods)',
    'Sheppard Air Force Base',
    'Burkburnett',
    'Iowa Park',
    'Lakeside City',
    'Pleasant Valley',
    'Holiday',
    'Henrietta',
  ],
};

export const SERVICES: ServicePackage[] = [
  {
    id: 'interior-detail',
    name: 'Interior Detailing',
    badge: 'Deep Clean & Sanitize',
    tagline: 'Complete cabin renewal with hot steam extraction and leather preservation.',
    description:
      'Engineered to return your vehicle’s cabin to showroom fresh standards. We tackle embedded Texas red dirt, coffee stains, pet dander, and allergen buildup using hospital-grade dry steam and pH-balanced conditioners.',
    image: interiorImage,
    duration: '3.0 – 4.5 hrs',
    startingPrice: 165,
    popular: true,
    features: [
      'High-pressure compressed air purge of all seams & under-seat tracks',
      'Hot water commercial extraction on carpets, floor mats & upholstery',
      'Gentle agitation & deep cleansing of delicate leather seating',
      'UV-blocking matte protection applied to dash, console & door panels (non-greasy)',
      'Dry steam antimicrobial sanitation on AC vents & ductwork',
      'Streak-free crystal clear interior glass & mirror polish',
      'Enzymatic odor neutralizer leaving a fresh, natural cabin scent',
    ],
  },
  {
    id: 'exterior-wash',
    name: 'Exterior Wash & Decon',
    badge: 'Touchless Safe Wash',
    tagline: 'Multi-stage scratch-free wash, chemical decontamination, and high-gloss sealant.',
    description:
      'Far beyond a tunnel car wash. We utilize a two-bucket grit-guard system with deionized spot-free water, thick pH-neutral snow foam, wheel barrel detailing, and paint decontamination to preserve clear coat clarity.',
    image: exteriorImage,
    duration: '2.0 – 3.0 hrs',
    startingPrice: 120,
    features: [
      'Touchless high-pressure rinse removing loose dirt & road grime',
      'Thick snow foam cannon pre-wash breaking down traffic film',
      '2-bucket hand wash with ultra-plush microfiber mitts',
      'Wheel faces, deep inner barrels, and brake calipers detailed',
      'Chemical iron fallout remover dissolving embedded industrial brake dust',
      'Synthetic clay bar treatment for silky-smooth glass-like paint texture',
      '6-month hydrophobic ceramic spray sealant application',
      'Tire conditioning with no-sling satin finish & wheel arch dressing',
    ],
  },
  {
    id: 'paint-protection',
    name: 'Paint Protection & Ceramic',
    badge: 'Ultimate Durability',
    tagline: 'Multi-stage machine paint correction and multi-year ceramic nano-coatings.',
    description:
      'The gold standard of paint preservation. We eliminate swirl marks, light scratches, and oxidation via dual-action machine polishing before sealing your vehicle under a 9H hardness ceramic shield engineered for the Texas sun.',
    image: paintProtectionImage,
    duration: '6.0 – 10.0 hrs',
    startingPrice: 450,
    popular: false,
    features: [
      'Complete paint depth measurement inspection across all panels',
      'Precision 1-step or 2-step machine swirl mark correction',
      'IPA panel wipe to ensure 100% pure bonding surface',
      'Professional 9H nano-ceramic coating (3-Year or 5-Year options)',
      'Extreme hydrophobic water beading shedding rainwater, dirt & road oils',
      'UV protection shielding clear coat against Texas solar oxidation & bird drop etching',
      'Full exterior glass ceramic coating & wheel face protection included',
      'Warranty documentation & digital car care maintenance guide',
    ],
  },
];

export const ADD_ONS: AddOnOption[] = [
  {
    id: 'pet-hair',
    name: 'Heavy Pet Hair Extraction',
    description: 'Specialized rubber squeegees, pumice brushes, and static tools for stubborn fur removal.',
    price: 45,
    duration: '+45 min',
  },
  {
    id: 'engine-bay',
    name: 'Engine Bay Detail & Dressing',
    description: 'Gentle degreasing, safe rinse, drying, and non-greasy satin rubber/plastic dressing.',
    price: 60,
    duration: '+45 min',
  },
  {
    id: 'headlight-restoration',
    name: 'Headlight UV Restoration',
    description: 'Multi-stage wet sanding to clear oxidation plus ceramic UV clear coat sealant.',
    price: 75,
    duration: '+1 hr',
  },
  {
    id: 'windshield-ceramic',
    name: 'Windshield Ceramic Rain Guard',
    description: 'Deep glass polish and high-durability hydrophobic coating for wet weather clarity.',
    price: 40,
    duration: '+30 min',
  },
];

export const VEHICLE_SIZE_RATES: Record<string, { label: string; multiplier: number; desc: string }> = {
  coupe_sedan: {
    label: 'Coupe / Sedan',
    multiplier: 1.0,
    desc: 'Corvette, Mustang, Civic, Camry, Model 3',
  },
  midsize_suv_truck: {
    label: 'Mid-Size SUV / Truck',
    multiplier: 1.25,
    desc: 'F-150, Silverado, RAV4, Explorer, 4Runner',
  },
  fullsize_suv_van: {
    label: 'Full-Size SUV / HD Truck',
    multiplier: 1.45,
    desc: 'Tahoe, Suburban, F-250 Super Duty, Yukon, Minivan',
  },
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Colton Vance',
    location: 'Wichita Falls, TX',
    vehicle: '2022 Ford F-150 King Ranch',
    rating: 5,
    date: '2 weeks ago',
    title: 'Took away 2 years of ranch dirt & made it look better than day one',
    comment:
      'My truck works on our property near Burkburnett and was caked in red clay and grease. Hawkeye brought the interior leather back to life and did a ceramic coating that makes rainwater just roll off like glass. Honest guys, great communication on Christine Rd.',
    serviceCategory: 'paint_protection',
  },
  {
    id: 'rev-2',
    name: 'Sarah Lindley',
    location: 'Sheppard AFB Area, TX',
    vehicle: '2023 Toyota Highlander',
    rating: 5,
    date: '1 month ago',
    title: 'With two toddlers, my interior was a disaster. Now it smells brand new!',
    comment:
      'Goldfish crumbs, juice stains, and dog hair were completely eliminated. They took their time with the steam cleaner and cleaned every single crevice under the car seats. The mobile unit came right to my driveway. 10/10 recommend!',
    serviceCategory: 'interior',
  },
  {
    id: 'rev-3',
    name: 'Marcus Ramirez',
    location: 'Wichita Falls, TX',
    vehicle: '2021 Porsche Cayman GTS',
    rating: 5,
    date: '3 weeks ago',
    title: 'Paint correction eliminated swirls that drive me crazy',
    comment:
      'I am very picky about who touches my Porsche. Hawkeye Auto Detail showed deep technical knowledge of clear coat hardness and pad combinations. Under direct inspection lamps there isn’t a single swirl remaining. Absolute masters.',
    serviceCategory: 'paint_protection',
  },
  {
    id: 'rev-4',
    name: 'David Kincaid',
    location: 'Iowa Park, TX',
    vehicle: '2020 Chevrolet Silverado 2500HD',
    rating: 5,
    date: '1 month ago',
    title: 'Best exterior wash in North Texas. Real attention to detail.',
    comment:
      'Most places rush exterior washes and leave water spots. Hawkeye cleans behind the door jambs, inner wheel barrels, and exhausts. The deionized water wash left no spots whatsoever in 90-degree Texas heat.',
    serviceCategory: 'exterior',
  },
  {
    id: 'rev-5',
    name: 'Elena Morales',
    location: 'Wichita Falls, TX',
    vehicle: '2024 Lexus RX 350',
    rating: 5,
    date: '2 months ago',
    title: 'Professional, punctual, and worth every penny',
    comment:
      'Got the Full Signature package before an out-of-town trip. Booking online was effortless and they kept me updated on timing. When I picked up my Lexus on Christine Rd, it was immaculate. Will definitely be a repeat client.',
    serviceCategory: 'interior',
  },
  {
    id: 'rev-6',
    name: 'Travis Holloway',
    location: 'Henrietta, TX',
    vehicle: '2019 Dodge Challenger Scat Pack',
    rating: 5,
    date: '3 months ago',
    title: 'The ceramic coating shine turns heads everywhere I go',
    comment:
      'The gloss on the TorRed paint is blinding. Washing the car on weekends takes 15 minutes now because grime simply can’t stick to the ceramic shield. Hawkeye is the only shop I trust with my muscle car.',
    serviceCategory: 'paint_protection',
  },
];

export const FAQS = [
  {
    question: 'Where are you located and do you offer mobile detailing?',
    answer:
      'Our primary detailing studio is located on Christine Rd in Wichita Falls, TX 76302. In addition to our dedicated studio bay (ideal for multi-day ceramic coatings and intensive paint correction), we also operate a fully self-contained mobile detailing unit equipped with spot-free deionized water and quiet power to detail your vehicle at your home or workplace.',
  },
  {
    question: 'How long does a detailing service usually take?',
    answer:
      'An Exterior Wash & Decon takes approximately 2 to 3 hours. A Full Interior Restoration typically takes 3 to 4.5 hours depending on initial soil levels. Comprehensive paint correction and ceramic coatings require 6 to 10 hours or an overnight cure cycle in our controlled studio.',
  },
  {
    question: 'What is the difference between wax and ceramic coating?',
    answer:
      'Traditional carnauba wax provides a warm shine that typically degrades within 4 to 8 weeks in harsh Texas sun and rain. A true 9H ceramic coating chemically bonds to your factory clear coat, providing years of scratch resistance, intense UV protection, extreme hydrophobic water beading, and unmatched chemical resistance.',
  },
  {
    question: 'What forms of payment do you accept?',
    answer:
      'We accept all major credit/debit cards (Visa, MasterCard, Amex, Discover), Apple Pay, Google Pay, Zelle, and cash. Invoices and digital receipts are provided immediately upon completion.',
  },
  {
    question: 'Do I need to do anything to prepare my vehicle?',
    answer:
      'For interior services, we kindly ask that you remove personal items, firearms, and high-value belongings from the cabin and trunk. This allows our technicians to dedicate 100% of the scheduled time to precision cleaning and sanitizing every inch of your vehicle.',
  },
];
