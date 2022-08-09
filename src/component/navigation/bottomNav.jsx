import React from "react";
import { View, Text, StyleSheet } from "react-native";
import generalStyling from "../../utility/generalStyling";

const BottomNavButton = ({ icon, label, color }) => {
  console.log(color);
  const style = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
  return (
    <View style={style.container}>
      {icon}
      <Text style={{ fontSize: generalStyling.fontSize.p3, color: color }}>
        {label}
      </Text>
    </View>
  );
};

export default BottomNavButton;
