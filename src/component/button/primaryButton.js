import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import generalStyle from "../../utility/generalStyling";

const PrimaryButton = ({ title, onPress, color, backgroundColor, size }) => {
  const style = StyleSheet.create({
    buttonText: {
      fontSize: size ?? generalStyle.fontSize.p1,
      fontWeight: generalStyle.fontWeight.bold,
      color: color ?? generalStyle.colorScheme.white,
    },
    borderLessButton: {
      backgroundColor: backgroundColor ?? generalStyle.colorScheme.primary,
      shadowColor: generalStyle.colorScheme.black,
      shadowOffset: {
        width: 0,
        height: 1
      },
      elevation:10,
      shadowOpacity: 1,
      shadowRadius: 2,
      alignItems: "center",
      padding: generalStyle.spacing.md,
    },
  });
  return (
    <Pressable style={style.borderLessButton} onPress={onPress}>
      <Text style={style.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default PrimaryButton;
