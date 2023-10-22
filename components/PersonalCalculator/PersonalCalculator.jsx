"use client";
import { useEffect, useState } from "react";
import DateInput from "./DateInput/DateInput";
import UserInfo from "./UserInfo/UserInfo";
import MatrixGraph from "./MatrixInfo/MatrixGraph/MatrixGraph";
import {
  genericPrograms,
  getPeriod,
  personalCalculator,
  personalTables,
} from "@helper/personalCalculator";
import HealthCard from "./MatrixInfo/MatrixGraph/HealthCard/HealthCard";
import GenericTable from "./MatrixInfo/MatrixGraph/GenericTable/GenericTable";

import styles from "./PersonalCalculator.module.scss";
import PurposeTable from "./MatrixInfo/MatrixGraph/PurposeTable/PurposeTable";

const PersonalCalculator = () => {
  const [date, setDate] = useState({});
  const [name, setName] = useState("");
  const [showMatrix, setShowMatrix] = useState(false);
  const [matrix, setMatrix] = useState({});

  useEffect(() => {
    if (Object.keys(date).length === 0) return;

    const matrixResult = personalCalculator(date);
    const tables = personalTables(matrixResult);
    const generic = genericPrograms(matrixResult);
    const period = getPeriod(matrixResult);
    setMatrix({ arcanes: matrixResult, ...tables, generic, period });
  }, [date]);

  return (
    <>
      <DateInput
        setDate={setDate}
        setName={setName}
        setShowMatrix={setShowMatrix}
      />
      {showMatrix && (
        <>
          <UserInfo date={date} name={name} />
          <div className={styles.graph_container}>
            <MatrixGraph matrix={matrix.arcanes} period={matrix.period} />
            <div className={styles.health_container}>
              <HealthCard table={matrix.tables} />
              <GenericTable table={matrix.generic} />
            </div>
          </div>
          <PurposeTable table={matrix.purpose} />
        </>
      )}
    </>
  );
};

export default PersonalCalculator;
