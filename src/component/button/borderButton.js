import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import generalStyle from "../../utility/generalStyling";

const BorderButton = ({
  title,
  onPress,
  backgroundColor,
  color,
  borderColor,
  size,
  borderWidth,
}) => {
  const style = StyleSheet.create({
    buttonText: {
      fontSize: size ?? generalStyle.fontSize.p1,
      fontWeight: generalStyle.fontWeight.bold,
      color: color ?? generalStyle.colorScheme.black,
    },
    borderLessButton: {
      backgroundColor: backgroundColor ?? "transparent",
      borderWidth: borderWidth ?? 1,
      borderColor: borderColor ?? color ?? generalStyle.colorScheme.black,
      padding: generalStyle.spacing.xs,
    },
  });
  return (
    <Pressable style={style.borderLessButton} onPress={onPress}>
      <Text style={style.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default BorderButton;
