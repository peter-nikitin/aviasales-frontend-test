import React, { FunctionComponent } from "react";
import { createUseStyles } from "react-jss";
import moment from "moment";

import { Segment } from "../data/ticketsTypes";

const useStyle = createUseStyles({
  segmentLine: {
    display: "flex",
    marginBottom: 10,
  },
  third: {
    width: "33%",
  },
  header: {
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: "#A0B0B9",
    fontSize: 12,
    fontWeight: 600,
  },
  value: {
    fontSize: 14,
    fontWeight: 600,
  },
});

const SegmentInTicket: FunctionComponent<Segment> = ({
  stops,
  duration,
  date,
  destination,
  origin,
}: Segment) => {
  const style = useStyle();

  const drowStopsHeader = (stopsNumber: number): string => {
    switch (stopsNumber) {
      case 0:
        return "Без остановок";
      case 1:
        return "1 остановока";
      case 2:
        return "2 остановоки";
      case 3:
        return "3 остановоки";
      case 4:
        return "4 остановоки";
      case 5:
        return "5 остановок";

      default:
        break;
    }
    return "";
  };

  return (
    <div className={style.segmentLine}>
      <div className={style.third}>
        <div className={style.header}>
          {origin} - {destination}
        </div>
        <div className={style.value}>
          {moment(date).format("hh:mm")} -{" "}
          {moment(date).add(duration, "m").format("hh:mm")}
        </div>
      </div>
      <div className={style.third}>
        <div className={style.header}>В пути</div>
        <div className={style.value}>
          {moment().minute(duration).format("hh[ч] mm[м]")}
        </div>
      </div>
      <div className={style.third}>
        <div className={style.header}>{drowStopsHeader(stops.length)}</div>
        <div className={style.value}>{stops.join(", ")}</div>
      </div>
    </div>
  );
};

export default SegmentInTicket;
