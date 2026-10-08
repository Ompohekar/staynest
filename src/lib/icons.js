import {
  AirVent,
  BadgeCheck,
  BatteryCharging,
  CalendarCheck,
  Car,
  Cctv,
  ShieldCheck,
  SprayCan,
  UtensilsCrossed,
  Wallet,
  WashingMachine,
  Wifi,
} from 'lucide-react'

// Maps amenity ids (see siteData.js) to Lucide icons.
export const amenityIcons = {
  wifi: Wifi,
  food: UtensilsCrossed,
  laundry: WashingMachine,
  ac: AirVent,
  housekeeping: SprayCan,
  cctv: Cctv,
  power: BatteryCharging,
  parking: Car,
}

// Maps icon names used in siteData.js features to components.
export const featureIcons = {
  BadgeCheck,
  ShieldCheck,
  Wallet,
  CalendarCheck,
}
