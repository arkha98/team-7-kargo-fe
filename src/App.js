import './App.scss';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login/>}></Route>
          {/* YOUR CODE HERE */}

          <Route
            exact
            path="/"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;