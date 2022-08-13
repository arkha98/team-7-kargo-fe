import { useCallback, useState } from "react";
import Driver from "./driver";
import Trucks from "./trucks";
import { useLocation } from "react-router-dom";

export default function Transporter() {
  const [select, setSelect] = useState("driver");
  // const [location, setLocation] = useLocation();

  // const handleSelect = useCallback((e) => {
  //   setSelect(e);
  //   setLocation(`/transporter/${e}`)
  // })

  return (
    <div className="h-full w-full p-12 flex flex-col space-y-12">
      <div className="flex flex-col space-y-5">
        <p>Transporter</p>
        <div className="flex space-x-5">
          <button
            className={`border px-8 py-2 rounded-lg ${
              select === "driver" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            value="driver"
            onClick={(e) => setSelect(e.target.value)}
          >
            Driver
          </button>
          <button
            className={`border px-8 py-2 rounded-lg ${
              select === "driver" ? "bg-white" : "bg-blue-500 text-white"
            }`}
            value="trucks"
            onClick={(e) => setSelect(e.target.value)}
          >
            Trucks
          </button>
        </div>
      </div>
      {select === "driver" ? <Driver /> : <Trucks />}
    </div>
  );
}
