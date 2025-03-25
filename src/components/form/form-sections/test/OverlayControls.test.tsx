// src/components/OverlayControls/OverlayControls.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import OverlayControls from "../OverlayControls";

// Mock the custom hook
vi.mock("../../../hooks/useBannerContext", () => ({
  default: vi.fn(),
}));

describe("OverlayControls", () => {
  it("renders the main components", () => {
    render(<OverlayControls />);
    expect(screen.getByTestId("overlay-controls")).toBeInTheDocument();
    expect(screen.getByText("Overlay Opacity: 0.5")).toBeInTheDocument();
    expect(screen.getByTestId("opacity-slider")).toBeInTheDocument();
  });

  it("has correctly configured slider input", () => {
    render(<OverlayControls />);
    const slider = screen.getByTestId("opacity-slider");
    expect(slider).toHaveAttribute("min", "0");
    expect(slider).toHaveAttribute("max", "0.9");
    expect(slider).toHaveAttribute("step", "0.1");
    expect(slider).toHaveValue("0.5");
  });
});
