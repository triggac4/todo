import React from "react";
import { useSelector } from "react-redux";
import AuthScreen from "./authentication";
import Homepage from "./homepage";

const ScreenToggle = () => {
  const user = useSelector((state) => state.user);
  return user.authenticated ? <Homepage /> : <AuthScreen />;
};

export default ScreenToggle;
