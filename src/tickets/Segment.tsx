import React, { FunctionComponent } from "react";
import { Segment } from "../data/segmentsTypes";

const SegmentInTicket: FunctionComponent<Segment> = ({
  stops,
  duration,
  date,
  destination,
  origin,
}) => {
  return (
    <div>
      <div>
        <div>
          {origin} - {destination}
        </div>
        <div>
          {date} - {date}
        </div>
      </div>
      <div>
        <div>В пути</div>
        <div>{duration}</div>
      </div>
      <div>
        <div>{stops.length} пересадки</div>
        <div>{stops.join(", ")}</div>
      </div>
    </div>
  );
};

export default SegmentInTicket;
