import { Sliders } from "lucide-react";
import React from "react";
import useBannerContext from "../../hooks/useBannerContext";
import ActionButtons from "./form-sections/ActionButtons";
import BackgroundColorControl from "./form-sections/BackgroundColorControl";
import TextControls from "./form-sections/TextControls";
import TextStyleControls from "./form-sections/TextStyleControls";

const CustomizationForm: React.FC = () => {
  const { settings, updateSettings } = useBannerContext();
  return (
    <div
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 mb-8"
      data-testid="customization-form"
    >
      <h2 className="text-2xl font-bold mb-6">Customize Your Banner</h2>

      <div className="grid grid-cols-1">
        <div className="">
          {/* <BannerStyleSelector /> */}
          <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <Sliders size={18} className="mr-2 text-blue-500" />
            Overlay Opacity: {settings.overlayOpacity}
          </label>
          <input
            type="range"
            min="0"
            max="0.9"
            step="0.1"
            value={settings.overlayOpacity}
            onChange={(e) =>
              updateSettings({ overlayOpacity: parseFloat(e.target.value) })
            }
            className="w-full accent-blue-500"
            data-testid="opacity-slider"
          />
          <BackgroundColorControl />
        </div>

        <div className="md:col-span-2">
          <TextStyleControls />
          <TextControls />
        </div>
      </div>

      <ActionButtons />
    </div>
  );
};

export default CustomizationForm;
