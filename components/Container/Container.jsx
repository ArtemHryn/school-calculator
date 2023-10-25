import InputStain from "@components/Stains/InputStain";
import styles from "./Container.module.scss";

const Container = ({ children }) => {
  return (
    <section className={styles.section}>
      <InputStain />
      <div className={styles.container}>{children}</div>
    </section>
  );
};

export default Container;
