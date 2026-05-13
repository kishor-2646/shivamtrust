// All shared TypeScript types for the project

export interface Program {
  icon: string;
  title: string;
  desc: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface GalleryItem {
  bg: string;
  label: string;
  icon: string;
}

export interface UrgentNeed {
  icon: string;
  text: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface ContactForm {
  name: string;
  email: string;
  msg: string;
}
