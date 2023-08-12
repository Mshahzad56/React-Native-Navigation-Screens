import { View, Text, Image,StyleSheet, TextInput, TouchableOpacity,
onPress,title, StatusBar, ScrollView,} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import img from '../assets/images/logo.png'
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AsyncStorage} from 'react-native';




export default function SignInScreen(props) {

  const handleSignInPress=()=>{
    if (text.trim() === '' || password.trim() === '') {
      alert('Please enter Username and password.');
    } else {
      props.navigation.navigate("TabNav");
    }
  }
  

  const [text, setText] = useState('');
  const [password, setPassword]= useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

 const handleTextChange = (inputText) => {
    setText(inputText);
  };

      const[hide, setHide]=useState(false);
      const [barStyle, setBarStyle]=useState('default')
 

  return (
    <SafeAreaView>
      <ScrollView>
      <StatusBar
        backgroundColor='black'
        barStyle={barStyle}
        hidden={hide}
        />
      <View style={Styles.logo}>
      <Image  style={{height:200,width:200}} source={img}/>
      </View>

      <View>
        <Text  style={Styles.h1}>Welcome Back</Text>
      </View>
      <View>
        <Text style={Styles.h3} >Please enter your username and password</Text>
      </View>

    <View style={Styles.container}>
      <TextInput
        style={{ flex: 1 }}
        onChangeText={(inputText) => setText(inputText)}
        value={text}
        placeholder="Enter Username"
      />
      {text ? (
        <Icon name="check" size={20} color="#5EC401"/>
      ) : null}
    </View>


      <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Enter User Password"
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={Styles.eyeButton}
        onPress={togglePasswordVisibility}
      >
        <Ionicons
          name={isPasswordVisible ? 'eye-off' : 'eye'}
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </View>

      <TouchableOpacity style={Styles.button} onPress={handleSignInPress}>
       <Text style={Styles.buttonText}>{title} Sign In</Text>
     </TouchableOpacity>
     </ScrollView>
    </SafeAreaView>
  )
}

const Styles=StyleSheet.create({


  pressableBtn:{
  backgroundColor: 'skyblue',
  color:'#fff',
  padding:10,
  margin: 10,
  borderRadius: 10,
  fontSize:25,
  textAlign: 'center',
  shadowColor: '#000',
  elevation:5
  },

  logo:{
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover',
    marginTop:50
  },

  h1:{
    fontSize:30,
    marginTop: 50,
    textAlign:'center',
    fontWeight:'bold'
  },
  h3:{
    fontSize:15,
    lineHeight:24,
    textAlign:'center',
    fontWeight:"normal",
    color: "#7A869A",
  },

    button: {
      marginTop:30,
      backgroundColor: '#5EC401',
      borderRadius: 20,
      padding: 12,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 50,
      marginLeft:20,
      marginRight:10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    container: {
    backgroundColor:'#e3e3e3',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginLeft:20,
    marginRight:10,
    marginTop:40,
    fontSize: 15,
    height: 50,
  },
  input: {
    flex: 1,
    height: 40,
  },
  eyeButton: {
    padding: 8,
  },

})

