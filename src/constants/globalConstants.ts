interface IHeaderNavList {
  id: number;
  name: string;
  ref: string;
}

interface IEquipmentList {
  id: number;
  titleSpan: string;
  title: string;
}

interface IEquipmentBtnList {
  id: number;
  name: string;
  logo: string;
  link: string;
  bgBtnColor: string;
  widthLogo?: number;
  heightLogo?: number;
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

export const equipmentList: IEquipmentList[] = [
  {
    id: 0,
    titleSpan: "Lasertag.net",
    title: "- обладнання для мобільного лазертагу",
  },
  {
    id: 1,
    titleSpan: "GALAXY",
    title: "- обладнання для аренного лазертагу та гри у приміщенні",
  },
  {
    id: 2,
    titleSpan: "VION VR",
    title: "- атракціон з PVP та PVE геймплеєм",
  },
  {
    id: 3,
    titleSpan: "Airbunker",
    title: "- надувні укриття для пейнтбола та  лазертагу",
  },
];

export const equipmentBtnList: IEquipmentBtnList[] = [
  {
    id: 0,
    name: "Download catalog",
    logo: "icon-logo-part",
    link: "",
    bgBtnColor: "#000000",
  },
  {
    id: 1,
    name: "Download catalog",
    logo: "icon-logo-vion-part",
    link: "",
    bgBtnColor: "#d22e2e",
  },
  {
    id: 2,
    name: "Download catalog",
    logo: "icon-logo-galaxy-part",
    link: "",
    bgBtnColor: "#0090ff",
    widthLogo: 29,
  },
  {
    id: 3,
    name: "Download catalog",
    logo: "icon-logo-airbunker-part",
    link: "",
    bgBtnColor: "#ffffff",
    widthLogo: 33,
    heightLogo: 30,
  },
];
