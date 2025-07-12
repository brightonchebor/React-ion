import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

const styles = {
  link: "hover:bg-white hover:text-slate-800 py-1 px-2 rounded-md transition-colors duration-700 block",
};

export default function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white p-3 z-100">
      <div className="flex justify-between container items-center mx-auto">
        <img src="src/assets/logo.png" alt="Logo" className="w-36" />
        {/* This our navbar for large screens */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/88" className={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Services
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
        <div className="md:hidden cursor-pointer">
          {isMenuOpen ? (
            <RiCloseLargeFill
              size={20}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <GiHamburgerMenu
              size={20}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col text-center space-y-3 mt-4">
          <li>
            <a href="/88" className={styles.link}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Services
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#" className={styles.link}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
