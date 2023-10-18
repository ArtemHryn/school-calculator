import { useEffect, useState } from "react";
import Link from "next/link";
import { ageCalculator } from "@helper/ageCalculator";

import styles from "./UserInfo.module.scss";
import { kyivtype } from "@app/layout";

const UserInfo = ({ name, date }) => {
  const [age, setAge] = useState("");

  useEffect(() => {
    const years = ageCalculator(date.day, date.month, date.year);
    const result =
      years % 10 === 1 ?? years % 1000 !== 11
        ? `${years} рік`
        : years % 10 >= 2 &&
          years % 10 <= 4 &&
          (years % 100 < 12 || years % 100 > 14)
        ? `${years} роки`
        : `${years} років`;
    setAge(result);
  }, [date.day, date.month, date.year]);

  return (
    <div className={styles.user_info_wrapper}>
      {name && (
        <div className={styles.name_wrapper}>
          <p className={`${styles.box_name} ${kyivtype.className}`}>Ім’я</p>
          <p className={styles.box_value}>{name}</p>
        </div>
      )}
      <div className={styles.date_wrapper}>
        <p className={`${styles.box_name} ${kyivtype.className}`}>
          Дата народження
        </p>
        <p className={styles.box_value}>
          {date.day}.{date.month}.{date.year}
        </p>
      </div>
      <div className={styles.age_wrapper}>
        <p className={`${styles.box_name} ${kyivtype.className}`}>Вік</p>
        <p className={styles.box_value}>{age}</p>
      </div>
      <div className={styles.button_wrapper}>
        <Link href={"#dateForm"} className={styles.link_to_form}>
          Ввести інші дані
        </Link>
      </div>
    </div>
  );
};

export default UserInfo;
