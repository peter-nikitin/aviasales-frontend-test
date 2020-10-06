import filterTickets from "./filterTickets";
import { smallTicketsMock } from "./ticketsMocks";
import { selectedFiltersArrayMock } from "./filtersMocks";

describe("Filtering of tickets", () => {
  it("should return array", () => {
    console.log(filterTickets(smallTicketsMock, selectedFiltersArrayMock));
  });
});
