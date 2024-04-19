import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Search from "./screens/Search";
import WeatherDetails from "./screens/WeatherDetails";
import Map from "./screens/Map";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"rr
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="WeatherDetails" component={WeatherDetails} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}
