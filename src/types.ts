export interface Location {
  lat: number;
  lng: number;
}

export interface Incident {
  id: number;
  type: string;
  location: Location;
  description: string;
  timestamp: Date;
  severity: 'low' | 'medium' | 'high';
}