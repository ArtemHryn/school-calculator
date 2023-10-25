import { kyivtype } from "@app/layout";
import styles from "./HealthCard.module.scss";

const HealthCard = ({ table }) => {
  if (!table) return null;
  return (
    <div>
      <h2 className={`${styles.title} ${kyivtype.className}`}>
        Карта здоров’я
      </h2>
      <ul>
        <li className={styles.list_item}>
          <p className={`${styles.chakra} ${styles.chakra_title}`}>
            <span
              className={styles.chakra_circle}
              style={{ backgroundColor: "#968C84" }}
            />
            Назва чакри
          </p>
          <p className={`${styles.chakra}`}>Фізика</p>
          <p className={`${styles.chakra}`}>Енергія</p>
          <p className={`${styles.chakra}`} style={{ border: "none" }}>
            Емоції
          </p>
        </li>
        {table.healthMap.map((el, index) => (
          <li key={index} className={styles.list_item}>
            <div className={styles.chakras_name_wrapper}>
              <span
                className={styles.chakra_circle}
                style={{
                  backgroundImage: el.chakras.color
                    ? el.chakras.color
                    : "transparent",
                }}
              >
                {index + 1}
              </span>
              <p className={`${styles.chakra} ${styles.chakra_names}`}>
                {el.chakras.name}
                <span className={styles.chakra_desc}>{el.chakras.desc}</span>
              </p>
            </div>
            <p className={`${styles.chakra}`}>{el.column1}</p>
            <p className={`${styles.chakra}`}>{el.column2}</p>
            <p className={`${styles.chakra}`} style={{ border: "none" }}>
              {el.column3}
            </p>
          </li>
        ))}
        <li className={styles.list_item}>
          <span
            className={styles.chakra_circle}
            style={{ backgroundColor: "#3C3A38" }}
          />
          <p
            className={`${styles.chakra} ${styles.chakra_title} ${styles.chakra_sum}`}
          >
            Сума
          </p>

          <p className={`${styles.chakra} ${styles.chakra_sum}`}>
            {table.sum.column1}
          </p>
          <p className={`${styles.chakra} ${styles.chakra_sum}`}>
            {table.sum.column2}
          </p>
          <p
            className={`${styles.chakra} ${styles.chakra_sum}`}
          >
            {table.sum.column3}
          </p>
        </li>
        <li className={styles.list_item} style={{ border: "none" }}>
          <span
            className={styles.chakra_circle}
            style={{ backgroundColor: "#3C3A38" }}
          />
          <p
            className={`${styles.chakra} ${styles.chakra_title} ${styles.chakra_total}`}
          >
            Підсумок
          </p>

          <p className={`${styles.chakra} ${styles.chakra_total}`}>
            {table.total.column1}
          </p>
          <p className={`${styles.chakra} ${styles.chakra_total}`}>
            {table.total.column2}
          </p>
          <p
            className={`${styles.chakra} ${styles.chakra_total}`}
            style={{ border: "none" }}
          >
            {table.total.column3}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HealthCard;
