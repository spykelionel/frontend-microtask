import React from "react";
import ActionButtons from "./form-sections/ActionButtons";
import BannerStyleSelector from "./form-sections/BannerStyleSelector";
import ImageUploader from "./form-sections/ImageUploader";
import OverlayControls from "./form-sections/OverlayControls";
import TextControls from "./form-sections/TextControls";
import { CustomizationFormProps } from "./types";

const CustomizationForm: React.FC<CustomizationFormProps> = ({
  settings,
  updateSettings,
  resetSettings,
  accentColor,
}) => {
  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 mb-8"
      data-testid="customization-form"
    >
      <h2 className="text-2xl font-bold mb-6">Customize Your Banner</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BannerStyleSelector
          settings={settings}
          updateSettings={updateSettings}
          accentColor={accentColor}
        />

        <ImageUploader
          settings={settings}
          updateSettings={updateSettings}
          accentColor={accentColor}
        />

        <OverlayControls
          settings={settings}
          updateSettings={updateSettings}
          accentColor={accentColor}
        />

        <div className="md:col-span-2">
          <TextControls
            settings={settings}
            updateSettings={updateSettings}
            accentColor={accentColor}
          />
        </div>
      </div>

      <ActionButtons resetSettings={resetSettings} accentColor={accentColor} />
    </div>
  );
};

export default CustomizationForm;
