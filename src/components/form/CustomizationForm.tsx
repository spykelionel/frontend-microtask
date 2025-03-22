import React from "react";
import ActionButtons from "./form-sections/ActionButtons";
import BannerStyleSelector from "./form-sections/BannerStyleSelector";
import ImageUploader from "./form-sections/ImageUploader";
import OverlayControls from "./form-sections/OverlayControls";
import TextControls from "./form-sections/TextControls";

const CustomizationForm: React.FC = () => {
  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 mb-8"
      data-testid="customization-form"
    >
      <h2 className="text-2xl font-bold mb-6">Customize Your Banner</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BannerStyleSelector />

        <ImageUploader />

        <OverlayControls />

        <div className="md:col-span-2">
          <TextControls />
        </div>
      </div>

      <ActionButtons />
    </div>
  );
};

export default CustomizationForm;
