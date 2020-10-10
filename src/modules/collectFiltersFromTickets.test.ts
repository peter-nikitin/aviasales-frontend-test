import { executionAsyncId } from "async_hooks";
import collectFiltersFromTickets from "./collectFiltersFromTickets";

it("should return filter array with default and no_stops variants", () => {
  const ticket = [
    {
      price: 47693,
      carrier: "EY",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-10-11T22:36:00.000Z",
          stops: [],
          duration: 1260,
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2020-11-01T11:15:00.000Z",
          stops: [],
          duration: 1406,
        },
      ],
    },
  ];
  const collectedFilters = collectFiltersFromTickets(ticket);
  const testFilters = [
    {
      label: "Все",
      id: "all",
      stopsCount: -1,
    },
    {
      label: "Без пересадок",
      id: "none",
      stopsCount: 0,
    },
  ];
  expect(collectedFilters).toStrictEqual(testFilters);
});

it("should return filter array with default, 1 and 2 stops variants", () => {
  const ticket = [
    {
      price: 47693,
      carrier: "EY",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-10-11T22:36:00.000Z",
          stops: ["HKG", "KUL"],
          duration: 1260,
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2020-11-01T11:15:00.000Z",
          stops: ["KUL"],
          duration: 1406,
        },
      ],
    },
  ];
  const collectedFilters = collectFiltersFromTickets(ticket);
  const testFilters = [
    {
      label: "Все",
      id: "all",
      stopsCount: -1,
    },
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
  expect(collectedFilters).toStrictEqual(testFilters);
});

it("should return filter array with all variants", () => {
  const ticket = [
    {
      price: 47693,
      carrier: "EY",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-10-11T22:36:00.000Z",
          stops: ["HKG", "KUL"],
          duration: 1260,
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2020-11-01T11:15:00.000Z",
          stops: ["KUL"],
          duration: 1406,
        },
      ],
    },
    {
      price: 47693,
      carrier: "EY",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-10-11T22:36:00.000Z",
          stops: ["HKG", "KUL", "KUL"],
          duration: 1260,
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2020-11-01T11:15:00.000Z",
          stops: [],
          duration: 1406,
        },
      ],
    },
    {
      price: 47693,
      carrier: "EY",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-10-11T22:36:00.000Z",
          stops: ["HKG", "KUL", "KUL"],
          duration: 1260,
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2020-11-01T11:15:00.000Z",
          stops: ["HKG", "KUL", "KUL", "KUL"],
          duration: 1406,
        },
      ],
    },
    {
      price: 47693,
      carrier: "EY",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-10-11T22:36:00.000Z",
          stops: [],
          duration: 1260,
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2020-11-01T11:15:00.000Z",
          stops: ["HKG", "HKG", "KUL", "KUL", "KUL"],
          duration: 1406,
        },
      ],
    },
  ];
  const collectedFilters = collectFiltersFromTickets(ticket);
  const testFilters = [
    {
      label: "Все",
      id: "all",
      stopsCount: -1,
    },
    {
      label: "Без пересадок",
      id: "none",
      stopsCount: 0,
    },
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
    {
      label: "3 пересадки",
      id: "3_stops",
      stopsCount: 3,
    },
    {
      label: "4 пересадки",
      id: "4_stops",
      stopsCount: 4,
    },
    {
      label: "5 пересадок",
      id: "5_stops",
      stopsCount: 5,
    },
  ];
  expect(collectedFilters).toStrictEqual(testFilters);
});
