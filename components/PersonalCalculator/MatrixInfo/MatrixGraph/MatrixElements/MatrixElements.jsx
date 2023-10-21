import { Inter } from "next/font/google";
import Circle1 from "./Circle1";
import Circle2 from "./Circle2";
import Circle3 from "./Circle3";
import InternalCircle from "./InternalCircle";

import styles from "./MatrixElements.module.scss";

const inter = Inter({ subsets: ["cyrillic"], weight: ["400"] });

const MatrixElements = ({ matrix }) => {
  return (
    <>
      <span
        className={`${styles.line_text} ${inter.className} ${styles.line_text_position1}`}
      >
        лінія чоловічого роду
      </span>
      <span
        className={`${styles.line_text} ${inter.className} ${styles.line_text_position2}`}
      >
        лінія жіночого роду
      </span>
      <Circle1 matrix={matrix} />
      <Circle2 matrix={matrix} />
      <Circle3 matrix={matrix} />
      <InternalCircle matrix={matrix} />
    </>
  );
};

export default MatrixElements;
