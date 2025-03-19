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
}
