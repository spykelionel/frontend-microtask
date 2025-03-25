// src/components/BannerStyleSelector/BannerStyleSelector.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import useBannerContext from "../../../../hooks/useBannerContext";
import BannerStyleSelector from "../BannerStyleSelector";

vi.mock("../../../../hooks/useBannerContext", () => ({
  default: vi.fn(),
}));

const mockUpdateSettings = vi.fn();

describe("BannerStyleSelector", () => {
  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
    // Default mock implementation
    (useBannerContext as any).mockReturnValue({
      settings: { backgroundStyle: "image" },
      updateSettings: mockUpdateSettings,
    });
  });

  it("renders the component with correct elements", () => {
    render(<BannerStyleSelector />);

    // Check main container
    expect(screen.getByTestId("banner-style-selector")).toBeInTheDocument();

    // Check label and icon
    expect(screen.getByText("Banner Background Style")).toBeInTheDocument();

    // Check both buttons
    expect(screen.getByTestId("image-style-button")).toHaveTextContent("Image");
    expect(screen.getByTestId("color-style-button")).toHaveTextContent("Color");
  });

  it("applies correct styles for initial active button (image)", () => {
    render(<BannerStyleSelector />);

    const imageButton = screen.getByTestId("image-style-button");
    const colorButton = screen.getByTestId("color-style-button");

    expect(imageButton).toHaveClass("bg-blue-500", "text-white");
    expect(colorButton).toHaveClass("bg-white", "text-gray-700");
  });

  it("applies correct styles when color button is active", () => {
    // Override mock for this test case
    (useBannerContext as any).mockReturnValue({
      settings: { backgroundStyle: "color" },
      updateSettings: mockUpdateSettings,
    });

    render(<BannerStyleSelector />);

    const imageButton = screen.getByTestId("image-style-button");
    const colorButton = screen.getByTestId("color-style-button");

    expect(colorButton).toHaveClass("bg-blue-500", "text-white");
    expect(imageButton).toHaveClass("bg-white", "text-gray-700");
  });

  it("calls updateSettings with correct value when clicking buttons", async () => {
    const user = userEvent.setup();
    render(<BannerStyleSelector />);

    // Test clicking the color button
    const colorButton = screen.getByTestId("color-style-button");
    await user.click(colorButton);
    expect(mockUpdateSettings).toHaveBeenCalledWith({
      backgroundStyle: "color",
    });

    // Test clicking the image button
    const imageButton = screen.getByTestId("image-style-button");
    await user.click(imageButton);
    expect(mockUpdateSettings).toHaveBeenCalledWith({
      backgroundStyle: "image",
    });
  });

  it("applies focus styles when buttons are focused", async () => {
    const user = userEvent.setup();
    render(<BannerStyleSelector />);

    const imageButton = screen.getByTestId("image-style-button");
    const colorButton = screen.getByTestId("color-style-button");

    // Test focus ring for image button
    await user.tab();
    expect(imageButton).toHaveClass("focus:ring-blue-500");

    // Test focus ring for color button
    await user.tab();
    expect(colorButton).toHaveClass("focus:ring-blue-500");
  });
});
