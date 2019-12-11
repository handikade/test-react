import React, { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const content = isLoggedIn ? (
    <Home onLogout={logout} />
  ) : (
    <Login onLogin={login} />
  );
  return <div className="container">{content}</div>;
}

export default App;
