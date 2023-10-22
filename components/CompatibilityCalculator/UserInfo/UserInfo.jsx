import { ageCalculator } from "@helper/ageCalculator";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./UserInfo.module.scss";
import { kyivtype } from "@app/layout";

const UserInfo = ({ partners }) => {
  const [age, setAge] = useState([]);

  useEffect(() => {
    const partnersAge = [];
    partners.forEach((el) => {
      const years = ageCalculator(el.day, el.month, el.year);
      const result =
        years % 10 === 1 ?? years % 1000 !== 11
          ? `${years} рік`
          : years % 10 >= 2 &&
            years % 10 <= 4 &&
            (years % 100 < 12 || years % 100 > 14)
          ? `${years} роки`
          : `${years} років`;
      partnersAge.push(result);
    });
    setAge(partnersAge);
  }, [partners]);

  useEffect(() => {
    const section = document.getElementById("partnersMatrix");
    section.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <ul id="partnersMatrix" className={styles.user_info_wrapper}>
      {partners.map((el, index) => (
        <li key={index} className={styles.user_info_item}>
          <div className={`${styles.info_wrapper} ${styles.date_info_wrapper}`}>
            <p className={`${styles.name} ${kyivtype.className}`}>
              {index === 0
                ? "Ваша дата народження"
                : "Дата народження партнера"}
            </p>
            <p className={styles.value}>{`${el.day}.${el.month}.${el.year}`}</p>
          </div>
          <div className={`${styles.info_wrapper} ${styles.age_info_wrapper}`}>
            <p className={`${styles.name} ${kyivtype.className}`}>
              {index === 0 ? "Ваш вік" : "Вік партнера"}
            </p>
            <p className={styles.value}>{age[index]}</p>
          </div>
        </li>
      ))}
      <li className={styles.button_wrapper}>
        <Link href={"#compatibilityForm"} className={styles.link_to_form}>
          Ввести інші дані
        </Link>
      </li>
    </ul>
  );
};

export default UserInfo;
