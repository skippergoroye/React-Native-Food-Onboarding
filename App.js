import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignupScreen from './src/screens/SignupScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen}  />
        <Stack.Screen name="Splash" component={SplashScreen}  />
        <Stack.Screen name="SignUp" component={SignupScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

