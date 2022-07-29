import React from "react";
import { View, Text, StyleSheet } from "react-native";
import generalStyling from "../../utility/generalStyling";
import BorderButton from "../button/borderButton";
const TaskCard = ({ data }) => {
  const style = StyleSheet.create({
    outerContainer: {
      overflow: "hidden",
      flexDirection: "row",
      borderRadius: generalStyling.spacing.sm,
      shadowColor: generalStyling.colorScheme.gray,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      minHeight:100,
      shadowOpacity: 0.5,
      shadowRadius: 2.25,
      elevation: generalStyling.spacing.sm,
      margin: generalStyling.spacing.sm,
      justifyContent: "space-between",
    },
    innerContainer: {
      flexDirection: "row",
      padding: generalStyling.spacing.sm,
      flex: 1,
      alignItems: "center",
      backgroundColor: generalStyling.colorScheme.white,
      justifyContent: "space-between",
    },
  });
  return (
    <View style={style.outerContainer}>
      <View
        style={{
          height: "100%",
          width: generalStyling.spacing.sm,
          backgroundColor: data?.completed
            ? generalStyling.colorScheme.green
            : generalStyling.colorScheme.maroonRed,
        }}
      ></View>
      <View style={style.innerContainer}>
        <Text style={{
            fontSize: generalStyling.fontSize.p1,
            fontWeight:generalStyling.fontWeight.semiBold,
            width: "70%",
        }}>{data?.title}</Text>
        <BorderButton
          title={"Delete"}
          onPress={() => console.log("delete")}
          color={generalStyling.colorScheme.red}
        />
      </View>
    </View>
  );
};

export default TaskCard;
