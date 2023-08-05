import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const HomeStack = createNativeStackNavigator();

export default function HomeStackRoutes() {
  return (
    <HomeStack.Navigator></></HomeStack.Navigator>
  );
}
