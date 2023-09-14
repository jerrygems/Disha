import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home'
import About from '../screens/About/About'
import Contact from '../screens/Contact/Contact'
import Auth from '../screens/Auth/Auth'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Screen1" screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
