import axios, { AxiosResponse } from "axios";

import { TicketType } from "../data/types.d";

type SearchId = { searchId: string };
type TicketsSearchResponse = { tickets: TicketType[]; stop: boolean };

const getTickets = async () => {
  let search: SearchId;
  const tickets: TicketType[] = [];

  let isNotFinish: boolean;

  const getTicketsFromAPI = async (searchString: string) => {
    await axios(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchString}`
    ).then((response: AxiosResponse<TicketsSearchResponse>) => {
      tickets.push(...response.data.tickets);
      isNotFinish = !response.data.stop;
      if (isNotFinish) {
        getTicketsFromAPI(searchString);
      }
      console.log(tickets);
    });
  };

  await axios("https://front-test.beta.aviasales.ru/search").then(
    (response: AxiosResponse<SearchId>) => {
      search = response.data;
      console.log(search);

      getTicketsFromAPI(search.searchId);
    }
  );
  return tickets;
};

export default getTickets;
