import axios from "axios";

import getTickets from "./getTickets";

describe("get tickets", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should run once and return array", async () => {
    const mockTickets = {
      status: 200,
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
        stop: true,
      },
    };

    axios.get = jest.fn().mockResolvedValue(mockTickets);

    const actualTickets = await getTickets("testSearch");
    expect(actualTickets).toEqual(mockTickets.data.tickets);
  });

  it("should return tickets array", async () => {
    const tickets = [
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
    ];

    const mockFirstRequest = {
      status: 200,
      data: {
        tickets: [tickets[0]],
        stop: false,
      },
    };
    const mockSecondRequest = {
      status: 200,
      data: {
        tickets: [tickets[1]],
        stop: false,
      },
    };
    const mockThirdRequest = {
      status: 200,
      data: {
        tickets: [tickets[2]],
        stop: true,
      },
    };

    axios.get = jest
      .fn()
      .mockResolvedValueOnce(mockFirstRequest)
      .mockResolvedValueOnce(mockSecondRequest)
      .mockResolvedValueOnce(mockThirdRequest);

    const actualTickets = await getTickets("testSearch");

    expect(actualTickets).toEqual([tickets[0]]);
    expect(axios.get).toBeCalledTimes(1);
  });

  it("should return error", async () => {
    const error = "NetworkError";

    axios.get = jest.fn().mockRejectedValue(error);

    const actualTickets = await getTickets("testSearch");

    expect(actualTickets).toEqual(new Error(error));
  });
});
