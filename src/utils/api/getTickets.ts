import axios, { AxiosResponse } from "axios";

import { SearchResultType, TicketType } from "../../data/types.d";

const getTickets = async (searchId: string) => {
  let recursiveResult;
  const resultTickets: TicketType[] = [];
  try {
    const result: Error | AxiosResponse<SearchResultType> = await axios.get(
      `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
    );

    if (result instanceof Error) {
      throw result;
    } else {
      result.data.tickets.forEach((item) => resultTickets.push(item));
    }
    if (!result.data.stop) {
      // recursiveResult = await getTickets(searchId);
      // if (recursiveResult instanceof Error) {
      //   throw recursiveResult;
      // } else {
      //   recursiveResult.forEach((item) => resultTickets.push(item));
      // }
    }
    return resultTickets;
  } catch (error) {
    return new Error(error);
  }
};

export default getTickets;
