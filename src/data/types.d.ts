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

export type SearchResultType = { tickets: TicketType[]; stop: boolean };

export type SearchIdType = { searchId: string };

export type GetAllTickets = (
  setResults: React.Dispatch<React.SetStateAction<TicketType[]>>,
  updateResults: (tickets: TicketType[]) => TicketType[]
) => Promise;
