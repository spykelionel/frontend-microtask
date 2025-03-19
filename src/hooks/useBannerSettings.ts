// src/hooks/useBannerSettings.ts
import { useState } from "react";
import {
  bannerBackgrounds,
  bannerPresets,
  DEFAULT_SETTINGS,
} from "../lib/constants/presets";
import { BannerSettings } from "../types";

export const useBannerSettings = () => {
  const [settings, setSettings] = useState<BannerSettings>(DEFAULT_SETTINGS);

  const updateSettings = (newSettings: Partial<BannerSettings>) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      ...newSettings,
    }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  // Helper functions to get current values based on settings
  const getCurrentBannerImage = (): string => {
    if (settings.customImage) {
      return settings.customImage;
    }
    return bannerBackgrounds[settings.style] || bannerBackgrounds.beach;
  };

  const getCurrentBannerTitle = (): string => {
    if (settings.customTitle) {
      return settings.customTitle;
    }
    return bannerPresets[settings.style]?.title || "Exploring the World";
  };

  const getCurrentBannerText = (): string => {
    if (settings.customText) {
      return settings.customText;
    }
    return (
      bannerPresets[settings.style]?.text ||
      "Traveling has been my passion since I was young."
    );
  };

  return {
    settings,
    updateSettings,
    resetSettings,
    getCurrentBannerImage,
    getCurrentBannerTitle,
    getCurrentBannerText,
  };
};

export default useBannerSettings;
