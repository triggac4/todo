import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import BorderButton from "../../component/button/borderButton";
import PrimaryButton from "../../component/button/primaryButton";
import CustomTextfield from "../../component/form/textfield";
import generalStyling from "../../utility/generalStyling";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthScreen from "./authentication";
import TaskCard from "../../component/card/taskCard";
import TaskList from "../../component/listTask";
import { useDispatch, useSelector } from "react-redux";
import { getAllTask } from "../../feature/task/thunkActions";
import AntIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import BottomNavButton from "../../component/navigation/bottomNav";

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
      <TaskList isCompleted />
    </SafeAreaView>
  );
};

const Homepage = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllTask());
  }, []);

  const bottomNavColor = (focused) =>
    focused
      ? generalStyling.colorScheme.PrimaryLight
      : generalStyling.colorScheme.gray;

  return (
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
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
            elevation: 5,
          },
        }}
      >
        <BottomNav.Screen
          name="All Tasks"
          component={Screen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <BottomNavButton
                icon={
                  <AntIcon
                    name="home"
                    size={focused ? 35 : 25}
                    color={bottomNavColor(focused)}
                  />
                }
                label={"All tasks"}
                color={bottomNavColor(focused)}
              />
            ),
          }}
        />
        <BottomNav.Screen
          name="completed"
          component={Screene}
          options={{
            tabBarLabel: "All",
            tabBarIcon: ({ focused }) => (
              <BottomNavButton
                label={"Completed"}
                color={bottomNavColor(focused)}
                icon={
                  <MaterialIcon
                    name="done-all"
                    size={focused ? 35 : 25}
                    color={bottomNavColor(focused)}
                  />
                }
              />
            ),
          }}
        />
      </BottomNav.Navigator>
    </View>
  );
};

export default Homepage;
