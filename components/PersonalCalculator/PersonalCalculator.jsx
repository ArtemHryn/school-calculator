"use client";
import { useEffect, useState } from "react";
import DateInput from "./DateInput/DateInput";
import UserInfo from "./UserInfo/UserInfo";
import MatrixGraph from "./MatrixInfo/MatrixGraph/MatrixGraph";
import { personalCalculator } from "@helper/personalCalculator";

const PersonalCalculator = () => {
  const [date, setDate] = useState({});
  const [name, setName] = useState("");
  const [showMatrix, setShowMatrix] = useState(false);
  const [matrix, setMatrix] = useState({});

  useEffect(() => {
    if (Object.keys(date).length === 0) return;

    setMatrix(personalCalculator(date));
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
          <MatrixGraph matrix={matrix} />
        </>
      )}
    </>
  );
};

export default PersonalCalculator;
