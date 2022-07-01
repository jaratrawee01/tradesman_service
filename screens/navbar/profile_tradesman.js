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
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Button } from "react-native-web";

class Profile_tradesman extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlImg: null,
      modalVisible: false,
      stausLogin: true,
      ckeckUserId: "2",
      star: "2",
    };
  }

  /*   state = {
    modalVisible: false,
  }; */

  setModalVisible = (visible, urlImg) => {
    console.log(visible, urlImg);
    this.setState({
      modalVisible: visible,
      urlImg: urlImg,
    });
  };
  /* 
    clickImg = (e) => {
      console.log(e);
      /*     this.setState({
        urlImg: e,
      });  
    }; */




  render() {
    const { modalVisible, urlImg, stausLogin, ckeckUserId } = this.state;
    /* console.log(urlImg,"123"); */
    var myStar = [
      <FontAwesome name="star" style={styles.icons} />,
      <FontAwesome name="star" style={styles.icons} />,
      <FontAwesome name="star" style={styles.icons} />,
      <FontAwesome name="star" style={styles.icons} />,
      <FontAwesome name="star" style={styles.icons} />
    ];


    for (let i = 0; i < this.state.star; i++) {
      myStar.splice(i, 1,
        <FontAwesome name="star" style={styles.iconsGold} />
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.box}>
            <View style={styles.box1}>
              <View style={styles.box6}>
                <Image
                  style={styles.image3}
                  source={require('../../assets/images/A-11.png')}
                />
              </View>
              <Text style={styles.text}>Jason Amada</Text>
              <Text style={styles.text1}>aaaa_dddd@gmail.com</Text>
              <View style={styles.icons1}>
                <View style={styles.boxhead}>
                  {myStar}
                </View>
              </View>
            </View>
          </View>

          <View style={styles.top}>

            {
              (ckeckUserId === "2") ?

                <View style={styles.box3}>
                  <FontAwesome name="user" style={styles.icons3} />
                  <Text
                    style={styles.text2}
                    onPress={() => this.props.navigation.navigate("Profile_user")}>{"โปรไฟล์"}
                  </Text>
                </View>
                :
                null
            }
            <View style={styles.box3}>
              <FontAwesome5 name="file-image" style={styles.icons5} />
              <Text style={styles.text2}
               onPress={() => this.props.navigation.navigate("Workings")}>{"ผลงาน"}
              </Text>
            </View>

            <View style={styles.box3}>
              <FontAwesome5 name="address-book" style={styles.icons5} />
              <Text
                style={styles.text2}
                onPress={() => this.props.navigation.navigate("Servict_form")}>{"ข้อมูลการติดต่อ"}
              </Text>
            </View>

            <View style={styles.box3}>
              <Ionicons name="chatbox-ellipses-sharp" style={styles.icons5} />
              <Text
                style={styles.text2}
                onPress={() => this.props.navigation.navigate("Chat")}>{"แชท"}
              </Text>
            </View>

            {(ckeckUserId === "2" ?
              <>
                {(stausLogin === true ?
                  <View style={styles.box3}>
                    <Entypo name="login" style={styles.icons5} />
                    <Text
                      style={styles.text2}
                      onPress={() => this.props.navigation.navigate("Login")}>{"Login"}
                    </Text>
                  </View>
                  :
                  <View style={styles.box3}>
                    <MaterialCommunityIcons name="logout" style={styles.icons5} />
                    <Text
                      style={styles.text2}
                      onPress={() => this.props.navigation.navigate("Logout")}>{"Logout"}
                    </Text>
                  </View>
                )}

                <View style={styles.box3}>
                  <FontAwesome5 name="cc-visa" style={styles.icons4} />
                  <Text
                    style={styles.text2}
                    onChange={(e) => this.clickImg("8887", e)}>{"ชำระเงิน"}
                  </Text>
                </View>
                <View style={styles.box3}>
                  <Ionicons name="card" style={styles.icons5} />
                  <Text
                    style={styles.text2} 
                    onPress={() => this.props.navigation.navigate("Bank_account")}>{"บัญชีธนาคาร"}
                  </Text>
                </View>
              </>
              : null
            )}
            <View style={styles.box5}>
              <Text style={styles.text3}>ผลงาน</Text>
            </View>
            <View style={styles.box4}>
              <View style={styles.boxhead}>
                <Pressable onPress={() => this.setModalVisible(true, "https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg")}>
                  <View>
                    <Image
                      style={styles.image1}
                      source={{
                        uri: "https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg",
                      }}
                    />
                  </View>
                </Pressable>
                <Pressable onPress={() => this.setModalVisible(true, "https://teerapong5839010009.files.wordpress.com/2017/04/011.jpg")}>
                  <View>
                    <Image
                      style={styles.image1}
                      source={{
                        uri: "https://teerapong5839010009.files.wordpress.com/2017/04/011.jpg",
                      }}
                    />
                  </View>
                </Pressable>
              </View>
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
                    uri: `${urlImg}`,
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
  },
  boxhead: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 120,
    height: 120,
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
  image3: {
    width: 100,
    height: 100,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  top: {
    marginTop: 20,
  },
  box: {
    height: 260,
    width: 360,
    backgroundColor: "#3e83f0",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,

  },
  box1: {
    height: 250,
    width: 270,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 20,
    marginLeft: 45,
    marginRight: 45,
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
  box5: {
    height: 25,
    width: 80,
    backgroundColor: '#bcbdbe',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 10,
    marginLeft: 28,
    marginRight: 20,
    marginTop: 10,
  },
  box6: {
    height: 140,
    width: 140,
    backgroundColor: '#78a0e3',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 100,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 5,
    borderColor: '#fff',
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 5,
  },
  text1: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 20,
  },
  text2: {
    marginLeft: 55,
    fontSize: 20,
    marginTop: -35,
  },
  text3: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 2,
  },
  iconsGold: {
    marginLeft: 5,
    fontSize: 25,
    color: "#FFD700",
  },
  icons: {
    marginLeft: 5,
    fontSize: 25,
    color: "#bcbdbe",
  },
  icons1: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 5,
  },
  icons3: {
    width: 50,
    height: 48,
    marginLeft: 6,
    marginTop: 5,
    fontSize: 26,
    color: "#00c2fe",
    borderRadius: 10,
    paddingTop: 12,
    paddingLeft: 13,
  },
  icons4: {
    width: 50,
    height: 48,
    marginLeft: 6,
    marginTop: 5,
    fontSize: 20,
    color: "#00c2fe",
    borderRadius: 10,
    paddingTop: 12,
    paddingLeft: 13,
  },
  icons5: {
    width: 50,
    height: 48,
    marginLeft: 6,
    marginTop: 5,
    fontSize: 24,
    color: "#00c2fe",
    borderRadius: 10,
    paddingTop: 12,
    paddingLeft: 13,
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
