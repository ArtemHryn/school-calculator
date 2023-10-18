"use client";
import { useState } from "react";
import { kyivtype } from "@app/layout";

import styles from "./Header.module.scss";
import Link from "next/link";
import Nav from "@components/MainPage/Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          href={"https://oksanailchyshyn.com/"}
          target="_blank"
          className={`${styles.title} ${kyivtype.className}`}
        >
          Oksana Ilchyshyn
        </Link>
        <nav className={styles.nav}>
          <Nav />
        </nav>
        <div className={styles.background}>
          <button
            className={`${styles.menu__icon} ${isOpen ? styles.is_open : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`${styles.mob_nav} ${isOpen ? styles.open_modal : ""}`}>
          <Nav setIsOpen={setIsOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
