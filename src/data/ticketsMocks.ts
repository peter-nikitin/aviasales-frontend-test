import { TicketType } from "./ticketsTypes";

const ticketsMocks: TicketType[] = [
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
    price: 21565,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:54:00.000Z",
        stops: ["AUH", "SIN", "DXB"],
        duration: 782,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:51:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 727,
      },
    ],
  },
  {
    price: 17057,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:53:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 1396,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:28:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 1446,
      },
    ],
  },
  {
    price: 75832,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:43:00.000Z",
        stops: ["DXB", "IST"],
        duration: 710,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:54:00.000Z",
        stops: ["SIN", "BKK", "HKG"],
        duration: 1887,
      },
    ],
  },
  {
    price: 78855,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:03:00.000Z",
        stops: [],
        duration: 1024,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:22:00.000Z",
        stops: ["BKK", "SIN"],
        duration: 1725,
      },
    ],
  },
  {
    price: 91779,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:23:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 1407,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:16:00.000Z",
        stops: ["AUH"],
        duration: 1196,
      },
    ],
  },
  {
    price: 87832,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:48:00.000Z",
        stops: ["HKG", "SHA", "BKK"],
        duration: 923,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:12:00.000Z",
        stops: ["DXB"],
        duration: 1061,
      },
    ],
  },
  {
    price: 67066,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:17:00.000Z",
        stops: ["IST", "SIN"],
        duration: 1535,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:22:00.000Z",
        stops: [],
        duration: 1786,
      },
    ],
  },
  {
    price: 73223,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:28:00.000Z",
        stops: ["IST"],
        duration: 1233,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:46:00.000Z",
        stops: ["BKK", "KUL", "SIN"],
        duration: 730,
      },
    ],
  },
  {
    price: 87375,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:48:00.000Z",
        stops: [],
        duration: 1765,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:46:00.000Z",
        stops: ["BKK"],
        duration: 1232,
      },
    ],
  },
  {
    price: 99039,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:41:00.000Z",
        stops: [],
        duration: 1310,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:30:00.000Z",
        stops: ["DXB"],
        duration: 1954,
      },
    ],
  },
  {
    price: 86533,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:26:00.000Z",
        stops: [],
        duration: 1234,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:45:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 1045,
      },
    ],
  },
  {
    price: 31355,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:41:00.000Z",
        stops: [],
        duration: 1876,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:19:00.000Z",
        stops: ["DXB", "HKG"],
        duration: 832,
      },
    ],
  },
  {
    price: 99505,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:40:00.000Z",
        stops: ["KUL"],
        duration: 919,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:27:00.000Z",
        stops: ["AUH", "HKG", "DXB"],
        duration: 1021,
      },
    ],
  },
  {
    price: 82650,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:46:00.000Z",
        stops: ["SHA", "IST", "KUL"],
        duration: 1929,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:42:00.000Z",
        stops: ["HKG", "KUL", "BKK"],
        duration: 1703,
      },
    ],
  },
  {
    price: 15659,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:03:00.000Z",
        stops: ["SHA"],
        duration: 1741,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:14:00.000Z",
        stops: ["DXB"],
        duration: 1637,
      },
    ],
  },
  {
    price: 28646,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:47:00.000Z",
        stops: ["BKK", "IST"],
        duration: 727,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:26:00.000Z",
        stops: ["AUH"],
        duration: 1275,
      },
    ],
  },
  {
    price: 81502,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:08:00.000Z",
        stops: [],
        duration: 1846,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:49:00.000Z",
        stops: ["DXB"],
        duration: 1163,
      },
    ],
  },
  {
    price: 21838,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:16:00.000Z",
        stops: [],
        duration: 1833,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:34:00.000Z",
        stops: ["HKG"],
        duration: 1472,
      },
    ],
  },
  {
    price: 53878,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:24:00.000Z",
        stops: ["IST", "BKK"],
        duration: 1378,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:45:00.000Z",
        stops: [],
        duration: 1796,
      },
    ],
  },
  {
    price: 45552,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:56:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 859,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:07:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 638,
      },
    ],
  },
  {
    price: 16425,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:24:00.000Z",
        stops: ["AUH", "DXB"],
        duration: 856,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:14:00.000Z",
        stops: [],
        duration: 922,
      },
    ],
  },
  {
    price: 58103,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:22:00.000Z",
        stops: ["IST"],
        duration: 1865,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:09:00.000Z",
        stops: ["HKG", "AUH", "BKK"],
        duration: 765,
      },
    ],
  },
  {
    price: 32086,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:11:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 937,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:03:00.000Z",
        stops: ["SHA", "KUL", "BKK"],
        duration: 856,
      },
    ],
  },
  {
    price: 46853,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:08:00.000Z",
        stops: [],
        duration: 979,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:25:00.000Z",
        stops: ["SIN", "IST"],
        duration: 1400,
      },
    ],
  },
  {
    price: 87665,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:40:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 1844,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:38:00.000Z",
        stops: ["DXB"],
        duration: 1777,
      },
    ],
  },
  {
    price: 89944,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:40:00.000Z",
        stops: ["SIN"],
        duration: 1056,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:35:00.000Z",
        stops: ["BKK"],
        duration: 1379,
      },
    ],
  },
  {
    price: 61633,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:16:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 1438,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:55:00.000Z",
        stops: ["HKG"],
        duration: 1373,
      },
    ],
  },
  {
    price: 49749,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:36:00.000Z",
        stops: ["KUL", "HKG"],
        duration: 1990,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:32:00.000Z",
        stops: ["KUL"],
        duration: 997,
      },
    ],
  },
  {
    price: 85395,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:11:00.000Z",
        stops: ["DXB", "IST", "HKG"],
        duration: 1494,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:26:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 781,
      },
    ],
  },
  {
    price: 98696,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:33:00.000Z",
        stops: ["AUH", "HKG"],
        duration: 1728,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:49:00.000Z",
        stops: ["KUL", "AUH", "DXB"],
        duration: 726,
      },
    ],
  },
  {
    price: 54967,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:36:00.000Z",
        stops: ["DXB", "AUH"],
        duration: 1815,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:52:00.000Z",
        stops: [],
        duration: 1358,
      },
    ],
  },
  {
    price: 15789,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:00:00.000Z",
        stops: [],
        duration: 863,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:41:00.000Z",
        stops: [],
        duration: 1565,
      },
    ],
  },
  {
    price: 95405,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:39:00.000Z",
        stops: ["HKG", "KUL"],
        duration: 1161,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:11:00.000Z",
        stops: [],
        duration: 1354,
      },
    ],
  },
  {
    price: 91076,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:29:00.000Z",
        stops: ["SHA", "AUH", "KUL"],
        duration: 673,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:14:00.000Z",
        stops: [],
        duration: 1477,
      },
    ],
  },
  {
    price: 44000,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:36:00.000Z",
        stops: ["DXB", "KUL", "HKG"],
        duration: 1937,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:12:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 1854,
      },
    ],
  },
  {
    price: 60142,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:59:00.000Z",
        stops: ["HKG"],
        duration: 1980,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:35:00.000Z",
        stops: ["DXB"],
        duration: 1888,
      },
    ],
  },
  {
    price: 87402,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:10:00.000Z",
        stops: ["DXB", "IST", "SIN"],
        duration: 1971,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:48:00.000Z",
        stops: [],
        duration: 1065,
      },
    ],
  },
  {
    price: 68242,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:03:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 1480,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:35:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 997,
      },
    ],
  },
  {
    price: 30265,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:11:00.000Z",
        stops: [],
        duration: 1600,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:18:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 1276,
      },
    ],
  },
  {
    price: 64389,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:40:00.000Z",
        stops: ["DXB", "IST"],
        duration: 1385,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:47:00.000Z",
        stops: ["BKK"],
        duration: 837,
      },
    ],
  },
  {
    price: 68629,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:29:00.000Z",
        stops: ["KUL", "AUH"],
        duration: 1351,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:38:00.000Z",
        stops: ["IST", "SIN"],
        duration: 1061,
      },
    ],
  },
  {
    price: 98003,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:44:00.000Z",
        stops: ["KUL", "SHA", "IST"],
        duration: 1583,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:38:00.000Z",
        stops: ["DXB"],
        duration: 1513,
      },
    ],
  },
  {
    price: 48450,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:34:00.000Z",
        stops: ["BKK"],
        duration: 950,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:49:00.000Z",
        stops: ["AUH"],
        duration: 1405,
      },
    ],
  },
  {
    price: 89127,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:51:00.000Z",
        stops: ["AUH"],
        duration: 1663,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:46:00.000Z",
        stops: ["IST", "HKG"],
        duration: 1236,
      },
    ],
  },
  {
    price: 91616,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:14:00.000Z",
        stops: ["HKG", "KUL"],
        duration: 1523,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:56:00.000Z",
        stops: ["DXB", "AUH", "KUL"],
        duration: 691,
      },
    ],
  },
  {
    price: 65553,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:28:00.000Z",
        stops: ["SIN", "KUL", "BKK"],
        duration: 1324,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:04:00.000Z",
        stops: ["BKK", "HKG", "AUH"],
        duration: 1884,
      },
    ],
  },
  {
    price: 73338,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:04:00.000Z",
        stops: ["BKK", "AUH", "SHA"],
        duration: 1298,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:28:00.000Z",
        stops: ["BKK", "IST"],
        duration: 1960,
      },
    ],
  },
  {
    price: 78193,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:05:00.000Z",
        stops: ["HKG", "SHA", "SIN"],
        duration: 796,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:15:00.000Z",
        stops: ["BKK", "AUH"],
        duration: 1115,
      },
    ],
  },
  {
    price: 68412,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:22:00.000Z",
        stops: ["BKK"],
        duration: 1764,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:50:00.000Z",
        stops: ["SIN", "SHA", "BKK"],
        duration: 1492,
      },
    ],
  },
  {
    price: 26257,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:33:00.000Z",
        stops: ["SIN"],
        duration: 1353,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:10:00.000Z",
        stops: ["SIN", "DXB", "KUL"],
        duration: 1725,
      },
    ],
  },
  {
    price: 71372,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:31:00.000Z",
        stops: [],
        duration: 1453,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:06:00.000Z",
        stops: ["KUL", "AUH"],
        duration: 733,
      },
    ],
  },
  {
    price: 62264,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:54:00.000Z",
        stops: ["BKK", "SIN", "AUH"],
        duration: 1038,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:13:00.000Z",
        stops: [],
        duration: 1604,
      },
    ],
  },
  {
    price: 45132,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:01:00.000Z",
        stops: ["SHA"],
        duration: 747,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:25:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 1028,
      },
    ],
  },
  {
    price: 28167,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:59:00.000Z",
        stops: [],
        duration: 1951,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:34:00.000Z",
        stops: [],
        duration: 1527,
      },
    ],
  },
  {
    price: 86378,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:01:00.000Z",
        stops: [],
        duration: 1475,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:28:00.000Z",
        stops: ["KUL"],
        duration: 1472,
      },
    ],
  },
  {
    price: 75141,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:45:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 1720,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:05:00.000Z",
        stops: ["HKG", "KUL", "SHA"],
        duration: 1238,
      },
    ],
  },
  {
    price: 84000,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:29:00.000Z",
        stops: ["SIN"],
        duration: 1231,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:34:00.000Z",
        stops: ["DXB"],
        duration: 1901,
      },
    ],
  },
  {
    price: 85723,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:34:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 1294,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:26:00.000Z",
        stops: ["SIN", "BKK", "KUL"],
        duration: 1873,
      },
    ],
  },
  {
    price: 95676,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:31:00.000Z",
        stops: ["KUL", "AUH"],
        duration: 1364,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:20:00.000Z",
        stops: ["DXB", "IST", "AUH"],
        duration: 752,
      },
    ],
  },
  {
    price: 95672,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:56:00.000Z",
        stops: ["HKG", "DXB"],
        duration: 1063,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:05:00.000Z",
        stops: [],
        duration: 1640,
      },
    ],
  },
  {
    price: 58372,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:14:00.000Z",
        stops: ["IST", "SHA"],
        duration: 1206,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:19:00.000Z",
        stops: ["HKG"],
        duration: 1451,
      },
    ],
  },
  {
    price: 93010,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:47:00.000Z",
        stops: [],
        duration: 1166,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:46:00.000Z",
        stops: ["IST"],
        duration: 1692,
      },
    ],
  },
  {
    price: 30679,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:54:00.000Z",
        stops: [],
        duration: 656,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:26:00.000Z",
        stops: [],
        duration: 1752,
      },
    ],
  },
  {
    price: 66209,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:29:00.000Z",
        stops: [],
        duration: 1429,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:40:00.000Z",
        stops: ["SHA", "SIN"],
        duration: 728,
      },
    ],
  },
  {
    price: 95355,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:14:00.000Z",
        stops: ["IST"],
        duration: 1422,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:44:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 1901,
      },
    ],
  },
  {
    price: 28617,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:11:00.000Z",
        stops: ["SIN", "AUH", "SHA"],
        duration: 1587,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:34:00.000Z",
        stops: [],
        duration: 1886,
      },
    ],
  },
  {
    price: 88810,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:53:00.000Z",
        stops: ["AUH", "BKK", "DXB"],
        duration: 746,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:05:00.000Z",
        stops: ["SHA", "BKK", "SIN"],
        duration: 1857,
      },
    ],
  },
  {
    price: 33599,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:01:00.000Z",
        stops: ["BKK", "SIN", "HKG"],
        duration: 671,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:31:00.000Z",
        stops: ["HKG", "SIN"],
        duration: 1158,
      },
    ],
  },
  {
    price: 28206,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:56:00.000Z",
        stops: [],
        duration: 736,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:31:00.000Z",
        stops: ["IST", "DXB"],
        duration: 1709,
      },
    ],
  },
  {
    price: 67306,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:09:00.000Z",
        stops: ["IST", "SIN"],
        duration: 1397,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:50:00.000Z",
        stops: ["BKK"],
        duration: 1078,
      },
    ],
  },
  {
    price: 63079,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:24:00.000Z",
        stops: [],
        duration: 995,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:00:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 1436,
      },
    ],
  },
  {
    price: 81570,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:31:00.000Z",
        stops: ["BKK", "AUH", "IST"],
        duration: 867,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:25:00.000Z",
        stops: ["SIN", "BKK"],
        duration: 748,
      },
    ],
  },
  {
    price: 16442,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:58:00.000Z",
        stops: ["DXB"],
        duration: 1111,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:43:00.000Z",
        stops: ["SHA", "DXB", "IST"],
        duration: 855,
      },
    ],
  },
  {
    price: 33317,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:44:00.000Z",
        stops: ["SHA", "IST", "KUL"],
        duration: 1852,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:46:00.000Z",
        stops: ["KUL"],
        duration: 1391,
      },
    ],
  },
  {
    price: 97927,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:14:00.000Z",
        stops: [],
        duration: 726,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:43:00.000Z",
        stops: ["IST"],
        duration: 1052,
      },
    ],
  },
  {
    price: 86855,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:25:00.000Z",
        stops: [],
        duration: 692,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:40:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 637,
      },
    ],
  },
  {
    price: 44976,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:27:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 821,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:16:00.000Z",
        stops: ["KUL", "HKG"],
        duration: 1647,
      },
    ],
  },
  {
    price: 27871,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:22:00.000Z",
        stops: ["IST", "BKK"],
        duration: 995,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:31:00.000Z",
        stops: ["KUL"],
        duration: 1590,
      },
    ],
  },
  {
    price: 42641,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:24:00.000Z",
        stops: ["BKK", "AUH"],
        duration: 1189,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:44:00.000Z",
        stops: [],
        duration: 1342,
      },
    ],
  },
  {
    price: 38823,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:25:00.000Z",
        stops: [],
        duration: 1824,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:37:00.000Z",
        stops: [],
        duration: 1939,
      },
    ],
  },
  {
    price: 66393,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:10:00.000Z",
        stops: ["SIN", "AUH", "KUL"],
        duration: 809,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:18:00.000Z",
        stops: ["KUL", "BKK", "IST"],
        duration: 1759,
      },
    ],
  },
  {
    price: 20212,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:00:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 1927,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:51:00.000Z",
        stops: ["DXB", "HKG", "AUH"],
        duration: 1375,
      },
    ],
  },
  {
    price: 37281,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:33:00.000Z",
        stops: ["SHA"],
        duration: 1140,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:19:00.000Z",
        stops: [],
        duration: 906,
      },
    ],
  },
  {
    price: 73607,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:20:00.000Z",
        stops: [],
        duration: 906,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:54:00.000Z",
        stops: [],
        duration: 1140,
      },
    ],
  },
  {
    price: 29871,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:18:00.000Z",
        stops: ["BKK", "AUH", "IST"],
        duration: 1015,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:58:00.000Z",
        stops: ["AUH"],
        duration: 1054,
      },
    ],
  },
  {
    price: 97819,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:00:00.000Z",
        stops: ["IST", "AUH"],
        duration: 1454,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:05:00.000Z",
        stops: ["HKG", "SIN"],
        duration: 929,
      },
    ],
  },
  {
    price: 54286,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:13:00.000Z",
        stops: ["HKG", "DXB"],
        duration: 1024,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:45:00.000Z",
        stops: ["BKK", "KUL", "SIN"],
        duration: 653,
      },
    ],
  },
  {
    price: 38979,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:21:00.000Z",
        stops: ["SHA"],
        duration: 1314,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:56:00.000Z",
        stops: ["IST"],
        duration: 1587,
      },
    ],
  },
  {
    price: 98579,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:37:00.000Z",
        stops: ["SIN", "IST", "AUH"],
        duration: 873,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:31:00.000Z",
        stops: [],
        duration: 1682,
      },
    ],
  },
  {
    price: 97212,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:40:00.000Z",
        stops: ["DXB", "AUH", "KUL"],
        duration: 1699,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:26:00.000Z",
        stops: ["BKK", "SIN"],
        duration: 1151,
      },
    ],
  },
  {
    price: 70711,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:59:00.000Z",
        stops: ["DXB", "BKK", "IST"],
        duration: 1654,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:08:00.000Z",
        stops: ["SHA", "IST", "AUH"],
        duration: 1566,
      },
    ],
  },
  {
    price: 34319,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:36:00.000Z",
        stops: [],
        duration: 1431,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:35:00.000Z",
        stops: ["AUH"],
        duration: 1214,
      },
    ],
  },
  {
    price: 64283,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:33:00.000Z",
        stops: ["IST", "HKG", "SHA"],
        duration: 1364,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:36:00.000Z",
        stops: ["IST"],
        duration: 1657,
      },
    ],
  },
  {
    price: 52880,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:24:00.000Z",
        stops: ["BKK"],
        duration: 1236,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:16:00.000Z",
        stops: [],
        duration: 1492,
      },
    ],
  },
  {
    price: 71879,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:12:00.000Z",
        stops: ["KUL"],
        duration: 1771,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:45:00.000Z",
        stops: ["AUH"],
        duration: 676,
      },
    ],
  },
  {
    price: 27509,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:23:00.000Z",
        stops: ["AUH"],
        duration: 1958,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:55:00.000Z",
        stops: [],
        duration: 1836,
      },
    ],
  },
  {
    price: 15744,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:38:00.000Z",
        stops: ["HKG"],
        duration: 802,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:39:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 1432,
      },
    ],
  },
  {
    price: 43394,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:31:00.000Z",
        stops: ["SHA", "KUL", "IST"],
        duration: 1176,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:55:00.000Z",
        stops: [],
        duration: 1304,
      },
    ],
  },
  {
    price: 39245,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:04:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1223,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:03:00.000Z",
        stops: ["IST"],
        duration: 655,
      },
    ],
  },
  {
    price: 46336,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:07:00.000Z",
        stops: ["AUH"],
        duration: 862,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:42:00.000Z",
        stops: ["AUH", "SIN"],
        duration: 1249,
      },
    ],
  },
  {
    price: 76946,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:11:00.000Z",
        stops: ["AUH", "IST"],
        duration: 1217,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:28:00.000Z",
        stops: ["DXB", "IST", "HKG"],
        duration: 1396,
      },
    ],
  },
  {
    price: 72499,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:25:00.000Z",
        stops: [],
        duration: 1821,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:47:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 648,
      },
    ],
  },
  {
    price: 28340,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:54:00.000Z",
        stops: [],
        duration: 867,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:07:00.000Z",
        stops: ["AUH", "IST"],
        duration: 765,
      },
    ],
  },
  {
    price: 43119,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:28:00.000Z",
        stops: ["KUL"],
        duration: 1142,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:14:00.000Z",
        stops: [],
        duration: 1282,
      },
    ],
  },
  {
    price: 17058,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:06:00.000Z",
        stops: ["HKG", "SIN", "KUL"],
        duration: 1106,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:53:00.000Z",
        stops: ["AUH", "KUL", "SIN"],
        duration: 1057,
      },
    ],
  },
  {
    price: 47608,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:19:00.000Z",
        stops: [],
        duration: 1207,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:33:00.000Z",
        stops: ["BKK", "SHA"],
        duration: 626,
      },
    ],
  },
  {
    price: 95737,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:33:00.000Z",
        stops: ["SHA"],
        duration: 1516,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:50:00.000Z",
        stops: ["SHA", "IST", "KUL"],
        duration: 1862,
      },
    ],
  },
  {
    price: 81149,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:31:00.000Z",
        stops: [],
        duration: 1145,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:51:00.000Z",
        stops: ["IST", "SIN"],
        duration: 1773,
      },
    ],
  },
  {
    price: 49682,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:30:00.000Z",
        stops: [],
        duration: 915,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:35:00.000Z",
        stops: ["KUL", "HKG", "AUH"],
        duration: 1782,
      },
    ],
  },
  {
    price: 26085,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:13:00.000Z",
        stops: ["AUH", "SHA", "DXB"],
        duration: 1664,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:21:00.000Z",
        stops: ["KUL"],
        duration: 1053,
      },
    ],
  },
  {
    price: 55141,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:30:00.000Z",
        stops: ["SIN", "DXB", "BKK"],
        duration: 1449,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:22:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 1027,
      },
    ],
  },
  {
    price: 31163,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:28:00.000Z",
        stops: ["AUH"],
        duration: 1080,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:47:00.000Z",
        stops: ["BKK", "DXB", "KUL"],
        duration: 1299,
      },
    ],
  },
  {
    price: 27139,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:10:00.000Z",
        stops: ["AUH", "SIN"],
        duration: 1279,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:38:00.000Z",
        stops: ["BKK", "AUH"],
        duration: 1537,
      },
    ],
  },
  {
    price: 23248,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:08:00.000Z",
        stops: ["SHA", "DXB"],
        duration: 1803,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:36:00.000Z",
        stops: ["DXB"],
        duration: 1438,
      },
    ],
  },
  {
    price: 98905,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:49:00.000Z",
        stops: ["BKK"],
        duration: 820,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:31:00.000Z",
        stops: ["IST"],
        duration: 1569,
      },
    ],
  },
  {
    price: 52714,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:41:00.000Z",
        stops: ["IST"],
        duration: 750,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:13:00.000Z",
        stops: ["BKK", "HKG", "KUL"],
        duration: 614,
      },
    ],
  },
  {
    price: 96986,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:25:00.000Z",
        stops: ["KUL", "BKK"],
        duration: 928,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:12:00.000Z",
        stops: ["KUL"],
        duration: 1657,
      },
    ],
  },
  {
    price: 26182,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:36:00.000Z",
        stops: ["DXB", "AUH", "SIN"],
        duration: 759,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:03:00.000Z",
        stops: [],
        duration: 1225,
      },
    ],
  },
  {
    price: 30046,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:46:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 1258,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:29:00.000Z",
        stops: ["AUH", "IST", "BKK"],
        duration: 1329,
      },
    ],
  },
  {
    price: 56492,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:07:00.000Z",
        stops: [],
        duration: 1129,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:53:00.000Z",
        stops: ["IST", "DXB", "SHA"],
        duration: 1170,
      },
    ],
  },
  {
    price: 72083,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:13:00.000Z",
        stops: ["BKK", "SIN"],
        duration: 1359,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:11:00.000Z",
        stops: ["IST", "BKK", "SHA"],
        duration: 1486,
      },
    ],
  },
  {
    price: 18924,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:41:00.000Z",
        stops: ["IST", "SHA", "KUL"],
        duration: 1876,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:48:00.000Z",
        stops: ["IST", "KUL"],
        duration: 1762,
      },
    ],
  },
  {
    price: 70203,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:21:00.000Z",
        stops: ["HKG"],
        duration: 724,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:54:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 1166,
      },
    ],
  },
  {
    price: 51392,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:55:00.000Z",
        stops: ["AUH"],
        duration: 1352,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:41:00.000Z",
        stops: ["HKG", "IST", "SIN"],
        duration: 1499,
      },
    ],
  },
  {
    price: 55847,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:09:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 937,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:32:00.000Z",
        stops: ["AUH", "SHA", "DXB"],
        duration: 695,
      },
    ],
  },
  {
    price: 85093,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:22:00.000Z",
        stops: ["KUL", "AUH", "HKG"],
        duration: 662,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:37:00.000Z",
        stops: [],
        duration: 1174,
      },
    ],
  },
  {
    price: 88925,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:49:00.000Z",
        stops: ["AUH"],
        duration: 1484,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:38:00.000Z",
        stops: ["SHA", "BKK", "HKG"],
        duration: 1486,
      },
    ],
  },
  {
    price: 73425,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:06:00.000Z",
        stops: ["AUH", "DXB"],
        duration: 1243,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:38:00.000Z",
        stops: ["AUH", "KUL"],
        duration: 1985,
      },
    ],
  },
  {
    price: 58961,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:15:00.000Z",
        stops: [],
        duration: 1054,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:43:00.000Z",
        stops: ["BKK"],
        duration: 1122,
      },
    ],
  },
  {
    price: 35410,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:52:00.000Z",
        stops: [],
        duration: 977,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:51:00.000Z",
        stops: [],
        duration: 612,
      },
    ],
  },
  {
    price: 98134,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:00:00.000Z",
        stops: ["AUH", "SIN", "SHA"],
        duration: 753,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:40:00.000Z",
        stops: [],
        duration: 1288,
      },
    ],
  },
  {
    price: 78724,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:25:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 1203,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:16:00.000Z",
        stops: ["SIN"],
        duration: 1728,
      },
    ],
  },
  {
    price: 95328,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:52:00.000Z",
        stops: ["DXB", "SIN", "SHA"],
        duration: 1307,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:07:00.000Z",
        stops: ["HKG", "DXB", "BKK"],
        duration: 1418,
      },
    ],
  },
  {
    price: 18237,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:04:00.000Z",
        stops: ["KUL", "DXB", "BKK"],
        duration: 1665,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:02:00.000Z",
        stops: ["IST", "HKG", "AUH"],
        duration: 1829,
      },
    ],
  },
  {
    price: 68107,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:39:00.000Z",
        stops: [],
        duration: 1602,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:17:00.000Z",
        stops: [],
        duration: 1531,
      },
    ],
  },
  {
    price: 49884,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:30:00.000Z",
        stops: ["DXB"],
        duration: 1393,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:59:00.000Z",
        stops: [],
        duration: 1043,
      },
    ],
  },
  {
    price: 27169,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:04:00.000Z",
        stops: ["SHA"],
        duration: 1980,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:11:00.000Z",
        stops: [],
        duration: 1320,
      },
    ],
  },
  {
    price: 25737,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:13:00.000Z",
        stops: ["DXB"],
        duration: 1568,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:27:00.000Z",
        stops: ["SIN", "KUL", "BKK"],
        duration: 918,
      },
    ],
  },
  {
    price: 28429,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:00:00.000Z",
        stops: ["DXB", "HKG", "KUL"],
        duration: 1851,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:55:00.000Z",
        stops: ["DXB", "KUL", "IST"],
        duration: 668,
      },
    ],
  },
  {
    price: 39771,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:51:00.000Z",
        stops: ["DXB", "HKG"],
        duration: 1100,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:13:00.000Z",
        stops: [],
        duration: 1619,
      },
    ],
  },
  {
    price: 16274,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:57:00.000Z",
        stops: ["AUH"],
        duration: 1002,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:51:00.000Z",
        stops: ["BKK", "DXB", "SHA"],
        duration: 946,
      },
    ],
  },
  {
    price: 43669,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:34:00.000Z",
        stops: [],
        duration: 843,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:04:00.000Z",
        stops: ["DXB", "HKG", "SIN"],
        duration: 891,
      },
    ],
  },
  {
    price: 61431,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:19:00.000Z",
        stops: ["AUH", "DXB"],
        duration: 853,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:34:00.000Z",
        stops: ["AUH"],
        duration: 752,
      },
    ],
  },
  {
    price: 23366,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:18:00.000Z",
        stops: [],
        duration: 1181,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:18:00.000Z",
        stops: ["SHA", "SIN", "AUH"],
        duration: 1496,
      },
    ],
  },
  {
    price: 74385,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:09:00.000Z",
        stops: [],
        duration: 875,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:45:00.000Z",
        stops: [],
        duration: 747,
      },
    ],
  },
  {
    price: 63613,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:35:00.000Z",
        stops: ["HKG"],
        duration: 1398,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:10:00.000Z",
        stops: ["AUH"],
        duration: 1625,
      },
    ],
  },
  {
    price: 16773,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:22:00.000Z",
        stops: ["SIN"],
        duration: 1613,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:52:00.000Z",
        stops: ["SIN", "IST", "KUL"],
        duration: 734,
      },
    ],
  },
  {
    price: 19103,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:01:00.000Z",
        stops: [],
        duration: 782,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:01:00.000Z",
        stops: ["BKK", "SIN", "HKG"],
        duration: 925,
      },
    ],
  },
  {
    price: 39784,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:25:00.000Z",
        stops: ["KUL"],
        duration: 984,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:43:00.000Z",
        stops: ["SHA"],
        duration: 1766,
      },
    ],
  },
  {
    price: 58786,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:44:00.000Z",
        stops: ["AUH", "KUL"],
        duration: 1293,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:35:00.000Z",
        stops: ["AUH", "DXB"],
        duration: 1081,
      },
    ],
  },
  {
    price: 57551,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:36:00.000Z",
        stops: ["SHA"],
        duration: 1956,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:57:00.000Z",
        stops: [],
        duration: 1754,
      },
    ],
  },
  {
    price: 17302,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:40:00.000Z",
        stops: ["BKK"],
        duration: 1931,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:04:00.000Z",
        stops: ["AUH", "HKG", "SHA"],
        duration: 1327,
      },
    ],
  },
  {
    price: 61480,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:22:00.000Z",
        stops: ["KUL", "HKG"],
        duration: 907,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:43:00.000Z",
        stops: ["IST", "HKG", "AUH"],
        duration: 1410,
      },
    ],
  },
  {
    price: 37059,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:55:00.000Z",
        stops: [],
        duration: 1000,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:18:00.000Z",
        stops: ["SHA"],
        duration: 1689,
      },
    ],
  },
  {
    price: 33638,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:32:00.000Z",
        stops: ["AUH"],
        duration: 926,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:59:00.000Z",
        stops: ["IST", "SIN"],
        duration: 1484,
      },
    ],
  },
  {
    price: 76085,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:46:00.000Z",
        stops: ["AUH"],
        duration: 1399,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:40:00.000Z",
        stops: ["SIN", "AUH", "BKK"],
        duration: 786,
      },
    ],
  },
  {
    price: 64696,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:07:00.000Z",
        stops: ["BKK"],
        duration: 1143,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:25:00.000Z",
        stops: [],
        duration: 1773,
      },
    ],
  },
  {
    price: 89005,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:18:00.000Z",
        stops: ["KUL", "IST"],
        duration: 1544,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:35:00.000Z",
        stops: ["HKG", "SIN"],
        duration: 1363,
      },
    ],
  },
  {
    price: 88360,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:00:00.000Z",
        stops: [],
        duration: 1688,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:53:00.000Z",
        stops: ["BKK", "DXB"],
        duration: 1397,
      },
    ],
  },
  {
    price: 26779,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:16:00.000Z",
        stops: ["AUH", "BKK", "SHA"],
        duration: 1057,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:03:00.000Z",
        stops: [],
        duration: 661,
      },
    ],
  },
  {
    price: 98401,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:54:00.000Z",
        stops: [],
        duration: 1488,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:15:00.000Z",
        stops: ["BKK"],
        duration: 1751,
      },
    ],
  },
  {
    price: 58358,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:03:00.000Z",
        stops: [],
        duration: 1843,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:49:00.000Z",
        stops: ["IST"],
        duration: 1099,
      },
    ],
  },
  {
    price: 61987,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:48:00.000Z",
        stops: ["DXB"],
        duration: 1296,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:22:00.000Z",
        stops: [],
        duration: 1766,
      },
    ],
  },
  {
    price: 77245,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:19:00.000Z",
        stops: [],
        duration: 1231,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:05:00.000Z",
        stops: [],
        duration: 1109,
      },
    ],
  },
  {
    price: 35348,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:09:00.000Z",
        stops: ["SIN", "HKG"],
        duration: 1951,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:15:00.000Z",
        stops: ["AUH", "IST", "HKG"],
        duration: 1651,
      },
    ],
  },
  {
    price: 25338,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:50:00.000Z",
        stops: ["IST"],
        duration: 909,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:47:00.000Z",
        stops: ["AUH", "SIN", "BKK"],
        duration: 1306,
      },
    ],
  },
  {
    price: 61997,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:42:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 677,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:11:00.000Z",
        stops: ["HKG"],
        duration: 1824,
      },
    ],
  },
  {
    price: 47097,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:49:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 673,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:40:00.000Z",
        stops: [],
        duration: 1739,
      },
    ],
  },
  {
    price: 72432,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:03:00.000Z",
        stops: [],
        duration: 1645,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:12:00.000Z",
        stops: [],
        duration: 1011,
      },
    ],
  },
  {
    price: 17749,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:38:00.000Z",
        stops: ["HKG"],
        duration: 1580,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:02:00.000Z",
        stops: ["IST", "KUL"],
        duration: 981,
      },
    ],
  },
  {
    price: 68656,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:30:00.000Z",
        stops: ["BKK"],
        duration: 638,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:27:00.000Z",
        stops: ["HKG", "SIN", "DXB"],
        duration: 1952,
      },
    ],
  },
  {
    price: 29365,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:31:00.000Z",
        stops: ["IST", "SHA", "KUL"],
        duration: 1668,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:51:00.000Z",
        stops: [],
        duration: 1805,
      },
    ],
  },
  {
    price: 85852,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:14:00.000Z",
        stops: [],
        duration: 1330,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:06:00.000Z",
        stops: ["DXB", "KUL", "BKK"],
        duration: 954,
      },
    ],
  },
  {
    price: 99339,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:58:00.000Z",
        stops: [],
        duration: 1821,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:54:00.000Z",
        stops: [],
        duration: 1144,
      },
    ],
  },
  {
    price: 75165,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:49:00.000Z",
        stops: ["SIN", "IST"],
        duration: 1015,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:03:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 1274,
      },
    ],
  },
  {
    price: 83282,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:59:00.000Z",
        stops: [],
        duration: 1766,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:13:00.000Z",
        stops: ["SHA", "KUL", "AUH"],
        duration: 1845,
      },
    ],
  },
  {
    price: 36646,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:10:00.000Z",
        stops: [],
        duration: 1805,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:42:00.000Z",
        stops: ["SHA", "AUH", "KUL"],
        duration: 1321,
      },
    ],
  },
  {
    price: 63484,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:45:00.000Z",
        stops: ["AUH"],
        duration: 1623,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:27:00.000Z",
        stops: ["AUH", "DXB", "SIN"],
        duration: 1176,
      },
    ],
  },
  {
    price: 39824,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:55:00.000Z",
        stops: ["SIN"],
        duration: 672,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:22:00.000Z",
        stops: [],
        duration: 1344,
      },
    ],
  },
  {
    price: 31855,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:41:00.000Z",
        stops: ["SHA", "IST", "KUL"],
        duration: 1469,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:45:00.000Z",
        stops: [],
        duration: 1814,
      },
    ],
  },
  {
    price: 30623,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:39:00.000Z",
        stops: ["BKK", "IST"],
        duration: 1301,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:56:00.000Z",
        stops: [],
        duration: 1611,
      },
    ],
  },
  {
    price: 90600,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:06:00.000Z",
        stops: ["BKK", "DXB"],
        duration: 1535,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:39:00.000Z",
        stops: [],
        duration: 1652,
      },
    ],
  },
  {
    price: 22556,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:51:00.000Z",
        stops: ["HKG"],
        duration: 919,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:25:00.000Z",
        stops: [],
        duration: 1685,
      },
    ],
  },
  {
    price: 53320,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:44:00.000Z",
        stops: ["DXB", "KUL", "SIN"],
        duration: 1142,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:20:00.000Z",
        stops: ["SIN", "IST"],
        duration: 1250,
      },
    ],
  },
  {
    price: 79965,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:33:00.000Z",
        stops: [],
        duration: 946,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:15:00.000Z",
        stops: ["SHA"],
        duration: 1505,
      },
    ],
  },
  {
    price: 29587,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:20:00.000Z",
        stops: ["IST", "AUH"],
        duration: 1113,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:41:00.000Z",
        stops: ["SHA"],
        duration: 622,
      },
    ],
  },
  {
    price: 17771,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:25:00.000Z",
        stops: [],
        duration: 643,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:51:00.000Z",
        stops: ["IST"],
        duration: 1769,
      },
    ],
  },
  {
    price: 94535,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:42:00.000Z",
        stops: ["AUH", "SHA", "KUL"],
        duration: 667,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:30:00.000Z",
        stops: ["AUH"],
        duration: 1637,
      },
    ],
  },
  {
    price: 80197,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:54:00.000Z",
        stops: ["HKG", "KUL", "DXB"],
        duration: 1745,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:44:00.000Z",
        stops: ["BKK", "HKG", "KUL"],
        duration: 1908,
      },
    ],
  },
  {
    price: 88040,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:44:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 994,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:27:00.000Z",
        stops: ["SIN", "DXB", "BKK"],
        duration: 1535,
      },
    ],
  },
  {
    price: 48708,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:59:00.000Z",
        stops: ["SIN", "SHA", "HKG"],
        duration: 906,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:13:00.000Z",
        stops: ["IST", "AUH", "SIN"],
        duration: 887,
      },
    ],
  },
  {
    price: 73638,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:52:00.000Z",
        stops: [],
        duration: 693,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:33:00.000Z",
        stops: ["SIN"],
        duration: 1823,
      },
    ],
  },
  {
    price: 93610,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:50:00.000Z",
        stops: ["BKK"],
        duration: 707,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:43:00.000Z",
        stops: [],
        duration: 793,
      },
    ],
  },
  {
    price: 94918,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:29:00.000Z",
        stops: ["BKK"],
        duration: 926,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:35:00.000Z",
        stops: [],
        duration: 1550,
      },
    ],
  },
  {
    price: 33141,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:09:00.000Z",
        stops: ["AUH", "SIN", "SHA"],
        duration: 1869,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:56:00.000Z",
        stops: [],
        duration: 856,
      },
    ],
  },
  {
    price: 53656,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:00:00.000Z",
        stops: ["KUL"],
        duration: 605,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:32:00.000Z",
        stops: [],
        duration: 731,
      },
    ],
  },
  {
    price: 79601,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:13:00.000Z",
        stops: [],
        duration: 693,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:32:00.000Z",
        stops: ["BKK", "DXB", "SHA"],
        duration: 1146,
      },
    ],
  },
  {
    price: 67764,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:38:00.000Z",
        stops: ["SHA", "HKG"],
        duration: 783,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:26:00.000Z",
        stops: [],
        duration: 1387,
      },
    ],
  },
  {
    price: 63971,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:35:00.000Z",
        stops: ["SHA"],
        duration: 1556,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:40:00.000Z",
        stops: ["KUL"],
        duration: 1249,
      },
    ],
  },
  {
    price: 30251,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:32:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 1294,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:16:00.000Z",
        stops: [],
        duration: 774,
      },
    ],
  },
  {
    price: 53881,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:07:00.000Z",
        stops: ["KUL", "DXB", "IST"],
        duration: 1012,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:57:00.000Z",
        stops: ["AUH", "SHA"],
        duration: 1847,
      },
    ],
  },
  {
    price: 92689,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:56:00.000Z",
        stops: ["IST", "BKK"],
        duration: 631,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:54:00.000Z",
        stops: ["BKK"],
        duration: 1633,
      },
    ],
  },
  {
    price: 42942,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:16:00.000Z",
        stops: ["IST", "KUL", "DXB"],
        duration: 905,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:03:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 896,
      },
    ],
  },
  {
    price: 33582,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:15:00.000Z",
        stops: ["SIN", "HKG"],
        duration: 1011,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:10:00.000Z",
        stops: ["SHA", "HKG", "SIN"],
        duration: 1117,
      },
    ],
  },
  {
    price: 57662,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:46:00.000Z",
        stops: ["DXB"],
        duration: 862,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:48:00.000Z",
        stops: [],
        duration: 965,
      },
    ],
  },
  {
    price: 90734,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:14:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 708,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:27:00.000Z",
        stops: ["IST", "BKK"],
        duration: 1824,
      },
    ],
  },
  {
    price: 20522,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:51:00.000Z",
        stops: ["SIN"],
        duration: 1700,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:51:00.000Z",
        stops: ["SIN"],
        duration: 1842,
      },
    ],
  },
  {
    price: 74965,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:29:00.000Z",
        stops: ["KUL", "SHA"],
        duration: 798,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:40:00.000Z",
        stops: ["KUL", "AUH"],
        duration: 1872,
      },
    ],
  },
  {
    price: 15199,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:48:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1760,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:34:00.000Z",
        stops: ["SIN", "SHA", "KUL"],
        duration: 1079,
      },
    ],
  },
  {
    price: 55233,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:22:00.000Z",
        stops: ["HKG", "KUL", "IST"],
        duration: 731,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:56:00.000Z",
        stops: ["HKG", "IST"],
        duration: 1658,
      },
    ],
  },
  {
    price: 71970,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:33:00.000Z",
        stops: ["AUH", "DXB", "SIN"],
        duration: 1388,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:45:00.000Z",
        stops: ["DXB", "BKK"],
        duration: 863,
      },
    ],
  },
  {
    price: 51956,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:27:00.000Z",
        stops: ["HKG", "AUH", "IST"],
        duration: 872,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:39:00.000Z",
        stops: ["HKG", "KUL"],
        duration: 1619,
      },
    ],
  },
  {
    price: 82160,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:28:00.000Z",
        stops: [],
        duration: 1926,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:03:00.000Z",
        stops: [],
        duration: 1509,
      },
    ],
  },
  {
    price: 88394,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:07:00.000Z",
        stops: ["IST", "SIN", "BKK"],
        duration: 1658,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:31:00.000Z",
        stops: ["DXB"],
        duration: 1090,
      },
    ],
  },
  {
    price: 71100,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:55:00.000Z",
        stops: ["IST", "BKK", "AUH"],
        duration: 1243,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:52:00.000Z",
        stops: ["DXB", "KUL"],
        duration: 1948,
      },
    ],
  },
  {
    price: 67370,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:06:00.000Z",
        stops: [],
        duration: 633,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:02:00.000Z",
        stops: [],
        duration: 1086,
      },
    ],
  },
  {
    price: 79065,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:47:00.000Z",
        stops: ["BKK"],
        duration: 1114,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:51:00.000Z",
        stops: ["SHA", "SIN", "AUH"],
        duration: 1519,
      },
    ],
  },
  {
    price: 43603,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:24:00.000Z",
        stops: ["AUH", "HKG"],
        duration: 1371,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:56:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 1159,
      },
    ],
  },
  {
    price: 45639,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:15:00.000Z",
        stops: ["AUH", "SHA"],
        duration: 840,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:02:00.000Z",
        stops: ["SIN", "AUH", "HKG"],
        duration: 1331,
      },
    ],
  },
  {
    price: 63309,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:38:00.000Z",
        stops: ["SHA", "BKK"],
        duration: 1127,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:51:00.000Z",
        stops: ["DXB"],
        duration: 1378,
      },
    ],
  },
  {
    price: 78740,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:20:00.000Z",
        stops: ["SHA", "IST"],
        duration: 629,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:07:00.000Z",
        stops: ["SIN"],
        duration: 1566,
      },
    ],
  },
  {
    price: 71370,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:15:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1946,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:52:00.000Z",
        stops: ["IST", "AUH"],
        duration: 922,
      },
    ],
  },
  {
    price: 73320,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:24:00.000Z",
        stops: ["BKK"],
        duration: 1468,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:41:00.000Z",
        stops: ["AUH", "BKK", "DXB"],
        duration: 1920,
      },
    ],
  },
  {
    price: 73407,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:15:00.000Z",
        stops: [],
        duration: 1424,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:23:00.000Z",
        stops: ["SHA", "BKK"],
        duration: 1915,
      },
    ],
  },
  {
    price: 34969,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:48:00.000Z",
        stops: [],
        duration: 1759,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:54:00.000Z",
        stops: ["AUH", "BKK"],
        duration: 1455,
      },
    ],
  },
  {
    price: 25315,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:01:00.000Z",
        stops: ["SHA", "DXB", "HKG"],
        duration: 1509,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:16:00.000Z",
        stops: [],
        duration: 1129,
      },
    ],
  },
  {
    price: 81611,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:49:00.000Z",
        stops: ["KUL", "IST"],
        duration: 1136,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:09:00.000Z",
        stops: ["SHA", "KUL", "SIN"],
        duration: 1943,
      },
    ],
  },
  {
    price: 38287,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:49:00.000Z",
        stops: ["BKK"],
        duration: 919,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:56:00.000Z",
        stops: ["AUH", "SHA", "SIN"],
        duration: 1251,
      },
    ],
  },
  {
    price: 16853,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:07:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 860,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:50:00.000Z",
        stops: ["HKG"],
        duration: 1893,
      },
    ],
  },
  {
    price: 34429,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:48:00.000Z",
        stops: ["SHA", "IST"],
        duration: 1507,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:33:00.000Z",
        stops: ["BKK", "IST", "HKG"],
        duration: 714,
      },
    ],
  },
  {
    price: 70864,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:46:00.000Z",
        stops: [],
        duration: 830,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:50:00.000Z",
        stops: ["DXB", "SHA", "BKK"],
        duration: 889,
      },
    ],
  },
  {
    price: 29481,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:28:00.000Z",
        stops: ["SIN", "KUL"],
        duration: 751,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:48:00.000Z",
        stops: ["KUL", "IST"],
        duration: 915,
      },
    ],
  },
  {
    price: 31948,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:57:00.000Z",
        stops: ["BKK"],
        duration: 1374,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:57:00.000Z",
        stops: ["SIN", "SHA"],
        duration: 1647,
      },
    ],
  },
  {
    price: 53669,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:41:00.000Z",
        stops: ["DXB", "KUL", "HKG"],
        duration: 709,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:35:00.000Z",
        stops: ["SHA"],
        duration: 1008,
      },
    ],
  },
  {
    price: 85781,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:28:00.000Z",
        stops: ["AUH", "SIN"],
        duration: 1625,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:51:00.000Z",
        stops: ["HKG", "SIN"],
        duration: 1932,
      },
    ],
  },
  {
    price: 28688,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:24:00.000Z",
        stops: ["DXB"],
        duration: 1981,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:58:00.000Z",
        stops: [],
        duration: 1566,
      },
    ],
  },
  {
    price: 26049,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:32:00.000Z",
        stops: [],
        duration: 705,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:32:00.000Z",
        stops: ["DXB", "KUL", "IST"],
        duration: 1429,
      },
    ],
  },
  {
    price: 89497,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:33:00.000Z",
        stops: ["AUH", "HKG", "KUL"],
        duration: 1258,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:32:00.000Z",
        stops: [],
        duration: 1595,
      },
    ],
  },
  {
    price: 24009,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:08:00.000Z",
        stops: ["SIN", "KUL", "DXB"],
        duration: 1291,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:56:00.000Z",
        stops: ["AUH", "SHA", "HKG"],
        duration: 654,
      },
    ],
  },
  {
    price: 35412,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:14:00.000Z",
        stops: [],
        duration: 1218,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:46:00.000Z",
        stops: ["AUH", "DXB"],
        duration: 727,
      },
    ],
  },
  {
    price: 35269,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:11:00.000Z",
        stops: ["DXB", "AUH", "SIN"],
        duration: 975,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:01:00.000Z",
        stops: ["AUH"],
        duration: 903,
      },
    ],
  },
  {
    price: 52264,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:51:00.000Z",
        stops: ["AUH"],
        duration: 630,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:56:00.000Z",
        stops: ["BKK"],
        duration: 1219,
      },
    ],
  },
  {
    price: 66368,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:35:00.000Z",
        stops: ["BKK"],
        duration: 1713,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:30:00.000Z",
        stops: ["DXB", "AUH", "SHA"],
        duration: 1598,
      },
    ],
  },
  {
    price: 17120,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:16:00.000Z",
        stops: ["HKG", "SIN", "DXB"],
        duration: 1284,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:03:00.000Z",
        stops: ["BKK", "IST"],
        duration: 1543,
      },
    ],
  },
  {
    price: 63922,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:25:00.000Z",
        stops: ["HKG"],
        duration: 805,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:21:00.000Z",
        stops: [],
        duration: 1663,
      },
    ],
  },
  {
    price: 77156,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:11:00.000Z",
        stops: [],
        duration: 1446,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:57:00.000Z",
        stops: [],
        duration: 1221,
      },
    ],
  },
  {
    price: 56238,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:36:00.000Z",
        stops: [],
        duration: 1364,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:19:00.000Z",
        stops: ["IST", "AUH", "HKG"],
        duration: 1384,
      },
    ],
  },
  {
    price: 55514,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:23:00.000Z",
        stops: ["IST"],
        duration: 753,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:09:00.000Z",
        stops: ["DXB", "SIN"],
        duration: 1606,
      },
    ],
  },
  {
    price: 71509,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:14:00.000Z",
        stops: ["SHA", "AUH"],
        duration: 1320,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:41:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1419,
      },
    ],
  },
  {
    price: 98088,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:31:00.000Z",
        stops: ["BKK"],
        duration: 691,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:27:00.000Z",
        stops: ["SHA", "SIN", "AUH"],
        duration: 1431,
      },
    ],
  },
  {
    price: 55106,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:03:00.000Z",
        stops: ["KUL", "BKK", "IST"],
        duration: 1579,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:00:00.000Z",
        stops: ["BKK", "KUL"],
        duration: 1911,
      },
    ],
  },
  {
    price: 30359,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:32:00.000Z",
        stops: ["SHA", "AUH", "IST"],
        duration: 1513,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:59:00.000Z",
        stops: ["KUL"],
        duration: 1371,
      },
    ],
  },
  {
    price: 48253,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:19:00.000Z",
        stops: ["HKG", "AUH", "DXB"],
        duration: 1646,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:10:00.000Z",
        stops: ["AUH", "SHA"],
        duration: 608,
      },
    ],
  },
  {
    price: 25957,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:13:00.000Z",
        stops: ["SHA", "KUL", "DXB"],
        duration: 1453,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:49:00.000Z",
        stops: ["DXB", "AUH", "HKG"],
        duration: 1551,
      },
    ],
  },
  {
    price: 47373,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:18:00.000Z",
        stops: [],
        duration: 1951,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:02:00.000Z",
        stops: ["AUH", "KUL"],
        duration: 631,
      },
    ],
  },
  {
    price: 78658,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:39:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 1169,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:44:00.000Z",
        stops: ["SIN"],
        duration: 1182,
      },
    ],
  },
  {
    price: 59223,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:11:00.000Z",
        stops: ["DXB"],
        duration: 1261,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:45:00.000Z",
        stops: [],
        duration: 758,
      },
    ],
  },
  {
    price: 42524,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:55:00.000Z",
        stops: [],
        duration: 1078,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:08:00.000Z",
        stops: ["KUL"],
        duration: 1646,
      },
    ],
  },
  {
    price: 39995,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:24:00.000Z",
        stops: ["AUH", "IST"],
        duration: 1266,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:00:00.000Z",
        stops: ["KUL", "SIN", "DXB"],
        duration: 1067,
      },
    ],
  },
  {
    price: 68968,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:35:00.000Z",
        stops: ["HKG"],
        duration: 759,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:34:00.000Z",
        stops: ["SIN", "KUL", "AUH"],
        duration: 1347,
      },
    ],
  },
  {
    price: 36296,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:43:00.000Z",
        stops: ["IST", "DXB", "HKG"],
        duration: 1197,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:48:00.000Z",
        stops: ["IST", "KUL", "BKK"],
        duration: 1482,
      },
    ],
  },
  {
    price: 15383,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:24:00.000Z",
        stops: ["KUL"],
        duration: 1807,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:03:00.000Z",
        stops: ["SHA", "IST", "DXB"],
        duration: 1634,
      },
    ],
  },
  {
    price: 21248,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:51:00.000Z",
        stops: ["BKK", "AUH"],
        duration: 758,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:02:00.000Z",
        stops: ["KUL"],
        duration: 1741,
      },
    ],
  },
  {
    price: 98636,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:24:00.000Z",
        stops: ["AUH", "HKG"],
        duration: 1157,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:07:00.000Z",
        stops: ["HKG", "SHA"],
        duration: 1566,
      },
    ],
  },
  {
    price: 20818,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:43:00.000Z",
        stops: ["KUL"],
        duration: 1968,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:28:00.000Z",
        stops: ["KUL", "AUH"],
        duration: 1916,
      },
    ],
  },
  {
    price: 48985,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:22:00.000Z",
        stops: ["HKG"],
        duration: 1995,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:09:00.000Z",
        stops: ["SHA", "AUH"],
        duration: 992,
      },
    ],
  },
  {
    price: 81712,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:16:00.000Z",
        stops: [],
        duration: 1176,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:00:00.000Z",
        stops: ["KUL"],
        duration: 1470,
      },
    ],
  },
  {
    price: 16982,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:40:00.000Z",
        stops: ["SIN", "SHA", "KUL"],
        duration: 996,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:35:00.000Z",
        stops: ["IST", "BKK"],
        duration: 1677,
      },
    ],
  },
  {
    price: 75825,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:39:00.000Z",
        stops: [],
        duration: 1400,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:49:00.000Z",
        stops: ["AUH", "KUL", "IST"],
        duration: 1897,
      },
    ],
  },
  {
    price: 66354,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:49:00.000Z",
        stops: ["SHA"],
        duration: 1971,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:25:00.000Z",
        stops: [],
        duration: 1061,
      },
    ],
  },
  {
    price: 35278,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:13:00.000Z",
        stops: [],
        duration: 1621,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:55:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1799,
      },
    ],
  },
  {
    price: 38337,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:15:00.000Z",
        stops: ["DXB", "HKG", "AUH"],
        duration: 879,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:17:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 1630,
      },
    ],
  },
  {
    price: 52509,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:45:00.000Z",
        stops: ["SHA"],
        duration: 636,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:51:00.000Z",
        stops: ["HKG", "SIN"],
        duration: 1079,
      },
    ],
  },
  {
    price: 63715,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:13:00.000Z",
        stops: ["IST"],
        duration: 1012,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:02:00.000Z",
        stops: ["BKK", "SIN", "DXB"],
        duration: 730,
      },
    ],
  },
  {
    price: 88806,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:29:00.000Z",
        stops: ["IST"],
        duration: 1825,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:20:00.000Z",
        stops: ["AUH", "DXB", "SHA"],
        duration: 1411,
      },
    ],
  },
  {
    price: 81503,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:32:00.000Z",
        stops: ["KUL", "HKG"],
        duration: 1667,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:27:00.000Z",
        stops: ["KUL"],
        duration: 749,
      },
    ],
  },
  {
    price: 61132,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:37:00.000Z",
        stops: ["HKG", "DXB"],
        duration: 1384,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:58:00.000Z",
        stops: ["SHA"],
        duration: 695,
      },
    ],
  },
  {
    price: 95629,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:49:00.000Z",
        stops: ["SHA", "DXB", "IST"],
        duration: 1161,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:36:00.000Z",
        stops: [],
        duration: 1656,
      },
    ],
  },
  {
    price: 66253,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:12:00.000Z",
        stops: ["BKK", "HKG"],
        duration: 1741,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:59:00.000Z",
        stops: ["HKG"],
        duration: 1875,
      },
    ],
  },
  {
    price: 58117,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:16:00.000Z",
        stops: ["AUH"],
        duration: 1871,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:19:00.000Z",
        stops: ["AUH", "BKK", "DXB"],
        duration: 1739,
      },
    ],
  },
  {
    price: 55848,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:13:00.000Z",
        stops: [],
        duration: 793,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:45:00.000Z",
        stops: [],
        duration: 1787,
      },
    ],
  },
  {
    price: 71982,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:20:00.000Z",
        stops: ["KUL"],
        duration: 1850,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:35:00.000Z",
        stops: ["KUL", "SIN", "IST"],
        duration: 1213,
      },
    ],
  },
  {
    price: 17005,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:26:00.000Z",
        stops: ["HKG"],
        duration: 1488,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:56:00.000Z",
        stops: ["AUH"],
        duration: 1740,
      },
    ],
  },
  {
    price: 68790,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:09:00.000Z",
        stops: [],
        duration: 1418,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:44:00.000Z",
        stops: ["SIN"],
        duration: 1839,
      },
    ],
  },
  {
    price: 17303,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:20:00.000Z",
        stops: ["IST"],
        duration: 1129,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:08:00.000Z",
        stops: ["KUL", "DXB", "BKK"],
        duration: 1709,
      },
    ],
  },
  {
    price: 61920,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:50:00.000Z",
        stops: ["BKK", "DXB"],
        duration: 1874,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:16:00.000Z",
        stops: [],
        duration: 1453,
      },
    ],
  },
  {
    price: 50305,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:50:00.000Z",
        stops: ["HKG", "KUL"],
        duration: 1752,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:12:00.000Z",
        stops: ["SIN", "DXB", "KUL"],
        duration: 1085,
      },
    ],
  },
  {
    price: 56274,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:12:00.000Z",
        stops: ["KUL", "BKK"],
        duration: 1985,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:20:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 1626,
      },
    ],
  },
  {
    price: 88543,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:47:00.000Z",
        stops: ["DXB"],
        duration: 649,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:17:00.000Z",
        stops: ["IST", "SIN"],
        duration: 1113,
      },
    ],
  },
  {
    price: 56079,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T02:27:00.000Z",
        stops: ["HKG", "SIN"],
        duration: 1906,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:23:00.000Z",
        stops: ["KUL", "DXB", "IST"],
        duration: 701,
      },
    ],
  },
  {
    price: 60390,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:28:00.000Z",
        stops: ["IST"],
        duration: 604,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:44:00.000Z",
        stops: ["KUL"],
        duration: 1031,
      },
    ],
  },
  {
    price: 48432,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:56:00.000Z",
        stops: ["IST", "DXB", "KUL"],
        duration: 1318,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:05:00.000Z",
        stops: ["HKG", "SIN"],
        duration: 1266,
      },
    ],
  },
  {
    price: 55699,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:13:00.000Z",
        stops: ["KUL"],
        duration: 631,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:24:00.000Z",
        stops: ["SIN", "DXB"],
        duration: 1205,
      },
    ],
  },
  {
    price: 83237,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:44:00.000Z",
        stops: ["AUH"],
        duration: 826,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:18:00.000Z",
        stops: ["SHA"],
        duration: 1166,
      },
    ],
  },
  {
    price: 95301,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:34:00.000Z",
        stops: ["SIN"],
        duration: 1116,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:09:00.000Z",
        stops: ["HKG", "IST"],
        duration: 884,
      },
    ],
  },
  {
    price: 74477,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:04:00.000Z",
        stops: ["SIN"],
        duration: 1698,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:35:00.000Z",
        stops: ["BKK"],
        duration: 1726,
      },
    ],
  },
  {
    price: 83452,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:27:00.000Z",
        stops: ["DXB"],
        duration: 1119,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:53:00.000Z",
        stops: ["BKK"],
        duration: 1190,
      },
    ],
  },
  {
    price: 45751,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:44:00.000Z",
        stops: ["SHA", "SIN", "DXB"],
        duration: 819,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:14:00.000Z",
        stops: ["BKK", "IST", "KUL"],
        duration: 655,
      },
    ],
  },
  {
    price: 93497,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:38:00.000Z",
        stops: ["DXB", "HKG"],
        duration: 1045,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:07:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 673,
      },
    ],
  },
  {
    price: 71123,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:38:00.000Z",
        stops: ["SIN", "HKG", "AUH"],
        duration: 840,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:21:00.000Z",
        stops: ["SHA", "DXB", "HKG"],
        duration: 676,
      },
    ],
  },
  {
    price: 27715,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:35:00.000Z",
        stops: [],
        duration: 1223,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:35:00.000Z",
        stops: ["AUH", "KUL", "BKK"],
        duration: 1608,
      },
    ],
  },
  {
    price: 30881,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:19:00.000Z",
        stops: ["IST", "SHA", "HKG"],
        duration: 1122,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:46:00.000Z",
        stops: [],
        duration: 1010,
      },
    ],
  },
  {
    price: 45893,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:36:00.000Z",
        stops: ["AUH", "SHA", "SIN"],
        duration: 1365,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:29:00.000Z",
        stops: ["SIN"],
        duration: 1565,
      },
    ],
  },
  {
    price: 29225,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:26:00.000Z",
        stops: ["KUL", "SIN"],
        duration: 1707,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:49:00.000Z",
        stops: ["SHA"],
        duration: 1156,
      },
    ],
  },
  {
    price: 30347,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:48:00.000Z",
        stops: ["KUL", "IST", "DXB"],
        duration: 1129,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:41:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 1933,
      },
    ],
  },
  {
    price: 35989,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:41:00.000Z",
        stops: [],
        duration: 847,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:28:00.000Z",
        stops: [],
        duration: 1464,
      },
    ],
  },
  {
    price: 66808,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:43:00.000Z",
        stops: [],
        duration: 1888,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:04:00.000Z",
        stops: ["DXB", "KUL", "BKK"],
        duration: 840,
      },
    ],
  },
  {
    price: 70840,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:30:00.000Z",
        stops: ["AUH", "SIN"],
        duration: 1235,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T00:59:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 1099,
      },
    ],
  },
  {
    price: 87539,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:00:00.000Z",
        stops: [],
        duration: 1686,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:18:00.000Z",
        stops: [],
        duration: 736,
      },
    ],
  },
  {
    price: 54004,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:32:00.000Z",
        stops: [],
        duration: 1959,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:01:00.000Z",
        stops: ["DXB"],
        duration: 1876,
      },
    ],
  },
  {
    price: 43936,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:50:00.000Z",
        stops: [],
        duration: 1261,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:21:00.000Z",
        stops: ["HKG", "AUH"],
        duration: 727,
      },
    ],
  },
  {
    price: 95125,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:37:00.000Z",
        stops: [],
        duration: 623,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:54:00.000Z",
        stops: ["SHA", "BKK"],
        duration: 1362,
      },
    ],
  },
  {
    price: 22398,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:53:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 1654,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T03:45:00.000Z",
        stops: ["KUL", "DXB"],
        duration: 1009,
      },
    ],
  },
  {
    price: 82327,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:02:00.000Z",
        stops: [],
        duration: 751,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:11:00.000Z",
        stops: ["SIN", "IST", "SHA"],
        duration: 1966,
      },
    ],
  },
  {
    price: 86081,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:51:00.000Z",
        stops: ["IST"],
        duration: 704,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:08:00.000Z",
        stops: ["SHA", "SIN"],
        duration: 723,
      },
    ],
  },
  {
    price: 71821,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:17:00.000Z",
        stops: ["IST", "AUH"],
        duration: 878,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:38:00.000Z",
        stops: ["SHA"],
        duration: 1093,
      },
    ],
  },
  {
    price: 57400,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:26:00.000Z",
        stops: [],
        duration: 1363,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:42:00.000Z",
        stops: ["BKK"],
        duration: 1759,
      },
    ],
  },
  {
    price: 34124,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:10:00.000Z",
        stops: [],
        duration: 1100,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:41:00.000Z",
        stops: ["SIN"],
        duration: 1628,
      },
    ],
  },
  {
    price: 88310,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:40:00.000Z",
        stops: ["SHA", "HKG", "KUL"],
        duration: 1652,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:19:00.000Z",
        stops: ["KUL"],
        duration: 1763,
      },
    ],
  },
  {
    price: 25073,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:10:00.000Z",
        stops: ["BKK"],
        duration: 790,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:44:00.000Z",
        stops: ["HKG", "SIN", "DXB"],
        duration: 603,
      },
    ],
  },
  {
    price: 92797,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:32:00.000Z",
        stops: ["HKG"],
        duration: 1961,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:36:00.000Z",
        stops: ["KUL", "HKG", "DXB"],
        duration: 733,
      },
    ],
  },
  {
    price: 63344,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:09:00.000Z",
        stops: ["IST"],
        duration: 1614,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:59:00.000Z",
        stops: ["KUL"],
        duration: 682,
      },
    ],
  },
  {
    price: 87498,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:04:00.000Z",
        stops: [],
        duration: 1946,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:11:00.000Z",
        stops: ["HKG", "BKK"],
        duration: 862,
      },
    ],
  },
  {
    price: 50572,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:15:00.000Z",
        stops: ["IST", "SHA", "SIN"],
        duration: 1284,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T17:17:00.000Z",
        stops: ["KUL"],
        duration: 1218,
      },
    ],
  },
  {
    price: 54970,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T07:36:00.000Z",
        stops: ["BKK", "KUL", "DXB"],
        duration: 1050,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:53:00.000Z",
        stops: [],
        duration: 1665,
      },
    ],
  },
  {
    price: 63246,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:54:00.000Z",
        stops: [],
        duration: 1141,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:29:00.000Z",
        stops: ["BKK", "SIN"],
        duration: 1661,
      },
    ],
  },
  {
    price: 95873,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T21:24:00.000Z",
        stops: ["BKK"],
        duration: 1182,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:53:00.000Z",
        stops: ["IST", "BKK", "HKG"],
        duration: 1176,
      },
    ],
  },
  {
    price: 49060,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:14:00.000Z",
        stops: ["HKG", "IST"],
        duration: 1637,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:06:00.000Z",
        stops: ["IST", "DXB", "BKK"],
        duration: 1228,
      },
    ],
  },
  {
    price: 77874,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T15:25:00.000Z",
        stops: ["SHA", "IST", "SIN"],
        duration: 1105,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:53:00.000Z",
        stops: [],
        duration: 917,
      },
    ],
  },
  {
    price: 33212,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:58:00.000Z",
        stops: [],
        duration: 1224,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T04:26:00.000Z",
        stops: ["KUL", "SHA", "AUH"],
        duration: 1639,
      },
    ],
  },
  {
    price: 48859,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:29:00.000Z",
        stops: ["HKG", "AUH", "IST"],
        duration: 1495,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:05:00.000Z",
        stops: ["AUH"],
        duration: 831,
      },
    ],
  },
  {
    price: 29120,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T03:53:00.000Z",
        stops: [],
        duration: 652,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:58:00.000Z",
        stops: ["IST", "BKK"],
        duration: 687,
      },
    ],
  },
  {
    price: 16272,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:34:00.000Z",
        stops: ["AUH", "SHA"],
        duration: 1967,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:35:00.000Z",
        stops: ["SIN", "AUH"],
        duration: 1432,
      },
    ],
  },
  {
    price: 88509,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T12:14:00.000Z",
        stops: ["AUH", "HKG", "IST"],
        duration: 1101,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T08:00:00.000Z",
        stops: ["IST"],
        duration: 1931,
      },
    ],
  },
  {
    price: 51089,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:47:00.000Z",
        stops: ["AUH", "SHA", "BKK"],
        duration: 1698,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:37:00.000Z",
        stops: ["AUH", "HKG"],
        duration: 1343,
      },
    ],
  },
  {
    price: 20006,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:19:00.000Z",
        stops: ["HKG"],
        duration: 1489,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T11:09:00.000Z",
        stops: [],
        duration: 943,
      },
    ],
  },
  {
    price: 35043,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:14:00.000Z",
        stops: ["KUL", "HKG"],
        duration: 943,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:31:00.000Z",
        stops: ["IST", "HKG"],
        duration: 975,
      },
    ],
  },
  {
    price: 49866,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:18:00.000Z",
        stops: ["DXB", "BKK", "SIN"],
        duration: 1938,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:58:00.000Z",
        stops: ["IST", "BKK"],
        duration: 1265,
      },
    ],
  },
  {
    price: 37910,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T23:09:00.000Z",
        stops: ["SHA"],
        duration: 615,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T23:19:00.000Z",
        stops: [],
        duration: 1610,
      },
    ],
  },
  {
    price: 90924,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:21:00.000Z",
        stops: ["DXB", "AUH", "BKK"],
        duration: 1413,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:22:00.000Z",
        stops: ["AUH", "KUL", "DXB"],
        duration: 1559,
      },
    ],
  },
  {
    price: 37514,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:03:00.000Z",
        stops: ["KUL"],
        duration: 1430,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:00:00.000Z",
        stops: ["BKK"],
        duration: 744,
      },
    ],
  },
  {
    price: 73483,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T04:01:00.000Z",
        stops: ["IST"],
        duration: 714,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T14:15:00.000Z",
        stops: ["IST", "HKG", "DXB"],
        duration: 1260,
      },
    ],
  },
  {
    price: 64479,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T11:27:00.000Z",
        stops: ["BKK", "SHA"],
        duration: 1557,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T12:43:00.000Z",
        stops: ["SHA", "KUL", "IST"],
        duration: 1088,
      },
    ],
  },
  {
    price: 45448,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T06:00:00.000Z",
        stops: ["HKG"],
        duration: 1762,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T21:57:00.000Z",
        stops: ["DXB", "IST"],
        duration: 960,
      },
    ],
  },
  {
    price: 96174,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:59:00.000Z",
        stops: ["IST", "KUL"],
        duration: 1670,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T07:33:00.000Z",
        stops: [],
        duration: 1081,
      },
    ],
  },
  {
    price: 94995,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:29:00.000Z",
        stops: ["DXB"],
        duration: 649,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:31:00.000Z",
        stops: ["AUH"],
        duration: 1783,
      },
    ],
  },
  {
    price: 57929,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T16:50:00.000Z",
        stops: ["HKG", "DXB"],
        duration: 670,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T15:34:00.000Z",
        stops: ["HKG", "IST", "AUH"],
        duration: 1640,
      },
    ],
  },
  {
    price: 45169,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:40:00.000Z",
        stops: [],
        duration: 819,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-10-31T22:25:00.000Z",
        stops: [],
        duration: 1137,
      },
    ],
  },
  {
    price: 33661,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:48:00.000Z",
        stops: ["IST", "KUL", "AUH"],
        duration: 770,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T09:39:00.000Z",
        stops: ["AUH"],
        duration: 1088,
      },
    ],
  },
  {
    price: 29876,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:20:00.000Z",
        stops: ["IST", "SHA"],
        duration: 1354,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:29:00.000Z",
        stops: ["HKG", "SIN", "IST"],
        duration: 1578,
      },
    ],
  },
  {
    price: 95676,
    carrier: "MH",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T17:06:00.000Z",
        stops: ["AUH"],
        duration: 763,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:52:00.000Z",
        stops: [],
        duration: 1857,
      },
    ],
  },
  {
    price: 70650,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:55:00.000Z",
        stops: [],
        duration: 1711,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T16:07:00.000Z",
        stops: ["IST", "SIN"],
        duration: 617,
      },
    ],
  },
  {
    price: 36713,
    carrier: "EY",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T09:29:00.000Z",
        stops: [],
        duration: 1642,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:19:00.000Z",
        stops: ["SHA", "IST", "AUH"],
        duration: 1705,
      },
    ],
  },
  {
    price: 50833,
    carrier: "EK",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T13:47:00.000Z",
        stops: ["SIN", "BKK", "IST"],
        duration: 1041,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:36:00.000Z",
        stops: ["IST", "AUH", "KUL"],
        duration: 663,
      },
    ],
  },
  {
    price: 80702,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-11T22:59:00.000Z",
        stops: ["SHA"],
        duration: 971,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T01:22:00.000Z",
        stops: ["AUH", "HKG", "DXB"],
        duration: 976,
      },
    ],
  },
  {
    price: 24771,
    carrier: "S7",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T10:14:00.000Z",
        stops: ["KUL", "AUH"],
        duration: 1755,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:41:00.000Z",
        stops: [],
        duration: 1303,
      },
    ],
  },
  {
    price: 97056,
    carrier: "FV",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T01:59:00.000Z",
        stops: ["BKK", "SHA"],
        duration: 1328,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T02:01:00.000Z",
        stops: [],
        duration: 1133,
      },
    ],
  },
  {
    price: 78081,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T08:13:00.000Z",
        stops: ["SHA", "SIN"],
        duration: 804,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T13:00:00.000Z",
        stops: ["BKK"],
        duration: 942,
      },
    ],
  },
];

export const smallTicketsMock: TicketType[] = [
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
    price: 21565,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T05:54:00.000Z",
        stops: ["AUH"],
        duration: 782,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T06:51:00.000Z",
        stops: ["KUL"],
        duration: 727,
      },
    ],
  },
  {
    price: 17057,
    carrier: "TG",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T14:53:00.000Z",
        stops: ["DXB", "SHA"],
        duration: 1396,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T10:28:00.000Z",
        stops: ["SHA", "KUL"],
        duration: 1446,
      },
    ],
  },
  {
    price: 75832,
    carrier: "SU",
    segments: [
      {
        origin: "MOW",
        destination: "HKT",
        date: "2020-10-12T00:43:00.000Z",
        stops: [],
        duration: 710,
      },
      {
        origin: "HKT",
        destination: "MOW",
        date: "2020-11-01T05:54:00.000Z",
        stops: [],
        duration: 1887,
      },
    ],
  },
];

export default ticketsMocks;
