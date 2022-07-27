import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import generalStyle from "../../utility/generalStyling";

const CustomPlainButton = ({ title, onPress, color, size }) => {
  const style = StyleSheet.create({
    buttonText: {
      fontSize: size ?? generalStyle.fontSize.p1,
      fontWeight:  generalStyle.fontWeight.bold,
      color: color ??  generalStyle.colorScheme.black,
    },
    button: {
      backgroundColor: "transparent",
      shadowColor: "transparent",
    },
  });
  return (
    <Pressable style={
      ({pressed})=>[
        {opacity:pressed? 0.5:1.0},
      style.button]} onPress={onPress}>
      <Text style={style.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default CustomPlainButton;
