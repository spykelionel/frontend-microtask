import { BannerSettings } from "../../types";

// Banner background images
export const bannerBackgrounds: Record<string, string> = {
  book: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2tzfGVufDB8fDB8fHww",
};

export const DEFAULT_SETTINGS: BannerSettings = {
  style: "beach",
  textColor: "#fff",
  overlayOpacity: 0.5,
  backgroundStyle: "image",
  customTitle: "The Eternal Odyssey: Journeys Through the World of Books",
  customeDescription: `Books are not merely collections of words, but doorways into infinite worlds. "The Eternal Odyssey" is a celebration of literature—a journey that spans from the quiet, reflective corners of personal libraries to the bustling energy of literary festivals around the world. This narrative explores how stories shape our identities, ignite our passions, and bridge the gaps between cultures. As you delve into these pages, you’ll discover tales of adventure, wisdom, and heartache that remind us that every book holds the potential to transform a life. Whether you are a lifelong bibliophile or a curious newcomer, this exploration of literature invites you to see each chapter of your life as part of a grand, ever-evolving story.`,
  customImage:
    "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww",
  backgroundImage: bannerBackgrounds.book,
  accentColor: "#3498db",
  settings: undefined,
  updateSettings: undefined,
  resetSettings: undefined,
};
