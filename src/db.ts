import { Item } from "./types";

export const data: Item[] = [
  {
    id: 1,
    name: "assets",
    type: "folder",
    children: [
      {
        id: 2,
        name: "infc",
        type: "folder",
        children: [
          {
            id: 3,
            name: "infc_1",
            type: "file",
          },
          {
            id: 4,
            name: "infc_2",
            type: "file",
          },
          {
            id: 5,
            name: "infc_3",
            type: "file",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "rnd",
    type: "folder",
    children: [],
  },
];
