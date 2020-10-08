import React from "react";
import { render } from "@testing-library/react";
import Segment from "./Segment";

describe("Segments in ticket", () => {
  const segmentMock = {
    origin: "MOW",
    destination: "HKT",
    date: "2020-10-12T13:47:00.000Z",
    stops: ["SIN", "BKK", "IST"],
    duration: 1041,
  };

  it("should render segment", () => {
    const { getByText } = render(
      <Segment
        origin={segmentMock.origin}
        destination={segmentMock.destination}
        date={segmentMock.date}
        stops={segmentMock.stops}
        duration={segmentMock.duration}
      />
    );

    const route = getByText("MOW - HKT");
    expect(route).toBeInTheDocument();
  });
});
