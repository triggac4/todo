import React, { useState, useRef } from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import BorderButton from "../../component/button/borderButton";
import PrimaryButton from "../../component/button/primaryButton";
import CustomTextfield from "../../component/form/textfield";
import { logIn } from "../../feature/user/userSlice";
import generalStyling from "../../utility/generalStyling";
import { signUp } from "../../feature/user/thunkActions";

const AuthScreen = (props) => {
  const style = StyleSheet.create({
    container: {
      height: "100%",
      justifyContent: "center",
      padding: generalStyling.spacing.sm,
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
  const formRef = useRef({});
  const onChange = (text, name) => {
    formRef.current = { ...formRef.current, [name]: text };
  };

  const dispatch = useDispatch();
  const onSubmit = () => {
    if (isLogin) {
      dispatch(logIn(formRef.current));
    } else {
      dispatch(signUp(formRef.current));
    }
  };

  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.AuthContainer}>
          {!isLogin && (
            <>
              <CustomTextfield
                placeholder={"first name"}
                onChange={onChange}
                name={"firstname"}
              />
              <CustomTextfield
                placeholder={"surname"}
                onChange={onChange}
                name={"surname"}
              />
            </>
          )}

          <CustomTextfield
            placeholder={"username"}
            onChange={onChange}
            name="username"
          />
          <CustomTextfield
            placeholder={"password"}
            name="password"
            isPassword
            onChange={onChange}
          />
          <PrimaryButton
            title={isLogin ? "Sign In" : "Sign Up"}
            onPress={() => onSubmit()}
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
