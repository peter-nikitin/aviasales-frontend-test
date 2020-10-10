import filterTickets from "./filterTickets";

import { TicketType } from "../data/types.d";

describe("Filtering of tickets", () => {
  it("should return same array if selected ALL", () => {
    const oneTicket: TicketType[] = [
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
            stops: ["HKG", "KUL"],
            duration: 1406,
          },
        ],
      },
    ];

    const selectedFilter = [
      {
        label: "Все",
        id: "all",
        stopsCount: -1,
      },
    ];
    const result = filterTickets(oneTicket, selectedFilter);
    expect(result.length).toBe(1);
  });

  it("should return only tickets without stops", () => {
    const tickets: TicketType[] = [
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
            stops: ["HKG", "KUL"],
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
            stops: [],
            duration: 1406,
          },
        ],
      },
    ];

    const selectedFilter = [
      {
        label: "Без пересадок",
        id: "none",
        stopsCount: 0,
      },
    ];
    const result = filterTickets(tickets, selectedFilter);
    expect(result[0]).toStrictEqual(tickets[1]);
  });

  it("should return tickets with 0 and 2 stops", () => {
    const tickets: TicketType[] = [
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
            stops: ["HKG", "KUL"],
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
            stops: [],
            duration: 1406,
          },
        ],
      },
    ];

    const selectedFilter = [
      {
        label: "Без пересадок",
        id: "none",
        stopsCount: 0,
      },
      {
        label: "2 пересадки",
        id: "2_stops",
        stopsCount: 2,
      },
    ];
    const result = filterTickets(tickets, selectedFilter);
    expect(result).toStrictEqual(tickets.reverse());
  });

  it("should return empty array if no matches", () => {
    const tickets: TicketType[] = [
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
            stops: ["HKG", "KUL"],
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
            stops: [],
            duration: 1406,
          },
        ],
      },
    ];

    const selectedFilter = [
      {
        label: "3 пересадки",
        id: "3_stops",
        stopsCount: 3,
      },
    ];
    const result = filterTickets(tickets, selectedFilter);
    expect(result.length).toBe(0);
  });
});
