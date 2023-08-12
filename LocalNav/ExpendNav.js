import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScheduledExpanded from '../screens/OrderScheduledExpanded';


const stack = createNativeStackNavigator();

export default function ExpendNav() {
  return (
    <stack.Navigator>
    <stack.Screen name="OrderScheduledExpanded" component={OrderScheduledExpanded} options={{headerShown: false}}/>
    </stack.Navigator>
  )
}