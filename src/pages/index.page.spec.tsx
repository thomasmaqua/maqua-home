/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Index from "./index.page";

describe("Index", () => {
  it("renders a headline with 'Under Construction'", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: "Under Construction",
    });

    expect(heading).toBeInTheDocument();
  });
});
