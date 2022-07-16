import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";

class Information extends Component {
  render() {
    console.log(this.props.posts.login);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Image
              style={styles.image2}
              source={require("../assets/images/BB-2.png")}
            />
          </View>

          <View style={styles.box6}>
            <TouchableOpacity>
            <AntDesign
                    name="pluscircleo"
                    style={styles.icons}
                    /* onPress={() => pickImage("image1")} */
                  />
            </TouchableOpacity>
          </View>

          <View style={styles.box1}>
            <View style={styles.box}>
              <Text style={styles.text}>ข้อมูลเกี่ยวกับบัญชี</Text>
            </View>

            <View style={styles.box}>
              <View style={styles.box3}>
                <Text style={styles.text2}>{"เบอร์โทร"}</Text>
                <Text style={styles.text3}>{this.props.posts.login.phone}</Text>
              </View>

              <View style={styles.box3}>
                <Text style={styles.text2}>{"สถานะการสมัคร"}</Text>
                <Text style={styles.text3}>
                  {this.props.posts.login.status_user}
                </Text>
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
  box: {
    marginTop: 20,
  },
  box1: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -44,
  },
  box2: {
    height: 40,
    width: 200,
    backgroundColor: "#bcbdbe",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    marginBottom: 10,
  },
  box3: {
    height: 50,
    width: 320,
    backgroundColor: "#e8e9e9",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    padding: -10,
    marginBottom: 10,
    marginTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 25,
  },
  box6: {
    height: 140,
    width: 140,
    backgroundColor: '#37C1FB',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 100,
    marginTop: 80,
    marginLeft: 110,
    borderWidth: 3,
    borderColor: '#fff',
    position:"absolute",
    zIndex: 2,
  },
  icons: {
    fontSize: 40,
    color: "#000",
    textAlign: "center",
    marginTop: 45,
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
  },
  text2: {
    marginLeft: 26,
    fontSize: 18,
    marginTop: 15,
    fontWeight: "bold",
  },
  text3: {
    fontSize: 18,
    marginTop: -20,
    fontWeight: "bold",
    textAlign:'right',
    marginRight: 26,
  },
  image2: {
    height: 220,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -10,
  },
  image3: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps, null)(Information);
