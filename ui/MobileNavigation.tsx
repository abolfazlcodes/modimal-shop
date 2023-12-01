import { navbarItems } from "@/constants/navbar.constants";
import Disclosure from "./Disclosure";
import NavListItemMobile from "./NavListItemMobile";

const MobileNavigation = () => {
  return (
    <nav
      data-testid="mobile-nav-element"
      className="absolute top-full z-10 left-0 w-full px-4 py-4 h-[calc(100dvh-5.5rem)]"
    >
      <Disclosure>
        {navbarItems.map(
          (navItem) =>
            navItem.submenu && (
              <div key={navItem.id}>
                <Disclosure.Header
                  headerOpenName={navItem.title}
                  className="mb-4 capitalize"
                >
                  {navItem.title}
                </Disclosure.Header>
                <Disclosure.Content contentName={navItem.title}>
                  <ul className="border-b border-b-[#404040] space-y-2 px-4 my-2">
                    {navItem.submenu?.linkItems.map((linkItem) => {
                      return linkItem.links.map((link) => (
                        <NavListItemMobile key={link.title} href={link.href}>
                          {link.title}
                        </NavListItemMobile>
                      ));
                    })}
                  </ul>
                </Disclosure.Content>
              </div>
            ),
        )}
      </Disclosure>
    </nav>
  );
};

export default MobileNavigation;
