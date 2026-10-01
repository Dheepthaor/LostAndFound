import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import ReportLostItem from "./pages/ReportLostItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Registration Page */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* Lost Items */}
        <Route
          path="/lost-items"
          element={<LostItems />}
        />

        {/* Found Items */}
        <Route
          path="/found-items"
          element={<FoundItems />}
        />

        {/* Report Lost Item */}
        <Route
          path="/report-lost-item"
          element={<ReportLostItem />}
        />

        {/* Unknown URL → Login */}
        <Route
          path="*"
          element={<Login />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;