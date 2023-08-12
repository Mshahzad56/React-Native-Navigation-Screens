import { View, Text } from 'react-native'
import React from 'react'
import OrdersDetails from '../screens/OrdersDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack = createNativeStackNavigator();
export default function DetailNav() {
  return (
    <stack.Navigator>
    <stack.Screen name="OrderDetails" component={OrdersDetails} options={{headerShown: false}}/>
    </stack.Navigator>
  )
}