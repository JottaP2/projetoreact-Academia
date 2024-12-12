import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Dashboard } from "./components/login/Dashboard/Dashboard";

import "./global.css";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

//export default App
