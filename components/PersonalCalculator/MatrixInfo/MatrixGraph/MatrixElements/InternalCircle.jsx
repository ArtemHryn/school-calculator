import styles from "./MatrixElements.module.scss";

const InternalCircle = ({ matrix }) => {
  const { center, innerLeft, innerTop, balance, love, money } = matrix;
  return (
    <>
      <span className={`${styles.internal} ${styles.internal_center}`}>
        {center}
      </span>
      <span className={`${styles.internal} ${styles.internal_innerLeft}`}>
        {innerLeft}
      </span>
      <span className={`${styles.internal} ${styles.internal_innerTop}`}>
        {innerTop}
      </span>
      <span className={`${styles.internal} ${styles.internal_balance}`}>
        {balance}
      </span>
      <span className={`${styles.internal} ${styles.internal_love}`}>
        {love}
      </span>
      <span className={`${styles.internal} ${styles.internal_money}`}>
        {money}
      </span>
    </>
  );
};

export default InternalCircle;
