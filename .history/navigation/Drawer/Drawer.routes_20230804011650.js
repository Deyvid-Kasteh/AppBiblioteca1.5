import { createDrawerNavigator } from "@react-navigation/drawer"
npx expo install react-native-gesture-handler react-native-reanimated

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabRoutes} />
    </Drawer.Navigator>
  );
}