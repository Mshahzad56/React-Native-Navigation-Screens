import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "../DetailStyle.js";
import img from '../assets/images/bg.png'


const OrdersDetails = (props) => {
  return (
    <ScrollView>
    <View style={styles.yourOrdersOngoing}>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={styles.yourOrdersOngoingInner}>
        <View style={styles.frameParent}>
          <View style={styles.frameParentFlexBox}>
            <Image
              style={styles.iconL}
              contentFit="cover"
              source={require("../assets/-icon--l.png")}
            />
            <Text style={[styles.text, styles.nameFlexBox]}>Add Voucher</Text>
          </View>
          <View style={styles.takeAway}>
            <View style={[styles.base, styles.basePosition]} />
            <Text style={styles.text1}>Add</Text>
          </View>
        </View>
      </View>
      <View style={[styles.barsHomeIndicatorIphone, styles.tabBarIconPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Image
        style={styles.yourOrdersOngoingChild}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <View style={styles.frameGroup}>
        <View style={[styles.instructionsParent, styles.parentLayout]}>
          <Text style={styles.instructions}>Order #345</Text>
          <View style={styles.frameContainer}>
            <View style={[styles.frame, styles.frameParentFlexBox]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group.png")}
              />
            </View>
            <View style={styles.addYourPaymentMetParent}>
              <Text style={[styles.addYourPayment, styles.nameFlexBox]}>
                Name: Akash khan
              </Text>
              <View
                style={[
                  styles.addYourPaymentMetGroup,
                  styles.frameParentFlexBox,
                ]}
              >
                <Text style={[styles.addYourPayment1, styles.infoClr]}>
                  Time
                </Text>
                <Text style={[styles.estimatedArrival, styles.hourTypo]}>
                  22:45
                </Text>
                <Text style={[styles.hour, styles.hourTypo]}>
                  July 26, 2023
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.line} />
          <View style={[styles.frameView, styles.frameParentFlexBox]}>
            <View>
              <Text style={[styles.name, styles.nameTypo]}>
                Total Amount - 3000FT
              </Text>
              <View style={[styles.ellipseParent, styles.frameParentFlexBox]}>
                <Image
                  style={styles.frameChildLayout}
                  contentFit="cover"
                  source={require("../assets/ellipse-6.png")}
                />
                <Text style={[styles.price, styles.nameTypo]}>
                  Cash On Hand
                </Text>
              </View>
            </View>
            <View style={styles.cta}>  
              <View style={[styles.base1, styles.base1Position]} />
              <TouchableOpacity onPress={() => props.navigation.navigate("ExpendNav")} >
              <Text style={[styles.text2, styles.textTypo]}>Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent1, styles.parentLayout]}>
          <View style={styles.frameParent2}>
            <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
              <View style={[styles.ellipseWrapper, styles.frameParentFlexBox]}>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/ellipse-61.png")}
                />
              </View>
              <Text
                style={[styles.name1, styles.nameTypo]}
                numberOfLines={1}
              >{`Burger King - 1453Zulfikarabad `}</Text>
            </View>
            <View style={styles.frameParentFlexBox}>
              <View style={styles.info1SpaceBlock}>
                <Text style={[styles.info1, styles.infoClr]}>Pickup</Text>
                <View style={styles.frameInner} />
              </View>
              <Image
                style={[styles.ellipseIcon, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-6.png")}
              />
              <View style={styles.info1Wrapper}>
                <Text style={[styles.info11, styles.infoClr]}>13:00 PM</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameParent5}>
            <View style={[styles.frameParent3, styles.frameParentFlexBox]}>
              <Image
                style={styles.iconL}
                contentFit="cover"
                source={require("../assets/iconsocial--connectionlocationmap.png")}
              />
              <Text
                style={[styles.name2, styles.nameTypo]}
                numberOfLines={1}
              >{`You - 49th St Danyor `}</Text>
            </View>
            <View style={styles.frameParentFlexBox}>
              <View style={styles.info1SpaceBlock}>
                <Text style={[styles.info11, styles.infoClr]}>Delivery</Text>
              </View>
              <Image
                style={[styles.ellipseIcon, styles.frameChildLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-6.png")}
              />
              <View style={styles.info1Wrapper}>
                <Text style={[styles.info11, styles.infoClr]}>13:30 PM</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.frameParentFlexBox}>
              <Image
                style={styles.frameChild2}
                contentFit="cover"
                source={require("../assets/Ico.jpg")}
              />
              <View style={styles.nameGroup}>
                <Text style={[styles.name3, styles.nameTypo]}>
                  Shahzaib haider
                </Text>
                <View style={styles.frameParentFlexBox}>
                  <Text style={[styles.info11, styles.infoClr]}>Delivery</Text>
                  <Image
                    style={[styles.frameChild3, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/ellipse-62.png")}
                  />
                  <Text style={[styles.name5, styles.infoClr]}>0145425765</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttonsmobilesolidtextSy}>
          <View style={[styles.rectangle, styles.base1Position]} />
          <Text style={[styles.text3, styles.text3Position]}>
            Request driver
          </Text>
          <Image
            style={[styles.navigationcheck24pxIcon, styles.text3Position]}
            contentFit="cover"
            source={require("../assets/navigationcheck-24px.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.tabBarIcon, styles.tabBarIconPosition]}
        contentFit="cover"
        source={require("../assets/tab-bar.png")}
      />
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  nameFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
  },
  basePosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  tabBarIconPosition: {
    bottom: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.black,
    position: "absolute",
  },
  parentLayout: {
    padding: Padding.p_base,
    width: 343,
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  infoClr: {
    color: Color.neutral100,
    textAlign: "left",
    letterSpacing: 0,
  },
  hourTypo: {
    marginLeft: 14,
    letterSpacing: 1,
    fontSize: FontSize.h500Meduim_size,
    color: Color.blackNormal,
    textAlign: "left",
  },
  nameTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.dMSansMedium,
  },
  base1Position: {
    backgroundColor: Color.dailyplusGreen,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textTypo: {
    color: Color.white,
    textAlign: "center",
    fontWeight: "500",
  },
  frameChildLayout: {
    width: 4,
    height: 4,
  },
  text3Position: {
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  maskGroupIcon: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  iconL: {
    height: 24,
    width: 24,
  },
  text: {
    marginLeft: 12,
    color: Color.neutral800,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 20,
  },
  base: {
    borderRadius: 10,
    backgroundColor: Color.red50,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
  },
  text1: {
    left: 30,
    color: Color.dailyplusGreen,
    textAlign: "center",
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    top: "50%",
    marginTop: -10,
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  takeAway: {
    width: 84,
    marginLeft: 103,
    height: 24,
    overflow: "hidden",
  },
  frameParent: {
    flexDirection: "row",
  },
  yourOrdersOngoingInner: {
    top: 856,
    left: 15,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: Color.white,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: 100,
    width: 134,
    height: 5,
    left: "50%",
  },
  barsHomeIndicatorIphone: {
    height: 34,
    opacity: 0.05,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#000",
    width: 22,
    opacity: 0.35,
    borderWidth: 1,
    height: 11,
    top: 0,
    position: "absolute",
  },
  capIcon: {
    top: 4,
    opacity: 0.4,
    height: 4,
    width: 1,
    right: 0,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 1,
    width: 18,
    height: 7,
  },

  yourOrdersOngoingChild: {
    top: 63,
    left: 70,
    width: 209,
    height: 182,
    position: "absolute",
  },
  instructions: {
    fontSize: FontSize.h600SemiBold_size,
    fontFamily: FontFamily.h600SemiBold,
    color: Color.blackNormal,
    fontWeight: "600",
    textAlign: "left",
  },
  groupIcon: {
    width: 19,
    height: 24,
  },
  frame: {
    backgroundColor: "#f37a20",
    width: 48,
    paddingHorizontal: 8,
    paddingVertical: 3,
    height: 48,
    justifyContent: "center",
    borderRadius: Border.br_xs,
    overflow: "hidden",
  },
  addYourPayment: {
    fontWeight: "700",
    fontFamily: FontFamily.dMSansBold,
    lineHeight: 24,
    fontSize: FontSize.h500Meduim_size,
    color: Color.neutral800,
    textAlign: "left",
    letterSpacing: 0,
  },
  addYourPayment1: {
    lineHeight: 24,
    fontFamily: FontFamily.dMSansRegular,
    fontSize: FontSize.size_sm,
  },
  estimatedArrival: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
  },
  hour: {
    fontFamily: FontFamily.poppinsRegular,
    width: 116,
    height: 24,
  },
  addYourPaymentMetGroup: {
    justifyContent: "flex-end",
  },
  addYourPaymentMetParent: {
    marginLeft: 16,
  },
  frameContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  line: {
    backgroundColor: Color.neutral30,
    height: 1,
    alignSelf: "stretch",
    marginTop: 16,
  },
  name: {
    width: 208,
    lineHeight: 24,
    fontFamily: FontFamily.dMSansMedium,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.neutral800,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  price: {
    color: "#1eaaf1",
    marginLeft: 8,
    fontFamily: FontFamily.dMSansMedium,
    textAlign: "left",
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  ellipseParent: {
    marginTop: 2,
  },
  base1: {
    borderRadius: Border.br_xs,
    right: 0,
    backgroundColor: Color.dailyplusGreen,
    left: 0,
  },
  text2: {
    width: 87,
    fontFamily: FontFamily.dMSansMedium,
    top: "70%",
    marginTop: 10,
    fontWeight:'bold',
    color: Color.white,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  cta: {
    marginLeft: 16,
    height: 44,
    flex: 1,
  },
  frameView: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  instructionsParent: {
    height: 219,
    justifyContent: "center",
  },
  frameItem: {
    width: 12,
    height: 12,
  },
  ellipseWrapper: {
    padding: 10,
    justifyContent: "center",
    height: 24,
    width: 24,
  },
  name1: {
    marginLeft: 8,
    lineHeight: 24,
    fontFamily: FontFamily.dMSansMedium,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.neutral800,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    height: 24,
    overflow: "hidden",
    flex: 1,
  },
  frameParent3: {
    alignSelf: "stretch",
  },
  info1: {
    zIndex: 0,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.neutral100,
    lineHeight: 20,
  },
  frameInner: {
    top: -4,
    left: 11,
    borderStyle: "dashed",
    borderColor: "#c1c7d0",
    borderRadius: 0.001,
    height: 50,
    zIndex: 1,
    width: 1,
    borderWidth: 1,
    position: "absolute",
  },
  info1SpaceBlock: {
    paddingLeft: Padding.p_13xl,
    flexDirection: "row",
  },
  ellipseIcon: {
    marginLeft: 8,
  },
  info11: {
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.neutral100,
    lineHeight: 20,
  },
  info1Wrapper: {
    marginLeft: 8,
    flexDirection: "row",
  },
  frameParent2: {
    alignSelf: "stretch",
  },
  name2: {
    height: 25,
    marginLeft: 8,
    lineHeight: 24,
    fontFamily: FontFamily.dMSansMedium,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.neutral800,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    overflow: "hidden",
    flex: 1,
  },
  frameParent5: {
    marginTop: 22,
    alignSelf: "stretch",
  },
  frameChild2: {
    width: 40,
    height: 40,
    borderRadius:50
  },
  name3: {
    lineHeight: 15,
    fontFamily: FontFamily.dMSansMedium,
    textAlign: "left",
    letterSpacing: 0,
    color: Color.neutral800,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
  },
  frameChild3: {
    marginLeft: 4,
  },
  name5: {
    marginLeft: 4,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    color: Color.neutral100,
    lineHeight: 20,
  },
  nameGroup: {
    marginLeft: 12,
  },
  frameWrapper: {
    width: 182,
    justifyContent: "space-between",
    marginTop: 22,
    flexDirection: "row",
  },
  frameParent1: {
    justifyContent: "flex-end",
    marginTop: 16,
  },
  rectangle: {
    borderRadius: 8,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  text3: {
    left: 106,
    fontFamily: FontFamily.h500Meduim,
    color: Color.white,
    textAlign: "center",
    fontWeight: "500",
    fontSize: FontSize.h500Meduim_size,
  },
  navigationcheck24pxIcon: {
    right: 16,
    height: 24,
    width: 24,
  },
  buttonsmobilesolidtextSy: {
    height: 48,
    marginTop: 16,
    width: 343,
  },
  frameGroup: {
    marginLeft: -171.5,
    top: 205,
    left: "50%",
    position: "absolute",
  },
  tabBarIcon: {
    height: 88,
  },
  yourOrdersOngoing: {
    backgroundColor: Color.cardList,
    overflow: "hidden",
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default OrdersDetails;
