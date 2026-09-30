export interface Doctor {
  id: string;
  name: string;
  title: string;
  isCeo?: boolean;
  qualifications: string;
  pmdcReg: string;
  specialty: string;
  subSpecialties: string[];
  schedule: string;
  scheduleTag: string; // e.g. "Daily OPD", "Sat & Sun", "Friday OPD"
  scheduleTagColor?: string;
  availableDays: string[];
  opdHours: string;
  consultationFee: number;
  roomNumber: string;
  image: string;
  bio: string;
  treatments: string[];
}

export interface ClinicalFacility {
  id: string;
  name: string;
  description: string;
  iconName: string;
  category: 'critical' | 'diagnostic' | 'maternity' | 'inpatient' | 'emergency';
  details?: string;
  equipment?: string[];
  timing: string;
}

export interface VisualService {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  image: string;
  description: string;
  departments: string[];
}

export interface FuturePlan {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  expectedDate: string;
  status: string;
}

export interface Appointment {
  id: string;
  tokenNumber: string;
  patientName: string;
  patientPhone: string;
  patientAge: string;
  patientGender: 'Male' | 'Female' | 'Other';
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  doctorPmdc: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}
