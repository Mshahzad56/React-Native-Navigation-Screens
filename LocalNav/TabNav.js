import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrderSheduled from '../screens/OrderSheduled';
import OngoingScreen from '../screens/OngoingScreen';
import HistoryScreen from '../screens/HistoryScreen';
import OrdersDetails from '../screens/OrdersDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createMaterialTopTabNavigator();
const stack = createNativeStackNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator initialRouteName="Ordersheduled" style={{ marginTop: 40 }}>
    <Tab.Screen name="Sheduled(3)" component={OrderSheduled} />
    <Tab.Screen name="Ongoing" component={OngoingScreen} />
   <Tab.Screen name="History" component={HistoryScreen} />
   </Tab.Navigator>
  )
}