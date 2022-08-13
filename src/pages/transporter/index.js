// import { useState } from "react";
// import Driver from "./driver";
// import Trucks from "./trucks";
export default function Transporter() {
  // const [select, setSelect] = useState("Driver");
  // console.log(select);
  return (
    <div className="h-full w-full p-12">
      <div className="flex flex-col space-y-5">
        <p>Transporter</p>
        <div className="flex items-center justify-between">
          <select>
            <option value="driver">Driver</option>
            <option value="trucks">Trucks</option>
          </select>
          {/* <div className="flex items-center space-x-5">
            <button className="border rounded-lg px-5 py-2">Add</button>
            <input
              type="text"
              className="border focus:outline-none rounded-lg py-2"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
