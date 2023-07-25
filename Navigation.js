import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/Screens/SplashScreen';


const Stack = createNativeStackNavigator();

function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={
           {
            headerShown: false
           }
        }>
          <Stack.Screen name="Splash" component={SplashScreen}/>
   
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;