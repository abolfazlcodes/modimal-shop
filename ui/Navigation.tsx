"use client";

import {
  PiHeart,
  PiMagnifyingGlass,
  PiShoppingBag,
  PiUser,
} from "react-icons/pi";
import Logo from "./Logo";
import IconButton from "./IconButton";
import IconsWrapper from "./IconsWrapper";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import NavList from "./NavList";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import Modal from "./Modal";
import SearchBox from "./SearchBox";

const Navigation = () => {
  const shouldShowElement = useMatchMedia("(min-width:768px)");
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<boolean>(false);

  const handleOpenMobileSubmenu = () => {
    setOpenMobileSubmenu((prevState) => !prevState);
  };

  return (
    <nav className="sticky bg-bgColor px-4 py-2 shadow-sm">
      <div className="m-auto flex w-full max-w-screen-2xl items-center justify-between gap-1">
        <Modal>
          <Logo />

          <IconsWrapper styles="order-1 md:order-2">
            {shouldShowElement && (
              <Modal.Header modalName="search">
                <IconButton data-testid="searchBtn-element">
                  <PiMagnifyingGlass />
                </IconButton>
              </Modal.Header>
            )}
            <IconButton className="hidden md:flex">
              <PiUser />
            </IconButton>
            <IconButton>
              <PiHeart />
            </IconButton>
            <IconButton>
              <PiShoppingBag />
            </IconButton>
          </IconsWrapper>

          {!shouldShowElement && openMobileSubmenu && <MobileNavigation />}
          {shouldShowElement && <NavList />}

          <IconsWrapper styles="md:hidden flex-1">
            <IconButton>
              <HamburgerMenu
                shouldOpenMenu={openMobileSubmenu}
                handleOpenMenu={handleOpenMobileSubmenu}
              />
            </IconButton>

            <Modal.Header modalName="search">
              <IconButton data-testid="searchBtn-element">
                <PiMagnifyingGlass />
              </IconButton>
            </Modal.Header>

            <Modal.Window
              modalName="search"
              className="top-[10%] w-full h-28 px-4 py-4 left-0"
            >
              <SearchBox />
            </Modal.Window>
          </IconsWrapper>
        </Modal>
      </div>
    </nav>
  );
};

export default Navigation;
