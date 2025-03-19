import { BannerPresets, BannerSettings } from "../../types";

// Banner background images
export const bannerBackgrounds: Record<string, string> = {
  beach:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  mountains:
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  cityscape:
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  forest:
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
};

// Banner content presets
export const bannerPresets: BannerPresets = {
  beach: {
    title: "Seaside Serenity",
    text: "There's something magical about the sound of waves, the feel of sand between your toes, and the breathtaking sunset views. Beach destinations offer the perfect escape from everyday life.",
    image: bannerBackgrounds.beach,
  },
  mountains: {
    title: "Mountain Majesty",
    text: "The towering peaks, clean crisp air, and panoramic views from mountain trails give me a sense of freedom and perspective that's hard to find elsewhere.",
    image: bannerBackgrounds.mountains,
  },
  cityscape: {
    title: "Urban Exploration",
    text: "Cities are living museums with their architecture, street art, diverse cuisines, and cultural melting pots. Every street corner has a story waiting to be discovered.",
    image: bannerBackgrounds.cityscape,
  },
  forest: {
    title: "Woodland Wonders",
    text: "The tranquility of forests, with sunlight filtering through leaves, the scent of pine, and the sound of rustling trees creates a natural therapy session for the soul.",
    image: bannerBackgrounds.forest,
  },
};

export const DEFAULT_SETTINGS: BannerSettings = {
  style: "beach",
  overlayOpacity: 0.5,
  customTitle: "",
  customText: "",
  customImage: null,
  accentColor: "#3498db",
};
