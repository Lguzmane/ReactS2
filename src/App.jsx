import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import './assets/App.css';

function App() {
  const [view, setView] = useState("register"); // Cambia a "register", "login", o "home"

  return (
    <div>
      <Navbar setView={setView} />
      {view === "register" && <Register />}
      {view === "login" && <Login />}
      {view === "home" && <Home />}
      <Footer />
    </div>
  );
}

export default App;


