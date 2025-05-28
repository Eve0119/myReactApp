import { Login } from "./Login";
import React from "react";
import type { profileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<profileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Eve" />;
  } else {
    return <Login />;
  }
};
