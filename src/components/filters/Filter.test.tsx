import React from "react";
import { fireEvent, render } from "@testing-library/react";
import FiltersSelection from "./Filter";

import {
  filtersArrayMock,
  selectedFiltersMock,
} from "../../mocks/filtersMocks";
import { FilterType } from "../../data/types.d";

describe("Filters", () => {
  let changeFilterTest: jest.Mock<void, [string]>;
  let selectedFiltersTest: FilterType[];

  it("should render header", () => {
    changeFilterTest = jest.fn();
    selectedFiltersTest = [];

    const { getByText } = render(
      <FiltersSelection
        handleFilterChange={changeFilterTest}
        selectedFilters={selectedFiltersTest}
        filtersArray={filtersArrayMock}
      />
    );

    const firstFilter: HTMLElement = getByText("Количество пересадок");
    expect(firstFilter).toBeInTheDocument();
  });

  it("should render first variant", () => {
    changeFilterTest = jest.fn();
    selectedFiltersTest = [];

    const { getByText } = render(
      <FiltersSelection
        handleFilterChange={changeFilterTest}
        selectedFilters={selectedFiltersTest}
        filtersArray={filtersArrayMock}
      />
    );

    const firstFilter: HTMLElement = getByText("Все");
    expect(firstFilter).toBeInTheDocument();
  });

  it("should render varian '1 пересадка'", () => {
    changeFilterTest = jest.fn();
    selectedFiltersTest = [];

    const { getByText } = render(
      <FiltersSelection
        handleFilterChange={changeFilterTest}
        selectedFilters={selectedFiltersTest}
        filtersArray={filtersArrayMock}
      />
    );

    const firstFilter: HTMLElement = getByText("1 пересадка");
    expect(firstFilter).toBeInTheDocument();
  });

  it("should render checked filters", () => {
    changeFilterTest = jest.fn();
    selectedFiltersTest = selectedFiltersMock;

    const { getByText } = render(
      <FiltersSelection
        handleFilterChange={changeFilterTest}
        selectedFilters={selectedFiltersTest}
        filtersArray={filtersArrayMock}
      />
    );

    const firstFilter: HTMLElement = getByText("1 пересадка");
    // проверяю количество классов, потому что  не смог рпавильно проверит JSS класс
    // TODO: найти правильную проверку  JSS классов
    expect(firstFilter.classList.length).toBe(2);
  });

  it("should handle click on filter with proper value", () => {
    changeFilterTest = jest.fn();
    selectedFiltersTest = [];

    const { getByText } = render(
      <FiltersSelection
        handleFilterChange={changeFilterTest}
        selectedFilters={selectedFiltersTest}
        filtersArray={filtersArrayMock}
      />
    );

    const firstFilter: HTMLElement = getByText("1 пересадка");
    fireEvent.click(firstFilter);
    expect(changeFilterTest).toBeCalledWith("1_stop");
  });
});
