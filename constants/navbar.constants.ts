export interface INavbarSubmenuItemsProps {
  linkItems: {
    header: string;
    links: { href: string; title: string }[];
  }[];
  images: { src: string; name?: string }[];
}
// const source =
//   "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80";
export interface NavbarItemsProps {
  id: number;
  title: string;
  href: string;
  hasSubmenu: boolean;
  submenu?: INavbarSubmenuItemsProps;
}

export const navbarItems: NavbarItemsProps[] = [
  {
    id: 1,
    title: "collection",
    href: "/collection",
    hasSubmenu: true,
    submenu: {
      linkItems: [
        {
          header: "category",
          links: [
            { title: "shop all", href: "/products" },
            { title: "boluses & Top", href: "/products?category=boluses" },
            { title: "pants", href: "/products?category=pants" },
            { title: "dresses & jumsuits", href: "/products?category=dresses" },
            { title: "outwear & jackets", href: "/products?category=jackets" },
            { title: "pullovers", href: "/products" },
            { title: "tees", href: "/products?category=tees" },
            { title: "shorts & skirts", href: "/products?category=shorts" },
          ],
        },
        {
          header: "featured",
          links: [
            { title: "new in", href: "/new-in" },
            { title: "modiweek", href: "/modiweek" },
            { title: "plus size", href: "/plus-size" },
            { title: "best seller", href: "/best-sellers" },
          ],
        },
        {
          header: "more",
          links: [
            { title: "bundles", href: "/" },
            { title: "occasion wear", href: "/occasions" },
            { title: "matching set", href: "/sets" },
            { title: "suiting", href: "/suits" },
          ],
        },
      ],
      images: [
        {
          src: `./public/collection-image-one.png`,
          name: "blouses",
        },
        {
          src: `./public/collection-image-two.png`,
          name: "plus sizes",
        },
      ],
    },
  },
  {
    id: 2,
    title: "new in",
    href: "/new-in",
    hasSubmenu: true,
    submenu: {
      linkItems: [
        {
          header: "category",
          links: [
            { title: "shop all", href: "/products" },
            { title: "boluses & Top", href: "/products?category=boluses" },
            { title: "pants", href: "/products?category=pants" },
            { title: "dresses & jumsuits", href: "/products?category=dresses" },
            { title: "outwear & jackets", href: "/products?category=jackets" },
            { title: "pullovers", href: "/products" },
            { title: "tees", href: "/products?category=tees" },
            { title: "shorts & skirts", href: "/products?category=shorts" },
          ],
        },
        {
          header: "trending",
          links: [
            { title: "plus size", href: "/plus-size" },
            { title: "fall collection", href: "/collection" },
            { title: "modiweek", href: "/modiweek" },
          ],
        },
      ],
      images: [
        {
          src: `./public/newin-image-four.png`,
          name: "fall collection",
        },
        {
          src: `./public/newin-image-two.png`,
          name: "boluses",
        },
        {
          src: `./public/newin-image-three.png`,
          name: "dresses",
        },
      ],
    },
  },
  {
    id: 3,
    title: "modiweek",
    href: "/modiweek",
    hasSubmenu: false,
  },
  {
    id: 4,
    title: "plus size",
    href: "/plus-size",
    hasSubmenu: true,
    submenu: {
      linkItems: [
        {
          header: "category",
          links: [
            { title: "shop all", href: "/products" },
            { title: "boluses & Top", href: "/products?category=boluses" },
            { title: "pants", href: "/products?category=pants" },
            { title: "dresses & jumsuits", href: "/products?category=dresses" },
            { title: "outwear & jackets", href: "/products?category=jackets" },
            { title: "pullovers", href: "/products" },
            { title: "tees", href: "/products?category=tees" },
            { title: "shorts & skirts", href: "/products?category=shorts" },
          ],
        },
      ],
      images: [
        {
          src: `./public/plus-size-image-one.png`,
          name: "pants",
        },
        {
          src: `./public/plus-size-image-two.png`,
          name: "dresses",
        },
        {
          src: `./public/plus-size-image-three.png`,
          name: "blouses",
        },
      ],
    },
  },
  {
    id: 5,
    title: "sustainability",
    href: "/sustainability",
    hasSubmenu: true,
    submenu: {
      linkItems: [
        {
          header: "sustainability",
          links: [
            { title: "mission", href: "/mission" },
            { title: "processing", href: "/processing" },
            { title: "materials", href: "/materials" },
            { title: "packaging", href: "/packaging" },
            { title: "product care", href: "/product-care" },
            { title: "our suppliers", href: "/our-suppliers" },
          ],
        },
      ],
      images: [
        {
          src: `./public/sustainability-image-one.png`,
        },
        {
          src: `./public/sustainability-image-two.png`,
        },
      ],
    },
  },
];
