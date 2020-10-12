import axios, { AxiosResponse } from "axios";

import { SearchResultType, TicketType } from "../../data/types.d";

const getTickets = async (searchId: string) => {
  let recursiveResult;
  let result: AxiosResponse<SearchResultType>;
  const resultTickets: TicketType[] = [];
  const url = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
  try {
    result = await axios.get(url);
    if (result.status === 200) {
      result.data.tickets.forEach((item) => resultTickets.push(item));
    }
    return resultTickets;
  } catch (error) {
    if (error.status > 500) {
      getTickets(searchId);
    }
    return new Error(error);
  }
};

export default getTickets;
