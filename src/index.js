import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function RootNavigation() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />

      <Tab.Screen name="AboutScreen" component={AboutScreen} />

      <Tab.Screen name="ContactScreen" component={ContactScreen} />
    </Tab.Navigator>

  )
}