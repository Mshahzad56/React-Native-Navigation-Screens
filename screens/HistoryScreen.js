import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const HistoryScreen = () => {
  return (
    <View style={styles.ordersHistory}>
      <Image
        style={[styles.maskGroupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Group 6809.png")}
      />
      <View style={[styles.estimatedArrivalParent, styles.estimatedLayout]}>
        <Text style={styles.estimatedArrival}>Order #345</Text>
        <Image
          style={[styles.instanceChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-93.png")}
        />
        <Text style={styles.hilllJunctions}>July 26, 2023</Text>
        <Text style={[styles.hilllJunctions1, styles.hilllTypo]}>
          Delivered
        </Text>
        <Image
          style={[styles.lineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Text style={styles.text}>3 000 Ft</Text>
      </View>
      <View style={[styles.estimatedArrivalGroup, styles.estimatedLayout]}>
        <Text style={styles.estimatedArrival}>Order #345</Text>
        <Image
          style={[styles.instanceChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-93.png")}
        />
        <Text style={styles.hilllJunctions}>July 15, 2023</Text>
        <Text style={[styles.hilllJunctions3, styles.hilllTypo]}>
          Cancelled
        </Text>
        <Image
          style={[styles.lineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Text style={styles.text}>3 000 Ft</Text>
      </View>
      <View style={[styles.estimatedArrivalContainer, styles.estimatedLayout]}>
        <Text style={styles.estimatedArrival}>Order #345</Text>
        <Image
          style={[styles.instanceChild, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group-93.png")}
        />
        <Text style={styles.hilllJunctions}>Jan 26, 2023</Text>
        <Text style={[styles.hilllJunctions1, styles.hilllTypo]}>
          Delivered
        </Text>
        <Image
          style={[styles.lineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Text style={styles.text}>3 000 Ft</Text>
      </View>
      <View style={[styles.contentadd24px, styles.addIconPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  addIconPosition: {
    display: "none",
    position: "absolute",
  },
  borderPosition: {
    left: "0%",
    top: "0%",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  lineIcon3Position: {
    left: "50%",
    position: "absolute",
  },
  estimatedLayout: {
    height: 80,
    width: 343,
    left: 16,
    position: "absolute",
  },
  hilllTypo: {
    top: "32.5%",
    fontFamily: FontFamily.h300Regular,
    textTransform: "capitalize",
    left: "19.53%",
    fontSize: FontSize.h300Regular_size,
    textAlign: "left",
    position: "absolute",
  },
  ongoingClr: {
    color: Color.darkgray,
    fontFamily: FontFamily.latoRegular,
  },
  wrapperSpaceBlock: {
    marginLeft: 66,
    height: 17,
  },
  ongoingPosition: {
    left: 0,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    top: 0,
    position: "absolute",
  },
  maskGroupIcon: {
    height: "99.98%",
    width: "99.99%",
    top: "0.02%",
    right: "-0.02%",
    left: "0.03%",
    maxHeight: "100%",
    bottom: "0%",
    position: "absolute",
  },
  newReminde: {
    letterSpacing: 0,
  },
  newReminder: {
    marginTop: 319,
    left: "13.77%",
    fontSize: 19,
    color: "#007aff",
    textAlign: "left",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    top: "50%",
    display: "none",
  },
  instructions: {
    marginTop: 7.5,
    color: Color.blackNormal,
    fontSize: FontSize.h300Regular_size,
    left: 16,
    fontFamily: FontFamily.h600SemiBold,
    fontWeight: "600",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  componentsmobileappbarprima: {
    width: 375,
    height: 88,
    left: 1,
    top: 0,
    position: "absolute",
  },
  addIcon: {
    height: "3.2%",
    width: "6.28%",
    top: "89.04%",
    right: "89.37%",
    bottom: "7.76%",
    left: "4.35%",
  },
  border: {
    height: "100%",
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderColor: "#000",
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
    top: "0%",
    bottom: "0%",
  },
  capIcon: {
    height: "35.29%",
    width: "5.46%",
    top: "32.36%",
    bottom: "32.35%",
    left: "94.54%",
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  capacity: {
    height: "64.71%",
    width: "73.99%",
    top: "17.65%",
    right: "17.79%",
    bottom: "17.65%",
    left: "8.22%",
    borderRadius: 1,
    backgroundColor: Color.labelLightPrimary,
    position: "absolute",
  },
  battery: {
    height: "25.76%",
    width: "6.49%",
    top: "39.39%",
    right: "3.82%",
    bottom: "34.85%",
    left: "89.69%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -4.5,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    lineHeight: 20,
    color: Color.labelLightPrimary,
    textAlign: "center",
    left: "0%",
    fontWeight: "600",
    letterSpacing: 0,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    top: "50%",
    position: "absolute",
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "5.42%",
    bottom: "94.58%",
    right: "0%",
    position: "absolute",
    width: "100%",
    top: "0%",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 12,
    borderRadius: 100,
    width: 134,
    height: 5,
    backgroundColor: Color.labelLightPrimary,
  },
  barsHomeIndicatorIphone: {
    height: "4.19%",
    width: "35.73%",
    top: "95.81%",
    right: "31.73%",
    left: "32.53%",
    bottom: "0%",
    position: "absolute",
  },
  estimatedArrival: {
    fontSize: FontSize.h500Meduim_size,
    letterSpacing: 1,
    fontWeight: "500",
    fontFamily: FontFamily.h500Meduim,
    left: "19.53%",
    top: "0%",
    color: Color.blackNormal,
    textAlign: "left",
    position: "absolute",
  },
  instanceChild: {
    height: "55%",
    width: "12.83%",
    top: "10%",
    right: "86.01%",
    bottom: "35%",
    left: "1.17%",
    maxHeight: "100%",
    position: "absolute",
  },
  hilllJunctions: {
    top: "57.5%",
    color: Color.blackMedium,
    fontFamily: FontFamily.h300Regular,
    textTransform: "capitalize",
    left: "19.53%",
    fontSize: FontSize.h300Regular_size,
    textAlign: "left",
    position: "absolute",
  },
  hilllJunctions1: {
    color: Color.dailyplusGreen,
  },
  lineIcon: {
    height: "1.25%",
    width: "100.29%",
    top: "98.75%",
    right: "-0.15%",
    left: "-0.15%",
    maxHeight: "100%",
    bottom: "0%",
    position: "absolute",
  },
  text: {
    top: "10.25%",
    left: "75.0%",
    fontSize: FontSize.h600SemiBold_size,
    color: Color.tangoNormal,
    // textAlign: "right",
    fontFamily: FontFamily.h600SemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  estimatedArrivalParent: {
    // top: 30,
    marginTop:30
  },
  hilllJunctions3: {
    color: Color.persimmonNormal,
  },
  estimatedArrivalGroup: {
    top: 150,
  },
  estimatedArrivalContainer: {
    top: 260,
  },
  contentadd24px: {
    top: 48,
    right: 16,
    width: 24,
    height: 24,
  },
  scheduled3: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.latoRegular,
    textAlign: "center",
  },
  ongoing: {
    color: Color.darkgray,
    fontFamily: FontFamily.latoRegular,
  },
  ongoingWrapper: {
    width: 53,
  },
  history: {
    fontWeight: "700",
    fontFamily: FontFamily.latoBold,
    color: Color.dailyplusGreen,
  },
  historyWrapper: {
    width: 47,
  },
  scheduled3Parent: {
    marginLeft: -155,
    top: 80,
    flexDirection: "row",
  },
  ordersHistoryChild: {
    top: 113,
    borderColor: "#ced7df",
    borderTopWidth: 1,
    width: 376,
    height: 1,
    opacity: 0.5,
    left: 1,
  },
  lineIcon3: {
    height: "0.25%",
    marginLeft: 67.5,
    top: "13.85%",
    bottom: "85.9%",
    width: 121,
    maxHeight: "100%",
  },
  ordersHistory: {
    backgroundColor: "#ffffff",
    flex: 1,
    overflow: "hidden",
    width: "100%",
    marginTop:50,
  
  },
});

export default HistoryScreen;
