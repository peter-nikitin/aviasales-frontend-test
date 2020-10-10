import handleSelectedFiltersChange from "./handleSelectedFiltersChange";
import { FilterType } from "../data/types.d";
import { filtersArrayMock } from "../mocks/filtersMocks";

describe("handleSelectedFiltersChange with default variant", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return array with clicked filter", () => {
    const clickedFilter = "1_stop";
    const selectedFilters: FilterType[] = [
      {
        label: "Все",
        id: "all",
        stopsCount: -1,
      },
    ];
    const setSelectedFilters = jest.fn();
    const allFilters: FilterType[] = filtersArrayMock;

    const expectedFilter: FilterType[] = [
      {
        label: "1 пересадка",
        id: "1_stop",
        stopsCount: 1,
      },
    ];

    handleSelectedFiltersChange(
      clickedFilter,
      selectedFilters,
      setSelectedFilters,
      allFilters
    );

    expect(setSelectedFilters).toBeCalledWith(expectedFilter);
  });

  it("should return same array when click on selected", () => {
    const clickedFilter = "all";
    const selectedFilters: FilterType[] = [
      {
        label: "Все",
        id: "all",
        stopsCount: -1,
      },
    ];
    const setSelectedFilters = jest.fn();
    const allFilters: FilterType[] = filtersArrayMock;

    const expectedFilter: FilterType[] = [
      {
        label: "Все",
        id: "all",
        stopsCount: -1,
      },
    ];

    handleSelectedFiltersChange(
      clickedFilter,
      selectedFilters,
      setSelectedFilters,
      allFilters
    );

    expect(setSelectedFilters).toBeCalledWith(expectedFilter);
  });
});

describe("handleSelectedFiltersChange with selected filters", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it("should return array with 2 clicked filters", () => {
    const clickedFilter = "2_stops";
    const selectedFilters: FilterType[] = [
      {
        label: "1 пересадка",
        id: "1_stop",
        stopsCount: 1,
      },
    ];
    const setSelectedFilters = jest.fn();
    const allFilters: FilterType[] = filtersArrayMock;

    const expectedFilter: FilterType[] = [
      {
        label: "1 пересадка",
        id: "1_stop",
        stopsCount: 1,
      },
      {
        label: "2 пересадки",
        id: "2_stops",
        stopsCount: 2,
      },
    ];

    handleSelectedFiltersChange(
      clickedFilter,
      selectedFilters,
      setSelectedFilters,
      allFilters
    );

    expect(setSelectedFilters).toBeCalledWith(expectedFilter.reverse());
  });

  it("should return array with default filter", () => {
    const clickedFilter = "all";
    const selectedFilters: FilterType[] = [
      {
        label: "1 пересадка",
        id: "1_stop",
        stopsCount: 1,
      },
    ];
    const setSelectedFilters = jest.fn();
    const allFilters: FilterType[] = filtersArrayMock;

    const expectedFilter: FilterType[] = [
      {
        label: "Все",
        id: "all",
        stopsCount: -1,
      },
    ];

    handleSelectedFiltersChange(
      clickedFilter,
      selectedFilters,
      setSelectedFilters,
      allFilters
    );

    expect(setSelectedFilters).toBeCalledWith(expectedFilter.reverse());
  });
});
