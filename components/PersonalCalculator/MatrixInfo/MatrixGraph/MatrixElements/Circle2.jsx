import styles from "./MatrixElements.module.scss";

const Circle2 = ({ matrix }) => {
  const {
    left2,
    top2,
    right2,
    bottom2,
    topLeft2,
    topRight2,
    bottomRight2,
    bottomLeft2,
  } = matrix;

  return (
    <>
      <span className={`${styles.circle2} ${styles.circle2_left2}`}>
        {left2}
      </span>
      <span className={`${styles.circle2} ${styles.circle2_top2}`}>{top2}</span>
      <span className={`${styles.circle2} ${styles.circle2_right2}`}>
        {right2}
      </span>
      <span className={`${styles.circle2} ${styles.circle2_bottom2}`}>
        {bottom2}
      </span>
      <span className={`${styles.circle2} ${styles.circle2_topLeft2}`}>
        {topLeft2}
      </span>
      <span className={`${styles.circle2} ${styles.circle2_topRight2}`}>
        {topRight2}
      </span>
      <span className={`${styles.circle2} ${styles.circle2_bottomRight2}`}>
        {bottomRight2}
      </span>
      <span className={`${styles.circle2} ${styles.circle2_bottomLeft2}`}>
        {bottomLeft2}
      </span>
    </>
  );
};

export default Circle2;
