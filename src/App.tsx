import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PoliciesPickerPage from "./pages/PoliciesPicker";
import "./app.css";


function App() {
  return (
    <Router>
      <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="/policies-picker" className={({ isActive }) => (isActive ? "active" : "")}>
          Policies Picker
        </NavLink>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policies-picker" element={<PoliciesPickerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
