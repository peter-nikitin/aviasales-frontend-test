export type FilterType = {
  label: string;
  id: string;
  stopsCount: number;
};

export type SortingType = "cheapest" | "fastest";

export type Segment = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

export type TicketType = {
  id?: number;
  price: number;
  carrier: string;
  segments: Segment[];
};
