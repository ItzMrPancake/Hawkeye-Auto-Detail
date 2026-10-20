export type VehicleSize = 'coupe_sedan' | 'midsize_suv_truck' | 'fullsize_suv_van';

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  image: string;
  duration: string;
  startingPrice: number;
  features: string[];
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  serviceCategory: 'all' | 'interior' | 'exterior' | 'paint_protection';
}

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  vehicleYearMakeModel: string;
  vehicleSize: VehicleSize;
  serviceId: string;
  serviceLocation: 'studio' | 'mobile';
  preferredDate: string;
  preferredTime: string;
  addOnIds: string[];
  notes: string;
}
