import { createContext, useState } from "react";
import { DEFAULT_SETTINGS } from "../lib/constants/presets";
import { BannerSettings, BannerTypes } from "../types";

export const BannerContext = createContext<BannerTypes>({
  resetSettings: () => {},
  updateSettings: () => {},
  settings: DEFAULT_SETTINGS,
});

export default function BannerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return (
    <BannerContext.Provider
      value={{
        updateSettings,
        resetSettings,
        settings,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
}
