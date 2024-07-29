import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerProfile from "./pages/BuyerProfile";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./components/AuthProvider";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/buyer/profile" element={<BuyerProfile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
