import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/1.png";
import imageRightPng2 from "@/images/2.png";
import imageRightPng3 from "@/images/3.png";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng2,
    heading: "Exclusive Leather Products.",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/collection-men",
  },
  {
    image: imageRightPng3,
    heading: "Exclusive Leather Products.",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/collection-men",
  },
  {
    image: imageRightPng,
    heading: "Exclusive Leather Products.",
    subHeading: "In this season, find the best 🔥",
    btnText: "Shop Now",
    btnLink: "/collection-men",
  },
];
