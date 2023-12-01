import { navbarItems } from "@/constants/navbar.constants";
import NavListItem from "./NavListItem";

const NavList = () => {
  return (
    <ul
      data-testid="navlist-element"
      className="hidden md:items-center md:order-1 md:flex md:gap-3"
    >
      {navbarItems.map((navItem) => (
        <NavListItem key={navItem.id} navItemData={navItem} />
      ))}
    </ul>
  );
};

export default NavList;
