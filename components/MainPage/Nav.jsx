import { useRouter } from "next/navigation";

import styles from "./Nav.module.scss";

const Nav = ({ setIsOpen }) => {
  const route = useRouter();

  const onRedirect = (link) => {
    route.push(link);
    setIsOpen(false);
  };

  return (
    <>
      {" "}
      <button
        className={styles.link}
        onClick={() => onRedirect("https://oksanailchyshyn.com/")}
      >
        Головна сторінка
      </button>
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
