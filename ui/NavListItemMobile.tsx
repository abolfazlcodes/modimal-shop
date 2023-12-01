import Link from "next/link";
import { ReactNode } from "react";

interface NavListItemMobileProps {
  children: ReactNode;
  href: string;
}

const NavListItemMobile: React.FC<NavListItemMobileProps> = ({
  children,
  href,
}) => {
  return (
    <li className="group">
      <Link href={href}>
        <p className="relative cursor-pointer text-base capitalize text-[#404040] duration-100 group-hover:text-[#0C0C0C] md:text-lg">
          {children}
          <span className="absolute bottom-0 left-0 ml-[1px] mt-1 inline-block h-[2px] w-0 rounded-sm bg-[#0C0C0C] duration-100 group-hover:w-3"></span>
        </p>
      </Link>
    </li>
  );
};

export default NavListItemMobile;
