import { useState, useEffect } from "react";
import "./App.scss";
import "antd/dist/antd.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/login";
import Shipper from "./pages/shipper";
import { AppProvider } from "./utils/AppContext";
import SideMenu from "./components/SideMenu";
import { Layout } from "antd";
import { ProtectedShipperRoute, PublicRoute } from "./utils/ProtectedRoute";

function App() {
  const location = useLocation();
  const [role, setRole] = useState(sessionStorage.getItem("role")||"");

  useEffect(() => {
    sessionStorage.setItem("role",role)
  }, [role])
  return (
    <AppProvider value={{ role, setRole }}>
      <div className="flex min-h-screen">
        <Layout>
          {location.pathname != "/login" && (
            <Layout.Sider breakpoint="lg">
              <SideMenu />
            </Layout.Sider>
          )}
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Navigate to="/login" replace/>} />
              {/* {!role && <Route path="/login" element={}></Route>} */}

              <Route
                path="login"
                element={
                  <PublicRoute>

                    <Login />
                  </PublicRoute>}
              />
              <Route
                path="shipper"
                element={
                  <ProtectedShipperRoute>
                    <Shipper />
                  </ProtectedShipperRoute>
                }
              />

              {/* <Route path="/shipper" element={<Shipper />} /> */}
            </Routes>
          </div>
        </Layout>
      </div>
    </AppProvider>
  );
}

export default App;
