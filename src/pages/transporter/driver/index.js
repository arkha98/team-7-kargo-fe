export default function Driver() {
  return (
    <div className="p-12 h-full w-full flex flex-col space-y-5">
      <div>Driver</div>
      <table className="w-full">
        <thead className=" ">
          <tr className="border ">
            <th className="">License Number</th>
            <th className="">Truck Type</th>
            <th className="">Plate Type</th>
            <th className="">Production Year</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td>License</td>
            <td>Truck</td>
            <td>Plate</td>
            <td>Production</td>
            <td>Action</td>
          </tr>
          <tr className="border">
            <td>License</td>
            <td>Truck</td>
            <td>Plate</td>
            <td>Production</td>
            <td>Action</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
