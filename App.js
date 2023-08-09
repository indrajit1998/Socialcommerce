import React from "react";
import Screen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingStack from "./src/navigation/LandingStack";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <LandingStack />
    </NavigationContainer>
  );
}

export default App;