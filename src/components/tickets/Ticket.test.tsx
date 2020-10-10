import React from "react";
import { render, fireEvent, getByAltText } from "@testing-library/react";
import Ticket from "./Ticket";

import { TicketType } from "../../data/types.d";

describe("Ticket", () => {
  const ticket: TicketType = {
    price: 50833,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:47:00.000Z",
        stops: ["SIN", "BKK", "IST"],
        duration: 1041,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:36:00.000Z",
        stops: ["IST", "AUH", "KUL"],
        duration: 663,
      },
    ],
  };

  it("should render a logo of carrier", () => {
    const { getByAltText } = render(
      <Ticket
        price={ticket.price}
        carrier={ticket.carrier}
        segments={ticket.segments}
      />
    );

    const logo = getByAltText("EK");
    expect(logo).toBeInTheDocument();
  });

  it("should render a segemnt", () => {
    const { getByText } = render(
      <Ticket
        price={ticket.price}
        carrier={ticket.carrier}
        segments={ticket.segments}
      />
    );

    const route = getByText("HKT - MOW");
    expect(route).toBeInTheDocument();
  });
});
