import { INavbarSubmenuItemsProps } from "@/constants/navbar.constants";
import Link from "next/link";
import StaticImageComponent from "./StaticImageComponent";

type INavbarSubmenuProps = {
  submenuData: INavbarSubmenuItemsProps;
};

const NavbarSubmenu: React.FC<INavbarSubmenuProps> = ({ submenuData }) => {
  const { images, linkItems } = submenuData;
  // const source =
  //   "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80";

  return (
    <>
      <article
        data-testid="list-item-submenu-element"
        className="absolute invisible md:block left-0 top-[110%] z-50 h-max w-full gap-1 bg-white px-4 py-4 opacity-0 transition-all duration-200 ease-in group-hover:visible group-hover:top-full group-hover:z-50 group-hover:opacity-100"
      >
        <div className="m-auto flex max-w-screen-2xl">
          <div className="flex flex-1 justify-between">
            {linkItems.map((items) => (
              <div key={items.header} className="flex-1 space-y-4">
                <h3 className="capitalize text-[#0C0C0C]">{items.header}</h3>
                <ul className="text-sm text-[#404040]">
                  {items.links.map((link) => (
                    <li key={link.title} className="mb-3 capitalize">
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-evenly gap-2 lg:justify-end">
            {images.map((imageItem, index) => (
              <article
                key={`${imageItem.name}-${index}`}
                className="flex flex-col gap-3"
              >
                <Link href="/">
                  <StaticImageComponent
                    src={imageItem.src}
                    alt={`${imageItem.name} image`}
                    fill
                    priority
                    className="h-full w-full object-cover object-top"
                    type="blur"
                  />
                </Link>
                <span className="text-sm capitalize text-[#404040]">
                  {imageItem.name}
                </span>
              </article>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default NavbarSubmenu;
