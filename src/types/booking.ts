export interface PetInfo {
  name: string;
  type: 'dog' | 'cat';
  size: 'small' | 'medium' | 'large';
  age: number;
  weight: number;
  vaccinated: boolean;
  notes?: string;
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  emergencyContact: string;
  emergencyPhone: string;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  pets: PetInfo[];
  contactInfo: ContactInfo;
  saunaPreference: boolean;
  earlyCheckin: boolean;
  lateCheckout: boolean;
  specialRequests?: string;
}

export interface BookingPrice {
  basePrice: number;
  petFees: number;
  optionFees: number;
  totalPrice: number;
  nights: number;
  isWeekend: boolean;
}