import React from "react";
import { PacmanLoader } from "react-spinners";

export default function Loader({ isLoading }) {
  console.log("from Loader", isLoading);
  return (
    <div className="loader-container">
      <PacmanLoader color={"#cc4397"} size={150} loading={isLoading} />
    </div>
  );
}
