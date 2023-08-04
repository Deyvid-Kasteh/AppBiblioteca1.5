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
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          // headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="md-search" size={size} color={color} />;
            }
            return (
              <Ionicons name="md-search-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
    </Tab.Navigator>
  );
}
