"use client";

import { useEffect, useState } from "react";
import DataInput from "./DataInput/DataInput";
import UserInfo from "./UserInfo/UserInfo";

const CompatibilityCalculator = () => {
  const [date, setDate] = useState({});
  const [showMatrix, setShowMatrix] = useState(false);
  const [matrix, setMatrix] = useState({});

  useEffect(() => {
    if (Object.keys(date).length === 0) return;
  }, [date]);
  return (
    <>
      <DataInput setDate={setDate} setShowMatrix={setShowMatrix} />
      {showMatrix && (
        <>
          <UserInfo partners={date} />
        </>
      )}
    </>
  );
};

export default CompatibilityCalculator;
