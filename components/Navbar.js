import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-16 bg-purple-700 flex justify-between  text-white items-center px-3">
      <div className="logo text-2xl font-bold ">
        <Link href="/">BitLinks</Link>{" "}
      </div>
      <ul className="flex justify-center gap-4 items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/shorten
        ">
          <li>Shorten</li>
        </Link>
        <Link href="/contact">
          <li>Contact Us</li>
        </Link>
        <div className="flex gap-3">
          <Link href="/shorten">
            {" "}
            <button className="bg-blue-600 shadow-lg p-2 rounded-lg hover:-translate-x-2 hover:scale-110 hover:bg-cyan-500 py-1 font-bold ">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-blue-600 shadow-lg p-2 rounded-lg  hover:-translate-x-1 hover:scale-110 hover:bg-cyan-500 py-1 font-bold">
              github
            </button>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
