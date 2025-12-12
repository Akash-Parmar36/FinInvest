import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";


import AppProviders from "./AppProviders";
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <AppProviders>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
    </AppProviders>
   
);
