import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Search from "./screens/Search";
import SaoPaulo from "./screens/SaoPaulo";
import RioDeJaneiro from "./screens/RioDeJaneiro";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Search"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="SaoPaulo" component={SaoPaulo} />
      <Stack.Screen name="RioDeJaneiro" component={RioDeJaneiro} />
    </Stack.Navigator>
  );
}
