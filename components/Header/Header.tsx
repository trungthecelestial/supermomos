import { Inter } from "@next/font/google";
import ChevronDown from "assets/icons/chevron-down.svg";
import clsx from "clsx";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["500"] });

export function Header() {
  return (
    <header
      className={clsx(
        "mx-auto flex h-[80px] max-w-7xl items-center justify-between",
        inter.className
      )}
    >
      <Image
        priority
        alt="Supermomos"
        height={36}
        src="/logo.png"
        width={200}
      />

      <div className="flex gap-12 text-[#333]">
        <a href="#">Blog</a>
        <a href="#">Socials</a>
        <a href="#">Past Socials</a>
        <a className="flex items-center" href="#">
          Clubs{" "}
          <Image
            alt="Clubs Dropdown"
            className="-mr-1 ml-2 h-[5px] w-[10px]"
            src={ChevronDown}
          />
        </a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
}
