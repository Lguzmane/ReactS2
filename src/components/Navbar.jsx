import React from "react";
import '../assets/App.css';

function Navbar({ setView }) {
  return (
    <header>
      <h1>Pizzería Mamma Mía!</h1>
      <nav>
        <button onClick={() => setView("home")}>Home</button>
        <button onClick={() => setView("login")}>Login</button>
        <button onClick={() => setView("register")}>Register</button>
      </nav>
    </header>
  );
}

export default Navbar;