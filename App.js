import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthScreen from "./src/screens/authentication";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screenName from "./src/screens";
import Homepage from "./src/screens/homepage";
const StackNav = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNav.Navigator>
          <StackNav.Screen name={screenName.home} component={Homepage} />
        </StackNav.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});
