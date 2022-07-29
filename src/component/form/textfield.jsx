import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const CustomTextfield = ({ placeholder, name, onChange, isPassword }) => {
  const [borderColor, setBorderColor] = useState("#ccc");

  const style = StyleSheet.create({
    textfield: {
      borderBottomWidth: 1,
      borderColor: borderColor,
      width: "100%",
      paddingVertical: 2,
      paddingHorizontal: 10,
    },
  });

  return (
    <TextInput
      style={style.textfield}
      placeholder={placeholder}
      secureTextEntry={isPassword}
      onChangeText={(e) => onChange(e, name)}
      name={name ?? placeholder}
      onFocus={() => setBorderColor("#000")}
      onBlur={() => setBorderColor("#ccc")}
    />
  );
};

export default CustomTextfield;
