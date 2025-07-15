import loc_image_1 from "./loc-image-1.png";
import loc_image_2 from "./loc-image-2.png";
import loc_image_3 from "./loc-image-3.png";
import image_1 from "./image-1.png";
import image_2 from "./image-2.png";
import image_3 from "./image-3.png";
import Mike_1 from "./Mike1.png";
import Mike_2 from "./Mike2.png";
import Mike_3 from "./Mike3.png";

import logo from "./logo.png";
import menu_icon from "./menu-icon.png";
import icon_1 from "./Camera.png";
import icon_2 from "./Light.png";
import icon_3 from "./Tower.png";
import icon_4 from "./Path.png";
import location from "./Location.png";
import Address from "./Address.png";
import Email from "./Email.png";
import Customercare from "./Customercare.png";
import Search from "./Search.png";
import BackIcon from "./backIcon.png";
import Diploma from "./Diploma.png";
import Building from "./Building.png";
import Hospital from "./Hospital.png";
import Select from "./Select.png";
import Estate from "./Estate.png";
import Discount from "./Discount.png";
import Time from "./Time.png";
import Dollar from "./Dollar.png";
import Square from "./Square.png";
import Dumbbell from "./Dumbbell.png";
import Installment from "./Installment.png";
import CheckMark from "./CheckMark.png";
import icon_head from "./icon-head.png";
import icon_house from "./icon-house.png";
import icon_valid from "./icon-valid.png";
import Heritage from "./Heritage.png";
import Access from "./Access.png";
import Sterling from "./Sterling.png";
import Stanbic from "./Stanbic.png";
import Union from "./Union.png";
import profile from "./profile.png";
import down_arrow from "./down-arrow.png";
import User from "./User.png";
import Logout from "./Logout.png";
import Support from "./Support.png";
import Apple from "./Apple.png";
import Google from "./Google.png";
import Facebook from "./Facebook.png";
import info from "./Info.png";
import Estimate from "./Estimate.png";
import Mortgage from "./Mortgage.png";
import Bagde_1 from "./badge-1.png";
import Badge_2 from "./badge-2.png";
import Up from "./Up.png";

export const assets = {
  Up,
  icon_head,
  Badge_2,
  Bagde_1,
  down_arrow,
  User,
  Support,
  Logout,
  icon_house,
  icon_valid,
  Installment,
  CheckMark,
  Email,
  Select,
  Estate,
  Discount,
  Time,
  Dollar,
  Square,
  BackIcon,
  Search,
  Customercare,
  next,
  Address,
  location,
  menu_icon,
  logo,
  icon_1,
  icon_2,
  icon_3,
  icon_4,
  Diploma,
  Building,
  Hospital,
  Dumbbell,
  Mike_1,
  profile,
  Apple,
  Facebook,
  Google,
  info,
  Estimate,
  Mortgage,
};

export const allproperty_list = [
  {
    id: 1,
    title: "South Lake Villa",
    image: image_1,
    price: "15,000,000",
    location: "Igbo Efon, Lekki, Lagos",
    category: "Duplex",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [icon_1, icon_2, icon_3, icon_4],
  },
  {
    id: 2,
    title: "Treasure Park",
    image: image_2,
    price: "5,000,000",
    location: "Igbo Efon, Lekki, Lagos",
    category: "Duplex",
    featured: true,
    discounted: true,
    size: "3242 Sqm",
    icons: [icon_1, icon_2, icon_3, icon_4],
  },
  {
    id: 3,
    title: "Clover Duplex",
    image: image_3,
    price: "15,000,000",
    location: "Songotedo, Lekki, Lagos",
    category: "Duplex",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [icon_1, icon_2, icon_3, icon_4],
  },
  {
    id: 4,
    title: "Chicken Duplex",
    image: image_1,
    price: "5,000,000",
    location: "Igbo Efon, Lekki, Lagos",
    category: "Duplex",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [icon_1, icon_2, icon_3, icon_4],
  },
  {
    id: 5,
    title: "Lasagna Bungalow",
    image: image_2,
    price: "15,000,000",
    location: "Songotedo, Lekki, Lagos",
    category: "Bungalow",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [icon_1, icon_2, icon_3, icon_4],
  },
  {
    id: 6,
    title: "Peri Peri Bungalow",
    image: image_3,
    price: "15,000,000",
    location: "Igbo Efon, Lekki, Lagos",
    category: "Bungalow",
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [icon_1, icon_2, icon_3, icon_4],
  },
  // {
  //   id: 7,
  //   title: "Chicken Bungalow",
  //   image: image_1,
  //   price: "15,000,000",
  //   location: "Songotedo, Lekki, Lagos",
  //   category: "Bungalow",
  //   featured: true,
  //   discounted: false,
  //   size: "3242 Sqm",
  //   icons: [icon_1, icon_2, icon_3, icon_4],
  // },
  // {
  //   id: 8,
  //   title: "Veg Bungalow",
  //   image: image_2,
  //   price: "15,000,000",
  //   location: "Igbo Efon, Lekki, Lagos",
  //   category: "Bungalow",
  //   featured: true,
  //   discounted: false,
  //   size: "3242 Sqm",
  //   icons: [icon_1, icon_2, icon_3, icon_4],
  // },
  // {
  //   id: 9,
  //   title: "Ripple Ice Cream",
  //   image: image_3,
  //   price: "15,000,000",
  //   location: "Songotedo, Lekki, Lagos",
  //   category: "2-Story building",
  //   featured: true,
  //   discounted: false,
  //   size: "3242 Sqm",
  //   icons: [icon_1, icon_2, icon_3, icon_4],
  // },
];

export const State_list = [
  {
    id: 1,
    title: "Lagos",
    type_name: "Duplex",
    image: loc_image_1,
    location: "Lagos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    id: 2,
    title: "Abuja",
    type_name: "Bungalow",
    image: loc_image_2,
    location: "Abuja",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    id: 3,
    title: "Ogun",
    type_name: "2-Story building",
    image: loc_image_3,
    location: "Ogun",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
];

export const house_list = [
  {
    id: 1,
    title: "South Lake Villa",
    location: "Igbo Efon, Lekki, Lagos",
    price: "15,000,000",
    image: image_1,
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [icon_1, icon_2, icon_3, icon_4],
  },
  {
    id: 2,
    title: "Treasure Park Gardens",
    location: "Igbo Efon, Lekki, Lagos",
    price: "5,000,000",
    image: image_2,
    featured: true,
    discounted: true,
    size: "3242 Sqm",
    icons: [icon_1, icon_2, icon_3, icon_4],
  },
  {
    id: 3,
    title: "Adura Court",
    location: "Sangotedo, Lekki, Lagos",
    price: "3,500,000",
    image: image_3,
    featured: true,
    discounted: false,
    size: "3242 Sqm",
    icons: [icon_1, icon_2, icon_3, icon_4],
  },
];

export const sponsor_list = [
  {
    id: 1,
    image: Sterling,
  },
  {
    id: 2,
    image: Access,
  },
  {
    id: 3,
    image: Heritage,
  },
  {
    id: 4,
    image: Stanbic,
  },
  {
    id: 5,
    image: Union,
  },
];

export const team_list = [
  {
    id: 1,
    name: "Mike Smith",
    position: " Founder/CEO",
    image: Mike_1,
  },
  {
    id: 2,
    name: "Mike Smith",
    position: " Founder/CEO",
    image: Mike_2,
  },
  {
    id: 3,
    name: "Mike Smith",
    position: " Founder/CEO",
    image: Mike_3,
  },
];
