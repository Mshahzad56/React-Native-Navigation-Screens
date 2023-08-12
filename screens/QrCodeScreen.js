import * as React from "react";
import { StyleSheet, View, Text ,TouchableOpacity, ScrollView} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily } from "../GlobalStyles";
import Scanner from "../screens/Scanner"
const QrCodeScreen = (props) => {
  return (
    <ScrollView>
    <View style={styles.iphone141}>
      <View style={styles.iphone141Child} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.iphone141Child1, styles.rectangleViewLayout]} />
      <Text style={[styles.scanYourQr, styles.scanFlexBox]}>
        Scan your QR Code
      </Text>
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group-6811.png")}/>

        
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("ScanS")}>
      <Text style={[styles.scanQrCode, styles.scanFlexBox]}>Scan QR Code</Text>
     </TouchableOpacity>

      
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    height: 29,
    width: 305,
    left: 43,
    display: "none",
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  scanFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone141Child: {
    top: 610,
    left: 43,
    borderRadius: 20,
    backgroundColor: Color.dailyplusGreen,
    width: 284,
    height: 75,
    position: "absolute",
  },
  iphone141Item: {
    top: 276,
    left: 181,
    width: 29,
    height: 273,
    display: "none",
    backgroundColor: Color.gainsboro,
    position: "absolute",
  },
  rectangleView: {
    top: 247,
  },
  iphone141Child1: {
    top: 549,
  },
  scanYourQr: {
    marginLeft: -130.5,
    top: 71,
    left: "50%",
    fontSize: 30,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: "#fff",
  },
  groupIcon: {
    height: "44.11%",
    width: "88.79%",
    top: "20.96%",
    right: "5.61%",
    bottom: "27.94%",
    left: "5.6%",
  },
  scanQrCode: {
    top: 630,
    left: 130,
    fontSize: 26,
    fontFamily: FontFamily.robotoRegular,
    color: "#fef8f8",
  },
  vectorIcon: {
    height: "3.91%",
    width: "8.97%",
    top: "77.90%",
    right: "68.09%",
    bottom: "10.62%",
    left: "22.93%",
  },
  iphone141: {
    backgroundColor: "#333",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default QrCodeScreen;
