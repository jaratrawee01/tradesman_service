import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import login from "./service/getService";
import { useSelector, useDispatch } from 'react-redux';
import { connect } from "react-redux";
var md5 = require("md5");

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
    };
  }


  handleOnPress(e, user) {
    this.setState({
      [user]: e,
    });
  }

  getAddress = async (e) => {
    console.log("e", e);
    const result = await login.getAddress(e);
    console.log("result", result);
    if (result !== null) {
      let data3 = {
        id: result[0].id,
        name: result[0].name,
        addressUser: result[0].address,
        subdistrict: result[0].subdistrict,
        district: result[0].district,
        province: result[0].province,
        zipcode: result[0].zipcode,
        location: JSON.parse(result[0].location),
        technician_1: result[0].technician_1,
        technician_2: result[0].technician_2,
      }
      this.props.dispatch({
        type: 'ADD_ADDRESS',
        payload: data3
      })
    }
  }


  login = async () => {
    let password = md5(this.state.password);
    const data = [this.state.username, password];
    const getLogin = await login.getLogin(data);
    if (getLogin === null) {
      await alert('Login ไม่สำเร็จ กรุณาลองใหม่');
    } else {
      //ส่วน login
      let data2 = {
        id: getLogin[0].id,
        phone: getLogin[0].phone,
        password: getLogin[0].password,
        status_user: getLogin[0].status_user,
        status_check: getLogin[0].status_check,
      }
      this.props.dispatch({
        type: 'ADD_LOGIN',
        payload: data2
      })
      await this.getAddress(getLogin[0].id);

      await this.props.navigation.popToTop();
    }
  };

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Image
              style={styles.image2}
              source={require("../assets/images/BB-2.png")}
            />
          </View>

          <View style={styles.box}>
            <View style={styles.marginTop}>
              <View style={styles.input}>
                <FontAwesome name="user" style={styles.icons3} />
                <TextInput keyboardType='numeric'
                  style={{ flex: 1, paddingLeft: 12, fontSize: 20 }}
                  placeholder="Name"
                  underlineColorAndroid="transparent"
                  onChange={(e) =>
                    this.handleOnPress(e.nativeEvent.text, "username")
                  }
                />
              </View>

              <View style={styles.input}>
                <FontAwesome name="unlock-alt" style={styles.icons3} />
                <TextInput
                  style={{ flex: 1, paddingLeft: 12, fontSize: 20 }}
                  placeholder="Password"
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  onChange={(e) =>
                    this.handleOnPress(e.nativeEvent.text, "password")
                  }
                />
              </View>
            </View>

            <View style={styles.icons}>
              <AntDesign name="checkcircleo" size={20} color="#37C1FB" />
              <Text style={styles.text1}>{"จดจำฉัน"}</Text>
              <View style={styles.button2}>
                <Text
                  style={styles.text2}
                  title="Go to Details"
                  onPress={() => this.props.navigation.navigate("Registration")}
                >
                  สมักสมาชิก
                </Text>
              </View>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                style={styles.button1}
                onPress={() => this.login()}
              >
                <Text
                  style={{
                    fontSize: 30,
                    textAlign: "center",
                    color: "white",
                    marginTop: 4,
                  }}
                >
                  Log in
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.boxIcon}>
              <View style={styles.icons1}>
                <FontAwesome name="facebook" size={35} color="#37C1FB" />
              </View>

              <View style={styles.icons2}>
                <AntDesign name="google" size={35} color="#37C1FB" />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#fff",
  },
  boxIcon: {
    height: 100,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  box: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -44,
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: "#e8e9e9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    fontSize: 23,
  },
  text: {
    color: 444,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
  text1: {
    marginLeft: 30,
    marginTop: -20,
    fontSize: 16,
    marginBottom: 2,
  },
  text2: {
    marginLeft: -15,
    marginTop: -4,
    fontSize: 16,
    marginBottom: 2,
  },
  button: {
    marginTop: 40,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
  },
  button1: {
    backgroundColor: "#37C1FB",
    height: 50,
    borderRadius: 25,
  },
  button2: {
    marginTop: -16,
    marginLeft: 180,
  },
  icons: {
    marginTop: 25,
    marginLeft: 60,
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
    marginTop: 20,
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
  icons3: {
    fontSize: 24,
    color: "#37C1FB",
    marginLeft: 10,
  },
  image2: {
    height: 220,
    width: '100%',
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -10,
  },
  scrollView: {
    marginHorizontal: 5,
    height: "100%",
  },
});

export default connect()(Login);
