import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrdersDetails from '../screens/OrdersDetails';


const stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <stack.Navigator>
    <stack.Screen name="OrdersDetails" component={OrdersDetails} options={{headerShown: false}}/>
    </stack.Navigator>
  )
}