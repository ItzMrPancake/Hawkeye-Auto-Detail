/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { BookingAndContactSection } from './components/BookingAndContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { ServicePackage, VehicleSize } from './types';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('interior-detail');
  const [selectedVehicleSize, setSelectedVehicleSize] = useState<VehicleSize>('midsize_suv_truck');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromCard = (service: ServicePackage) => {
    setSelectedServiceId(service.id);
    scrollToSection('booking');
  };

  const handleQuoteCalculated = (data: {
    vehicleSize: VehicleSize;
    serviceId: string;
    addOnIds: string[];
    estimatedTotal: number;
    estimatedDuration: string;
  }) => {
    setSelectedVehicleSize(data.vehicleSize);
    setSelectedServiceId(data.serviceId);
    setSelectedAddOns(data.addOnIds);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans pb-16 sm:pb-0 selection:bg-sky-500 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onOpenBooking={() => scrollToSection('booking')} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={() => scrollToSection('booking')}
          onQuoteClick={() => scrollToSection('calculator')}
        />

        {/* Core Services Section: Interior Detailing, Exterior Wash, Paint Protection */}
        <ServicesSection onSelectService={handleSelectServiceFromCard} />

        {/* Interactive Before & After Visual Transformation */}
        <BeforeAfterSlider />

        {/* Interactive Instant Quote Calculator */}
        <QuoteCalculator onQuoteCalculated={handleQuoteCalculated} />

        {/* Prominent 5-Star Customer Reviews */}
        <ReviewsSection />

        {/* Service Area & Christine Rd Studio Location Info */}
        <ServiceAreaSection />

        {/* Booking & Contact Form */}
        <BookingAndContactSection
          preselectedServiceId={selectedServiceId}
          preselectedVehicleSize={selectedVehicleSize}
          preselectedAddOns={selectedAddOns}
        />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Comprehensive Footer with Business Hours, Contact Form, Service Area */}
      <Footer />

      {/* Mobile Floating Sticky Bar (< 15% mobile viewport cap) */}
      <MobileQuickBar onBookClick={() => scrollToSection('booking')} />
    </div>
  );
}
