import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import BorderButton from "../../component/button/borderButton";
import PrimaryButton from "../../component/button/primaryButton";
import CustomTextfield from "../../component/form/textfield";
import generalStyling from "../../utility/generalStyling";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthScreen from "../authentication";
import TaskCard from "../../component/card/taskCard";
import TaskList from "../../component/listTask";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask } from "../../feature/task/thunkActions";
import Icon from "react-native-vector-icons/AntDesign";

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
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllTask());
  }, []);

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
      <BottomNav.Navigator
        activeColor={generalStyling.colorScheme.PrimaryLight}
        defaultScreenOptions={{
          headerShown: false,
          tabBarStyle: ({ focused }) => ({
            color: focused
              ? generalStyling.colorScheme.PrimaryLight
              : generalStyling.colorScheme.gray,
            backgroundColor: focused
              ? generalStyling.colorScheme.PrimaryLight
              : generalStyling.colorScheme.gray,
          }),
        }}
      >
        <BottomNav.Screen
          name="all"
          component={Screen}
          options={{
            tabBarLabel: "All",
            tabBarIcon: ({ color, focused }) => (
              <Icon
                name="home"
                size={30}
                color={
                  focused
                    ? generalStyling.colorScheme.PrimaryLight
                    : generalStyling.colorScheme.gray
                }
              />
            ),
          }}
        />
        <BottomNav.Screen
          name="completed"
          component={Screene}
          options={{
            tabBarLabel: "All",
            tabBarIcon: ({ color, focused }) => (
              <Icon name="home" size={30} color={color} />
            ),
          }}
        />
      </BottomNav.Navigator>
    </View>
  ) : (
    <AuthScreen />
  );
};

export default Homepage;
