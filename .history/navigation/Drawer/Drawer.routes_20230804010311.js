import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
      <Drawer.Navigator>
          <Drawer.Screen name="H"/>
    </Drawer.Navigator>
  )
}