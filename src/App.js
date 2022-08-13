import { useState, useEffect } from "react";
import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from './pages/login';
import Shipper from './pages/shipper';
import { AppProvider } from "./utils/AppContext";
import SideMenu from "./components/SideMenu";
import { Layout } from "antd";
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const location = useLocation()
  const [role, setRole] = useState("shipper")
  useEffect(() => {
    // if (!role) ("/login")
    console.log(location)
  }, [])
  return (
    <AppProvider value={{ role, setRole }}>


      <div className="flex min-h-screen">
        <Layout>
        <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
          >
            
          {location.pathname != "/login" && <SideMenu />}
    </Layout.Sider>
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
        </Layout>
      </div>

    </AppProvider>
  );
}

export default App;