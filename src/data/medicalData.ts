import { Doctor, ClinicalFacility, VisualService, FuturePlan } from '../types/medical';

export const HOSPITAL_INFO = {
  name: "Ghazni Medical Centre",
  shortName: "GMC",
  tagline: "Excellence in Medical Care, Every Step of the Way",
  subtagline: "Providing expert medical care, trusted specialist doctors, and 24/7 advanced emergency services under one roof in Ghazni.",
  address: "Near Darul Uloom Arabia, Old Larri Adda Terri, Tehsil Banda Daud Shah, District Karak, Khyber Pakhtunkhwa",
  emergencyHotlines: ["0927-290248", "0348-9542969"],
  secondaryHotline: "0337-5168513",
  email: "ghaznimedicalcentre@gmail.com",
  registration: "Licensed by Healthcare Commission & PMDC Verified Specialists",
  hours: "24 Hours Emergency & Ambulance Facility, Daily Specialist OPD",
};

export const DOCTORS: Doctor[] = [
  {
    id: "dr-ghazni-gul",
    name: "Dr. Ghazni Gul Khattak",
    title: "Medical Specialist",
    qualifications: "MBBS, FCPS (II)",
    pmdcReg: "6291-N",
    specialty: "General & Internal Medicine",
    subSpecialties: ["Diabetes Care", "Hypertension", "Infectious Diseases", "Liver & Jaundice"],
    schedule: "Daily OPD",
    scheduleTag: "Daily OPD",
    scheduleTagColor: "emerald",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opdHours: "09:00 AM - 03:00 PM & 05:00 PM - 09:00 PM",
    consultationFee: 1000,
    roomNumber: "OPD Suite 01 (Ground Floor)",
    image: "/doctors/dr_ghazni.jpg",
    bio: "Dr. Ghazni Gul Khattak is an acclaimed senior medical specialist with comprehensive expertise in complex internal medicine, endocrinology, chronic diabetes management, metabolic disorders, and acute infectious disease intervention.",
    treatments: [
      "Diabetes Mellitus Management & Insulin Optimization",
      "Blood Pressure & Hypertension Control",
      "Jaundice, Hepatitis & Hepatic Disorders",
      "Persistent Fever & Tropical Infections",
      "Malaria, Typhoid & Seasonal Epidemics Management"
    ]
  },
  {
    id: "dr-rukhsana-naseer",
    name: "Dr. Rukhsana Naseer",
    title: "Gynecology & Obstetrics",
    qualifications: "FCPS (Gynae & Obs)",
    pmdcReg: "25788-N",
    specialty: "Gynecology & Obstetrics",
    subSpecialties: ["High-Risk Pregnancy", "Infertility Management", "Maternity & C-Section", "Women's Health"],
    schedule: "Daily OPD",
    scheduleTag: "Daily OPD",
    scheduleTagColor: "emerald",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opdHours: "10:00 AM - 04:00 PM",
    consultationFee: 1200,
    roomNumber: "Maternity Wing 02 (1st Floor)",
    image: "/doctors/dr_rukhsana.jpg",
    bio: "Dr. Rukhsana Naseer is a fellowship-trained consultant obstetrician and gynecologist dedicated to compassionate women's healthcare, painless deliveries, high-risk obstetric monitoring, and maternal-fetal wellness.",
    treatments: [
      "Complete Women's Health & Gynecological Diagnostics",
      "Infertility Evaluation & Family Planning / Child Spacing",
      "Antenatal Checkups & High-Risk Pregnancy Monitoring",
      "Normal Delivery, Painless Labor & Elective/Emergency C-Section",
      "Pelvic Ultrasound & CTG Fetal Heartbeat Monitoring"
    ]
  },
  {
    id: "dr-naseer-ullah",
    name: "Dr. Naseer Ullah Khattak",
    title: "Chief Executive Officer (CEO) & Consultant Orthopedic & Spine Surgeon",
    isCeo: true,
    qualifications: "MBBS, FCPS (Ortho & Trauma)",
    pmdcReg: "25705-N",
    specialty: "Orthopedic & Spine Surgery",
    subSpecialties: ["Trauma Surgery", "Spine Decompression", "Joint Reconstruction", "Sciatica Relief"],
    schedule: "Daily OPD",
    scheduleTag: "Daily OPD",
    scheduleTagColor: "emerald",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opdHours: "09:00 AM - 02:00 PM & 06:00 PM - 09:00 PM",
    consultationFee: 1500,
    roomNumber: "Orthopedic Suite 03 & Executive Office",
    image: "/doctors/dr_naseer.jpg",
    bio: "Dr. Naseer Ullah Khattak serves as the Chief Executive Officer of Ghazni Medical Centre and is a renowned Consultant Orthopedic & Spine Surgeon. He brings advanced surgical expertise in trauma reconstruction, spinal disorders, complex bone fractures, and joint preservation.",
    treatments: [
      "Bone & Joint Fractures Reconstruction",
      "Sciatica, Slip Disc & Chronic Lower Back Pain",
      "Cervical Spine Pain & Neck Stiffness Intervention",
      "Emergency Road Trauma & Complex Orthopedic Surgeries",
      "Osteoarthritis, Knee/Hip Pain & Joint Injections"
    ]
  },
  {
    id: "dr-hamad-azam",
    name: "Dr. Hamad Azam Khattak",
    title: "Interventional Cardiologist",
    qualifications: "MBBS, FCPS (Cardiology)",
    pmdcReg: "24164-N",
    specialty: "Cardiology",
    subSpecialties: ["Interventional Cardiology", "Angiography & Stents", "Heart Attack Management", "Echocardiography"],
    schedule: "Weekend (Sat-Sun)",
    scheduleTag: "Sat & Sun",
    scheduleTagColor: "sky",
    availableDays: ["Saturday", "Sunday"],
    opdHours: "09:00 AM - 05:00 PM (Weekend Clinic)",
    consultationFee: 1500,
    roomNumber: "Cardiac Care Suite 04 (Ground Floor)",
    image: "/doctors/dr_hamad.jpg",
    bio: "Dr. Hamad Azam Khattak is an eminent Interventional Cardiologist specializing in preventive cardiac screening, acute coronary syndrome intervention, post-stent cardiac rehabilitation, and advanced echocardiography.",
    treatments: [
      "Acute Heart Attack Diagnosis & Emergency Stabilization",
      "High Blood Pressure & Resistant Hypertension Management",
      "Stroke Prevention & Cerebrovascular Risk Reduction",
      "Coronary Artery Stent Follow-up & Sugar / Lipid Balance",
      "ECG & Comprehensive Color Doppler Echocardiography"
    ]
  },
  {
    id: "dr-ayub-sabir",
    name: "Dr. Ayub Sabir Khattak",
    title: "Pediatrician & Neonatologist",
    qualifications: "MBBS, FCPS-II (Pediatric Medicine)",
    pmdcReg: "31218-N",
    specialty: "Pediatrics & Neonatology",
    subSpecialties: ["Newborn Intensive Care", "Preterm Infant Care", "Child Nutrition", "EPI Vaccination"],
    schedule: "Daily OPD",
    scheduleTag: "Daily OPD",
    scheduleTagColor: "emerald",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opdHours: "09:00 AM - 04:00 PM",
    consultationFee: 1000,
    roomNumber: "Pediatric Care Clinic 05 (1st Floor)",
    image: "/doctors/dr_ayub.jpg",
    bio: "Dr. Ayub Sabir Khattak is an experienced Pediatrician and Neonatologist leading GMC's state-of-the-art NICU and child health clinic. He specializes in preterm newborn survival, infant growth milestones, and pediatric emergency resuscitation.",
    treatments: [
      "Comprehensive Children Diseases & Acute Illness Care",
      "Preterm Care, Low Birth Weight & Incubator Management",
      "Infant Nutrition, Growth Milestones & Stunting Prevention",
      "Complete Pediatric Immunization & EPI Vaccinations",
      "Neonatal Jaundice Phototherapy & Exchange Transfusion"
    ]
  },
  {
    id: "dr-sajjad-anwar",
    name: "Dr. Sajjad Anwar Khattak",
    title: "General & Laparoscopic Surgeon",
    qualifications: "MBBS, FCPS (General Surgery)",
    pmdcReg: "14679-4",
    specialty: "General & Laparoscopic Surgery",
    subSpecialties: ["Laparoscopic Gallbladder", "Hernia Repair", "Diabetic Foot Salvage", "Thyroid & Gastrointestinal"],
    schedule: "Every Friday",
    scheduleTag: "Friday OPD",
    scheduleTagColor: "purple",
    availableDays: ["Friday"],
    opdHours: "08:00 AM - 06:00 PM (Every Friday)",
    consultationFee: 1500,
    roomNumber: "Surgical Consultation Suite 06",
    image: "/doctors/dr_sajjad.jpg",
    bio: "Dr. Sajjad Anwar Khattak is a senior consultant general and minimal access laparoscopic surgeon with extensive experience in pinhole abdominal surgeries, complex wound care, thyroid operations, and emergency abdominal trauma.",
    treatments: [
      "Laparoscopic Gallbladder Stone Removal (Cholecystectomy)",
      "Appendix, Hernia & Piles (Hemorrhoids / Fissure / Fistula)",
      "Thyroid Nodules & Goiter Surgical Management",
      "Diabetic Wound Debridement & Limb Salvage Care",
      "Kidney, Ureteric & Bladder Stone Surgeries, Pediatric Stones"
    ]
  }
];

export const CLINICAL_FACILITIES: ClinicalFacility[] = [
  {
    id: "fac-emergency",
    name: "Emergency & 1st Aid",
    description: "24/7 immediate trauma and acute care triage",
    iconName: "Flame",
    category: "emergency",
    timing: "24 Hours / 7 Days",
    equipment: ["Crash Carts", "Cardiac Defibrillator", "Oxygen Manifold", "Multi-Parameter Vitals Monitors"],
    details: "Fully equipped emergency bay with round-the-clock emergency medical officers and registered nurses trained in Advanced Cardiac Life Support (ACLS) and Pediatric Advanced Life Support (PALS)."
  },
  {
    id: "fac-pharmacy",
    name: "Pharmacy",
    description: "Round-the-clock authentic prescription drugs",
    iconName: "Pill",
    category: "critical",
    timing: "24/7 Non-Stop",
    equipment: ["Temperature-Controlled Cold Storage", "Digital Inventory System", "Qualified Pharmacists"],
    details: "Authentic medicines sourced directly from certified pharmaceutical distributors. Stock includes critical emergency injections, cardiovascular drugs, pediatric suspensions, and surgical supplies."
  },
  {
    id: "fac-lab",
    name: "Advanced Laboratory",
    description: "Fully automated pathology & biochemistry",
    iconName: "FlaskConical",
    category: "diagnostic",
    timing: "24 Hours Daily",
    equipment: ["5-Part Hematology Analyzer", "Electrolyte Analyzer", "Clinical Chemistry Unit", "Cross-Match Incubator"],
    details: "Precision diagnostics delivering rapid blood counts, lipid profiles, renal function tests (RFTs), liver function tests (LFTs), cardiac enzymes, and infectious markers within minutes."
  },
  {
    id: "fac-xray",
    name: "Digital X-Rays",
    description: "High-definition computerized radiography",
    iconName: "Scan",
    category: "diagnostic",
    timing: "24 Hours Daily",
    equipment: ["High-Frequency Digital Radiography System", "Low Radiation Dose Sensor", "Instant PACS Viewing"],
    details: "Ultra-sharp skeletal, chest, and abdominal imaging with low radiation exposure. Immediate viewing available on specialist surgeon screens for rapid trauma assessment."
  },
  {
    id: "fac-ecg",
    name: "ECG (Electrocardiogram)",
    description: "Immediate cardiac rhythm analysis",
    iconName: "HeartPulse",
    category: "diagnostic",
    timing: "Immediate Standby (24/7)",
    equipment: ["12-Lead Digital Electrocardiograph", "Automated Arrhythmia Detection", "High-Resolution Thermal Printout"],
    details: "Rapid 12-lead ECG analysis for detecting ischemia, myocardial infarction, bundle branch blocks, and ventricular arrhythmias under cardiologist supervision."
  },
  {
    id: "fac-echo",
    name: "Echocardiography",
    description: "Comprehensive cardiac ultrasound imaging",
    iconName: "Activity",
    category: "diagnostic",
    timing: "Weekend Clinics & On-Call",
    equipment: ["Color Doppler Ultrasound Probe", "Tissue Doppler Imaging", "Ejection Fraction Measurement"],
    details: "State-of-the-art non-invasive cardiac imaging evaluating heart valve function, ventricular ejection fraction, wall motion abnormalities, and pericardial effusion."
  },
  {
    id: "fac-ctg",
    name: "CTG Monitoring",
    description: "Cardiotocography for fetal wellbeing",
    iconName: "Waveform",
    category: "maternity",
    timing: "Continuous During Labor",
    equipment: ["Dual Ultrasonic Fetal Transducers", "Uterine Tocodynamometer", "Synchronized Print Recording"],
    details: "Continuous continuous assessment of fetal heart rates and maternal uterine contractions during labor to preemptively identify any signs of fetal distress."
  },
  {
    id: "fac-labor",
    name: "Dedicated Labor Room",
    description: "Safe, clean and sanitized maternity delivery",
    iconName: "HeartHandshake",
    category: "maternity",
    timing: "24/7 Maternity Service",
    equipment: ["Ergonomic Obstetric Delivery Beds", "Baby Resuscitation Island", "Sterile Delivery Kits"],
    details: "Private, hygienic labor suites designed for mother privacy and safe normal delivery under the direct care of FCPS gynecologists and senior midwives."
  },
  {
    id: "fac-ots",
    name: "Two Operation Theatres",
    description: "Sterile modular surgical units",
    iconName: "Scissors",
    category: "critical",
    timing: "Scheduled & Emergency Surgeries",
    equipment: ["HEPA Laminar Air Flow", "C-Arm Fluoroscopy Ready", "High-Definition Laparoscopic Tower", "Anesthesia Workstation"],
    details: "Two twin modular operation theatres equipped with laminar air filtration, advanced electrocautery, and complete anesthesia workstations for orthopedic and laparoscopic procedures."
  },
  {
    id: "fac-adult-icu",
    name: "Adult ICU",
    description: "Intensive care unit with ventilator monitor",
    iconName: "Heart",
    category: "critical",
    timing: "24/7 Continuous Monitoring",
    equipment: ["Invasive Mechanical Ventilator", "Multipara Central Monitor", "Syringe & Infusion Pumps", "Arterial Blood Gas Ready"],
    details: "Dedicated critical care beds for post-operative recovery, severe polytrauma, sepsis, and unstable cardiac or respiratory conditions with 1:1 nursing care."
  },
  {
    id: "fac-nicu",
    name: "Neonatal & Peads ICU",
    description: "NICU & PICU dedicated infant life support",
    iconName: "Baby",
    category: "critical",
    timing: "24/7 Specialist Supervised",
    equipment: ["Neonatal Incubators", "CPAP & High-Flow Nasal Cannula", "Micro-infusion Syringe Drivers"],
    details: "The premier neonatal intensive care center in the district, supervised by a consultant pediatrician for preterm babies, respiratory distress, and neonates requiring intensive stabilization."
  },
  {
    id: "fac-warmers",
    name: "Warmers & Phototherapy",
    description: "Neonatal jaundice and preterm thermal care",
    iconName: "Sun",
    category: "maternity",
    timing: "24/7 Continuous",
    equipment: ["Infant Radiant Warmers with Servo Control", "Intensive Blue LED Phototherapy Lamps"],
    details: "High-intensity double-surface LED phototherapy units and radiant warmers providing precise temperature regulation and rapid reduction of neonatal bilirubin levels."
  },
  {
    id: "fac-transfusion",
    name: "Exchange Transfusion",
    description: "Controlled infant blood exchange therapy",
    iconName: "Droplet",
    category: "critical",
    timing: "Emergency Protocol",
    equipment: ["Sterile Transfusion Cannulas", "Continuous Arterial & Venous Pressure Monitoring", "Infant Blood Warmer"],
    details: "Specialized life-saving procedure conducted by pediatric consultants for severe hemolytic jaundice, Rh-incompatibility, or hyperbilirubinemia encephalopathy prevention."
  },
  {
    id: "fac-rooms",
    name: "Admissions & Private Rooms",
    description: "Comfortable air-conditioned patient recovery",
    iconName: "BedDouble",
    category: "inpatient",
    timing: "24/7 Inpatient Service",
    equipment: ["Electric Fowler Beds", "Nurse Calling Intercom", "Attendant Sofa & Attached Bath", "Medical Gas Outlets"],
    details: "Peaceful, air-conditioned private rooms and spacious semi-private wards providing comfortable post-operative and medical recovery for patients and accompanying family."
  },
  {
    id: "fac-ambulance",
    name: "24/7 Ambulance Fleet",
    description: "Rapid patient transfer and oxygen equipped",
    iconName: "Truck",
    category: "emergency",
    timing: "24/7 On-Demand Dispatch",
    equipment: ["Fixed & Portable Oxygen Cylinders", "Spine Board & Foldable Stretcher", "Suction Unit", "First Responder Med Kit"],
    details: "Dedicated emergency response vehicles with trained paramedic crews for swift patient pickup across Terri, Banda Daud Shah, Karak, and emergency inter-hospital transfers."
  }
];

export const VISUAL_SERVICES: VisualService[] = [
  {
    id: "srv-opd",
    title: "OPD",
    subtitle: "Gynae, Ortho, Surgery & Peads",
    iconName: "Users",
    image: "/services/opd.jpg",
    description: "Specialized outpatient consultations with senior FCPS medical consultants across 6 primary clinical disciplines.",
    departments: ["Internal Medicine", "Obstetrics & Gynecology", "Orthopedics & Spine", "Pediatrics & Neonatology", "General & Laparoscopic Surgery", "Cardiology"]
  },
  {
    id: "srv-private-rooms",
    title: "Private Rooms",
    subtitle: "Private & General Wards",
    iconName: "Bed",
    image: "/services/private_rooms.jpg",
    description: "Spacious, hygienic in-patient admissions with individual climate control, continuous nursing attention, and family comfort.",
    departments: ["Deluxe Private Suites", "Semi-Private Rooms", "General Inpatient Wards", "Day-Care Surgical Recovery"]
  },
  {
    id: "srv-emergency",
    title: "Emergency 24/7",
    subtitle: "Trauma, Triage & 1st Aid",
    iconName: "Flame",
    image: "/src/assets/images/emergency_service_1790755023891.jpg",
    description: "Round-the-clock emergency medical officers, trauma triage, crash carts, and direct access to modular surgical theatres.",
    departments: ["Trauma Resuscitation", "Acute Medical Stabilization", "Minor Surgical Procedures", "24/7 Doctor On-Duty"]
  },
  {
    id: "srv-radiology",
    title: "Radiology",
    subtitle: "Digital X-Ray & Imaging",
    iconName: "Scan",
    image: "/src/assets/images/radiology_lab_1790755036155.jpg",
    description: "Computerized high-definition digital radiography, ultrasonography, echocardiography, and fetal well-being scans.",
    departments: ["Digital Skeletal Radiography", "Chest & Abdominal X-Rays", "Ultrasound Pelvic & Abdomen", "Color Doppler Echo"]
  },
  {
    id: "srv-laboratory",
    title: "Laboratory",
    subtitle: "Pathology & Diagnostics",
    iconName: "FlaskConical",
    image: "/src/assets/images/radiology_lab_1790755036155.jpg",
    description: "Automated hematology, biochemistry, infectious screening, and blood cross-matching with fast-track digital reporting.",
    departments: ["Complete Blood Count (CBC)", "Diabetes (HbA1c & Fasting)", "Lipid & Renal Panels", "Hepatitis & Viral Screening"]
  },
  {
    id: "srv-pharmacy",
    title: "Pharmacy",
    subtitle: "24/7 Authentic Medicines",
    iconName: "Pill",
    image: "/services/pharmacy.jpg",
    description: "Fully stocked licensed in-house pharmacy dispensing verified pharmaceuticals, surgical disposables, and cold-chain vaccines.",
    departments: ["Emergency Life-Saving Injections", "Cardiovascular & Diabetic Regimens", "Pediatric Formulations", "Surgical Sundries"]
  }
];

export const FUTURE_PLANS: FuturePlan[] = [
  {
    id: "plan-eye",
    title: "Eye Consultant (Ophthalmology)",
    subtitle: "Ophthalmology Clinic",
    description: "Advanced refractive surgery, cataract management, glaucoma screening, and pediatric optics.",
    iconName: "Eye",
    expectedDate: "Q3 2026",
    status: "Infrastructure In Progress"
  },
  {
    id: "plan-urology",
    title: "Urologist",
    subtitle: "Urological & Renal Center",
    description: "Kidney stone laser disintegration, urinary bladder therapies, prostate health, and male wellness.",
    iconName: "Beaker",
    expectedDate: "Q4 2026",
    status: "Equipment Procurement"
  },
  {
    id: "plan-paeds-surgeon",
    title: "Paeds Surgeon",
    subtitle: "Pediatric Surgery Wing",
    description: "Congenital deformity surgeries, minimally invasive pediatric procedures, and infant emergencies.",
    iconName: "HeartPulse",
    expectedDate: "Q4 2026",
    status: "Consultant Onboarding"
  },
  {
    id: "plan-gastro",
    title: "Gastroenterologist",
    subtitle: "Digestive & Endoscopy Suite",
    description: "Modern video endoscopy, colonoscopy, hepatic liver disorder treatment, and digestive tract care.",
    iconName: "Activity",
    expectedDate: "Q1 2027",
    status: "Design Phase"
  }
];

export const QUICK_STATS = [
  { label: "Specialist Doctors", value: "10+", icon: "Users", color: "text-blue-600 bg-blue-50" },
  { label: "Served Patients", value: "25000+", icon: "HeartPulse", color: "text-teal-600 bg-teal-50" },
  { label: "Modern Facilities", value: "17+", icon: "BedDouble", color: "text-indigo-600 bg-indigo-50" },
  { label: "Patient Satisfaction", value: "99%", icon: "Award", color: "text-amber-600 bg-amber-50" }
];

export const ABOUT_PILLARS = [
  {
    title: "24 Hours Services",
    subtitle: "Emergency & Triage non-stop",
    icon: "Clock",
    bg: "bg-blue-50 text-blue-600"
  },
  {
    title: "Medical Staff",
    subtitle: "Professional Doctors",
    icon: "UserCheck",
    bg: "bg-teal-50 text-teal-600"
  },
  {
    title: "Modern Facilities",
    subtitle: "High Quality Equipments",
    icon: "ShieldPlus",
    bg: "bg-purple-50 text-purple-600"
  },
  {
    title: "Quality Care",
    subtitle: "Friendly, safe & reliable",
    icon: "HeartHandshake",
    bg: "bg-cyan-50 text-cyan-600"
  }
];
