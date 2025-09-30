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
import installmentIcon from "./iconInstallment.png";
import checkMark from "./checkMarkIcon.png";

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
import iconInfo from "./iconInfo.png";
import estimateIcon from "./estimateIcon.png";
import mortgageIcon from "./mortgageIcon.png";

import badge1 from "./badge1.png";
import badge2 from "./badge2.png";
import upIcon from "./upIcon.png";

export const assets = {
  access,
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
  downArrow,
  dumbbellIcon,
  emailIcon,
  estateIcon,
  estimateIcon,
  facebookIcon,
  googleIcon,
  hospital,
  heritage,
  installmentIcon,
  image8,
  image9,
  image10,
  image11,
  iconCamera,
  iconLight,
  iconTower,
  iconPath,
  iconHead,
  iconHouse,
  iconValid,
  iconInfo,
  locationIcon,
  logo,
  logoutIcon,
  mortgageIcon,
  menuIcon,
  nextIcon,
  profile,
  sterling,
  stanbic,
  selectIcon,
  searchIcon,
  squareIcon,
  supportIcon,
  timeIcon,
  upIcon,
  userIcon,
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

export const paymentHistory = [
    {
      date: "Jul 29th 2024",
      amount: "₦ 300,000",
      newBalance: "₦ 2,076,000",
      status: "Confirmed",
    },
    {
      date: "Aug 25th 2024",
      amount: "₦ 275,000",
      newBalance: "₦ 1,801,000",
      status: "Confirmed",
    },
  ];