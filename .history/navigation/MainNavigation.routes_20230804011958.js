import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./Drawer/Drawer.routes";
import Home from "../screens/Home";

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  );
}
