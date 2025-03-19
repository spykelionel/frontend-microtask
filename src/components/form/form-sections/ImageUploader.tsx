import { Camera, CheckCircle } from "lucide-react";
import React from "react";
import { FormSectionProps } from "../types";

const ImageUploader: React.FC<FormSectionProps> = ({
  settings,
  updateSettings,
  accentColor,
}) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateSettings({ customImage: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4" data-testid="image-uploader">
      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
        <Camera size={18} className="mr-2" style={{ color: accentColor }} />
        Upload Custom Image
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ borderColor: accentColor }}
        data-testid="image-upload-input"
      />
      {settings.customImage && (
        <div className="mt-2">
          <span
            className="text-sm text-green-600 flex items-center"
            data-testid="upload-success"
          >
            <CheckCircle size={16} className="mr-1" />
            Custom image uploaded
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
