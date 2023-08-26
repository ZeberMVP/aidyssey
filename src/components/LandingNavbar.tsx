import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";

const LandingNavbar = () => {
  return (
    <nav className="container mx-auto mt-8 flex h-16 w-[95%] items-center justify-between rounded-[40px] bg-slate-900 pl-1 shadow-md md:mt-4 md:h-20 2xl:w-full">
      <div className="flex items-center gap-2">
        <div className="relative ml-4 h-8 w-8 md:h-12 md:w-12">
          <Image
            src="/images/aidyssey.png"
            alt="AIdyssey's logo"
            fill
            className="aspect-square"
          />
        </div>
        <h2 className="cursor-default text-lg font-bold text-slate-100 md:text-2xl">
          AIdyssey
        </h2>
      </div>
      <div className="hidden items-center justify-center gap-8 font-light md:flex">
        <Link
          href="https://www.linkedin.com/in/ruben-zafra/"
          target="_blank"
          className="text-lg font-semibold text-slate-100 hover:text-slate-100/90"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/ZeberMVP/aidyssey"
          target="_blank"
          className="text-lg font-semibold text-slate-100 hover:text-slate-100/90"
        >
          GitHub
        </Link>
        <Link
          href="https://openai.com/"
          target="_blank"
          className="text-lg font-semibold text-slate-100 hover:text-slate-100/90"
        >
          OpenAI
        </Link>
        <Link
          href="https://replicate.com/"
          target="_blank"
          className="text-lg font-semibold text-slate-100 hover:text-slate-100/90"
        >
          Replicate
        </Link>
      </div>
      <Link
        className={cn(
          buttonVariants({ variant: "default", size: "default" }),
          "hidden rounded-[40px] bg-ring px-8 text-lg font-normal hover:bg-ring/90 md:flex",
        )}
        href="/sign-in"
      >
        Sign In
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="-mr-4 h-8 w-8 text-ring" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="-ml-8 mt-8 flex flex-col items-center  gap-8 font-light ">
            <Link
              href="https://www.linkedin.com/in/ruben-zafra/"
              target="_blank"
              className="text-lg font-semibold text-slate-900 hover:text-slate-900/90"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/ZeberMVP/aidyssey"
              target="_blank"
              className="text-lg font-semibold text-slate-900 hover:text-slate-900/90"
            >
              GitHub
            </Link>
            <Link
              href="https://openai.com/"
              target="_blank"
              className="text-lg font-semibold text-slate-900 hover:text-slate-900/90"
            >
              OpenAI
            </Link>
            <Link
              href="https://replicate.com/"
              target="_blank"
              className="text-lg font-semibold text-slate-900 hover:text-slate-900/90"
            >
              Replicate
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: "default", size: "default" }),
                "rounded-[40px] bg-ring px-8 text-lg font-normal hover:bg-ring/90",
              )}
              href="/sign-in"
            >
              Sign In
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default LandingNavbar;
