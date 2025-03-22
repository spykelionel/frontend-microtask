import { Camera, CheckCircle, Upload } from "lucide-react";
import React, { useRef, useState } from "react";
import useBannerContext from "../../../hooks/useBannerContext";

const ImageUploader: React.FC = () => {
  const { updateSettings } = useBannerContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        updateSettings({ backgroundImage: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (e) => {
        updateSettings({ backgroundImage: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4" data-testid="image-uploader">
      <div className="text-sm font-medium text-gray-700 mb-2 flex items-center">
        <Camera size={18} className="mr-2 text-blue-500" />
        Banner Background Image
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        data-testid="image-upload-input"
        id="background-image"
      />

      {/* Custom upload button and drop area */}
      <div
        className={`relative border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
          isDragging
            ? "bg-gray-50 border-blue-400"
            : "border-gray-300 hover:border-gray-400"
        }`}
        onClick={handleButtonClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        data-testid="upload-drop-zone"
      >
        <Upload size={32} className="mb-2 text-gray-400" />
        <div className="text-sm text-center mb-1">
          <span className="font-medium text-blue-500">Click to upload</span> or
          drag and drop
        </div>
        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>

      {/* Success state */}
      {fileName && (
        <div className="mt-3 flex items-center justify-between p-2 bg-green-50 rounded-md">
          <div className="flex items-center">
            <CheckCircle size={16} className="mr-2 text-green-600" />
            <span
              className="text-sm text-green-700"
              data-testid="upload-success"
            >
              {fileName || "Image uploaded successfully"}
            </span>
          </div>
          <button
            onClick={handleButtonClick}
            className="text-xs px-2 py-1 rounded bg-white border border-gray-200 hover:bg-gray-50 transition-colors text-blue-500"
          >
            Replace
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
