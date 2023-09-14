import { NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";

const MEN_DROPDOWN: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/collection-men",
    name: "Jackets",
  },
  {
    id: ncNanoId(),
    href: "/collection-men",
    name: "Gloves",
  },
  {
    id: ncNanoId(),
    href: "/collection-men",
    name: "Belts",
  },
  {
    id: ncNanoId(),
    href: "/collection-men",
    name: "Biker Jackets",
  },
  {
    id: ncNanoId(),
    href: "/collection-men",
    name: "Wallets",
  },
  {
    id: ncNanoId(),
    href: "/collection-men",
    name: "Bags",
  }
];
const WOMEN_DROPDOWN: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/collection-women",
    name: "Jackets",
  },
  {
    id: ncNanoId(),
    href: "/collection-women",
    name: "Gloves",
  },
  {
    id: ncNanoId(),
    href: "/collection-women",
    name: "Belts",
  },
  {
    id: ncNanoId(),
    href: "/collection-women",
    name: "Biker Jackets",
  },
  {
    id: ncNanoId(),
    href: "/collection-women",
    name: "Wallets/ Purse",
  },
  {
    id: ncNanoId(),
    href: "/collection-women",
    name: "Bags",
  }
];
const KID_DROPDOWN: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/collection-kids",
    name: "Jackets",
  },
  {
    id: ncNanoId(),
    href: "/collection-kids",
    name: "Gloves",
  },
  {
    id: ncNanoId(),
    href: "/collection-kids",
    name: "Belts",
  },
  {
    id: ncNanoId(),
    href: "/collection-kids",
    name: "Bags",
  }
];
const ABOUT_DROPDOWN: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us",
  },
  {
    id: ncNanoId(),
    href: "/size-guide",
    name: "Size Guide",
  }
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/collection-men",
    name: "Men",
    type: "dropdown",
    children: MEN_DROPDOWN,
  },
  {
    id: ncNanoId(),
    href: "/collection-women",
    name: "Women",
    type: "dropdown",
    children: WOMEN_DROPDOWN,
  },
  {
    id: ncNanoId(),
    href: "/collection-kids",
    name: "Kids",
    type: "dropdown",
    children: KID_DROPDOWN,
  },

  {
    id: ncNanoId(),
    href: "/new-arrival",
    name: "New Arrivals⭐",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
    type: "dropdown",
    children: ABOUT_DROPDOWN,
  },
];
