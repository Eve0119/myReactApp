import { useState } from "react";

type AuthUserProps = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUserProps | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Eve",
      email: "eve@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      {user ? (
        <>
          <div>Username: {user ? user?.name : "Not Logged In"}</div>
          <div>Email: {user ? user?.email : "Not Logged In"}</div>{" "}
        </>
      ) : (
        "Logged Out"
      )}
    </div>
  );
};
