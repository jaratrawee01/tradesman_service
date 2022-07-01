import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

class Message extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.top}>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Chat")}>
              <View style={styles.box1}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg",
                  }}
                />
                <Text style={styles.text1}>
                  <Text style={styles.text2}>{"# Anna"}</Text> {"14.06"}
                </Text>
                <Text style={styles.text3}>Message</Text>
                <Text style={styles.text4}>{"2"}</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate("Chat")}>
              <View style={styles.box1}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD47w-kjxI64_mo8RmdEFl0qJz-zZAwXDn8r6wNKZsyck8f4g3he8Qib_S_aXrygr6rlY&usqp=CAU",
                  }}
                />
                <Text style={styles.text1}>
                  <Text style={styles.text2}>{"# Jenny"}</Text> {"22.36"}
                </Text>
                <Text style={styles.text3}>Message</Text>
                <Text style={styles.text4}>{"1"}</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate("Chat")}>
              <View style={styles.box1}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://img.my-best.in.th/press_component/images/60032404a06bfae09ca65f06363457f6.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max",
                  }}
                />
                <Text style={styles.text1}>
                  <Text style={styles.text2}>{"# Minton"}</Text> {"14.06"}
                </Text>
                <Text style={styles.text3}>Message</Text>
                <Text style={styles.text4}>{"3"}</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate("Chat")}>
              <View style={styles.box1}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://www.josephiteweb.org/wp-content/uploads/2017/03/sel_237-400x300.jpg",
                  }}
                />
                <Text style={styles.text1}>
                  <Text style={styles.text2}>{"# Jasmine"}</Text> {"14.06"}
                </Text>
                <Text style={styles.text3}>Message</Text>
                <Text style={styles.text4}>{"3"}</Text>
              </View>
            </TouchableWithoutFeedback>
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
  },
  top: {
    marginTop: 20,
  },
  box1: {
    height: 80,
    marginLeft: 25,
    marginRight: 25,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 4,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 5,
    borderRadius: 50,
  },
  text1: {
    marginLeft: 55,
    marginTop: -50,
    fontSize: 18,
  },
  text2: {
    marginTop: -18,
    fontSize: 20,
    fontWeight: "bold",
  },
  text3: {
    marginLeft: 60,
    fontSize: 18,
  },
  text4: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: 20,
    marginTop: -18,
    fontSize: 18,
    width: 20,
    height: 20,
    backgroundColor: "#5f6569",
    borderRadius: 20,
    color: "#fff",
  },
});
export default Message;
