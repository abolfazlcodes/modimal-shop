import Link from "next/link";
import {
  INavbarSubmenuItemsProps,
  NavbarItemsProps,
} from "@/constants/navbar.constants";
import NavbarSubmenu from "./NavbarSubmenu";
import Overlay from "./Overlay";
import { useState } from "react";

interface INavListItemProps {
  navItemData: NavbarItemsProps;
}

const NavListItem: React.FC<INavListItemProps> = ({ navItemData }) => {
  const { title, hasSubmenu, href, submenu } = navItemData;

  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <>
      <li
        data-testid="list-item-element"
        className="group"
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => setShowOverlay(false)}
      >
        <Link href={href}>
          <p className="relative cursor-pointer text-base capitalize text-[#404040] duration-100 group-hover:text-[#0C0C0C] md:text-lg">
            {title}
            <span className="absolute bottom-0 left-0 ml-[1px] mt-1 inline-block h-[2px] w-0 rounded-sm bg-[#0C0C0C] duration-100 group-hover:w-3"></span>
          </p>
        </Link>
        {hasSubmenu && (
          <NavbarSubmenu submenuData={submenu as INavbarSubmenuItemsProps} />
        )}
      </li>
      {hasSubmenu && showOverlay && <Overlay />}
    </>
  );
};

export default NavListItem;
