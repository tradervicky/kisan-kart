import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import Login from "../pages/Login";
import Profile from "../pages/Profile";


const RoutesPage = () => {
  return (
    
      <Routes>
        <Route path="/dashboard"  element={<DashboardPage/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/profile"  element={<Profile/>} />
      </Routes>
   
  );
};

export default RoutesPage;
