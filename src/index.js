import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';

export default function RootNavigation() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />

        <Tab.Screen name="AboutScreen" component={AboutScreen} />

        <Tab.Screen name="ContactScreen" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>



  )
}