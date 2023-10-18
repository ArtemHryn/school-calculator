"use client";
import { useState } from "react";
import DateInput from "./DateInput/DateInput";
import UserInfo from "./UserInfo/UserInfo";
import MatrixGraph from "./MatrixInfo/MatrixGraph/MatrixGraph";

const PersonalCalculator = () => {
  const [date, setDate] = useState({});
  const [name, setName] = useState("");
  const [showMatrix, setShowMatrix] = useState(false);
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
          <MatrixGraph />
        </>
      )}
    </>
  );
};

export default PersonalCalculator;
