import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Search from "../../screens/Search";
import Favorites from "../../screens/Favorites";
import ShoppingCart from "../../screens/ShoppingCart";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";



const Tab = createBottomTabNavigator();

export default function BottomTabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
    </Tab.Navigator>
  );
}
