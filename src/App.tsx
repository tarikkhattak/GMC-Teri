/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DoctorsSection } from './components/DoctorsSection';
import { FuturePlansSection } from './components/FuturePlansSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Footer } from './components/Footer';

import { AppointmentModal } from './components/AppointmentModal';
import { DoctorDetailModal } from './components/DoctorDetailModal';
import { FacilityModal } from './components/FacilityModal';
import { MyAppointmentsModal } from './components/MyAppointmentsModal';
import { AmbulanceModal } from './components/AmbulanceModal';
import { FuturePlanModal } from './components/FuturePlanModal';

import { Doctor, ClinicalFacility, VisualService, FuturePlan, Appointment } from './types/medical';
import { DOCTORS } from './data/medicalData';

export default function App() {
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMyAppointmentsOpen, setIsMyAppointmentsOpen] = useState(false);
  const [isAmbulanceOpen, setIsAmbulanceOpen] = useState(false);
  
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [bookingPreselectedDoctor, setBookingPreselectedDoctor] = useState<Doctor | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<ClinicalFacility | null>(null);
  const [selectedService, setSelectedService] = useState<VisualService | null>(null);
  const [selectedFuturePlan, setSelectedFuturePlan] = useState<FuturePlan | null>(null);

  // Appointments storage
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const stored = localStorage.getItem('gmc_patient_appointments');
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    // Seed with a default appointment
    return [
      {
        id: 'apt-sample-01',
        tokenNumber: 'GMC-8142',
        patientName: 'Mohammad Khan',
        patientPhone: '0348-9542969',
        patientAge: '45',
        patientGender: 'Male',
        doctorId: 'dr-naseer-ullah',
        doctorName: 'Dr. Naseer Ullah Khattak',
        doctorSpecialty: 'Consultant Orthopedic & Spine Surgeon',
        doctorPmdc: '25705-N',
        date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
        timeSlot: '10:30 AM',
        symptoms: 'Lower back stiffness & sciatica nerve discomfort',
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      }
    ];
  });

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('gmc_patient_appointments', JSON.stringify(appointments));
    } catch (e) {
      console.error('Failed to save appointments in localStorage', e);
    }
  }, [appointments]);

  // Handlers
  const handleOpenBooking = (doctor?: Doctor) => {
    if (doctor) {
      setBookingPreselectedDoctor(doctor);
    } else {
      setBookingPreselectedDoctor(null);
    }
    setIsBookingOpen(true);
  };

  const handleAppointmentBooked = (newAppointment: Appointment) => {
    setAppointments(prev => [newAppointment, ...prev]);
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments(prev => prev.filter(apt => apt.id !== id));
  };

  const handleViewServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Top emergency ribbon & main navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
        onOpenAmbulance={() => setIsAmbulanceOpen(true)}
        savedAppointmentsCount={appointments.length}
      />

      <main className="flex-1">
        {/* Hero Section with Consultation Image, CTAs, & 4 Stats */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onViewServices={handleViewServices}
        />

        {/* About Ghazni Medical Centre Section with Hospital Complex Photo */}
        <AboutSection />

        {/* Medical Services & 15 Clinical Facilities */}
        <ServicesSection
          onSelectFacility={(facility) => setSelectedFacility(facility)}
          onSelectService={(service) => setSelectedService(service)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Experienced Specialist Doctors Section */}
        <DoctorsSection
          onSelectDoctor={(doctor) => setSelectedDoctor(doctor)}
          onBookDoctor={(doctor) => handleOpenBooking(doctor)}
        />

        {/* Strategic Expansion: Future Plans (4 upcoming wings) */}
        <FuturePlansSection
          onSelectPlan={(plan) => setSelectedFuturePlan(plan)}
        />

        {/* 24/7 Immediate Medical Assistance Emergency Banner */}
        <EmergencyBanner
          onOpenBooking={() => handleOpenBooking()}
          onOpenAmbulance={() => setIsAmbulanceOpen(true)}
        />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenAmbulance={() => setIsAmbulanceOpen(true)}
      />

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedDoctor={bookingPreselectedDoctor}
        onAppointmentBooked={handleAppointmentBooked}
      />

      <DoctorDetailModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBook={(doctor) => handleOpenBooking(doctor)}
      />

      <FacilityModal
        facility={selectedFacility}
        service={selectedService}
        onClose={() => {
          setSelectedFacility(null);
          setSelectedService(null);
        }}
        onOpenBooking={() => handleOpenBooking()}
      />

      <MyAppointmentsModal
        isOpen={isMyAppointmentsOpen}
        onClose={() => setIsMyAppointmentsOpen(false)}
        appointments={appointments}
        onCancelAppointment={handleCancelAppointment}
        onOpenBooking={() => {
          setIsMyAppointmentsOpen(false);
          handleOpenBooking();
        }}
      />

      <AmbulanceModal
        isOpen={isAmbulanceOpen}
        onClose={() => setIsAmbulanceOpen(false)}
      />

      <FuturePlanModal
        plan={selectedFuturePlan}
        onClose={() => setSelectedFuturePlan(null)}
      />
    </div>
  );
}
