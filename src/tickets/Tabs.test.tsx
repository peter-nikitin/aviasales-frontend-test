import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tabs from "./Tabs";

describe("Tabs", () => {
  const selectedTab = "cheapest";
  const handleTabClick = jest.fn();
  it("should render buttons", () => {
    const { getByText } = render(
      <Tabs selectedTab={selectedTab} handleTabChange={handleTabClick} />
    );
    const tabButton = getByText("Самый дешевый");
    expect(tabButton).toBeInTheDocument();
  });

  it("should render one button active", () => {
    const { getByText } = render(
      <Tabs selectedTab={selectedTab} handleTabChange={handleTabClick} />
    );
    const tabButton = getByText("Самый дешевый");
    expect(tabButton.classList.length).toBe(2);
  });

  it("should handle click on button", () => {
    const { getByText } = render(
      <Tabs selectedTab={selectedTab} handleTabChange={handleTabClick} />
    );

    fireEvent.click(getByText("Самый быстрый"));
    expect(handleTabClick).toBeCalledWith("fastest");
  });
});
