import React, { FunctionComponent } from "react";

import { createUseStyles } from "react-jss";

import { TicketType } from "../data/ticketsTypes";

import SegmentInTicket from "./Segment";

const useStyle = createUseStyles({
  ticket: {
    display: "flex",
    flexDirection: "column",
    padding: {
      top: 20,
      bottom: 20,
      right: 50,
      left: 20,
    },
    background: "#FFFFFF",
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    marginBottom: 20,
  },
  priceLine: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  price: {
    color: "#2196F3",
    fontSize: 24,
    fontWeight: 600,
  },
});

const Ticket: FunctionComponent<TicketType> = ({
  price,
  carrier,
  segments,
}: TicketType) => {
  const style = useStyle();
  const carrierLogo = `//pics.avs.io/99/36/${carrier}.png`;
  return (
    <div className={style.ticket}>
      <div className={style.priceLine}>
        <div className={style.price}>{price} Р</div>
        <img src={carrierLogo} alt={carrier} />
      </div>
      {segments.map((currentSegment) => (
        <div key={`${currentSegment.destination}_${currentSegment.origin}`}>
          <SegmentInTicket
            date={currentSegment.date}
            duration={currentSegment.duration}
            destination={currentSegment.destination}
            origin={currentSegment.origin}
            stops={currentSegment.stops}
          />
        </div>
      ))}
    </div>
  );
};

export default Ticket;
