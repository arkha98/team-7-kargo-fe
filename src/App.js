import { useState, useEffect } from "react";
import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from './pages/login';
import Shipper from './pages/shipper';
import { AppProvider } from "./utils/AppContext";
import SideMenu from "./components/SideMenu";
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [role, setRole] = useState("shipper")
  useEffect(() => {
    // if (!role) ("/login")

  }, [])
  return (
    <AppProvider value={{ role, setRole }}>

      <BrowserRouter>
        <div className="flex min-h-screen">
          <SideMenu />
          <div className="w-full">

            <Routes>
              <Route path="/login" element={<Login />}></Route>
              {/* YOUR CODE HERE */}

              <Route
                exact
                path="/"
                element={<Navigate to="/login" />}
              />
              <Route path="/shipper" element={<Shipper />} />

              {/* <Shipper /> */}
              {/* </Route> */}
              {/* <PrivateRoute path="/">
            </PrivateRoute> */}

            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;