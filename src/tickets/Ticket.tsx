import React, { FunctionComponent } from "react";

import { createUseStyles } from "react-jss";

import { TicketType } from "../data/ticketsTypes";

import SegmentInTicket from "./Segment";

const useStyle = createUseStyles({
  buttons: {
    display: "flex",
    textTransform: "uppercase",
  },
  tabButton: {
    background: "#FFFFFF",
    border: "1px solid #DFE5EC",
    width: "50%",
    padding: {
      top: 15,
      bottom: 15,
    },
    textAlign: "center",
  },
  selected: {
    background: "#2196F3",
    color: "#FFFFFF",
    border: "1px solid #2196F3",
  },
});

const Ticket: FunctionComponent<TicketType> = ({
  price,
  carrier,
  segments,
}) => {
  const style = useStyle();
  return (
    <div>
      <div></div>
      {segments.map((currentSegment) => (
        <SegmentInTicket
          date={currentSegment.date}
          duration={currentSegment.duration}
          destination={currentSegment.destination}
          origin={currentSegment.origin}
          stops={currentSegment.stops}
        />
      ))}
    </div>
  );
};

export default Ticket;
