import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Button } from "react-native-web";

class Profile_tradesman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlImg: null,
      modalVisible: false,
    };
  }

  /*   state = {
    modalVisible: false,
  }; */

  setModalVisible = (visible) => {
    console.log(visible);
    this.setState({
      modalVisible: visible,
    });
  };

  clickImg = (e) => {
   
   console.log(e); 
/*     this.setState({
      urlImg: e,
    });  */
  };

  render() {
    const { modalVisible ,urlImg} = this.state;
/* console.log(urlImg,"123"); */
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.box1}>
            <Image
              style={styles.image}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1zrmmzTYC6hHZP-XapM5K0eCU3cy8LldkTz6C-MXkUxO6iRX1GQvar3LCvtzvhzWb2Y&usqp=CAU",
              }}
            />
            <Text style={styles.text}>Jason Amada</Text>
            <Text style={styles.text1}>aaaa_dddd@gmail.com</Text>
            <FontAwesome name="star" style={styles.icons} />
            <FontAwesome name="star" style={styles.icons1} />
            <FontAwesome name="star" style={styles.icons2} />
            <FontAwesome name="star" style={styles.icons3} />
            <FontAwesome name="star" style={styles.icons4} />
          </View>

          <View style={styles.box3}>
            <FontAwesome5 name="user-alt" style={styles.icons5} />
            <Text style={styles.text2}>{"Profile"}</Text>
          </View>

          <View style={styles.box3}>
            <FontAwesome5 name="address-book" style={styles.icons5} />
            <Text style={styles.text2}>{"Contact informatiom"}</Text>
          </View>

          <View style={styles.box3}>
            <FontAwesome5 name="unlock-alt" style={styles.icons5} />
            <Text style={styles.text2}>{"Change user/password"}</Text>
          </View>

          <View style={styles.box3}>
            <Ionicons name="chatbox-ellipses-sharp" style={styles.icons5} />
            <Text
              style={styles.text2}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              {"Cnat"}
            </Text>
          </View>

          <View style={styles.box3}>
            <FontAwesome5 name="money-check-alt" style={styles.icons6} />
            <Text style={styles.text2}   onChange={e => this.clickImg("8887",e)}>{"Pay for"}</Text>
          </View>

          <View style={styles.box4}>
            <View>
              <Pressable onPress={() => this.setModalVisible(true)}>
                <View style={styles.boxhead}>
                  <Image
                    style={styles.image1}
                    source={{
                      uri: "https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg",
                    }}
                  
                  />

           {/*        <Image
                    style={styles.image1}
                    source={{
                      uri: "https://teerapong5839010009.files.wordpress.com/2017/04/011.jpg",
                    }}
                  
                  /> */}
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.setModalVisible(!modalVisible)}
            >
              <View>
                <Image
                  style={styles.image2}
                  source={{
                    uri: "https://teerapong5839010009.files.wordpress.com/2017/04/011.jpg",
                  }}
                />
              </View>
            </Pressable>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#f8fdff",
  },
  boxhead: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image1: {
    width: 134,
    height: 160,
    marginTop: 10,
    borderRadius: 10,
    marginLeft: 11,
  },
  image2: {
    width: 300,
    height: 350,
    marginLeft: 28,
    marginTop: 150,
    borderRadius: 15,
  },
  box1: {
    height: 250,
    width: 300,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 20,
    marginLeft: 28,
    marginRight: 20,
    marginTop: 25,
  },
  box3: {
    height: 60,
    width: 300,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 10,
    marginLeft: 28,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 4,
  },
  box4: {
    height: 180,
    width: 300,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 10,
    marginLeft: 28,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 4,
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
  },
  text1: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20,
    marginTop: 5,
  },
  text2: {
    marginLeft: 80,
    fontSize: 20,
    marginTop: -35,
  },
  icons: {
    marginLeft: 80,
    marginTop: 15,
    fontSize: 24,
    color: "#bcbdbe",
  },
  icons1: {
    marginLeft: 110,
    fontSize: 24,
    color: "#bcbdbe",
    marginTop: -25,
  },
  icons2: {
    marginLeft: 140,
    fontSize: 24,
    color: "#bcbdbe",
    marginTop: -24,
  },
  icons3: {
    marginLeft: 170,
    fontSize: 24,
    color: "#bcbdbe",
    marginTop: -24,
  },
  icons4: {
    marginLeft: 200,
    fontSize: 24,
    color: "#bcbdbe",
    marginTop: -24,
  },
  icons5: {
    width: 50,
    height: 48,
    marginLeft: 10,
    marginTop: 6,
    fontSize: 24,
    color: "#00c2fe",
    backgroundColor: "#dcecf4",
    borderRadius: 10,
    paddingTop: 12,
    paddingLeft: 14,
  },
  icons6: {
    width: 50,
    height: 48,
    marginLeft: 10,
    marginTop: 6,
    fontSize: 22,
    color: "#00c2fe",
    backgroundColor: "#dcecf4",
    borderRadius: 10,
    paddingTop: 12,
    paddingLeft: 12,
  },
  modalView: {
    height: 300,
    width: 300,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 15,
    marginLeft: 28,
    marginRight: 20,
    marginTop: "70%",
  },
});

export default Profile_tradesman;

{
  /* <Image
style={styles.image1}
source={{uri: 'https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg'}}
/>
 */
}
