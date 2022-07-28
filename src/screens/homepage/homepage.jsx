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
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
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
  const [authenticated, setAuthenticated] = useState(true);
  return authenticated ? (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%",
      }}
    >
      <BottomNav.Navigator defaultScreenOptions={{ headerShown: false }}>
        <BottomNav.Screen
          name="all"
          component={Screen}
          options={{ headerShown: false }}
        />
        <BottomNav.Screen
          name="completed"
          component={Screene}
          options={{ headerShown: false }}
        />
      </BottomNav.Navigator>
    </View>
  ) : (
    <AuthScreen />
  );
};

export default Homepage;
