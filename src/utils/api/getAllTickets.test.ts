import axios from "axios";

import getAllTickets from "./index";

describe("getAllTickets", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return tickets", async () => {
    const mockSearchResult = {
      data: {
        searchId: "asdfkjnsdak",
      },
    };

    const mockTickets = {
      data: {
        tickets: [
          {
            price: 47693,
            carrier: "EY",
            segments: [
              {
                origin: "MOW",
                destination: "HKT",
                date: "2020-10-11T22:36:00.000Z",
                stops: [],
                duration: 1260,
              },
              {
                origin: "HKT",
                destination: "MOW",
                date: "2020-11-01T11:15:00.000Z",
                stops: ["HKG", "KUL"],
                duration: 1406,
              },
            ],
          },
        ],
      },
    };

    axios.get = jest
      .fn()
      .mockResolvedValueOnce(mockSearchResult)
      .mockResolvedValueOnce(mockTickets);

    const setResults = jest.fn();
    const updateResults = jest.fn();

    const actualtTickets = await getAllTickets(setResults, updateResults);

    expect(updateResults).toBeCalledWith(mockTickets.data.tickets);
  });
});
