import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";

import React, { useState } from "react";
import Frame from "../assets/Frame.png";
import Line from "../assets/LineOngoing.png";
import imgModal from "../assets/Rectangle 51.png"

const OngoingScreen = (props) => {

  const [showModal, setshowModal] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.productCard}>
          <View>
            <Text style={styles.Head1}>Food:</Text>
          </View>
          <View style={styles.imgHead}>
            <Image source={Line} />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <View style={styles.productImg}>
              <Image source={Frame} style={{ padding:30,marginLeft:15 }} />
            </View>
            <View style={styles.PText}>
              <View style={styles.productText}>
                <Text
                  style={{ color: "#181C2E", fontSize: 18, fontWeight: "bold", }}
                >
                  Pizza Hut
                </Text>
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontWeight: "400",
                    fontSize: 15,
                  }}
                >
                  #162432
                </Text>
              </View>
              <View style={styles.productSubHead}>
                <Text
                  style={{ color: "#181C2E", fontSize: 18, fontWeight: "thin" }}
                >
                3,000 Ft
                </Text>
                <Text
                  style={{ width: 1, height:15, backgroundColor: "#CACCDA" }}>
                  </Text>
                <Text>03 Items</Text>
              </View>
            </View>
          </View>
          <View style={styles.BtnHead}>
            <TouchableOpacity onPress={() => props.navigation.navigate("DetailNav")} >
              <Text style={[styles.btn, styles.succes]}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setshowModal(true)}>
              <Text style={[styles.btn, styles.trans]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.productCard}>
          <View>
            <Text style={styles.Head1}>Drink</Text>
          </View>
          <View style={styles.imgHead}>
            <Image source={Line} />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <View style={styles.productImg}>
              <Image source={Frame} style={{ padding:30, marginLeft:20 }} />
            </View>
            <View style={styles.PText}>
              <View style={styles.productText}>
                <Text
                  style={{ color: "#181C2E", fontSize: 18, fontWeight: "bold" }}
                >
                  Mc Donald
                </Text>
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontWeight: "400",
                    fontSize: 15,
                  }}
                >
                  #242432
                </Text>
              </View>
              <View style={styles.productSubHead}>
                <Text
                  style={{ color: "#181C2E", fontSize: 18, fontWeight: "thin" }}
                >
                  3,000 Ft
                </Text>
                <Text
                  style={{ width: 1, height: 20, backgroundColor: "#CACCDA" }}
                ></Text>

                <Text>02 Items</Text>
              </View>
            </View>
          </View>
          <View style={styles.BtnHead}>
            <TouchableOpacity onPress={() => props.navigation.navigate("DetailNav")} >
              <Text style={[styles.btn, styles.succes]}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setshowModal(true)}>
              <Text style={[styles.btn, styles.trans]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.productCard}>
          <View>
            <Text style={styles.Head1}>Drink</Text>
          </View>
          <View style={styles.imgHead}>
            <Image source={Line} />
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <View style={styles.productImg}>
              <Image source={Frame} style={{ padding:30, marginLeft:25 }} />
            </View>
            <View style={styles.PText}>
              <View style={styles.productText}>
                <Text
                  style={{ color: "#181C2E", fontSize: 18, fontWeight: "bold" }}
                >
                  Starbucks
                </Text>
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontWeight: "400",
                    fontSize: 15,
                  }}
                >
                  #240112
                </Text>
              </View>

              <View style={styles.productSubHead}>
                <Text
                  style={{ color: "#181C2E", fontSize: 18, fontWeight: "thin" }}
                >
                  3,000 Ft
                </Text>
                <Text
                  style={{ width: 1, height: 20, backgroundColor: "#CACCDA" }}
                ></Text>

                <Text>03 Items</Text>
              </View>
            </View>
          </View>
          <View style={styles.BtnHead}>
            <TouchableOpacity onPress={() => props.navigation.navigate("DetailNav")} >
              <Text style={[styles.btn, styles.succes]}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setshowModal(true)}>
              <Text style={[styles.btn, styles.trans]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal transparent={true} visible={showModal} animationType="slide">
          <View style={styles.warper}>
            <View style={styles.Childwarper}>
              <Text style={styles.text}>Are You Sure To Cancel </Text>
              <Image source={imgModal} />
              <View style={styles.ModalBtn}>
                <Pressable onPress={() => setshowModal(false)} >
                  <Text style={{color:'#F37A20', fontSize:19, fontWeight:'400'}} >Yes</Text>
                </Pressable >
                <Text style={{ width: 1, height: 20, backgroundColor: "#CACCDA" }} ></Text>
                <Pressable >
                <Text onPress={()=> setshowModal(false)} style={{color:'#F37A20', fontSize:19, fontWeight:'400'}}>No</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  productImg: {
    flex:1,
    flexDirection:"row",
    justifyContent:'space-evenly'
  },
  Head1: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 30,
  },

  imgHead: {
  backgroundColor: "#EEF2F6",

  },

  product: {
    width: 100,
    marginTop: 40,
  },
  productText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 100,
  },
  productSubHead: {
    flexDirection: "row",
    justifyContent:'space-between',
    gap: 15,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#bbb",
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    width: 150,
  },
  succes: {
    backgroundColor: "#5EC401",
    fontSize: 19,
    fontWeight: "700",
  },
  trans: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "green",
    color: "#5EC401",
    fontSize: 18,
  },
  BtnHead: {
    flexDirection: "row",
    gap: 20,
  },
  btnModal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  warper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    margin: 20,
    textAlign:"center"
  },
  Childwarper: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 30,
    shadowColor: "black",
    elevation: 5,
  },
  ModalBtn:{
    flexDirection:'row',
    justifyContent:'center',
    gap:30
  }
});
export default OngoingScreen;
