// AuthNav.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import Dash_Nav from "../components/dash_nav";

const Dash_Routes = () => {
  return (
    <>
      <Dash_Nav />
      <Routes>
        {/* Redirect root to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Dash_Routes;
