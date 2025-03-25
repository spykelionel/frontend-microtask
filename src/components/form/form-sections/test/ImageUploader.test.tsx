// src/components/ImageUploader/ImageUploader.test.tsx
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import useBannerContext from "../../../../hooks/useBannerContext";
import ImageUploader from "../ImageUploader";

// Mock dependencies
vi.mock("../../../../hooks/useBannerContext", () => ({
  default: vi.fn(),
}));

// Mock FileReader
const mockFileReader = vi.fn(() => ({
  readAsDataURL: vi.fn(),
  onload: vi.fn(),
}));
FileReader = mockFileReader as any;

describe("ImageUploader", () => {
  const mockUpdateSettings = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useBannerContext as any).mockReturnValue({
      updateSettings: mockUpdateSettings,
    });
  });

  it("renders initial UI elements", () => {
    render(<ImageUploader />);

    expect(screen.getByTestId("image-uploader")).toBeInTheDocument();
    expect(screen.getByText("Banner Background Image")).toBeInTheDocument();
    expect(screen.getByTestId("upload-drop-zone")).toBeInTheDocument();
    expect(screen.getByTestId("image-upload-input")).toBeInTheDocument();
  });

  it("triggers file input when clicking upload area", async () => {
    const user = userEvent.setup();
    const clickSpy = vi.spyOn(HTMLInputElement.prototype, "click");

    render(<ImageUploader />);
    await user.click(screen.getByTestId("upload-drop-zone"));

    expect(clickSpy).toHaveBeenCalled();
  });

  it("handles file selection via input", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" });
    const reader = new FileReader();

    render(<ImageUploader />);
    const input = screen.getByTestId("image-upload-input");

    fireEvent.change(input, {
      target: { files: [file] },
    });

    // Simulate FileReader callback
    reader.onload = vi.fn().mockImplementation((_e) => {
      mockUpdateSettings({ backgroundImage: "data:image/png;base64,test" });
    });
    reader.onload!({ target: { result: "data:image/png;base64,test" } } as any);

    expect(await screen.findByTestId("upload-success")).toBeInTheDocument();
    expect(mockUpdateSettings).toHaveBeenCalledWith({
      backgroundImage: "data:image/png;base64,test",
    });
  });

  it("handles drag and drop for valid image", async () => {
    const file = new File(["test"], "test.jpg", { type: "image/jpeg" });

    // Create mock DataTransfer object
    const dataTransfer = {
      files: [file],
      items: [
        {
          kind: "file",
          getAsFile: () => file,
        },
      ],
      types: ["Files"],
    };

    // Mock FileReader to auto-resolve
    FileReader = vi.fn().mockImplementation(() => ({
      readAsDataURL: function () {
        this.onload({ target: { result: "data:image/jpeg;base64,test" } });
      },
      result: "",
    })) as any;

    render(<ImageUploader />);
    const dropZone = screen.getByTestId("upload-drop-zone");

    fireEvent.dragOver(dropZone);
    fireEvent.drop(dropZone, { dataTransfer });

    await waitFor(() => {
      expect(mockUpdateSettings).toHaveBeenCalledWith({
        backgroundImage: "data:image/jpeg;base64,test",
      });
    });

    expect(await screen.findByText("test.jpg")).toBeInTheDocument();
  });

  it("rejects non-image files on drop", async () => {
    const file = new File(["test"], "test.txt", { type: "text/plain" });
    const dataTransfer = { files: [file] };

    render(<ImageUploader />);
    const dropZone = screen.getByTestId("upload-drop-zone");

    fireEvent.drop(dropZone, { dataTransfer });
    expect(mockUpdateSettings).not.toHaveBeenCalled();
    expect(screen.queryByTestId("upload-success")).not.toBeInTheDocument();
  });

  it("shows success state after upload", async () => {
    const file = new File(["test"], "test.png", { type: "image/png" });

    render(<ImageUploader />);
    fireEvent.change(screen.getByTestId("image-upload-input"), {
      target: { files: [file] },
    });

    expect(await screen.findByText("test.png")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Replace" })).toBeInTheDocument();
  });

  it("resets drag state when leaving", async () => {
    render(<ImageUploader />);
    const dropZone = screen.getByTestId("upload-drop-zone");

    fireEvent.dragOver(dropZone);
    expect(dropZone).toHaveClass("border-blue-400");

    fireEvent.dragLeave(dropZone);
    expect(dropZone).not.toHaveClass("border-blue-400");
  });

  it("allows replacing existing image", async () => {
    const user = userEvent.setup();
    const clickSpy = vi.spyOn(HTMLInputElement.prototype, "click");

    render(<ImageUploader />);

    // Upload initial file
    fireEvent.change(screen.getByTestId("image-upload-input"), {
      target: { files: [new File([""], "test.png")] },
    });

    // Click replace button
    await user.click(await screen.findByText("Replace"));
    expect(clickSpy).toHaveBeenCalled();
  });
});
