import axios, { AxiosResponse } from "axios";

import { SearchIdType } from "../../data/types.d";

const getSearchId = async () => {
  try {
    const searchId: Error | AxiosResponse<SearchIdType> = await axios.get<
      string,
      AxiosResponse<SearchIdType>
    >(`https://front-test.beta.aviasales.ru/search`);
    return searchId;
  } catch (error) {
    return new Error(error);
  }
};

export default getSearchId;
