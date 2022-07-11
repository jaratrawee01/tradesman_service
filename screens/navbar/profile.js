import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  ScrollView,
  Alert,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Button } from "react-native-web";
import { connect } from "react-redux";
import  img1 from "../../assets/images/A-6.png";
import {logoutStore} from "../logout";


class Profile_tradesman extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      urlImg: null,
      modalVisible: false,
      star: "2",
    };
  }


  setModalVisible = (visible, urlImg) => {
    this.setState({
      modalVisible: visible,
      urlImg: urlImg,
    });
  };
  
 async logout () {
    

    this.props.dispatch({
      type: 'DELETE_LOGIN',
      payload: null
    })
    this.props.dispatch({
      type: 'DELETE_ADDRESS',
      payload: null
    })
    await  this.props.navigation.popToTop();
  }

  customer() {
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
      <>
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
              <View style={styles.box3}>
                <FontAwesome5 name="user-alt" style={styles.icons3} />
                <Text style={styles.text2}
                  onPress={() => this.props.navigation.navigate("Information ")}>{"โปรไฟล์"}
                </Text>
              </View>


              <View style={styles.box3}>
                <FontAwesome5 name="address-book" style={styles.icons5} />
                <Text style={styles.text2}>{"ข้อมูลการติดต่อ"}</Text>
              </View>

              <View style={styles.box3}>
                <FontAwesome5 name="unlock-alt" style={styles.icons5} />
                <Text style={styles.text2}>{"เปลียน user/password"}</Text>
              </View>

              <View style={styles.box3}>
                <Ionicons name="chatbox-ellipses-sharp" style={styles.icons5} />
                <Text style={styles.text2}>{"แชท"}</Text>
              </View>
            </View>
            <View style={styles.box3}>
                <MaterialCommunityIcons name="logout" style={styles.icons5} />
                <Text
                  style={styles.text2}
                  onPress={() => this.logout()}>{"Logout"}
                </Text>
              </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

  tradesman() {
    const { modalVisible, urlImg} = this.state;
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
      <>
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

              <View style={styles.box3}>
                <FontAwesome name="user" style={styles.icons3} />
                <Text
                  style={styles.text2}
                  onPress={() => this.props.navigation.navigate("Information")}>{"โปรไฟล์"}
                </Text>
              </View>
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


              <View style={styles.box3}>
                <MaterialCommunityIcons name="logout" style={styles.icons5} />
                <Text
                  style={styles.text2}
                  onPress={() => this.logout()}>{"Logout"}
                </Text>
              </View>
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
      </>
    )
  }


  login2 () {
    console.log("asdasd");
  }
  login() {
    return (
      <>
          <View>
          <ImageBackground  source={img1} resizeMode="cover" style={styles.image4}>
            <View style={styles.container}>
            <TouchableOpacity  style={styles.box7} onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={styles.text4}>เข้าสุ่ระบบ</Text>
            </TouchableOpacity >
            </View>
       
               
          </ImageBackground>
          
              
          </View>
           
      </>
    )
  }
  

   render  () {
    const { modalVisible, urlImg, stausLogin, ckeckUserId } = this.state;
/*     console.log("stausLogin",this.props.posts); */
    return (
      <>
        {
           this.props.posts.login === null
            ?
             this.login()
            :
            this.props.posts.login.status_user === "ลูกค้าทั่วไป"

              ?
                this.customer()
              :
               this.tradesman()

        }
      </>

      /*   */

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
  image4: {
    width: '100%',
    height: '100%',

  },
  top: {
    marginTop: 20,
  },
  box: {
    height: 260,
    width: 360,
    backgroundColor: "#37C1FB",
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
    backgroundColor: '#37C1FB',
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
  box7: {
    height: 35,
    width: 280,
    backgroundColor: /* '#37C1FB' */'#ffff',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
    borderRadius: 30,
    fontSize: 18,
    zIndex: 2,
    top:80,
    position: "absolute",
    marginTop: "90%",
    marginLeft: 40,
    marginRight: 30,

  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 20,
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
  text4: {
    padding: 8,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 25,
    color: '#37C1FB'
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
    color: "#37C1FB",
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
    color: "#37C1FB",
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
    color: "#37C1FB",
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

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps,null)(Profile_tradesman);


