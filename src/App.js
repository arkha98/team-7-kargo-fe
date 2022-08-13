import "./App.scss";
import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Transporter from "./pages/transporter";
import Driver from './pages/transporter/driver';
import Trucks from './pages/transporter/trucks';
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="app flex w-full h-full">
        {/* <Sidebar /> */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          {/* YOUR CODE HERE */}
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route path="/transporter" element={<Transporter />} />
          <Route path="/transporter/driver" element={<Driver />} />
          <Route path="/transporter/trucks" element={<Trucks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
