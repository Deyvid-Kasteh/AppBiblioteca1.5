import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";


const HomeStack = createNativeStackNavigator();

export default function HomeStackRoutes() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Book" com/>
    </HomeStack.Navigator>
  );
}
