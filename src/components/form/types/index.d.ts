import { BannerSettings } from "../../../types";

export interface CustomizationFormProps {
  settings: BannerSettings;
  updateSettings: (settings: Partial<BannerSettings>) => void;
  resetSettings: () => void;
  accentColor?: string;
}

export interface FormSectionProps {
  settings: BannerSettings;
  updateSettings: (settings: Partial<BannerSettings>) => void;
  accentColor?: string;
}

export interface ActionButtonsProps {
  resetSettings: () => void;
}
