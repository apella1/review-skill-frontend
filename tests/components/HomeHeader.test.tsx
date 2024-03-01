import { render, screen } from "@testing-library/react";
import { HomeHeader } from "../../src/components";

describe("HomeHeader", () => {
  it("should contain the application title", () => {
    render(<HomeHeader />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("ReviewSkill");
  });
});
