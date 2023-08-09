import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";

const Stack = createNativeStackNavigator()

const LandingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name = "Landing" component={LandingScreen} />
      <Stack.Screen name = "Login" component = {LoginScreen} />
    </Stack.Navigator>
  )
}

export default LandingStack;