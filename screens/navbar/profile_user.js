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

class Profile_user extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlImg: null,
      modalVisible: false,
      stausLogin: true,
      ckeckUserId: "4",
      star: "4 ",
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
            <FontAwesome5 name="unlock-alt"  style={styles.icons5} />
              <Text style={styles.text2}>{"เปลียน user/password"}</Text>
            </View>

            <View style={styles.box3}>
              <Ionicons name="chatbox-ellipses-sharp" style={styles.icons5} />
              <Text style={styles.text2}>{"แชท"}</Text>
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
    paddingTop: 10,
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

export default Profile_user;

{
  /* <Image
style={styles.image1}
source={{uri: 'https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg'}}
/>
 */
}








/* import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text,  View, ImageBackground, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };

class Profile_user extends Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroun}>
                <Image
                  style={styles.image}
                  source={{uri: 'https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg'}}
                />
                <Text style={styles.text}>Yonzook</Text>
                <View style={styles.icons1}>
                  <View style={styles.boxhead}>
                      <FontAwesome name="star" style={styles.icons} />
                      <FontAwesome name="star" style={styles.icons} />
                      <FontAwesome name="star" style={styles.icons} />
                      <FontAwesome name="star" style={styles.icons} />
                      <FontAwesome name="star" style={styles.icons} />
                  </View>
                </View>
            </ImageBackground>
          </View>

          <View style={styles.box1}>
              <View style={styles.box2}>

                  <View style={styles.boxhead}>
                   
                    <Text style={styles.text1}>{'โปรไฟล์'}</Text>
                  </View> 

                  <View style={styles.boxhead}>
                    
                    <Text style={styles.text2}>{'ข้อมูลติดต่อ'}</Text>  
                  </View>  

                  <View style={styles.boxhead}>
                    
                    <Text style={styles.text1}>{''}</Text>   
                  </View> 

                  <View style={styles.boxhead}>
                    <Ionicons name="chatbox-ellipses-sharp" style={styles.icons2} />
                    <Text style={styles.text2} onPress={() => this.props.navigation.navigate('Login')}>{'แชท'}</Text>
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
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  backgroun: {
    width: 360,
    height: 250 ,
  },
  boxhead: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  box1: {
    height: 365,
    width: 360,   
  },
  box2: {
    height: 300,
    width: 320,
    backgroundColor: '#f8fdff',
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: -20,
    marginBottom: 4,
    padding: 10,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#00c2fe',
    marginTop: 5,
  },
  text1: {
    marginLeft: 20,
    fontSize: 20,
    marginTop: 35,
  },
  text2: {
    marginLeft: 20,
    fontSize: 20,
    marginTop: 30
    ,
  },
  icons: {
    marginLeft: 5,
    fontSize: 24, 
    color: '#d7d13d'
  },
  icons1: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  icons2: {
    marginTop: 30,
    marginLeft: 25,
    fontSize: 26,
    color: '#444',
    shadowColor: "#000",
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
  },

 
});

export default Profile_user; 
 */