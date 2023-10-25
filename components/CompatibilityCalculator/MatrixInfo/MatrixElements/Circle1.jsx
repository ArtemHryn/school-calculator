import styles from './MatrixElements.module.scss'


const Circle1 = ({ matrix }) => {
  const {
    day,
    topLeft1,
    month,
    topRight1,
    year,
    bottomRight1,
    bottom1,
    bottomLeft1,
  } = matrix;
  return (
    <>
      <span className={`${styles.circle1} ${styles.circle1_day}`}>{day}</span>
      <span className={`${styles.circle1} ${styles.circle1_topLeft1}`}>
        {topLeft1}
      </span>
      <span className={`${styles.circle1} ${styles.circle1_month}`}>
        {month}
      </span>
      <span className={`${styles.circle1}  ${styles.circle1_topRight1}`}>
        {topRight1}
      </span>
      <span className={`${styles.circle1} ${styles.circle1_year}`}>{year}</span>
      <span className={`${styles.circle1} ${styles.circle1_bottomRight1}`}>
        {bottomRight1}
      </span>
      <span className={`${styles.circle1} ${styles.circle1_bottom1}`}>
        {bottom1}
      </span>
      <span className={`${styles.circle1} ${styles.circle1_bottomLeft1}`}>
        {bottomLeft1}
      </span>
    </>
  );
};

export default Circle1;
