import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Pressable,
  View,
  Modal,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import createUser from "./service/getService";

var md5 = require("md5");

const Registration = ({ navigation: { popToTop } }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState("first");
  const [statusUser, setStatusUser] = useState("ลูกค้าทั่วไป");
  const [statusCkeck, setStatusCkeck] = useState("true");
  const [modalVisible, setModalVisible] = useState("false");

  const serve = async () => {
    const data = [name, email, phone, md5(password), statusUser, statusCkeck];
    const result = await createUser.createUser(data);

    if (result === "success") {
      popToTop();
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.text}>Registration</Text>
        </View>
        <View style={styles.marginTop}>
          <View style={styles.input}>
            <FontAwesome name="user" size={24} color="#00c2fe" />
            <TextInput
              style={{ flex: 1, paddingLeft: 12, fontSize: 18 }}
              placeholder="Name"
              name="name"
              onChange={(e) => {
                setName(e.nativeEvent.text);
              }}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.input}>
            <MaterialIcons name="mail" size={24} color="#00c2fe" />
            <TextInput
              style={{ flex: 1, paddingLeft: 12, fontSize: 18 }}
              onChange={(e) => {
                setEmail(e.nativeEvent.text);
              }}
              placeholder="Email"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.input}>
            <FontAwesome name="phone-square" size={24} color="#00c2fe" />
            <TextInput
              style={{ flex: 1, paddingLeft: 12, fontSize: 18 }}
              onChange={(e) => {
                setPhone(e.nativeEvent.text);
              }}
              placeholder="PhoneNumber"
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.input}>
            <FontAwesome name="unlock-alt" size={24} color="#00c2fe" />
            <TextInput
              secureTextEntry={true}
              style={{ flex: 1, paddingLeft: 12, fontSize: 18 }}
              onChange={(e) => {
                setPassword(e.nativeEvent.text);
              }}
              placeholder="Password"
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View style={styles.boxhead}>
          {statusUser === "ลูกค้าทั่วไป" ? (
            <AntDesign name="checkcircleo" style={styles.icons3}  /* onPress={(e) => {setStatusUser("ช่าง")}} *//>
          ) : (
            <Entypo name="circle" style={styles.icons3}  onPress={(e) => {setStatusUser("ลูกค้าทั่วไป")}} />
          )}
          <Text style={styles.text2}>ลูกค้าทั่วไป</Text>

          {statusUser === "ช่าง" ? (
            <AntDesign name="checkcircleo" style={styles.icons4} />
          ) : (
            <Entypo name="circle" style={styles.icons4}  onPress={(e) => {setStatusUser("ช่าง")}} />
          )}
          <Text style={styles.text3}>สำหรับช่าง</Text>
        </View>

        <View>
          <View style={styles.box}></View>
          {statusCkeck === "true" ? (
            <Text style={styles.text4}>statusCkeck</Text>
          ) : (
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
          > 
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          )} 
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.button1} onPress={() => serve()}>
            <Text
              style={{
                fontSize: 32,
                textAlign: "center",
                color: "white",
                marginTop: 4,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  boxIcon: {
    height: 100,
  },
  boxhead: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#01C1FF",
    backgroundColor: "#444",
    marginLeft: 55,
    marginTop: 20,
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    paddingLeft: 15,
    marginTop: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#00c2fe",
    fontSize: 23,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
    color: "#00c2fe",
  },
  button: {
    marginTop: 40,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 70,
  },
  button1: {
    backgroundColor: "#01C1FF",
    height: 50,
    borderRadius: 25,
  },
  text1: {
    marginTop: -18,
    fontSize: 16,
  },
  text2: {
    marginLeft: 10,
    marginTop: 18,
    fontSize: 18,
  },
  text3: {
    marginLeft: 2,
    marginTop: 18,
    fontSize: 18,
  },
  text4: {
    marginLeft: 85,
    marginTop: -21,
    fontSize: 18,
    marginBottom: 2,
  },
  marginTop: {
    marginTop: 20,
  },
  icons1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: "#fff",
    marginTop: -30,
    marginLeft: 110,
    alignItems: "center",
    padding: 10,
  },
  icons2: {
    width: 50,
    height: 50,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: "#fff",
    marginLeft: 210,
    alignItems: "center",
    padding: 8,
    marginTop: -50,
  },
  scrollView: {
    marginHorizontal: 5,
    height: "100%",
  },
  icons3: {
    marginTop: 20,
    marginLeft: 55,
    fontSize: 20,
    color: "#01C1FF",
  },
  icons4: {
    marginTop: 20,
    marginLeft: 40,
    fontSize: 20,
    color: "#01C1FF",
    marginRight: 10,
  },



  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",

  },
  button2: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }


});

export default Registration;
