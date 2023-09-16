import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home'
import About from '../screens/About/About'
import Contact from '../screens/Contact/Contact'
import Auth from '../screens/Auth/Auth'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import ContentScreen from '../screens/MainSection/ContentScreen'
import SignUp from '../public/components/Auth/SignUp';
import SignIn from '../public/components/Auth/SignIn';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import SeeAll1 from '../public/components/Parts/SeeAll1'
import CoursePage from '../public/components/CoursePage/CoursePage';

const Stackk = createStackNavigator();
const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>

      <NavigationContainer independent={true} >
        <Stackk.Navigator initialRouteName="Screen1" screenOptions={{ headerShown: false, }}>
          <Stackk.Screen name="Home" component={Home} />
          <Stackk.Screen name="SignUp" component={SignUp} />
          <Stackk.Screen name="SignIn" component={SignIn} />
          <Stackk.Screen name="ContentScreen" component={ContentScreen} />
          <Stackk.Screen name="CoursePage" component={CoursePage} />
          <Stackk.Screen name="SeeAll1" component={SeeAll1} />
          <Stackk.Screen name="About" component={About} />
          <Stackk.Screen name="Contact" component={Contact} />
          <Stackk.Screen name="Auth" component={Auth} />
          <Stackk.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stackk.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
