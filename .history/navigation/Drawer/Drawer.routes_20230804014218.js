import { createDrawerNavigator } from "@react-navigation/drawer"
import React from "react";
import BottomTabRoutes from "../BottomTab/BottomTab.routes";


const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabRoutes} />
    </Drawer.Navigator>
  );
}