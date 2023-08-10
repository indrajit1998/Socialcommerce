import React, { useEffect } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator()

const HomeStack = () => {
  return (
    <Tab.Navigator
      labeled={false}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name = "Landing" component={LandingScreen} />
      <Stack.Screen name = "Login" component = {LoginScreen} />
      <Stack.Screen name = "HomeStack" component={HomeStack} />
    </Stack.Navigator>
  )
}

export default MainStack;