import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialLoad } from "../../feature/user/thunkActions";
import AuthScreen from "./authentication";
import Homepage from "./homepage";

const ScreenToggle = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initialLoad());
  }, []);
  const user = useSelector((state) => state.user);
  return user.authenticated ? <Homepage /> : <AuthScreen />;
};

export default ScreenToggle;
