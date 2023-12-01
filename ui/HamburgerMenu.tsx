// import { useRouter } from "next/router";

interface HamburgerMenuProps {
  shouldOpenMenu: boolean;
  handleOpenMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  shouldOpenMenu,
  handleOpenMenu,
}) => {
  // const { locale } = useRouter();

  return (
    <div
      data-testid="hamburgerMenu-element"
      className={`flex cursor-pointer flex-col lg:hidden ${
        !shouldOpenMenu && "space-y-1"
      }`}
      onClick={handleOpenMenu}
    >
      <span
        data-testid="span-elements"
        className={`inline-block h-1 w-4 rounded-sm bg-[#404040] transition-all duration-200 dark:bg-miniAddBg ${
          !shouldOpenMenu ? "" : "rotate-45"
          // : shouldOpenMenu && locale === "en"
          //   ? "rotate-45"
          //   : "-rotate-45"
        }`}
      ></span>
      <span
        data-testid="span-elements"
        className={`inline-block h-1 w-6 rounded-sm bg-[#404040] transition-all duration-200 dark:bg-miniAddBg ${
          !shouldOpenMenu ? "" : "w-[24px] -rotate-45"
          // : shouldOpenMenu && locale === "en"
          //   ? "w-[24px] -rotate-45"
          //   : "w-[24px] rotate-45"
        }`}
      ></span>
      <span
        data-testid="span-elements"
        className={`inline-block h-1 w-4 rounded-sm bg-[#404040] transition-all duration-200 dark:bg-miniAddBg ${
          !shouldOpenMenu ? "" : "ml-auto rotate-45"
          // : shouldOpenMenu && locale === "en"
          //   ? "ml-auto rotate-45"
          //   : "mr-auto -rotate-45"
        }`}
      ></span>
    </div>
  );
};

export default HamburgerMenu;
