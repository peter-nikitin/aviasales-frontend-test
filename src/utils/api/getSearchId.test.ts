import axios from "axios";

import getSearchId from "./getSearchId";

describe("get search id", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return correct value", async () => {
    const mockedSearchId = { searchId: "4niyd" };
    axios.get = jest.fn().mockResolvedValue(mockedSearchId);

    const actualSearchId = await getSearchId();
    expect(actualSearchId).toEqual(mockedSearchId);
  });

  it("should return error", async () => {
    const getError = "Network error";
    axios.get = jest.fn().mockRejectedValue(getError);

    const actualError = await getSearchId();
    expect(actualError).toEqual(new Error(getError));
  });
});
