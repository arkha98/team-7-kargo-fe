import { useCallback, useContext, useState, useEffect } from "react";
import { Button, Select, Space, Typography } from 'antd';
import './style.scss';
import AppContext from "../../utils/AppContext";
import { useNavigate,Navigate } from "react-router-dom";
import KargoLogo from '../../assets/logo-dark.png'

const options = [
  { label: 'Transporter', value: 'transporter' },
  { label: 'Shipper', value: 'shipper' },
]

// This is mostly cover what ticket #1 is all about
function App() {
  const navigate = useNavigate()
  const { role, setRole } = useContext(AppContext)
  const [select, setSelected] = useState("")
  useEffect(() => {
  if (role === "shipper") return <Navigate to="/shipper" replace/>
  // if (role === "transport") return navigate("/transport")
  }, [navigate,role])
  const handleLogin = useCallback(() => {
    if (!select) return;
    setRole(select)
    // if (select === "shipper") return navigate("/shipper")
    if (select === "shipper") return navigate("/shipper")
  })
  return (
    <div className="login">
      <div className="login-header w-[200px]">
        <div className="login-header-wrapper w-full flex flex-col">
          <Space direction="vertical">
            <img src={KargoLogo} alt="logo" width={200} className="mx-auto" />
            <div className="text-lg text-black mt-4">
              <span className="mr-4">Log in as</span> <Select
                className="w-[100px]"
                onChange={(e) => setSelected(e)}
                placeholder="Pick Role" options={options} />
            </div>
            <Button className="mt-8" block onClick={handleLogin} type="primary" disabled={!select}>Login</Button>

          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
