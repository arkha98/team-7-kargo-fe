import { useCallback } from "react";
import { Button, Select, Space, Typography } from 'antd';
import './style.scss';

const options = [
  { label: 'Transporter', value: 'transporter' },
  { label: 'Shipper', value: 'shipper' },
]

// This is mostly cover what ticket #1 is all about
function App() {
  const handleLogin = useCallback(() => {
    {/* YOUR CODE HERE */}
  })
  return (
    <div className="login">
      <div className="login-header">
        <div className="login-header-wrapper">
          <Space direction="vertical">
            <Typography.Title code>Kargo TMS</Typography.Title>
            <div className="bg-red-200">
              Log in as <Select placeholder="User" options={options} />
            </div>
            <div>
              <Button onClick={handleLogin}type="primary">Login</Button>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
