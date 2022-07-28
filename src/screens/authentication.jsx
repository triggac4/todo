import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BorderButton from "../component/button/borderButton";
import CustomPlainButton from "../component/button/plainButton";
import PrimaryButton from "../component/button/primaryButton";
import CustomTextfield from "../component/form/textfield";
import generalStyling from "../utility/generalStyling";


const AuthScreen = (props) => {
  const style = StyleSheet.create({
    container: {
      height: "100%",
      justifyContent: "center",
      padding:generalStyling.spacing.sm
    },
    AuthContainer: {
      width: "100%",
      minHeight: 350,
      justifyContent: "space-around",
    },
    switchModeContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      
    },

    textStyle: {
      fontSize: generalStyling.fontSize.p1,
    },
  });
  const [isLogin, setIsLogin] = useState(true);

  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.AuthContainer}>
          {!isLogin && (
            <>
              <CustomTextfield placeholder={"first name"} />
              <CustomTextfield placeholder={"surname"} />
            </>
          )}

          <CustomTextfield placeholder={"username"} />
          <CustomTextfield placeholder={"password"} isPassword />
          <PrimaryButton
            title={isLogin ? "Sign In" : "Sign Up"}
            onPress={() => {}}
          />
          <View style={style.switchModeContainer}>
            <Text style={style.textStyle}>
              {isLogin ? "Don't have an account" : "Already have an account"}
            </Text>
            <BorderButton
              color={generalStyling.colorScheme.secondary}
              title={isLogin ? "Sign Up" : "Sign In"}
              onPress={() => setIsLogin((prev) => !prev)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;
