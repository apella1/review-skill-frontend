import { render, screen } from "@testing-library/react";
import { HomeHeader } from "../../src/components";

describe("HomeHeader", () => {
  it("should contain the application title in an h1", () => {
    render(<HomeHeader />);
    const heading = screen.getByRole("heading", {
      name: "ReviewSkill",
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});
