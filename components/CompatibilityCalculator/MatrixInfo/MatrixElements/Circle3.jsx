import styles from "./MatrixElements.module.scss";

const Circle3 = ({ matrix }) => {
  const {
    left3,
    top3,
    right3,
    bottom3,
    topLeft3,
    topRight3,
    bottomRight3,
    bottomLeft3,
  } = matrix;

  return (
    <>
      <span className={`${styles.circle3} ${styles.circle3_left3}`}>
        {left3}
      </span>
      <span className={`${styles.circle3} ${styles.circle3_top3}`}>{top3}</span>
      <span className={`${styles.circle3} ${styles.circle3_right3}`}>
        {right3}
      </span>
      <span className={`${styles.circle3} ${styles.circle3_bottom3}`}>
        {bottom3}
      </span>
      <span className={`${styles.circle3} ${styles.circle3_topLeft3}`}>
        {topLeft3}
      </span>
      <span className={`${styles.circle3} ${styles.circle3_topRight3}`}>
        {topRight3}
      </span>
      <span className={`${styles.circle3} ${styles.circle3_bottomRight3}`}>
        {bottomRight3}
      </span>
      <span className={`${styles.circle3} ${styles.circle3_bottomLeft3}`}>
        {bottomLeft3}
      </span>
    </>
  );
};

export default Circle3;
