"use client";

import { useEffect, useState } from "react";
import DataInput from "./DataInput/DataInput";
import UserInfo from "./UserInfo/UserInfo";
import MatrixInfo from "./MatrixInfo/MatrixInfo";
import { calcCompatibility, getPurpose } from "@helper/compatibilityCalculator";
import MatrixTables from "./MatrixInfo/MatrixTables/MatrixTables";

import styles from './CompatibilityCalculator.module.scss'

const CompatibilityCalculator = () => {
  const [date, setDate] = useState({});
  const [showMatrix, setShowMatrix] = useState(false);
  const [matrix, setMatrix] = useState({});

  useEffect(() => {
    if (Object.keys(date).length === 0) return;
    const arcanes = calcCompatibility(date);
    const purpose = getPurpose(arcanes);
    setMatrix({ arcanes, purpose });
  }, [date]);
  return (
    <>
      <DataInput setDate={setDate} setShowMatrix={setShowMatrix} />
      {showMatrix && (
        <>
          <UserInfo partners={date} />
          <div className={styles.matrix_box}>
            <MatrixInfo matrix={matrix.arcanes} />
            <MatrixTables purpose={matrix.purpose} />
          </div>
        </>
      )}
    </>
  );
};

export default CompatibilityCalculator;
