import React from "react";
import ActionButtons from "./form-sections/ActionButtons";
import BackgroundColorControl from "./form-sections/BackgroundColorControl";
import TextControls from "./form-sections/TextControls";
import TextStyleControls from "./form-sections/TextStyleControls";

const CustomizationForm: React.FC = () => {
  return (
    <div
      className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 mb-8"
      data-testid="customization-form"
    >
      <h2 className="text-2xl font-bold mb-6">Customize Your Banner</h2>

      <div className="grid grid-cols-1">
        <BackgroundColorControl />

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
