interface IHeaderNavList {
  id: number;
  name: string;
  ref: string;
}

export const headerNavList: IHeaderNavList[] = [
  {
    id: 0,
    name: "LASER TAG EQUIPMENT",
    ref: "#equipment",
  },
  {
    id: 1,
    name: "ABOUT COMPANY",
    ref: "#about",
  },
  {
    id: 2,
    name: "BUSINESS SUPPORT",
    ref: "#support",
  },
  {
    id: 3,
    name: "CLIENTS ABOUT US",
    ref: "#aboutUs",
  },
  {
    id: 4,
    name: "ORDER DEMO",
    ref: "#orderDemo",
  },
];
