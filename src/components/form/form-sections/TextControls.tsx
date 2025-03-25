import { FileText, Type } from "lucide-react";
import React from "react";
import useBannerContext from "../../../hooks/useBannerContext";
import {
  MAX_DESCRIPTION_LENGTH,
  MAX_TITLE_LENGTH,
  TYPING_DELAY,
} from "../../../lib/constants/presets";

const TextControls: React.FC = () => {
  const { settings, updateSettings } = useBannerContext();
  const [isTypingTitle, setIsTypingTitle] = React.useState(false);
  const [isTypingDescription, setIsTypingDescription] = React.useState(false);

  // Timers to detect end of typing
  const titleTimeoutRef = React.useRef<any>(null);
  const descriptionTimeoutRef = React.useRef<any>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.slice(0, MAX_TITLE_LENGTH);
    updateSettings({ customTitle: value });
    setIsTypingTitle(true);

    if (titleTimeoutRef.current) {
      clearTimeout(titleTimeoutRef.current);
    }
    titleTimeoutRef.current = setTimeout(() => {
      setIsTypingTitle(false);
    }, TYPING_DELAY);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value.slice(0, MAX_DESCRIPTION_LENGTH);
    updateSettings({ customeDescription: value });
    setIsTypingDescription(true);

    if (descriptionTimeoutRef.current) {
      clearTimeout(descriptionTimeoutRef.current);
    }
    descriptionTimeoutRef.current = setTimeout(() => {
      setIsTypingDescription(false);
    }, TYPING_DELAY);
  };

  return (
    <div data-testid="text-controls">
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
          <Type size={18} className="mr-2 text-blue-500" />
          Title
        </label>
        <input
          type="text"
          value={settings.customTitle}
          onChange={handleTitleChange}
          placeholder="Enter custom title"
          maxLength={MAX_TITLE_LENGTH}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="title-input"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>
            {settings.customTitle.length}/{MAX_TITLE_LENGTH}
          </span>
          {isTypingTitle && <span>Typing...</span>}
        </div>
      </div>

      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700 mb-2 flex items-center">
          <FileText size={18} className="mr-2 text-blue-500" />
          Description
        </label>
        <textarea
          value={settings.customeDescription}
          onChange={handleDescriptionChange}
          placeholder="Enter custom description"
          rows={4}
          maxLength={MAX_DESCRIPTION_LENGTH}
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-testid="text-input"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>
            {settings.customeDescription.length}/{MAX_DESCRIPTION_LENGTH}
          </span>
          {isTypingDescription && <span>Typing...</span>}
        </div>
      </div>
    </div>
  );
};

export default TextControls;
