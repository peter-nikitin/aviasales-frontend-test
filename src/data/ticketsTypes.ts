export type Segment = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

export type TicketType = {
  price: number;
  carrier: string;
  segments: Segment[];
};

export type TicketsArrayType = TicketType[];
