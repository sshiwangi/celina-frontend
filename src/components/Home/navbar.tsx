import { FC } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "FEATURES", href: "#features" },
  { label: "PRICING", href: "#pricing" },
  { label: "HOW TO USE", href: "#how-to-use" },
  { label: "ROADMAP", href: "#roadmap" },
];

export const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Brainwave"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white text-xl font-semibold">Celina</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              FEATURES
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              PRICING
            </Link>
            <Link
              href="#how"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              HOW TO USE
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/new-account"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              SIGN UP
            </Link>
            <Button
              variant="outline"
              className="bg-dark-800 text-white border-white/10 hover:bg-dark-700 hover:border-white/20"
            >
              SIGN IN
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
