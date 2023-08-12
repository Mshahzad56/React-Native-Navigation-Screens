import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scanner from "../screens/Scanner"


const stack = createNativeStackNavigator();

export default function ScanS() {
  return (
    // <stack.Navigator>
    // <stack.Screen name="scaner" component={Scanner} options={{headerShown: false}}/>
    // </stack.Navigator>
    <View>
      <Text>hello</Text>
    </View>
  )
}