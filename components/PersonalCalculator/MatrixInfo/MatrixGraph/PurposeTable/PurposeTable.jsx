import { kyivtype } from "@app/layout";
import styles from "./PurposeTable.module.scss";
import Connector from "./Connector";

const PurposeTable = ({ table }) => {
  if (!table) return null;
  return (
    <div>
      <h2 className={`${styles.title} ${kyivtype.className}`}>Призначення</h2>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <div>
            <h2 className={`${styles.list_item_title} ${kyivtype.className}`}>
              Особисте:
            </h2>
            <p className={`${styles.list_item_desc}`}>
              Створення стосунків , народження дітей, формування необхідних
              якостей особистості
            </p>
          </div>
          <div className={styles.purpose_wrapper}>
            <div className={styles.internal_wrapper}>
              <div className={styles.value_wrapper}>
                <p className={styles.arcane_name}>Небо:</p>
                <p className={styles.arcane}>{table.personal.point1}</p>
              </div>
              <div className={styles.value_wrapper}>
                <p className={styles.arcane_name}>Земля:</p>
                <p className={styles.arcane}>{table.personal.point2}</p>
              </div>
            </div>
            <Connector styled={styles.connector} />
            <p className={styles.arcane}>{table.personal.result}</p>
          </div>
        </li>
        <li className={styles.list_item}>
          <div>
            <h2 className={`${styles.list_item_title} ${kyivtype.className}`}>
              Соціальне:
            </h2>
            <p className={`${styles.list_item_desc}`}>
              У чому моя користь для соціуму? Пошук справи до душі
            </p>
          </div>
          <div className={styles.purpose_wrapper}>
            <div className={styles.internal_wrapper}>
              <div className={styles.value_wrapper}>
                <p className={styles.arcane_name}>Ч:</p>
                <p className={styles.arcane}>{table.personal.point1}</p>
              </div>
              <div className={styles.value_wrapper}>
                <p className={styles.arcane_name}>Ж:</p>
                <p className={styles.arcane}>{table.personal.point2}</p>
              </div>
            </div>
            <Connector styled={styles.connector} />
            <p className={styles.arcane}>{table.personal.result}</p>
          </div>
        </li>
        <li className={`${styles.list_item} ${styles.list_item_result}`}>
          <div>
            <h2 className={`${styles.list_item_title} ${kyivtype.className}`}>
              Духовне:
            </h2>
            <p className={`${styles.list_item_desc}`}>Який мій шлях до Бога?</p>
          </div>
          <p className={styles.arcane}>{table.total.spirit}</p>
        </li>
        <li className={`${styles.list_item} ${styles.list_item_result}`}>
          <div>
            <h2 className={`${styles.list_item_title} ${kyivtype.className}`}>
              Планетарне:
            </h2>
            <p className={`${styles.list_item_desc}`}>
              Чим я можу бути корисним для світу?
            </p>
          </div>
          <p className={styles.arcane}>{table.total.planetary}</p>
        </li>
      </ul>
    </div>
  );
};

export default PurposeTable;
