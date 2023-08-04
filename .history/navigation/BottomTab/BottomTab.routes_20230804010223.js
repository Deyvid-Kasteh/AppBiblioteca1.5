import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function BottomTabRoutes() {
  return <Tab.Navigator><Tab.Screen name="Home" component={Home}/></Tab.Navigator>;
}
