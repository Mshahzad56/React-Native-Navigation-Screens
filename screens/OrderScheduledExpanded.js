import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View , ScrollView,SafeAreaView ,TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const OrderScheduledExpanded = (props) => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.orderScheduledExpanded}>
      <Image
        style={styles.maskGroupIcon}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <Text style={[styles.newReminder, styles.addIconPosition]}>
        <Text style={styles.newReminde}>New Reminde</Text>r
      </Text>
      <View style={[styles.addIcon, styles.addIconPosition]} />

      <Text style={[styles.instructions, styles.instructionsTypo]}>
        Order #345
      </Text>
      <Image
        style={[
          styles.navigationarrowBackward24pxIcon,
          styles.navigationarrowIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/navigationarrow-backward-24px.png")}
      />
      <View style={[styles.contentadd24px, styles.navigationarrowIconLayout]} />
      <View style={[styles.frameParent, styles.frameParentPosition1]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.actionevent24pxIcon}
            contentFit="cover"
            source={require("../assets/actionevent-24px.png")}
          />
          <Text style={[styles.hour, styles.hourSpaceBlock]}>
            July 26, 2023
          </Text>
          <Text style={[styles.estimatedArrival,]}>22:45</Text>
        </View>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-97.png")}
        />
      </View>
      <View style={[styles.deliveryLocationParent, styles.frameParentPosition]}>
        <Text style={[styles.deliveryLocation, styles.totalPosition]}>
          Payment Method
        </Text>
        <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
          <View style={styles.groupChild} />
          <Image
            style={styles.groupItem}
            contentFit="cover"
            source={require("../assets/group-87.png")}
          />
          <Text style={styles.hilllJunctions}>
            <Text style={styles.youSelected}>{`You selected`}</Text>
            <Text style={[styles.onlinePayment, styles.instructionsTypo]}>
              Online Payment
            </Text>
          </Text>
          <Image
            style={[
              styles.navigationarrowForwordIos2Icon,
              styles.navigationarrowIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/navigationarrow-forword-ios-24px.png")}
          />
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameParentPosition]}>
        <View>
          <Text style={styles.printingYourImages}>Order details</Text>
          <Image
            style={[styles.lineCopyIcon, styles.lineIconLayout]}
            contentFit="cover"
            source={require("../assets/line-copy.png")}
          />
        </View>
        <View style={styles.groupParent}>
          <View style={styles.subtotalParentLayout}>
            <Text style={[styles.subtotal, styles.totalPosition]}>
              Subtotal
            </Text>
            <Text style={[styles.bdt362, ]}>362HUF</Text>
          </View>
          <View style={[styles.deliveryChargeParent, styles.parentSpaceBlock]}>
            <Text style={[styles.subtotal, styles.totalPosition]}>
              Delivery Charge
            </Text>
            <Text style={[styles.bdt50, ]}>50HUF</Text>
          </View>
          <View style={[styles.totalParent, styles.parentSpaceBlock]}>
            <Text style={[styles.total, styles.totalPosition]}>Total</Text>
              <Text style={styles.bdt412}>412HUF</Text>
          </View>
        </View>
        <Image
          style={[styles.lineCopyIcon1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-copy.png")}
        />
      </View>
      <View style={[styles.lineCopyParent, styles.frameParentPosition]}>
        <Image
          style={styles.lineIconLayout}
          contentFit="cover"
          source={require("../assets/line-copy.png")}
        />
        <Text style={styles.printingYourImages1}>Order details</Text>
      </View>
      <View style={[styles.frameContainer, styles.frameParentPosition]}>
        <View>
          <Text style={styles.printingYourImages}>customer details</Text>
          <Image
            style={[styles.lineCopyIcon3, styles.lineIconLayout]}
            contentFit="cover"
            source={require("../assets/line-copy.png")}
          />
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.subtotalParentLayout}>
            <Text style={[styles.subtotal, styles.totalPosition]}>Name:</Text>
            <Text style={[styles.bdt3621, styles.bdtTypo]}>React Native</Text>
          </View>
          <View
            style={[styles.deliveryChargeGroup, styles.subtotalParentLayout]}
          >
            <Text style={[styles.subtotal, styles.totalPosition]}>
              Address:
            </Text>
            <Text style={[styles.bdt501, styles.bdtTypo]}> Pickup order</Text>
          </View>
          <View
            style={[styles.deliveryChargeGroup, styles.subtotalParentLayout]}
          >
            <Text style={[styles.subtotal, styles.totalPosition]}>Phone:</Text>
            <Text style={[styles.bdt502, styles.bdtTypo]}>+36305056624</Text>
          </View>
        </View>
      </View>
      <View style={styles.barsHomeIndicatorIphone}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View
        style={[
          styles.buttonsmobilesolidtextSy,
          styles.buttonsmobilesolidtextLayout,
        ]}
      >
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <TouchableOpacity>
        <Text style={[styles.text1, styles.textTypo]}>Request Driver</Text>
        </TouchableOpacity>
        <View
          style={[styles.communicationchatBubbleOutl, styles.text3Position]}
        />
      </View>
      <View
        style={[
          styles.buttonsmobilesolidtextSy1,
          styles.buttonsmobilesolidtextLayout,
        ]}>

      
        <View style={[styles.rectangle1, styles.rectanglePosition]} />
        <TouchableOpacity onPress={() => props.navigation.navigate("QrNav")}>
      <Text style={[styles.textPrt,]}>Print Ticket</Text>
       </TouchableOpacity>
        <View
          style={[styles.communicationchatBubbleOutl, styles.text3Position]}
        />
      </View>
      <LinearGradient
        style={styles.frameLineargradient}
        locations={[0, 1]}
        colors={["rgba(240, 248, 244, 0.96)", "#fff6f5"]}
      >
        <View style={styles.frameView}>
          <View style={[styles.frameParent1, styles.parentFlexBox]}>
            <View style={[styles.ellipseWrapper, styles.parentFlexBox]}>
              <Image
                style={styles.frameItem}
                contentFit="cover"
                source={require("../assets/ellipse-6.png")}
              />
            </View>
            <Text
              style={[styles.name, styles.nameTypo]}
              numberOfLines={1}
            >{`Burger King - 1453Zulfikarabad `}</Text>
          </View>
          <View style={styles.parentFlexBox}>
            <View style={styles.info1SpaceBlock}>
              <Text style={[styles.info1, styles.infoTypo]}>Pickup</Text>
              <View style={[styles.frameInner, styles.borderLayout]} />
            </View>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-61.png")}
            />
            <View style={styles.info1Wrapper}>
              <Text style={styles.infoTypo}>13:00 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameParent3}>
          <View style={[styles.frameParent1, styles.parentFlexBox]}>
            <Image
              style={[
                styles.iconsocialConnectionlocat,
                styles.navigationarrowIconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/iconsocial--connectionlocationmap.png")}
            />
            <Text
              style={[styles.name1, styles.nameTypo]}
              numberOfLines={1}
            >{`You - 49th St Danyor `}</Text>
          </View>
          <View style={styles.parentFlexBox}>
            <View style={styles.info1SpaceBlock}>
              <Text style={styles.infoTypo}>Delivery</Text>
            </View>
            <Image
              style={[styles.ellipseIcon, styles.ellipseIconLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-61.png")}
            />
            <View style={styles.info1Wrapper}>
              <Text style={styles.infoTypo}>13:30 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View style={styles.parentFlexBox}>
            <Image
              style={styles.frameChild2}
              contentFit="cover"
              source={require("../assets/ellipse-8.png")}
            />
            <View style={styles.nameParent}>
              <Text style={[styles.name2, styles.nameTypo]}>Shoaib Karim</Text>
              <View style={styles.parentFlexBox}>
                <Text style={styles.infoTypo}>Delivery</Text>
                <Image
                  style={[styles.frameChild3, styles.ellipseIconLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-62.png")}
                />
                <Text style={[styles.name4, styles.infoTypo]}>0145425765</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View
        style={[
          styles.buttonsmobilesolidtext,
          styles.buttonsmobilesolidtextLayout,
        ]}>
        <View style={[styles.rectangle2, styles.rectanglePosition]} />
        <TouchableOpacity>
        <Text style={[styles.text3, styles.text3Position]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  addIconPosition: {
    display: "none",
    position: "absolute",
  },
  rectangleParentPosition: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  borderLayout: {
    borderWidth: 1,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.labelLightPrimary,
    position: "absolute",
  },
  instructionsTypo: {
    fontFamily: FontFamily.h600SemiBold,
    color: Color.blackNormal,
    fontWeight: "600",
  },
  navigationarrowIconLayout: {
    width: 24,
    height: 24,
  },
  frameParentPosition1: {
    left: 17,
    position: "absolute",
  },
  hourSpaceBlock: {
    marginLeft: 13,
    letterSpacing: 1,
    textAlign: "left",
  },
  textTotal: {
    fontFamily: FontFamily.h500Meduim,
    fontWeight: "500",
    left:200,
    
  },
  frameParentPosition: {
    left: 16,
    position: "absolute",
  },
  totalPosition: {
    left: 0,
    top: 0,
    letterSpacing: 1,
    color: Color.blackNormal,
    textAlign: "left",
    position: "absolute",
  },
  lineIconLayout: {
    height: 1,
    width: 344,
  },
  bdtTypo: {
    textAlign: "right",
    top: 0,
    letterSpacing: 1,
    color: Color.blackNormal,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    position: "absolute",
  },
  parentSpaceBlock: {
    marginTop: 17,
    height: 23,
  },
  subtotalParentLayout: {
    height: 23,
    width: 342,
  },
  buttonsmobilesolidtextLayout: {
    height: 48,
    width: 343,
    left: 17,
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_5xs,
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
    width: "95%",
  },
  textPrt:{
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    top: 10,
    fontFamily: FontFamily.h500Meduim,
  },
  textTypo: {
    color: "white",
    marginTop: 12,
    fontFamily: FontFamily.h500Meduim,
    fontWeight: "500",
    fontSize: FontSize.h500Meduim_size,
    textAlign: "center",
    justifyContent:'center',
    top: "50%",
    position: "absolute",
  },
  text3Position: {
    marginTop: 12,
    top: "50%",
    position: "absolute",
  },
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  nameTypo: {
    color: Color.neutral800,
    fontFamily: FontFamily.dMSansMedium,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "left",
  },
  infoTypo: {
    color: Color.neutral100,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.dMSansMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: "left",
  },
  ellipseIconLayout: {
    height: 4,
    width: 4,
  },
  maskGroupIcon: {
    height: "99.99%",
    width: "99.99%",
    top: "0.01%",
    right: "-0.02%",
    left: "0.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  newReminde: {
    letterSpacing: 0,
  },
  newReminder: {
    marginTop: 145.5,
    left: "13.77%",
    fontSize: 19,
    color: "#007aff",
    textAlign: "left",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    top: "50%",
    display: "none",
  },
  addIcon: {
    height: "2.31%",
    width: "6.28%",
    top: "64.31%",
    right: "89.37%",
    bottom: "33.38%",
    left: "4.35%",
  },
  border: {
    width: "90.43%",
    right: "9.57%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#000",
    opacity: 0.35,
    height: "100%",
    borderWidth: 1,
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
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
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
  },
 
  barsStatusBarIphoneL: {
    height: "3.91%",
    bottom: "96.09%",
    top: "0%",
    left: "0%",
  },
  instructions: {
    top: 47,
    left: 59,
    fontSize: FontSize.h600SemiBold_size,
    color: Color.blackNormal,
    textAlign: "left",
    position: "absolute",
  },
  navigationarrowBackward24pxIcon: {
    top: 50,
    height: 24,
    left: 17,
    position: "absolute",
  },
  contentadd24px: {
    top: 48,
    right: 15,
    height: 24,
    display: "none",
    position: "absolute",
  },
  actionevent24pxIcon: {
    width: 28,
    height: 28,
  },
  hour: {
    fontSize: 32,
    color: "#1eaaf1",
  },
  estimatedArrival: {
    color: Color.chocolate,
    fontSize: FontSize.h500Meduim_size,
    marginLeft: 13,
    letterSpacing: 1,
    textAlign: "left",
  },
  frameChild: {
    height: 3,
    marginTop: 12,
    width: 344,
  },
  frameParent: {
    top: 118,
  },
  deliveryLocation: {
    fontFamily: FontFamily.h500Meduim,
    fontWeight: "500",
    fontSize: FontSize.h500Meduim_size,
  },
  groupChild: {
    backgroundColor: Color.oceanGreenOpac,
    borderRadius: Border.br_xs,
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    position: "absolute",
    width: "100%",
  },
  groupItem: {
    left: 18,
    width: 42,
    height: 42,
    top: 22,
    position: "absolute",
  },
  youSelected: {
    color: "rgba(55, 71, 79, 0.72)",
  },
  onlinePayment: {
    color: Color.blackNormal,
  },
  hilllJunctions: {
    left: 74,
    width: 229,
    height: 41,
    fontSize: FontSize.size_sm,
    top: 22,
    textAlign: "left",
    position: "absolute",
  },
  navigationarrowForwordIos2Icon: {
    top: 31,
    left: 297,
    height: 24,
    position: "absolute",
  },
  rectangleParent: {
    height: "67.46%",
    top: "32.54%",
    left: "0%",
    bottom: "0%",
  },
  deliveryLocationParent: {
    top: 882,
    height: 126,
    width: 342,
  },
  printingYourImages: {
    fontSize: FontSize.h500Meduim_size,
    color: Color.blackNormal,
    letterSpacing: 0,
    textAlign: "left",
  },
  lineCopyIcon: {
    marginTop: 22,
  },
  subtotal: {
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: 0,
  },
  bdt362: {
    left: 275,
  },
  bdt50: {
    left: 285,
  },
  deliveryChargeParent: {
    width: 342,
  },
  total: {
    fontFamily: FontFamily.h500Meduim,
    fontWeight: "500",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: 0,
  },
  huf: {
    left:275,
  },
  bdt412: {
    left: 275,
  },
  totalParent: {
    width: 341,
  },
  groupParent: {
    alignItems: "flex-end",
    marginTop: 13,
  },
  lineCopyIcon1: {
    marginTop: 13,
  },
  frameGroup: {
    top: 670,
  },
  printingYourImages1: {
    marginTop: 13,
    fontSize: FontSize.h500Meduim_size,
    color: Color.blackNormal,
    letterSpacing: 0,
    textAlign: "left",
  },
  lineCopyParent: {
    top: 372,
  },
  lineCopyIcon3: {
    marginTop: 21,
  },
  bdt3621: {
    left: 238,
  },
  bdt501: {
    left: 237,
  },
  deliveryChargeGroup: {
    marginTop: 7,
  },
  bdt502: {
    left: 223,
  },
  groupContainer: {
    marginTop: 6,
  },
  frameContainer: {
    top: 210,
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 12,
    borderRadius: 100,
    width: 134,
    height: 5,
    left: "50%",
  },
  barsHomeIndicatorIphone: {
    height: "3.02%",
    width: "35.73%",
    top: "96.97%",
    right: "31.73%",
    bottom: "0.01%",
    left: "32.53%",
    position: "absolute",
  },
  rectangle: {
    backgroundColor: "#F37A20",
  },
  text1: {
    left: 120,
  },
  communicationchatBubbleOutl: {
    right: 16,
    height: 24,
    width: 24,
  },
  buttonsmobilesolidtextSy: {
    top: 1035,
  },
  rectangle1: {
    backgroundColor: Color.dailyplusGreen,
  },
  text2: {
    left: 120,
    color:"#fff",
  },
  buttonsmobilesolidtextSy1: {
    top: 1100,
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
  name: {
    marginLeft: 8,
    lineHeight: 24,
    color: Color.neutral800,
    fontFamily: FontFamily.dMSansMedium,
    overflow: "hidden",
    flex: 1,
    height: 24,
  },
  frameParent1: {
    alignSelf: "stretch",
  },
  info1: {
    zIndex: 0,
  },
  frameInner: {
    top: -4,
    left: 11,
    borderStyle: "dashed",
    borderColor: "#c1c7d0",
    borderRadius: 0.001,
    width: 1,
    height: 50,
    zIndex: 1,
  },
  info1SpaceBlock: {
    paddingLeft: Padding.p_13xl,
    flexDirection: "row",
  },
  ellipseIcon: {
    marginLeft: 8,
  },
  info1Wrapper: {
    marginLeft: 8,
    flexDirection: "row",
  },
  frameView: {
    alignSelf: "stretch",
  },
  iconsocialConnectionlocat: {
    height: 24,
  },
  name1: {
    height: 25,
    marginLeft: 8,
    lineHeight: 24,
    color: Color.neutral800,
    fontFamily: FontFamily.dMSansMedium,
    overflow: "hidden",
    flex: 1,
  },
  frameParent3: {
    alignSelf: "stretch",
    marginTop: 22,
  },
  frameChild2: {
    width: 40,
    height: 40,
  },
  name2: {
    lineHeight: 15,
  },
  frameChild3: {
    marginLeft: 4,
  },
  name4: {
    marginLeft: 4,
  },
  nameParent: {
    marginLeft: 12,
  },
  frameWrapper: {
    width: 182,
    justifyContent: "space-between",
    marginTop: 22,
    flexDirection: "row",
  },
  frameLineargradient: {
    marginLeft: -171.5,
    top: 435,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    padding: 16,
    justifyContent: "flex-end",
    backgroundColor: Color.lineeeeeeeee,
    width: 343,
    left: "50%",
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  rectangle2: {
    backgroundColor: Color.oceanGreenOpac,
  },
  text3: {
    marginLeft: -28.5,
    color: Color.dailyplusGreen,
    left: "50%",
    fontFamily: FontFamily.h500Meduim,
    fontWeight: "500",
    fontSize: FontSize.h500Meduim_size,
    textAlign: "center",
  },
  buttonsmobilesolidtext: {
    top: 1167,
  },
  orderScheduledExpanded: {
    backgroundColor: Color.white,
    height: 1253,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default OrderScheduledExpanded;
