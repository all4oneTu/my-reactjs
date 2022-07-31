import "./App.css";

// import FormLogin from "./components/WellcomePage/LoginPage/FormLogin";
import Register from "./components/WellcomePage/RegisterPage/Register";
import FormLogin from "./components/WellcomePage/LoginPage/FormLogin";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
