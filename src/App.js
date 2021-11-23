import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/HomePages/Home/Home";
import Login from "./Components/Pages/UserRegister/Login/Login";
import Register from "./Components/Pages/UserRegister/Register/Register";
import AuthProvider from "./Components/Shared/context/AuthProvider/AuthProvider";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
