import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import BorderButton from "../../component/button/borderButton";
import PrimaryButton from "../../component/button/primaryButton";
import CustomTextfield from "../../component/form/textfield";
import generalStyling from "../../utility/generalStyling";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthScreen from "../authentication";
import TaskCard from "../../component/card/taskCard";
import TaskList from "./listTask";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask } from "../../feature/task/thunkActions";

const BottomNav = createBottomTabNavigator();
export const screenName = "homepage";
const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  textStyle: {
    fontSize: generalStyling.fontSize.p1,
  },
});
const Screen = () => {
  return (
    <SafeAreaView >
      <TaskList />
    </SafeAreaView>
  );
};
const Screene = () => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={{ color: "black" }}>Screen 3dlkcnsdjvkbkbsvkbvkbsf</Text>
        <PrimaryButton title={"Sign In"} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};
const Screenee = () => {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Text style={{ color: "black" }}>Screen 3dlkcnsdjvkbkbsvkbvkbsf</Text>
        <PrimaryButton title={"Sign In"} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};
const Homepage = (props) => {
  const dispatch=useDispatch()
  React.useEffect(() => {
    dispatch(getAllTask());
  },[])

  const user = useSelector((state) => state.user);

  return user.authenticated ? (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%",
      }}
    >
      <BottomNav.Navigator defaultScreenOptions={{ headerShown: false }}>
        <BottomNav.Screen name="all" component={Screen} />
        <BottomNav.Screen name="completed" component={Screene} />
      </BottomNav.Navigator>
    </View>
  ) : (
    <AuthScreen />
  );
};

export default Homepage;
