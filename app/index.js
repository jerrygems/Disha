import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../routes/components/header/header'; // Adjust the import path accordingly




const Stack = createStackNavigator();

function App() {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Header} />
        {/* Define more screens and navigation here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
