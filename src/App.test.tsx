// App.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ActionButtons from "./components/form/form-sections/ActionButtons";

describe("Action Buttons", () => {
  it("renders the Apply Changes Text on the Screen", () => {
    render(<ActionButtons accentColor="" resetSettings={() => {}} />);
    expect(screen.getByText("Apply Changes")).toBeInTheDocument();
  });
});
