"use client";

import Link from "next/link";

const NavBar = () => (
  <nav className="bg-[#170e2b] font-segoe backdrop-blur-lg border-b border-purple-700/50 shadow-purple-950 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <img src="image.png" alt="" className="w-40" />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link
            href={"/"}
            className={`font-medium transition-colors text-white hover:text-purple-700`}
          >
            Overview
          </Link>
          <Link
            href={"/chat"}
            className={`font-medium transition-colors chat text-white hover:text-purple-700`}
          >
            Explore chat
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
