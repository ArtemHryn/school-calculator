import { kyivtype } from "@app/layout";

import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
