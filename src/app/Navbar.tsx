"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NavBar = () => (
  <nav className="bg-gray-950/95 backdrop-blur-lg border-b border-gray-700/50 sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <img src="image.png" alt="" className="w-40" />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link
            href={"/"}
            className={`font-medium transition-colors text-purple-400`}
          >
            Overview
          </Link>
          <Link
            href={"/chat"}
            className={`font-medium transition-colors chat text-purple-400`}
          >
            Explore chat
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
