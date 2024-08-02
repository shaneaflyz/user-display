import "./App.css";
import React, { useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn && <Navbar onLogout={handleLogout}/>}
        <div className="content">
          <Routes>
            <Route
              path="/login"
              element={isLoggedIn ? (<Navigate to="/home" />) : (<Login onLogin={handleLogin} />)}
            />
            <Route
              path="/home"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/"
              element={<Navigate to={"/login"} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
