import styles from "./GenericTable.module.scss";

const GenericTable = ({ table }) => {
  if (!table) return null;
  return (
    <ul>
      <li className={styles.list_item}>
        <p className={styles.list_item_title}>
          Родові програми по чоловічій лінії:
        </p>
        <div className={styles.arcanes_wrapper}>
          {table.father.map((el, index) => (
            <p key={index} className={styles.arcane}>
              {el}
            </p>
          ))}
        </div>
      </li>
      <li className={styles.list_item}>
        <p className={styles.list_item_title}>
          Родові програми по жіночій лінії:
        </p>
        <div className={styles.arcanes_wrapper}>
          {table.mother.map((el, index) => (
            <p key={index} className={styles.arcane}>
              {el}
            </p>
          ))}
        </div>
      </li>
      <li className={styles.list_item}>
        <p className={styles.list_item_title}>Код внутрішньої сили:</p>
        <div className={styles.arcanes_wrapper}>
          {table.internal.map((el, index) => (
            <p key={index} className={styles.arcane}>
              {el}
            </p>
          ))}
        </div>
      </li>
      <li className={styles.list_item}>
        <p className={styles.list_item_title}>Сила роду:</p>
        <p className={styles.arcane}>{table.genericPower}</p>
      </li>
    </ul>
  );
};

export default GenericTable;
