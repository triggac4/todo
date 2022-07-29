import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AuthScreen from "./src/screens/authentication";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screenName from "./src/screens";
import Homepage from "./src/screens/homepage/homepage";
import { Provider } from "react-redux";
import store from "./src/feature";

const StackNav = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <NavigationContainer>
        <StackNav.Navigator screenOptions={{headerShown:false}}>
          <StackNav.Screen name={screenName.home} component={Homepage} />
        </StackNav.Navigator>
      </NavigationContainer>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
});


