"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { playfair } from "../../../utils/fonts";
import Image from "next/image";
import { menuItems } from "@/utils/data";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const pathname = usePathname();
  const lastParam = pathname?.split("/").filter(Boolean).pop();

  return (
    <nav className="sticky navbar top-0 w-screen md:w-full flex justify-between items-center py-4 px-8 bg-slate-900 z-50">
      <Link href="/" className={playfair.className}>
        <Image
          className="md:sticky object-cover rounded-full overflow-hidden w-[65%] aspect-square drop-shadow-2xl shadow-slate-400 z-10"
          src="/assets/images/profile-picture.jpg"
          alt="Profile Picture"
          width={55}
          height={50}
        />
      </Link>
      <div className="hidden md:flex gap-8">
        {menuItems.map((item, i) => (
          <Link key={i} href={`/menu/${item.val}/`}>
            <FontAwesomeIcon
              key={i}
              icon={item.icon as unknown as IconName}
              color={`${
                lastParam === item.val ? "rgb(138, 144, 158)" : "#4d4d4e"
              }`}
              size="xl"
            />
          </Link>
        ))}
      </div>
      <div className="md:hidden z-50">
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <CgClose
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <CgMenuRight
                className="text-2xl cursor-pointer"
                onClick={toggleMenu}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden fixed inset-0 bg-inherit flex flex-col gap-6 items-center justify-center z-40"
        >
          {menuItems.map((item, i) => (
            <Link key={i} href={`/menu/${item.val}/`} onClick={toggleMenu}>
              <h1
                key={i}
                color={`${
                  lastParam === item.val ? "rgb(138, 144, 158)" : "#4d4d4e"
                }`}
                className="text-3xl"
              >
                {item.label}
              </h1>
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
