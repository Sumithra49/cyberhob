// src/App.jsx
import React from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import LoginPage from './pages/LoginPage';
import { isAuthenticated } from "./services/authService";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={isAuthenticated() ? <DashboardPage /> : <Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
