import locImage1 from "./locImage1.png";
import locImage2 from "./locImage2.png";
import locImage3 from "./locImage3.png";

import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image8 from "./image8.png";
import image9 from "./image9.png";
import image10 from "./image10.png";
import image11 from "./image11.png";

import teamImage1 from "./teamImage1.png";
import teamImage2 from "./teamImage2.png";
import teamImage3 from "./teamImage3.png";

import nextIcon from "./nextIcon.png";
import logo from "./logo.png";
import menuIcon from "./menuIcon.png";

import iconCamera from "./cameraIcon.png";
import iconLight from "./lightIcon.png";
import iconTower from "./towerIcon.png";
import iconPath from "./pathIcon.png";

import locationIcon from "./locationIcon.png";
import addressIcon from "./addressIcon.png";
import emailIcon from "./emailIcon.png";
import customerCare from "./customerCareIcon.png";
import searchIcon from "./searchIcon.png";
import backIcon from "./backIcon.png";

import diploma from "./diplomaIcon.png";
import building from "./buildingIcon.png";
import hospital from "./hospitalIcon.png";
import selectIcon from "./selectIcon.png";
import estateIcon from "./estateIcon.png";
import discountIcon from "./discountIcon.png";
import timeIcon from "./timeIcon.png";
import dollarIcon from "./dollarIcon.png";
import squareIcon from "./squareIcon.png";
import dumbbellIcon from "./dumbbellIcon.png";
import installmentIcon from "./installmentIcon.png";
import checkMark from "./checkMark.png";

import iconHead from "./iconHead.png";
import iconHouse from "./iconHouse.png";
import iconValid from "./iconValid.png";

import heritage from "./heritageIcon.png";
import access from "./accessIcon.png";
import sterling from "./sterlingIcon.png";
import stanbic from "./stanbicIcon.png";
import union from "./unionIcon.png";

import profile from "./profileIcon.png";
import downArrow from "./downArrow.png";
import userIcon from "./userIcon.png";
import logoutIcon from "./logoutIcon.png";
import supportIcon from "./supportIcon.png";

import appleIcon from "./appleIcon.png";
import googleIcon from "./googleIcon.png";
import facebookIcon from "./facebookIcon.png";
import infoIcon from "./infoIcon.png";
import estimateIcon from "./estimateIcon.png";
import mortgageIcon from "./mortgageIcon.png";

import badge1 from "./badge1.png";
import badge2 from "./badge2.png";
import upIcon from "./upIcon.png";

export const assets = {
  addressIcon,
  appleIcon,
  backIcon,
  badge1,
  badge2,
  building,
  checkMark,
  customerCare,
  diploma,
  discountIcon,
  dollarIcon,
  dumbbellIcon,
  emailIcon,
  estateIcon,
  estimateIcon,
  facebookIcon,
  googleIcon,
  hospital,
  installmentIcon,
  image8,
  image9,
  image10,
  image11,
  logoutIcon,
  mortgageIcon,
  selectIcon,
  searchIcon,
  squareIcon,
  supportIcon,
  timeIcon,
  upIcon,
  userIcon,
  downArrow,
  iconCamera,
  iconLight,
  iconTower,
  iconPath,
  iconHead,
  iconHouse,
  iconValid,
  infoIcon,
  locationIcon,
  logo,
  menuIcon,
  nextIcon,
  profile,
  heritage,
  access,
  sterling,
  stanbic,
  union,
};

// All Properties
export const allPropertyList = [
  {
    id: 1,
    title: "South Lake Villa",
    image: image1,
    price: "15,000,000",
    location: "Igbo Efon, Lekki, Lagos",
    category: "Duplex",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [iconCamera, iconLight, iconTower, iconPath],
  },
  {
    id: 2,
    title: "Treasure Park",
    image: image2,
    price: "5,000,000",
    location: "Igbo Efon, Lekki, Lagos",
    category: "Duplex",
    featured: true,
    discounted: true,
    size: "3242 Sqm",
    icons: [iconCamera, iconLight, iconTower, iconPath],
  },
  {
    id: 3,
    title: "Clover Duplex",
    image: image3,
    price: "15,000,000",
    location: "Songotedo, Lekki, Lagos",
    category: "Duplex",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [iconCamera, iconLight, iconTower, iconPath],
  },
  {
    id: 4,
    title: "Chicken Duplex",
    image: image1,
    price: "5,000,000",
    location: "Igbo Efon, Lekki, Lagos",
    category: "Duplex",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [iconCamera, iconLight, iconTower, iconPath],
  },
  {
    id: 5,
    title: "Lasagna Bungalow",
    image: image2,
    price: "15,000,000",
    location: "Songotedo, Lekki, Lagos",
    category: "Bungalow",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [iconCamera, iconLight, iconTower, iconPath],
  },
  {
    id: 6,
    title: "Peri Peri Bungalow",
    image: image3,
    price: "15,000,000",
    location: "Igbo Efon, Lekki, Lagos",
    category: "Bungalow",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [iconCamera, iconLight, iconTower, iconPath],
  },
];

// State List
export const stateList = [
  {
    id: 1,
    title: "Lagos",
    typeName: "Duplex",
    image: locImage1,
    location: "Lagos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    id: 2,
    title: "Abuja",
    typeName: "Bungalow",
    image: locImage2,
    location: "Abuja",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    id: 3,
    title: "Ogun",
    typeName: "2-Story building",
    image: locImage3,
    location: "Ogun",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
];

// House List
export const houseList = [
  {
    id: 1,
    title: "South Lake Villa",
    location: "Igbo Efon, Lekki, Lagos",
    price: "15,000,000",
    image: image1,
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [iconCamera, iconLight, iconTower, iconPath],
  },
  {
    id: 2,
    title: "Treasure Park Gardens",
    location: "Igbo Efon, Lekki, Lagos",
    price: "5,000,000",
    image: image2,
    featured: true,
    discounted: true,
    size: "3242 Sqm",
    icons: [iconCamera, iconLight, iconTower, iconPath],
  },
  {
    id: 3,
    title: "Adura Court",
    location: "Sangotedo, Lekki, Lagos",
    price: "3,500,000",
    image: image3,
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [iconCamera, iconLight, iconTower, iconPath],
  },
];

// Sponsor List
export const sponsorList = [
  { id: 1, image: sterling },
  { id: 2, image: access },
  { id: 3, image: heritage },
  { id: 4, image: stanbic },
  { id: 5, image: union },
];

// Team List
export const teamList = [
  { id: 1, name: "Mike Smith", position: "Founder/CEO", image: teamImage1 },
  { id: 2, name: "Mike Smith", position: "Founder/CEO", image: teamImage2 },
  { id: 3, name: "Mike Smith", position: "Founder/CEO", image: teamImage3 },
];

// import loc_image_1 from "./loc-image-1.png";
// import loc_image_2 from "./loc-image-2.png";
// import loc_image_3 from "./loc-image-3.png";
// import image_1 from "./image-1.png";
// import image_2 from "./image-2.png";
// import image_3 from "./image-3.png";
// import Mike_1 from "./mike1.png";
// import Mike_2 from "./mike2.png";
// import Mike_3 from "./mike3.png";

// import next from "./next-icon.png";
// import logo from "./logo.png";
// import menu_icon from "./menu-icon.png";
// import icon_1 from "./camera.png";
// import icon_2 from "./light.png";
// import icon_3 from "./tower.png";
// import icon_4 from "./path.png";
// import location from "./location.png";
// import Address from "./address.png";
// import Email from "./email.png";
// import Customercare from "./customercare.png";
// import Search from "./search.png";
// import BackIcon from "./backicon.png";
// import Diploma from "./diploma.png";
// import Building from "./building.png";
// import Hospital from "./hospital.png";
// import Select from "./select.png";
// import Estate from "./estate.png";
// import Discount from "./discount.png";
// import Time from "./time.png";
// import Dollar from "./dollar.png";
// import Square from "./square.png";
// import Dumbbell from "./dumbbell.png";
// import Installment from "./installment.png";
// import CheckMark from "./checkmark.png";
// import icon_head from "./icon-head.png";
// import icon_house from "./icon-house.png";
// import icon_valid from "./icon-valid.png";
// import Heritage from "./heritage.png";
// import Access from "./access.png";
// import Sterling from "./sterling.png";
// import Stanbic from "./stanbic.png";
// import Union from "./union.png";
// import profile from "./profile.png";
// import down_arrow from "./down-arrow.png";
// import User from "./user.png";
// import Logout from "./logout.png";
// import Support from "./support.png";
// import Apple from "./apple.png";
// import Google from "./google.png";
// import Facebook from "./facebook.png";
// import info from "./info.png";
// import Estimate from "./estimate.png";
// import Mortgage from "./mortgage.png";
// import Bagde_1 from "./badge-1.png";
// import Badge_2 from "./badge-2.png";
// import Up from "./up.png";

// export const assets = {
//   Address,
//   Apple,
//   BackIcon,
//   Bagde_1,
//   Badge_2,
//   Building,
//   CheckMark,
//   Customercare,
//   Diploma,
//   Discount,
//   Dollar,
//   Dumbbell,
//   Email,
//   Estate,
//   Estimate,
//   Facebook,
//   Google,
//   Hospital,
//   Installment,
//   Logout,
//   Mortgage,
//   Mike_1,
//   Mike_2,
//   Mike_3,
//   Select,
//   Search,
//   Square,
//   Support,
//   Time,
//   Up,
//   User,
//   down_arrow,
//   icon_1,
//   icon_2,
//   icon_3,
//   icon_4,
//   icon_head,
//   icon_house,
//   icon_valid,
//   info,
//   location,
//   logo,
//   menu_icon,
//   next,
//   profile,
// };

// export const allproperty_list = [
//   {
//     id: 1,
//     title: "South Lake Villa",
//     image: image_1,
//     price: "15,000,000",
//     location: "Igbo Efon, Lekki, Lagos",
//     category: "Duplex",
//     featured: true,
//     discounted: false,
//     size: "3242 Sqm",
//     icons: [icon_1, icon_2, icon_3, icon_4],
//   },
//   {
//     id: 2,
//     title: "Treasure Park",
//     image: image_2,
//     price: "5,000,000",
//     location: "Igbo Efon, Lekki, Lagos",
//     category: "Duplex",
//     featured: true,
//     discounted: true,
//     size: "3242 Sqm",
//     icons: [icon_1, icon_2, icon_3, icon_4],
//   },
//   {
//     id: 3,
//     title: "Clover Duplex",
//     image: image_3,
//     price: "15,000,000",
//     location: "Songotedo, Lekki, Lagos",
//     category: "Duplex",
//     featured: true,
//     discounted: false,
//     size: "3242 Sqm",
//     icons: [icon_1, icon_2, icon_3, icon_4],
//   },
//   {
//     id: 4,
//     title: "Chicken Duplex",
//     image: image_1,
//     price: "5,000,000",
//     location: "Igbo Efon, Lekki, Lagos",
//     category: "Duplex",
//     featured: true,
//     discounted: false,
//     size: "3242 Sqm",
//     icons: [icon_1, icon_2, icon_3, icon_4],
//   },
//   {
//     id: 5,
//     title: "Lasagna Bungalow",
//     image: image_2,
//     price: "15,000,000",
//     location: "Songotedo, Lekki, Lagos",
//     category: "Bungalow",
//     featured: true,
//     discounted: false,
//     size: "3242 Sqm",
//     icons: [icon_1, icon_2, icon_3, icon_4],
//   },
//   {
//     id: 6,
//     title: "Peri Peri Bungalow",
//     image: image_3,
//     price: "15,000,000",
//     location: "Igbo Efon, Lekki, Lagos",
//     category: "Bungalow",
//     featured: true,
//     discounted: false,
//     size: "3242 Sqm",
//     icons: [icon_1, icon_2, icon_3, icon_4],
//   },
// ];

// export const State_list = [
//   {
//     id: 1,
//     title: "Lagos",
//     type_name: "Duplex",
//     image: loc_image_1,
//     location: "Lagos",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
//   },
//   {
//     id: 2,
//     title: "Abuja",
//     type_name: "Bungalow",
//     image: loc_image_2,
//     location: "Abuja",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
//   },
//   {
//     id: 3,
//     title: "Ogun",
//     type_name: "2-Story building",
//     image: loc_image_3,
//     location: "Ogun",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
//   },
// ];

// export const house_list = [
//   {
//     id: 1,
//     title: "South Lake Villa",
//     location: "Igbo Efon, Lekki, Lagos",
//     price: "15,000,000",
//     image: image_1,
//     featured: true,
//     discounted: false,
//     size: "3242 Sqm",
//     icons: [icon_1, icon_2, icon_3, icon_4],
//   },
//   {
//     id: 2,
//     title: "Treasure Park Gardens",
//     location: "Igbo Efon, Lekki, Lagos",
//     price: "5,000,000",
//     image: image_2,
//     featured: true,
//     discounted: true,
//     size: "3242 Sqm",
//     icons: [icon_1, icon_2, icon_3, icon_4],
//   },
//   {
//     id: 3,
//     title: "Adura Court",
//     location: "Sangotedo, Lekki, Lagos",
//     price: "3,500,000",
//     image: image_3,
//     featured: true,
//     discounted: false,
//     size: "3242 Sqm",
//     icons: [icon_1, icon_2, icon_3, icon_4],
//   },
// ];

// export const sponsor_list = [
//   {
//     id: 1,
//     image: Sterling,
//   },
//   {
//     id: 2,
//     image: Access,
//   },
//   {
//     id: 3,
//     image: Heritage,
//   },
//   {
//     id: 4,
//     image: Stanbic,
//   },
//   {
//     id: 5,
//     image: Union,
//   },
// ];

// export const team_list = [
//   {
//     id: 1,
//     name: "Mike Smith",
//     position: " Founder/CEO",
//     image: Mike_1,
//   },
//   {
//     id: 2,
//     name: "Mike Smith",
//     position: " Founder/CEO",
//     image: Mike_2,
//   },
//   {
//     id: 3,
//     name: "Mike Smith",
//     position: " Founder/CEO",
//     image: Mike_3,
//   },
// ];
