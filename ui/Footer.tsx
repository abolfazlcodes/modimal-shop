"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { PiCopyright } from "react-icons/pi";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import {
  footerLinkItems,
  footerSocialLinks,
} from "@/constants/footer.constants";

interface IFooterLinkItemProps {
  href: string;
  children: ReactNode;
}

function FooterLinkItem({ href, children }: IFooterLinkItemProps) {
  return (
    <Link href={href}>
      <li className="text-[#CBCBCB] capitalize">{children}</li>
    </Link>
  );
}

interface IFooterLinkItemsListProps {
  headerTitle: string;
  listItems: { href: string; title: string }[];
}

function FooterLinkItemsList({
  headerTitle,
  listItems,
}: IFooterLinkItemsListProps) {
  return (
    <div className="space-y-4 h-full sm:w-[12rem] sm:text-left text-center w-[40%] lg:w-[11rem]">
      <h3 className="lg:text-lg capitalize text-base font-bold">
        {headerTitle}
      </h3>
      <ul className="flex flex-col gap-3">
        {listItems.map((item, index) => (
          <FooterLinkItem key={`${index}-${item.href}`} href={item.href}>
            {item.title}
          </FooterLinkItem>
        ))}
      </ul>
    </div>
  );
}

function FooterSocial({ className }: { className?: string }) {
  return (
    <div className={`${className}`} data-testid="socials-element">
      <div className="flex text-3xl gap-2 mb-6">
        {footerSocialLinks.map((socialLink) => (
          <Link key={socialLink.id} href={socialLink.href}>
            {socialLink.title}
          </Link>
        ))}
      </div>

      <p className="flex gap-2 items-center text-xs md:text-base text-[#CBCBCB]">
        <PiCopyright className="text-xl" />
        2023 modimal. All Rights Reserved.
      </p>
    </div>
  );
}

const Footer = () => {
  const shouldShowSocials = useMatchMedia("(min-width:1024px)");

  return (
    <footer className="bg-[#404040] text-[#FFFFFF] px-4 py-6 h-max">
      <div className="m-auto flex w-full max-w-screen-2xl flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
        <article className="lg:min-h-[20rem] lg:w-1/3 xl:w-1/2 w-full flex flex-col justify-between">
          <div className="space-y-3 lg:space-y-6">
            <h2 className="capitalize font-bold text-sm md:text-lg lg:text-xl">
              join our club, get 15% offf for your birthday
            </h2>
            <input
              type="text"
              className="w-full h-10 text-[#D1D9CF] text-xs md:text-sm px-3 bg-inherit focus:outline-none border border-[#D1D9CF]"
              placeholder="enter your email address"
            />

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                className="w-5 h-5"
              />
              <label htmlFor="newsletter" className="font-semibold text-xs">
                By Submittng your email, you agree to receive advertising emails
                from Modimal.
              </label>
            </div>
          </div>

          {shouldShowSocials && <FooterSocial />}
        </article>

        <article className="flex gap-5 flex-wrap lg:w-2/3 sm:justify-start justify-center xl:w-1/2 w-full lg:min-h-[20rem]">
          {footerLinkItems.map((footerItem) => (
            <FooterLinkItemsList
              key={footerItem.headerTitle}
              headerTitle={footerItem.headerTitle}
              listItems={footerItem.listItems}
            />
          ))}

          {!shouldShowSocials && <FooterSocial className="w-full" />}
        </article>
      </div>
    </footer>
  );
};

export default Footer;
