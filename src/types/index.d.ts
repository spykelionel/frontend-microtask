export interface BannerPreset {
  title: string;
  text: string;
  image: string;
}

export interface BannerPresets {
  [key: string]: BannerPreset;
}

export interface BannerSettings {
  style: string;
  overlayOpacity: number;
  customTitle: string;
  customText: string;
  customImage: string | null;
  accentColor: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundStyle?: "image" | "color";
  settings: any;
  updateSettings: any;
  resetSettings: any;
}

export interface BannerTypes {
  settings: BannerSettings;
  updateSettings: any;
  resetSettings: any;
}
