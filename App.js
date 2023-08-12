import React, {useState,useEffect} from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BarCodeScanner } from 'expo-barcode-scanner'


import TabNav from "./LocalNav/TabNav";
import SignInScreen from './screens/SignInScreen'
import OrdersDetails from "./screens/OrdersDetails";
import OrderScheduledExpanded from "./screens/OrderScheduledExpanded";
import QrCodeScreen from "./screens/QrCodeScreen";
import StackNav from "./LocalNav/StackNav";
import ExpendNav from "./LocalNav/ExpendNav"
import QrNav from "./LocalNav/QrNav";
import DetailNav from "./LocalNav/DetailNav";
import Scanner from "./screens/Scanner";
import ScanS from "./LocalNav/ScanS";

const stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator initialRouteName='SignInScree'>
    <stack.Screen name='SignInScreen' component={SignInScreen} options={{headerShown: false}}/> 
    <stack.Screen name='TabNav' component={TabNav} options={{headerShown: false}}/>
    <stack.Screen name='StackNav' component={StackNav} options={{headerShown: false}}/>
     <stack.Screen name='ExpendNav' component={ExpendNav} options={{headerShown: false}}/>
    <stack.Screen name='QrNav' component={QrNav} options={{headerShown: false}}/>
    <stack.Screen name="OrdersDetails" component={OrdersDetails} options={{headerShown: false}}/>
    <stack.Screen name='OrderSheduledExpended' component={OrderScheduledExpanded} options={{headerShown: false}}/>
    <stack.Screen name='QrCodeScreen' component={QrCodeScreen} options={{headerShown: false}}/>
    <stack.Screen name='Scan' component={ScanS} options={{headerShown: false}}/>
    </stack.Navigator>
  );
};

const App = () => {

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

return(
  <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
)  
};
export default App;
