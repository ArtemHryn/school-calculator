import Link from "next/link";
import { kyivtype } from "@app/layout";

import styles from "./Hero.module.scss";

const Hero = ({ link, title, linkName }) => {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.link_wrapper}>
        <p className={styles.link_name}>{linkName}</p>
        <Link href={link} className={styles.link}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className={styles.icon}
          >
            <path
              d="M4 20L20 4M20 4C20 4 19.8 8.5 19.8 10C19.8 11.5 20 16 20 16M20 4C20 4 15.564 4.2 14 4.2C12.436 4.2 8 4 8 4"
              stroke="#F0EEE8"
              strokeWidth="1.5"
            />
          </svg>
        </Link>
      </div>
      <h1 className={`${styles.title} ${kyivtype.className}`}>{title}</h1>
    </div>
  );
};

export default Hero;
