import { League_Spartan } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

const Logo = () => {
  return (
    <Link href="/" className="order-1 w-full md:w-max ml-8 md:ml-0">
      <div
        className={`${LeagueSpartan.className} relative flex w-full flex-col items-center justify-center text-[#404040] md:w-max`}
      >
        <h1 className="flex items-center text-3xl font-bold tracking-wider text-[#404040]">
          modimal
          <Image
            src="/logo.png"
            alt="logo image"
            width={10}
            height={10}
            className="mt-1"
          />
        </h1>
        <span className="relative -top-2 text-xs tracking-wider">
          women clothing
        </span>
      </div>
    </Link>
  );
};

export default Logo;
