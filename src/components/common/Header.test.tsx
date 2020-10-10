import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header with logo", () => {
  it("should render image with alt text", () => {
    const { getByAltText } = render(<Header />);

    const logo: HTMLElement = getByAltText("Aviasalse - поиск авиабилетов");
    expect(logo).toBeInTheDocument();
  });
});
