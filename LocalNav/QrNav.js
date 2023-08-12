import { View, Text } from 'react-native'
import React from 'react'
import QrCodeScreen from '../screens/QrCodeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const stack  = createNativeStackNavigator();

export default function QrNav() {
  return (
    <stack.Navigator>
    <stack.Screen name="QrCodeScreen" component={QrCodeScreen} options={{headerShown: false}}/>
    </stack.Navigator>
  )
}