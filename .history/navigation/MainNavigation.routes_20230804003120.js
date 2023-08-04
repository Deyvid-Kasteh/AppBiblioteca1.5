import { View, Text } from 'react-native'
import React from 'react'

const MainNavigation = () => {
  return (
    <View>
      <Text>MainNavigation</Text>
    </View>
  )
}

export default MainNavigation

export default function NavigationMain() {
  return (
    <NavigationContainer>
      <Drawer_tab_Group />
    </NavigationContainer>
  );
}
