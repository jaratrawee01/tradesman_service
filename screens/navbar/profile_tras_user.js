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
import { connect } from "react-redux";
import get_technician from '../service/getService';

class Profile_tras_user extends Component {

  constructor(props) {
    super(props);
    this.state = {
      technician: null,
      urlImg: null,
    };
  }



  componentDidMount() {
    const id = this.props.posts.id;
    this.technicianAndUser(id);
  }

  technicianAndUser = async (e) => {
    const result1 = await get_technician.gettechnicianAddressid(e);
    this.setState({
      technician: result1,
      urlImg: this.props.posts.urlImage,
    })

  }

  render() {


    const { technician,urlImg } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.box}>
            <View style={styles.box1}>
              <View style={styles.box6}>
                {
                  technician !== null  ? 
                  technician.file_src !== null   ? 
                  <Image style={styles.imgPro} source={{ uri: `${urlImg}profile/${technician.file_src}` }} />
                  :
                  <Image style={styles.image3} source={require('../../assets/images/logo_technician.png')} />
                  :
                  <Image style={styles.image3} source={require('../../assets/images/logo_technician.png')} />
                }
               
              </View>
              {
                  technician !== null ? 
                  
                  technician.name !== null ?
                  <Text style={styles.text}>{technician.name}</Text>
                  :
                  <Text style={styles.text}>TECHNICIAN ONLINE</Text>
                  :
                  <Text style={styles.text}>TECHNICIAN ONLINE</Text>
  
                }


            </View>
          </View>

          <View style={styles.top}>
            <View style={styles.box3}>
              <FontAwesome5 name="file-image" style={styles.icons5} />
              <Text style={styles.text2}
               onPress={() => this.props.navigation.navigate("workings_tras_user")}>{"ผลงาน"}
              </Text>
            </View>

            <View style={styles.box3}>
              <FontAwesome5 name="address-book" style={styles.icons5} />
              <Text
                style={styles.text2}
                onPress={() => this.props.navigation.navigate("address")}>{"ข้อมูลการติดต่อ"}
              </Text>
            </View>

            <View style={styles.box3}>
              <Ionicons name="chatbox-ellipses-sharp" style={styles.icons5} />
              <Text
                style={styles.text2}
                onPress={() => this.props.navigation.navigate("Chat")}>{"แชท"}
              </Text>
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
  imgPro: {
    height: 130,
    width: 130,
    backgroundColor: '#37C1FB',
    shadowColor: "#000",
    borderRadius: 100,
    zIndex: 1,

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
    width: 120,
    height: 70,
    marginTop: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
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
export default connect(mapStateToProps, null)(Profile_tras_user);


