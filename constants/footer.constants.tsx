import {
  PiFacebookLogoFill,
  PiInstagramLogo,
  PiPinterestLogoFill,
  PiTiktokLogoFill,
} from "react-icons/pi";

export interface FooterLinkItem {
  href: string;
  id: number;
  title: string;
}

export interface FooterLinksListItems {
  headerTitle: string;
  listItems: FooterLinkItem[];
}

export const footerLinkItems: FooterLinksListItems[] = [
  {
    headerTitle: "about modimal",
    listItems: [
      { href: "/collection", id: 1, title: "collection" },
      { href: "/sustainability", id: 2, title: "sustainability" },
      { href: "/privacy-and-policy", id: 3, title: "privacy policy" },
      { href: "/support-system", id: 4, title: "support system" },
      { href: "/terms-and-conditions", id: 5, title: "terms & conditions" },
      { href: "/copyright-notice", id: 6, title: "copyright notice" },
    ],
  },
  {
    headerTitle: "help & support",
    listItems: [
      { href: "/orders-and-shipping", id: 1, title: "orders & shipping" },
      { href: "/returns-and-refunds", id: 2, title: "returns & refunds" },
      { href: "/FAQs", id: 3, title: "FAQs" },
      { href: "/contact-us", id: 4, title: "contact us" },
    ],
  },
  {
    headerTitle: "join up",
    listItems: [
      { href: "/modimal-club", id: 1, title: "modimal club" },
      { href: "/careers", id: 2, title: "careers" },
      { href: "/visit-us", id: 3, title: "visit us" },
    ],
  },
];

export const footerSocialLinks = [
  { id: 1, href: "/", title: <PiInstagramLogo /> },
  { id: 2, href: "/", title: <PiFacebookLogoFill /> },
  { id: 3, href: "/", title: <PiPinterestLogoFill /> },
  { id: 4, href: "/", title: <PiTiktokLogoFill /> },
];
