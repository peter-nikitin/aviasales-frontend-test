import getTickets from "./getTickets";
import getSearchId from "./getSearchId";

import { GetAllTickets } from "../../data/types.d";

const getAllTickets: GetAllTickets = async (setResults, updateResults) => {
  const search = await getSearchId();
  if (search instanceof Error) {
    throw search;
  } else {
    const ticketsFromApi = await getTickets(search.data.searchId);

    if (ticketsFromApi instanceof Error) {
      throw ticketsFromApi;
    } else {
      setResults(updateResults(ticketsFromApi));
    }
  }
};

export default getAllTickets;
