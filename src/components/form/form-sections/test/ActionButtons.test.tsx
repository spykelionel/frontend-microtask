// App.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ActionButtons from "../ActionButtons";
describe("Action Buttons", () => {
  it("renders the Apply Changes Text on the Screen", () => {
    render(<ActionButtons />);
    expect(screen.getByText("Apply Changes")).toBeInTheDocument();
  });
});

// describe("When User clicks Apply Changes", () => {
//     it("Should call the resetSettings function", () => {
//         const resetSettings = jest.fn();
//         render(<ActionButtons accentColor="" resetSettings={resetSettings} />);
//         screen.getByText("Apply Changes").click();
//         expect(resetSettings).toHaveBeenCalled();
//     });
// })
