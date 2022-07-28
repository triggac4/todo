import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import BorderButton from "../component/button/borderButton";
import PrimaryButton from "../component/button/primaryButton";
import CustomTextfield from "../component/form/textfield";
import generalStyling from "../utility/generalStyling";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthScreen from "./authentication";

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
    <SafeAreaView>
      <View style={style.container}>
        <PrimaryButton title={"Sign In"} onPress={() => {}} />
      </View>
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
  const [authenticated, setAuthenticated] = useState(false);
  return authenticated ? (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100%",
      }}
    >
      <BottomNav.Navigator>
        <BottomNav.Screen name="all" component={Screen} />
        <BottomNav.Screen name="completed" component={Screene} />
      </BottomNav.Navigator>
    </View>
  ) : (
    <AuthScreen />
  );
};

export default Homepage;
