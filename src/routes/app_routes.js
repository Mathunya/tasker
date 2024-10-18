// AppNav.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home_Page from "../screens/home_page";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Home_Nav from "../components/home_nav";
import { Navigate } from "react-router-dom/dist";

const App_Routes = () => {
  const location = useLocation();

  // Conditionally show the Navbar on specific routes
  const showNavbar =
    location.pathname !== "/login" && location.pathname !== "/register";
  return (
    <>
      {showNavbar && <Home_Nav />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home_Page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App_Routes;
