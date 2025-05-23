import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <div>{isLoggedIn ? "Logged In" : "Logged Out"}</div>
    </div>
  );
};
