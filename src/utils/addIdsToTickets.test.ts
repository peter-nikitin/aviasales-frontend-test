import addIdsToTickets from "./addIdsToTickets";
import { TicketType, TicketsArrayType } from "../data/types.d";

it("should return a ticket with ID", () => {
  const ticket = [
    {
      price: 24771,
      carrier: "S7",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-10-12T10:14:00.000Z",
          stops: ["KUL", "AUH"],
          duration: 1755,
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2020-11-01T10:41:00.000Z",
          stops: [],
          duration: 1303,
        },
      ],
    },
  ];

  const ticketWitID = [
    {
      id: 1,
      price: 24771,
      carrier: "S7",
      segments: [
        {
          origin: "MOW",
          destination: "HKT",
          date: "2020-10-12T10:14:00.000Z",
          stops: ["KUL", "AUH"],
          duration: 1755,
        },
        {
          origin: "HKT",
          destination: "MOW",
          date: "2020-11-01T10:41:00.000Z",
          stops: [],
          duration: 1303,
        },
      ],
    },
  ];

  expect(addIdsToTickets(ticket)[0].id).toBe(ticketWitID[0].id);
});
