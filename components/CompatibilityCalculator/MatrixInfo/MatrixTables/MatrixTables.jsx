import Connector from "@components/PersonalCalculator/MatrixInfo/MatrixGraph/PurposeTable/Connector";

import styles from "./MatrixTables.module.scss";
import { kyivtype } from "@app/layout";

const MatrixTables = ({ purpose }) => {
  if (!purpose) return null;
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <div>
          <h2 className={`${styles.list_item_title} ${kyivtype.className}`}>
            Стосунки:
          </h2>
          <p className={`${styles.list_item_desc}`}>
            Через що можливе духовне зростання і матеріальна стабільність пари
          </p>
        </div>
        <div className={styles.purpose_wrapper}>
          <div className={styles.internal_wrapper}>
            <div className={styles.value_wrapper}>
              <p className={styles.arcane_name}>Небо:</p>
              <p className={styles.arcane}>{purpose.relationships.sky}</p>
            </div>
            <div className={styles.value_wrapper}>
              <p className={styles.arcane_name}>Земля:</p>
              <p className={styles.arcane}>{purpose.relationships.earth}</p>
            </div>
          </div>
          <Connector styled={styles.connector} />
          <p className={styles.arcane}>{purpose.relationships.result}</p>
        </div>
      </li>
      <li className={styles.list_item}>
        <div>
          <h2 className={`${styles.list_item_title} ${kyivtype.className}`}>
            Партнерство:
          </h2>
          <p className={`${styles.list_item_desc}`}>
            Завдання кожного партнера у стосунках{" "}
          </p>
        </div>
        <div className={styles.purpose_wrapper}>
          <div className={styles.internal_wrapper}>
            <div className={styles.value_wrapper}>
              <p className={styles.arcane_name}>Ч:</p>
              <p className={styles.arcane}>{purpose.partnership.m}</p>
            </div>
            <div className={styles.value_wrapper}>
              <p className={styles.arcane_name}>Ж:</p>
              <p className={styles.arcane}>{purpose.partnership.w}</p>
            </div>
          </div>
          <Connector styled={styles.connector} />
          <p className={styles.arcane}>{purpose.partnership.result}</p>
        </div>
      </li>
      <li className={`${styles.list_item} ${styles.list_item_result}`}>
        <div>
          <h2 className={`${styles.list_item_title} ${kyivtype.className}`}>
            Єдність:
          </h2>
          <p className={`${styles.list_item_desc}`}>
            Єдність пари. Вищий щебель стосунків
          </p>
        </div>
        <p className={styles.arcane}>{purpose.total}</p>
      </li>
    </ul>
  );
};

export default MatrixTables;
