// App.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Banner from "./Banner";

describe("Banner container renders", () => {
  it("Ensure the banner container renders on he screen", () => {
    render(<Banner />);
    expect(screen.getByTestId("banner-container")).toBeInTheDocument();
  });
});
