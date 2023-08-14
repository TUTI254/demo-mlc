/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Define a type for the MLC data
type MlcData = {
  mlcId: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  propertyName: string;
  propertySize: string;
  propertyType: string;
  propertyAddress: string;
};

const MlcDetailPage = () => {
  const router = useRouter();
  const { mlcId } = router.query;

  const [mlcData, setMlcData] = useState<MlcData | null>(null);

  useEffect(() => {
    // Fetch the data for the specific mlcId from local storage or an API
    const storedMlcData = localStorage.getItem("mlcData");
    if (storedMlcData) {
      const parsedMlcData = JSON.parse(storedMlcData) as MlcData; // Cast to MlcData type
      if (parsedMlcData.mlcId === mlcId) {
        setMlcData(parsedMlcData);
      }
    }
  }, [mlcId]);

  if (!mlcData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>MLC Detail</h1>
      <p>MLC ID: {mlcData.mlcId}</p>
      <p>Owner's Name: {mlcData.ownerName}</p>
      <p>Owner's Email: {mlcData.ownerEmail}</p>
      <p>Owner's Phone: {mlcData.ownerPhone}</p>
      <p>Property Name: {mlcData.propertyName}</p>
      <p>Property Size: {mlcData.propertySize}</p>
      <p>Property Type: {mlcData.propertyType}</p>
      <p>Property Address: {mlcData.propertyAddress}</p>
    </div>
  );
};

export default MlcDetailPage;
