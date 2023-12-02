import Image from "next/image";
import { League_Spartan } from "next/font/google";
import Button from "./Button";

const LeagueSpartan = League_Spartan({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section
      data-testid="hero-section"
      className="w-full h-[30rem] lg:h-[45rem] relative"
    >
      <Image
        src="/hero.png"
        fill
        alt="banner image"
        quality={90}
        priority
        className="h-full w-full object-cover object-center"
      />

      <div
        className={`absolute bottom-10 lg:bottom-40 left-5 lg:left-20 px-6 py-4 animate-in ${LeagueSpartan.className}`}
      >
        <h1 className="italic text-2xl lg:text-3xl text-white font-bold tracking-wide mb-2">
          Elegance In Simplicity,
        </h1>
        <h1 className="italic text-2xl lg:text-3xl text-white font-bold tracking-wide mb-4 lg:mb-8">
          Earth&apos;s Harmony
        </h1>

        <Button type="primary" href="/products">
          New In
        </Button>
      </div>
    </section>
  );
};

export default Hero;
