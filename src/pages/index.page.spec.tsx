/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Index from "./index.page";

describe("Index", () => {
  it("renders a headline with 'Hi, I am Thomas'", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: "Hi, I am Thomas",
    });

    expect(heading).toBeInTheDocument();
  });
});
