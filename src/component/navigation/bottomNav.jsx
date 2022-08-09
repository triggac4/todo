import React from "react";
import { View, Text, StyleSheet } from "react-native";
import generalStyling from "../../utility/generalStyling";

const BottomNav = ({ icon, label, focused }) => {
  const style = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const color = focused
    ? generalStyling.colorScheme.PrimaryLight
    : generalStyling.colorScheme.gray;
  return (
    <View style={style.container}>
      <View
        style={{
          width: focused ? "100%" : 200,
          height: focused ? "100%" : 200,
          color: color,
        }}
      >
        {icon}
      </View>
      <Text style={{ fontSize: generalStyling.fontSize.p2, color: color }}>
        {label}
      </Text>
    </View>
  );
};

export default BottomNav;
