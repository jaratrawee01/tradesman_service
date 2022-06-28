import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function Chat() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.footer}>
        <ScrollView>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: "https://st2.depositphotos.com/5592054/8393/v/600/depositphotos_83937052-stock-illustration-cartoon-plumber-holding-a-big.jpg",
              }}
            />
            <View style={styles.box2}>
              <Text style={styles.text1}>15.31</Text>
            </View>
            <View style={styles.box3}>
              <Text style={styles.text2}>สวัสดีครับ55555</Text>
            </View>
          </View>

          <View style={styles.chat}>
            <View style={styles.box2}>
              <Text style={styles.chat1}>15.32</Text>
            </View>
            <View style={styles.box4}>
              <Text style={styles.text2}>สวัสดีครับ5555</Text>
            </View>
          </View>

          <View>
            <Image
              style={styles.image}
              source={{
                uri: "https://st2.depositphotos.com/5592054/8393/v/600/depositphotos_83937052-stock-illustration-cartoon-plumber-holding-a-big.jpg",
              }}
            />
            <View style={styles.box2}>
              <Text style={styles.text1}>15.33</Text>
            </View>
            <View style={styles.box3}>
              <Text style={styles.text2}>สวัสดีครับ55555</Text>
            </View>
          </View>

          <View style={styles.chat}>
            <View style={styles.box2}>
              <Text style={styles.chat1}>15.34</Text>
            </View>
            <View style={styles.box4}>
              <Text style={styles.text2}>สวัสดีครับ5555</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.box1}>
          <View style={styles.boxhead}>
            <TextInput
              style={styles.text}
              placeholder="Type a message"
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity>
                <Octicons name="paper-airplane" style={styles.icons} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  boxhead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  text1: {
    fontSize: 16,
    marginLeft: 20,
  },
  text2: {
    marginLeft: 15,
    marginRight: 15,
    fontSize: 18,
    marginTop: 10,
  },
  box1: {
    height: 50,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 25,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
    marginBottom: 10,
  },
  box2: {
    marginTop: -70,
    marginLeft: 50,
    marginBottom: 48,
  },
  box3: {
    height: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    padding: -10,
    marginBottom: 25,
    marginTop: -45,
    marginLeft: 70,
    marginRight: "auto",
    borderRadius: 25,
  },
  box4: {
    height: 40,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    padding: -10,
    marginBottom: 25,
    marginTop: -45,
    marginLeft: "auto",
    marginRight: 20,
    borderRadius: 25,
  },

  icons: {
    fontSize: 30,
    marginTop: 10,
    marginRight: 20,
  },
  image: {
    marginLeft: 15,
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  chat: {
    marginTop: 50,
  },
  chat1: {
    marginLeft: "auto",
    marginRight: 30,
  },
});
