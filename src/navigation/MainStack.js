import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library if you prefer

import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";
import SearchScreen from "../screens/SearchScreen";
import ShopScreen from "../screens/ShopScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PostScreen from "../screens/PostScreen";
import HomeScreen from '../screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CustomIcon = ({ name, color,size }) => (
  <Icon name={name} color={color} size={24} />
);

const HomeStack = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={{
        backgroundColor: "black"
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="search" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="plus" color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="shopping-cart" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <CustomIcon name="user" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  )
}

export default MainStack;
