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
  title?: string;
  text?: string;
  icon?: string;
  src?: string;
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
    name: "ABOUT COMPANY",
    ref: "#about",
  },
  {
    id: 1,
    name: "LASER TAG EQUIPMENT",
    ref: "#equipment",
  },
  {
    id: 2,
    name: "KEY ACHIEVEMENTS",
    ref: "#achievements",
  },
  {
    id: 3,
    name: "BLOG",
    ref: "#blog",
  },
  {
    id: 4,
    name: "CONTACTS",
    ref: "#contacts",
  },
];

export const equipmentList: IEquipmentList[] = [
  {
    id: 0,
    titleSpan: "NETRONIC",
    title: "- mobile laser tag equipment",
  },
  {
    id: 1,
    titleSpan: "GALAXY",
    title: "- lasertag equipment for arena and indoor games",
  },
  {
    id: 2,
    titleSpan: "VION VR",
    title: "- attraction with PVP and PVE gameplay",
  },
  {
    id: 3,
    titleSpan: "Airbunker",
    title: "- paintball and laser tag inflatable shelters",
  },
];

export const equipmentBtnList: IEquipmentBtnList[] = [
  {
    id: 0,
    name: "Download catalog",
    logo: "icon-logo-part",
    link: "https://lasertag.net/download/netronic_catalog_en.pdf",
    bgBtnColor: "#000000",
  },
  {
    id: 1,
    name: "Download catalog",
    logo: "icon-logo-vion-part",
    link: "https://vion-vr.com/download/vion_short_en_np.pdf",
    bgBtnColor: "#d22e2e",
  },
  {
    id: 2,
    name: "Download catalog",
    logo: "icon-logo-galaxy-part",
    link: "https://lasertag.net/download/catalog_galaxy_eclipseEU.pdf",
    bgBtnColor: "#0090ff",
    widthLogo: 29,
  },
  {
    id: 3,
    name: "Download catalog",
    logo: "icon-logo-airbunker-part",
    link: "http://air-bunker.com/download/Airbunker_eng_NP.pdf",
    bgBtnColor: "#ffffff",
    widthLogo: 33,
    heightLogo: 30,
  },
];

export const ourEquipmentList: IOurEquipmentList[] = [
  {
    id: 0,
    title: "Scorpion shock-band",
    text: "A unique device that accompanies each game wound with an electrical impulse, allowing you to feel the hit as vividly as in paintball.",
    img: "../../public/images/shock_band_scorpion.webp",
  },
  {
    id: 1,
    title: "Sirius",
    text: "A portable scenario device that can be used in any environment. Activation by touch or gunshot increases player interest and immerses them in the game.",
    img: "../../public/images/sirius.webp",
  },
  {
    id: 2,
    title: "Multistation",
    text: "A device that gives visitors bonuses, and can also act as a domination box, bomb, or team base. The LED panel displays the selected mode in an animated manner, and loudspeakers will notify visitors about game events.",
    img: "../../public/images/multistation.webp",
    imgWidth: "215px",
    imgHeight: "259px",
  },
  {
    id: 3,
    title: "Smart Domination box",
    text: "The Domination box capture is one of the most popular scenario devices in laser tag. This scenario device is placed in the center of the site or in other places of greatest activity.",
    img: "../../public/images/smart_domination_box.webp",
    imgWidth: "186px",
    imgHeight: "254px",
  },
  {
    id: 4,
    title: "Supernova Laser Tag Bomb",
    text: "Counter-strike style. The new bomb allows you to play scenarios with sapper and miner teams (terrorists and counterterrorists), similar to popular video games.",
    img: "../../public/images/supernova_laser_tag_bomb.webp",
    imgWidth: "264px",
    imgHeight: "195px",
  },
  {
    id: 5,
    title: "Nebula - Laser Tag Granade",
    text: "The shock- and moisture-resistant grenade casing made of polypropylene is designed for long-lasting service, and the black color is rub-resistant and won't stain.",
    img: "../../public/images/nebula_laser_tag_granade.webp",
    imgWidth: "233px",
    imgHeight: "233px",
  },
  {
    id: 6,
    title: "Netronic Headband",
    text: "The lightest headband in the laser tag industry, designed to withstand daily use and enabling you to become a zombie or medic without the need for a tagger.",
    img: "../../public/images/netronic_headband.webp",
    imgWidth: "441px",
    imgHeight: "281px",
  },
  {
    id: 7,
    title: "Netronic Vest",
    text: "The vest with hit sensors has a large hit detection area, which completely eliminates blind spots when shooting at close range.",
    img: "../../public/images/netronic_vest.webp",
    imgWidth: "334px",
    imgHeight: "296px",
  },
];

export const ourEquipmentListTwo: IOurEquipmentList[] = [
  {
    id: 0,
    title: "Scorpion shock-band",
    text: "A unique device that accompanies each game wound with an electrical impulse, allowing you to feel the hit as vividly as in paintball.",
    img: "../../public/images/shock_band_scorpion.webp",
  },
  {
    id: 1,
    title: "Sirius",
    text: "A portable scenario device that can be used in any environment. Activation by touch or gunshot increases player interest and immerses them in the game.",
    img: "../../public/images/sirius.webp",
  },
  {
    id: 2,
    title: "Multistation",
    text: "A device that gives visitors bonuses, and can also act as a domination box, bomb, or team base. The LED panel displays the selected mode in an animated manner, and loudspeakers will notify visitors about game events.",
    img: "../../public/images/multistation.webp",
    imgWidth: "215px",
    imgHeight: "259px",
  },
  {
    id: 3,
    title: "Smart Domination box",
    text: "The Domination box capture is one of the most popular scenario devices in laser tag. This scenario device is placed in the center of the site or in other places of greatest activity.",
    img: "../../public/images/smart_domination_box.webp",
    imgWidth: "186px",
    imgHeight: "254px",
  },
  {
    id: 4,
    title: "Supernova Laser Tag Bomb",
    text: "Counter-strike style. The new bomb allows you to play scenarios with sapper and miner teams (terrorists and counterterrorists), similar to popular video games.",
    img: "../../public/images/supernova_laser_tag_bomb.webp",
    imgWidth: "264px",
    imgHeight: "195px",
  },
  {
    id: 5,
    title: "Nebula - Laser Tag Granade",
    text: "The shock- and moisture-resistant grenade casing made of polypropylene is designed for long-lasting service, and the black color is rub-resistant and won't stain.",
    img: "../../public/images/nebula_laser_tag_granade.webp",
    imgWidth: "233px",
    imgHeight: "233px",
  },
];

export const ourEquipmentListThree: IOurEquipmentList[] = [
  {
    id: 0,
    title: "Netronic Headband",
    text: "The lightest headband in the laser tag industry, designed to withstand daily use and enabling you to become a zombie or medic without the need for a tagger.",
    img: "../../public/images/netronic_headband.webp",
    imgWidth: "441px",
    imgHeight: "281px",
  },
  {
    id: 1,
    title: "Netronic Vest",
    text: "The vest with hit sensors has a large hit detection area, which completely eliminates blind spots when shooting at close range.",
    img: "../../public/images/netronic_vest.webp",
    imgWidth: "334px",
    imgHeight: "296px",
  },
];

export const mainAchievementsList: IMainAchievementsList[] = [
  {
    id: 0,
    title: "SERVICE AND SUPPORT ON 4 CONTINENTS",
    text: "17 service and dealer centers around the world are ready to quickly resolve any issues you may have with your equipment.",
    icon: "icon-map",
  },
  {
    id: 1,
    title: "MULTILINGUAL TECHNICAL SUPPORT",
    text: "Multi-lingual technical specialists perform remote device diagnosis.",
    icon: "icon-group",
  },
  {
    id: 2,
    title: "UNPRECEDENTED OPPORTUNITIES ",
    text: "Attract visitors to your laser tag center with impulse response game sets, informative screens, and Battle Royale scenarios.",
    icon: "icon-crown",
    widthLogo: 30,
    heightLogo: 20,
  },
  {
    id: 3,
    title: "FREE UPDATES",
    text: 'Use equipment that will definitely serve you for more than 5 years and will always be up to date. Forget about buying "new generations" of equipment: all updates are free and available online.',
    icon: "icon-map",
  },
];

export const mainAchievementsListTwo: IMainAchievementsList[] = [
  {
    id: 0,
    title: "MORE THAN 30 SCENARIOS",
    text: "Attract new and returning players with more than 30 ready-made scenarios of varying difficulty. Start games in 30 seconds and change scenarios with a few clicks to maximize your center's potential.",
    icon: "icon-winner",
    widthLogo: 36,
    heightLogo: 36,
  },
  {
    id: 1,
    title: "VARIOUS WEAPONS",
    text: "4 types of different sized targets for players ages 5 and up, 10 types of weapons, and multiple settings for one player in a target. A full range of equipment to create a state-of-the-art laser tag center in any format: arena, outdoor or mobile.",
    icon: "icon-weapon",
    widthLogo: 43,
    heightLogo: 29,
  },
  {
    id: 2,
    title: "Quality and Reliability of our Equipment",
    text: "FALCON taggers can withstand a car's weight, along with SUPERNOVA bombs being able to withstand a 4-story fall.",
    icon: "icon-diamond",
    widthLogo: 34,
    heightLogo: 34,
  },
  {
    id: 3,
    src: "../../public/images/main-achievements-img-6.webp",
  },
];

export const blogList: IBlogList[] = [
  {
    id: 0,
    img: "../../public/images/blog-img-1.webp",
    date: "29/12/2024",
    title: "How to Integrate LASERTAG.NET Systems into Your Existing Business",
    text: "Integrating LASERTAG.NET into your business is more than an upgrade; it’s an opportunity to redefine your customer experience and profitability. Whether you’re looking for laser tag equipment for sale or seeking to buy commercial laser tag equipment tailored to your needs, LASERTAG.NET offers unmatched support and value.",
  },
  {
    id: 1,
    img: "../../public/images/blog-img-2.webp",
    date: "29/12/2024",
    title: "How to Integrate LASERTAG.NET Systems into Your Existing Business",
    text: "Integrating LASERTAG.NET into your business is more than an upgrade; it’s an opportunity to redefine your customer experience and profitability. Whether you’re looking for laser tag equipment for sale or seeking to buy commercial laser tag equipment tailored to your needs, LASERTAG.NET offers unmatched support and value.",
  },
  {
    id: 2,
    img: "../../public/images/blog-img-1.webp",
    date: "29/12/2024",
    title: "How to Integrate LASERTAG.NET Systems into Your Existing Business",
    text: "Integrating LASERTAG.NET into your business is more than an upgrade; it’s an opportunity to redefine your customer experience and profitability. Whether you’re looking for laser tag equipment for sale or seeking to buy commercial laser tag equipment tailored to your needs, LASERTAG.NET offers unmatched support and value.",
  },
  {
    id: 3,
    img: "../../public/images/blog-img-2.webp",
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
