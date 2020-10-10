import { TicketType, TicketsArrayType } from "../data/types.d";

const addIdsToTickets = (tickets: TicketsArrayType): TicketsArrayType =>
  tickets.map((ticket, index) => ({ ...ticket, id: index + 1 }));

export default addIdsToTickets;
