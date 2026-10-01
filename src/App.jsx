import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LostItems from "./pages/LostItems";
import FoundItems from "./pages/FoundItems";
import ReportLostItem from "./pages/ReportLostItem";
import ReportFoundItem from "./pages/ReportFoundItem";
import ItemDetails from "./pages/ItemDetails";
import MyReports from "./pages/MyReports";
import MyClaims from "./pages/MyClaims";
import AdminDashboard from "./pages/AdminDashboard";

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
        {/* Report Found Item */}
<Route
  path="/report-found-item"
  element={<ReportFoundItem />}
/>
{/* Item Details */}
<Route
  path="/item-details"
  element={<ItemDetails />}
/>
<Route
  path="/my-reports"
  element={<MyReports />}
/>
<Route
  path="/my-claims"
  element={<MyClaims />}
/>
<Route
  path="/admin-dashboard"
  element={<AdminDashboard />}
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