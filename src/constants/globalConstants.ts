import { ISelectBudgetOptions } from "@/models";

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

interface IOurEquipmentList {
  id: number;
  title: string;
  text: string;
  img: string;
  imgWidth?: string;
  imgHeight?: string;
}

interface IMainAchievementsList {
  id: number;
  title: string;
  text: string;
  icon: string;
  widthLogo?: number;
  heightLogo?: number;
}

interface IBlogList {
  id: number;
  img: string;
  date: string;
  title: string;
  text: string;
}

interface INetworksCompaniesInsideList {
  id: number;
  icon: string;
  link: string;
  widthLogo?: number;
  heightLogo?: number;
}

interface INetworksCompaniesList {
  id: number;
  titleIcon: string;
  widthLogo: number;
  heightLogo: number;
  list: INetworksCompaniesInsideList[];
  insideListGap: number;
}

interface IFooterInfoList {
  id: number;
  title: string;
  addressTitle?: string;
  address?: string;
  emailTitle: string;
  email: string;
  phoneTitle?: string;
  phone?: string;
  whatsAppTitle: string;
  whatsApp: string;
  text?: string;
  secondEmail?: string;
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

export const ourEquipmentListOne: IOurEquipmentList[] = [
  {
    id: 0,
    title: "Scorpion shock-band",
    text: "A unique device that accompanies each game wound with an electrical impulse, allowing you to feel the hit as vividly as in paintball.",
    img: "/images/shock_band_scorpion.webp",
  },
  {
    id: 1,
    title: "Sirius",
    text: "A portable scenario device that can be used in any environment. Activation by touch or gunshot increases player interest and immerses them in the game.",
    img: "/images/sirius.webp",
  },
  {
    id: 2,
    title: "Multistation",
    text: "A device that gives visitors bonuses, and can also act as a domination box, bomb, or team base. The LED panel displays the selected mode in an animated manner, and loudspeakers will notify visitors about game events.",
    img: "/images/multistation.webp",
    imgWidth: "215px",
    imgHeight: "259px",
  },
  {
    id: 3,
    title: "Smart Domination box",
    text: "The Domination box capture is one of the most popular scenario devices in laser tag. This scenario device is placed in the center of the site or in other places of greatest activity.",
    img: "/images/smart_domination_box.webp",
    imgWidth: "186px",
    imgHeight: "254px",
  },
  {
    id: 4,
    title: "Supernova Laser Tag Bomb",
    text: "A device that gives visitors bonuses, and can also act as a domination box, bomb, or team base. The LED panel displays the selected mode in an animated manner, and loudspeakers will notify visitors about game events.",
    img: "/images/supernova_laser_tag_bomb.webp",
    imgWidth: "264px",
    imgHeight: "195px",
  },
  {
    id: 5,
    title: "Nebula - Laser Tag Granade",
    text: "The Domination box capture is one of the most popular scenario devices in laser tag. This scenario device is placed in the center of the site or in other places of greatest activity.",
    img: "/images/nebula_laser_tag_granade.webp",
    imgWidth: "233px",
    imgHeight: "233px",
  },
];

export const ourEquipmentListTwo: IOurEquipmentList[] = [
  {
    id: 0,
    title: "Netronic Headband",
    text: "The lightest headband in the laser tag industry, designed to withstand daily use and enabling you to become a zombie or medic without the need for a tagger.",
    img: "/images/netronic_headband.webp",
    imgWidth: "441px",
    imgHeight: "281px",
  },
  {
    id: 1,
    title: "Netronic Vest",
    text: "The vest with hit sensors has a large hit detection area, which completely eliminates blind spots when shooting at close range.",
    img: "/images/netronic_vest.webp",
    imgWidth: "334px",
    imgHeight: "296px",
  },
  {
    id: 2,
    title: "Netronic Headband",
    text: "The lightest headband in the laser tag industry, designed to withstand daily use and enabling you to become a zombie or medic without the need for a tagger.",
    img: "/images/netronic_headband.webp",
    imgWidth: "441px",
    imgHeight: "281px",
  },
  {
    id: 3,
    title: "Netronic Vest",
    text: "The vest with hit sensors has a large hit detection area, which completely eliminates blind spots when shooting at close range.",
    img: "/images/netronic_vest.webp",
    imgWidth: "344px",
    imgHeight: "306px",
  },
];

export const mainAchievementsList: IMainAchievementsList[] = [
  {
    id: 0,
    title: "СЕРВІС НА 4 КОНТИНЕНТАХ",
    text: "17 сервісних та дилерських центрів по всьому світу швидко вирішать проблеми з вашим обладнанням.",
    icon: "icon-map",
  },
  {
    id: 1,
    title: "БАГАТОМОВНА ТЕХНІЧНА ПІДТРИМКА",
    text: "Технічні спеціалісти зі знанням багатьох мов проводять дистанційну діагностику обладнання.",
    icon: "icon-group",
  },
  {
    id: 2,
    title: "БЕЗПРЕЦЕДЕНТНІ МОЖЛИВОСТІ",
    text: "Ігрові набори з імпульсною віддачею, інформативними екранами та сценарієм Battle Royale приваблюють відвідувачів до лазертаг-центрів наших клієнтів.",
    icon: "icon-crown",
    widthLogo: 30,
    heightLogo: 20,
  },
  {
    id: 3,
    title: "БЕЗКОШТОВНІ ОНОВЛЕННЯ",
    text: "Використовуйте обладнання, яке обов'язково послужить вам більше 5 років і буде завжди сучасним.",
    icon: "icon-map",
  },
];

export const mainAchievementsListTwo: IMainAchievementsList[] = [
  {
    id: 0,
    title: "БІЛЬШЕ 30 СЦЕНАРІЇВ",
    text: "Використовуйте понад 30 готових сценаріїв різної складності, які привертають нових та постійних гравців. Запускайте ігри за 30 секунд та змінюйте сценарії парою кліків, використовуючи максимум потенціалу вашого центру.",
    icon: "icon-winner",
    widthLogo: 36,
    heightLogo: 36,
  },
  {
    id: 1,
    title: "РІЗНОМАНІТНЕ ОЗБРОЄННЯ",
    text: "4 типи тагерів різних розмірів для гравців віком від 5 років, 10 типів зброї та кілька налаштувань для гравця в одному тагері. Повний асортимент усього обладнання, щоб створити найсучасніший лазертаг-центр у будь-якому форматі: аренний, вуличний або мобільний.",
    icon: "icon-weapon",
    widthLogo: 43,
    heightLogo: 29,
  },
  {
    id: 2,
    title: "Якість та надійність нашого обладнання",
    text: "Тагери FALCON витримують вагу автомобіля, а бомба SUPERNOVA витримує падіння з 4-поверхової висоти.",
    icon: "icon-diamond",
    widthLogo: 34,
    heightLogo: 34,
  },
];

export const blogList: IBlogList[] = [
  {
    id: 0,
    img: "/images/blog-img-1.webp",
    date: "29/12/2024",
    title: "How to Integrate LASERTAG.NET Systems into Your Existing Business",
    text: "Integrating LASERTAG.NET into your business is more than an upgrade; it’s an opportunity to redefine your customer experience and profitability. Whether you’re looking for laser tag equipment for sale or seeking to buy commercial laser tag equipment tailored to your needs, LASERTAG.NET offers unmatched support and value.",
  },
  {
    id: 1,
    img: "/images/blog-img-2.webp",
    date: "29/12/2024",
    title: "How to Integrate LASERTAG.NET Systems into Your Existing Business",
    text: "Integrating LASERTAG.NET into your business is more than an upgrade; it’s an opportunity to redefine your customer experience and profitability. Whether you’re looking for laser tag equipment for sale or seeking to buy commercial laser tag equipment tailored to your needs, LASERTAG.NET offers unmatched support and value.",
  },
  {
    id: 2,
    img: "/images/blog-img-1.webp",
    date: "29/12/2024",
    title: "How to Integrate LASERTAG.NET Systems into Your Existing Business",
    text: "Integrating LASERTAG.NET into your business is more than an upgrade; it’s an opportunity to redefine your customer experience and profitability. Whether you’re looking for laser tag equipment for sale or seeking to buy commercial laser tag equipment tailored to your needs, LASERTAG.NET offers unmatched support and value.",
  },
  {
    id: 3,
    img: "/images/blog-img-2.webp",
    date: "29/12/2024",
    title: "How to Integrate LASERTAG.NET Systems into Your Existing Business",
    text: "Integrating LASERTAG.NET into your business is more than an upgrade; it’s an opportunity to redefine your customer experience and profitability. Whether you’re looking for laser tag equipment for sale or seeking to buy commercial laser tag equipment tailored to your needs, LASERTAG.NET offers unmatched support and value.",
  },
];

export const selectBudgetOptions: ISelectBudgetOptions[] = [
  { value: "$10,000 - $20,000", label: "$10,000 - $20,000" },
  { value: "$20,000 - $30,000", label: "$20,000 - $30,000" },
  { value: "more than $30,000", label: "more than $30,000" },
];

export const networksCompaniesList: INetworksCompaniesList[] = [
  {
    id: 0,
    titleIcon: "icon-logo",
    widthLogo: 125,
    heightLogo: 44,
    insideListGap: 71,
    list: [
      {
        id: 0,
        icon: "icon-facebook",
        link: "",
      },
      {
        id: 1,
        icon: "icon-tikTok",
        link: "",
        widthLogo: 30,
        heightLogo: 30,
      },
      {
        id: 2,
        icon: "icon-instagram",
        link: "",
      },
      {
        id: 3,
        icon: "icon-youtube",
        link: "",
        widthLogo: 33,
        heightLogo: 29,
      },
      {
        id: 4,
        icon: "icon-linkedin",
        link: "",
        widthLogo: 27,
        heightLogo: 27,
      },
    ],
  },
  {
    id: 1,
    titleIcon: "icon-logo-vion",
    widthLogo: 129,
    heightLogo: 32,
    insideListGap: 67,
    list: [
      {
        id: 0,
        icon: "icon-facebook",
        link: "",
      },
      {
        id: 1,
        icon: "icon-instagram",
        link: "",
      },
    ],
  },
  {
    id: 2,
    titleIcon: "icon-netronic",
    widthLogo: 166,
    heightLogo: 26,
    insideListGap: 30,
    list: [
      {
        id: 0,
        icon: "icon-facebook",
        link: "",
      },
      {
        id: 1,
        icon: "icon-linkedin",
        link: "",
        widthLogo: 27,
        heightLogo: 27,
      },
    ],
  },
  {
    id: 3,
    titleIcon: "icon-logo-airbunker",
    widthLogo: 140,
    heightLogo: 27,
    insideListGap: 56,
    list: [
      {
        id: 0,
        icon: "icon-facebook",
        link: "",
      },
    ],
  },
];

export const footerInfoList: IFooterInfoList[] = [
  {
    id: 0,
    title: "EUROPE",
    addressTitle: "Address",
    address: "Kaupmehe tn 7-120 Tallinn Harjumaa 10114 Republic of Estonia",
    emailTitle: "Email",
    email: "sales@netronic.net",
    phoneTitle: "Phone",
    phone: "+4 857 358 10 44",
    whatsAppTitle: "WhatsApp",
    whatsApp: "+372 5866 2265",
  },
  {
    id: 1,
    title: "USA",
    addressTitle: "Address",
    address: "3259 Progress Drive STE 175C Orlando, FL 32826",
    emailTitle: "Email",
    email: "sales@netronic.net",
    phoneTitle: "Phone",
    phone: "+1 347 919 2246",
    whatsAppTitle: "WhatsApp",
    whatsApp: "+1 646 480 2917",
  },
  {
    id: 2,
    title: "Technical support",
    emailTitle: "Email",
    email: "support@netronic.net",
    whatsAppTitle: "WhatsApp",
    whatsApp: "+372 5855 4490",
    text: "Please send your comments and suggestions about the quality of our service or equipment via e-mail: ",
    secondEmail: "quality@netronic.net",
  },
];
