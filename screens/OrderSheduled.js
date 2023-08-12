import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView,StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "./GlobleStyle";

const OrderSheduled = () => {
  return (

    <ScrollView>
    <View style={styles.orderScreeens}>
      <View style={styles.orderCardParent}>
        <LinearGradient
          style={styles.orderCard}
          locations={[0, 1]}
          colors={["rgba(240, 248, 244, 0.96)", "#fff6f5"]}
        >
          <Text style={[styles.view, styles.viewTypo]}>View</Text>
          <View style={styles.shoaibKarimParent}>
            <Text style={[styles.shoaibKarim, styles.timeTypo]}>
              Shoaib Karim
            </Text>
            <Text style={[styles.orderDbz876, styles.dec192019SpaceBlock]}>
              Order # DBZ-876
            </Text>
            <Text style={[styles.dec192019, styles.dec192019SpaceBlock]}>
              Dec 19, 2019 2:32 PM
            </Text>
            <Text style={[styles.total1400, styles.dec192019SpaceBlock]}>
              Total: $14.00
            </Text>
            <Text style={[styles.dec192019, styles.dec192019SpaceBlock]}>
              Payment: Online payment
            </Text>
          </View>

        </LinearGradient>
        <LinearGradient
          style={styles.orderCardShadowBox}
          locations={[0, 1]}
          colors={["rgba(240, 248, 244, 0.96)", "#fff6f5"]}
        >
          <Text style={[styles.beingPrepared, styles.viewTypo]}>
            Being Prepared
          </Text>
          <View style={styles.shoaibKarimParent}>
            <Text style={[styles.shoaibKarim, styles.timeTypo]}>
              Shoaib Karim
            </Text>
            <Text style={[styles.orderDbz876, styles.dec192019SpaceBlock]}>
              Order # DBZ-876
            </Text>
            <Text style={[styles.dec192019, styles.dec192019SpaceBlock]}>
              Dec 19, 2019 2:32 PM
            </Text>
            <Text style={[styles.total1400, styles.dec192019SpaceBlock]}>
              Total: $14.00
            </Text>
            <Text style={[styles.dec192019, styles.dec192019SpaceBlock]}>
              Payment: Online payment
            </Text>
          </View>
        </LinearGradient>
        <LinearGradient
          style={styles.orderCardShadowBox}
          locations={[0, 1]}
          colors={["rgba(240, 248, 244, 0.96)", "#fff6f5"]}
        >
          <Text style={[styles.beingPrepared, styles.viewTypo]}>
            Being Prepared
          </Text>
          <View style={styles.shoaibKarimParent}>
            <Text style={[styles.shoaibKarim, styles.timeTypo]}>
              Shoaib Karim
            </Text>
            <Text style={[styles.orderDbz876, styles.dec192019SpaceBlock]}>
              Order # DBZ-876
            </Text>
            <Text style={[styles.dec192019, styles.dec192019SpaceBlock]}>
              Dec 19, 2019 2:32 PM
            </Text>
            <Text style={[styles.total1400, styles.dec192019SpaceBlock]}>
              Total: $15.00
            </Text>
            <Text style={[styles.dec192019, styles.dec192019SpaceBlock]}>
              Payment: Online payment
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

 
  viewTypo: {
    color: Color.deepskyblue,
    top: 15,
    textAlign: "right",
    position: "absolute",
  },
  dec192019SpaceBlock: {
    marginTop: 8,
  },



  orderScreeensInner: {
    top: 286,
    backgroundColor: Color.frameBackground,
    height: 1,
    left: 0,
  },
  view: {
    left: 309,
  },
  shoaibKarim: {
    fontSize: FontSize.heading_size,
    textTransform: "capitalize",
    color: Color.basicGrey,
    fontWeight: "600",
    textAlign: "left",
  },
  orderDbz876: {
    textAlign: "left",
    marginTop: 8,
    color: Color.basicGrey,
  },
  dec192019: {
    color: Color.basicGrey,
    textAlign: "left",
  },
  total1400: {
    fontSize: FontSize.content_size,
    marginTop: 8,
    textAlign: "left",
    color: Color.importantContent,
  },
  shoaibKarimParent: {
    top: 10,
    left: 12,
    marginRight:10,
    position: "absolute",
  },
  orderCard: {
    height: 168,
    width: 400,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lineeeeeeeee,
    overflow: "hidden",
  },
  beingPrepared: {
    left: 242,
  },
  orderCardShadowBox: {
    marginTop: 36,
    height: 168,
    width: 400,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.lineeeeeeeee,
    overflow: "hidden",
  },
  orderCardParent: {
    marginRight: 10,
    right:50,
    top:30,
    left: 5,
    position: "absolute",
  },
  lineIcon: {
    height: "0.25%",
    width: "32.53%",
    top: "14.96%",
    right: "67.47%",
    bottom: "84.79%",
    left: "0%",
    opacity: "10%",
    zIndex: -1,
  },
  orderScreeens: {
    backgroundColor: "#fff",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default OrderSheduled;