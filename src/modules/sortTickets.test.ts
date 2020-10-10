import sortTickets from "./sortTickets";
import { smallTicketsMock } from "../data/mocks/ticketsMocks";
import { selectedFiltersArrayMock } from "../data/mocks/filtersMocks";

import { TicketType } from "../data/ticketsTypes";

describe("Sorting of tickets", () => {
  it("should sort by price", () => {
    const tickets: TicketType[] = [
      {
        price: 74385,
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
            stops: ["HKG", "KUL"],
            duration: 1406,
          },
        ],
      },
      {
        price: 35410,
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

    const result = sortTickets(tickets, "cheapest");

    expect(result).toStrictEqual(result.reverse());
  });

  it("should sort by duration", () => {
    const tickets: TicketType[] = [
      {
        price: 222,
        carrier: "EY",
        segments: [
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-10-11T22:36:00.000Z",
            stops: [],
            duration: 333,
          },
          {
            origin: "HKT",
            destination: "MOW",
            date: "2020-11-01T11:15:00.000Z",
            stops: ["HKG", "KUL"],
            duration: 222,
          },
        ],
      },
      {
        price: 111,
        carrier: "EY",
        segments: [
          {
            origin: "MOW",
            destination: "HKT",
            date: "2020-10-11T22:36:00.000Z",
            stops: [],
            duration: 111,
          },
          {
            origin: "HKT",
            destination: "MOW",
            date: "2020-11-01T11:15:00.000Z",
            stops: [],
            duration: 111,
          },
        ],
      },
    ];

    const result = sortTickets(tickets, "fastest");

    expect(result).toStrictEqual(result.reverse());
  });
});
