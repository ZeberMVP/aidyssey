import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"] });

const LandingHero = () => {
  return (
    <section className="container">
      <h2 className="mt-12 text-center text-4xl font-medium text-slate-900 md:text-7xl md:leading-tight">
        Embrace the Power of Artificial Intelligence Now
      </h2>
      <h4
        className={cn(
          "mt-8 text-center text-lg text-[#7A7D9C] md:text-xl",
          manrope.className,
        )}
      >
        Start generating content and art
      </h4>

      <div className="mt-6 flex items-center justify-center gap-2 md:gap-4">
        <Link
          className={cn(
            buttonVariants({ variant: "default", size: "default" }),
            "whitespace-nowrap rounded-[40px] bg-slate-900 px-8 text-lg font-normal hover:bg-slate-900/90",
          )}
          href="/sign-up"
        >
          Sign Up
        </Link>
        <Link
          className={cn(
            buttonVariants({ variant: "default", size: "default" }),
            "rounded-[40px] bg-ring px-8 text-lg font-normal hover:bg-ring/90",
          )}
          href="https://github.com/ZeberMVP/aidyssey"
        >
          Documentation
        </Link>
      </div>
      <div className="relative mx-auto mt-12 hidden h-[388px] w-[1146px] 2xl:block">
        <Image
          fill
          alt="Hero image"
          src="/images/hero.png"
          className="aspect-square rounded-[300px]"
        />
      </div>
    </section>
  );
};

export default LandingHero;
