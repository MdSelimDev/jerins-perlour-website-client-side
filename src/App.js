import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admin from "./Components/Pages/Admin/Admin";
import BookService from "./Components/Pages/BookService/BookService";
import Home from "./Components/Pages/HomePages/Home/Home";
import Notfound from "./Components/Pages/Notfound/Notfound";
import Services from "./Components/Pages/Services/Services";
import Login from "./Components/Pages/UserRegister/Login/Login";
import Register from "./Components/Pages/UserRegister/Register/Register";
import AuthProvider from "./Components/Shared/context/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/Shared/context/PrivateRoute/PrivateRoute";
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
          <Route path="/services" element={<Services />} />

          <Route
            path="/services/:id"
            element={
              <PrivateRoute>
                <BookService />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route path="/404" element={<Notfound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
