import { useRouter } from "next/navigation";

import styles from "./Nav.module.scss";
import Link from "next/link";

const Nav = ({ setIsOpen }) => {
  const route = useRouter();

  const onRedirect = (link) => {
    route.push(link);
    setIsOpen(false);
  };

  return (
    <>
      {" "}
      <Link
        className={styles.link}
        href={"https://oksanailchyshyn.com/"}
        target="_blank"
      >
        Головна сторінка
      </Link>
      <button
        className={styles.link}
        onClick={() => onRedirect("/personal-calculator")}
      >
        Розрахунок особистої матриці
      </button>
      <button
        className={styles.link}
        onClick={() => onRedirect("/compatibility-calculator")}
      >
        Розрахунок матриці сумісності
      </button>
    </>
  );
};

export default Nav;
