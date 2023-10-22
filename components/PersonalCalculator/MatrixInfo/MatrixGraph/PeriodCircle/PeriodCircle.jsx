import styles from "./PeriodCircle.module.scss";

const PeriodCircle = ({ period }) => {
  return (
    <>
      {period.map((el) => (
        <span
          key={el.age}
          className={`${styles.element} ${
            el.age === 0 || el.age % 10 === 0 ? styles.hide : styles[el.style]
          }`}
        >
          {el.arcane}
        </span>
      ))}
    </>
  );
};

export default PeriodCircle;
