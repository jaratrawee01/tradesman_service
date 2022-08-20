import React, { Component } from 'react';
import { connect } from "react-redux";
import MapView, { Marker, Callout } from "react-native-maps";
import get_technician from './service/getService';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";

class address extends Component {

  constructor(props) {
    super(props);
    this.state = {
      technician: null,
      urlImg: null,
      login: null,
      location: {
        latitude: null,
        longitude: null
      }

    };
  }



  componentDidMount() {
    const id = this.props.posts.id;
    this.setState({
      login: this.props.posts.login.status_user,
    })
    if (this.props.posts.login.status_user === "ช่าง") {
      this.andUsers(id);
    }else{
      this.technicianAndUser(id);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const {technician} = this.state;
    if(prevProps.technician != technician || technician === null){
      const {id} = this.props.posts;
      if (this.props.posts.login.status_user === "ช่าง") {
        this.andUsers(id);
      }else{
        this.technicianAndUser(id);
      }
    }
  }


  technicianAndUser = async (e) => {
    const result1 = await get_technician.gettechnicianAddressid(e);
    const location = JSON.parse(result1.location);
    console.log(location.latitude);
    this.setState({
      technician: result1,
      urlImg: this.props.posts.urlImage,
      location: {
        latitude: location.latitude,
        longitude: location.longitude
      }
    })
  }
  andUsers = async (e) => {
    const result2 = await get_technician.getUserAddressid(e);
    const location = JSON.parse(result2[0].location);
    this.setState({
      technician:  result2[0],
      urlImg: this.props.posts.urlImage,
      location: {
        latitude: location.latitude,
        longitude: location.longitude
      }
    })

  }

  map = () => {
    const { location } = this.state;
    console.log(location);
    return (
      <>
        {
          location.latitude !== null ?
            <>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                  }}
                  draggable={true}
                  onDragStart={(e) => {
                    setLocation({
                      latitude: e.nativeEvent.coordinate.latitude,
                      longitude: e.nativeEvent.coordinate.longitude,
                    });
                  }}
                  onDragEnd={(e) => {
                    setLocation({
                      latitude: e.nativeEvent.coordinate.latitude,
                      longitude: e.nativeEvent.coordinate.longitude,
                    });
                  }}
                  provider="google"
                >
                  <Callout>
                    <Text>ตำเเหน่งของคุณ</Text>
                  </Callout>
                </Marker>
              </MapView>
            </>
            :
            null
        }


      </>
    );
  };



  render() {
    const { technician, login } = this.state;


    console.log(technician);
    return (
      <>
        {
          technician !== null ?
            <>
              <ScrollView>
                <View>
                  <Image
                    style={styles.image2}
                    source={require("../assets/images/BB-2.png")}
                  />
                </View>
                <View style={styles.box}>
                  <View>
                    <Text style={styles.text1}>รายละเอียดติดต่อ </Text>
                  </View>

                  <View style={styles.box7}>
                    <Text style={styles.text6}>{"ชื่อ"}</Text>
                    <Text style={styles.text7}>{technician.name}</Text>
                  </View>
                  <View style={styles.box7}>
                    <Text style={styles.text6}>{"เบอร์ติดต่อ"}</Text>
                    <Text style={styles.text7}>{technician.phone_number}</Text>
                  </View>
                  <View style={styles.box7}>
                    <Text style={styles.text6}>{"อีเมล"}</Text>
                    <Text style={styles.text7}>{technician.email}</Text>
                  </View>
                  <View style={styles.box7}>
                    <Text style={styles.text6}>{"บ้านเลขที่"}</Text>
                    <Text style={styles.text7}>{technician.address}</Text>
                  </View>

                  <View style={styles.box7}>
                    <Text style={styles.text6}>{"ตำบล"}</Text>
                    <Text style={styles.text7}>{technician.subdistrict}</Text>
                  </View>

                  <View style={styles.box7}>
                    <Text style={styles.text6}>{"อำเภอ"}</Text>
                    <Text style={styles.text7}>{technician.district}</Text>
                  </View>

                  <View style={styles.box7}>
                    <Text style={styles.text6}>{"จังหวัด"}</Text>
                    <Text style={styles.text7}>{technician.province}</Text>
                  </View>

                  <View style={styles.box7}>
                    <Text style={styles.text6}>{"รหัสไปรษณีย์"}</Text>
                    <Text style={styles.text7}>{technician.zipcode}</Text>
                  </View>
                  {login === "ลูกค้าทั่วไป" ?
                    <>
                      <View style={styles.box7}>
                        <Text style={styles.text6}>{"ประเภทงาน"}</Text>
                        <Text style={styles.text7}>{technician.technician_1}</Text>
                      </View>
                      <View style={styles.box7}>
                        <Text style={styles.text6}>{"ประเภทงาน"}</Text>
                        <Text style={styles.text7}>{technician.technician_2}</Text>
                      </View>
                    </>
                    :
                    null

                  }

                  <View>
                    <Text style={styles.text2}>{"GPS"}</Text>
                    <View style={styles.box1}>
                    {/*   {this.map()} */}
                    </View>
                  </View>
                </View>
              </ScrollView>

            </>
            :
            null
        }

      </>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  containerMap: {
    padding: 20,
  },
  map: {
    width: "auto",
    height: 300,
  },
  icons: {
    fontSize: 25,
    marginTop: 13,
    marginLeft: 75,
  },
  backgroun: {
    width: 360,
    height: 250,
  },
  boxhead: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -8,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image1: {
    width: 128,
    height: 145,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image2: {
    height: 220,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -10,
  },
  box: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -30,
    marginBottom: 30,
    borderRadius: 15,
  },
  box1: {
    height: 300,
    width: "90%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 6,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    marginTop: 5,
  },
  box3: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -45,
    marginBottom: 10,
  },
  box4: {
    height: 40,
    width: 300,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 6,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 5,
  },
  box4_1: {
    height: "auto",
    width: 300,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
  },
  box6: {
    height: 150,
    width: 280,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 5,
    marginTop: 5,
    fontSize: 16,
  },
  box7: {
    height: 40,
    width: "90%",
    backgroundColor: "#e8e9e9",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 6,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 15,
  },

  text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 30,
    padding: 6,
  },
  text1: {
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  text2: {
    marginLeft: 30,
    fontSize: 16,
    marginTop: 15,
    fontWeight: "bold",
  },
  text3: {
    marginLeft: 5,
    fontSize: 18,
    padding: 10,
  },
  text4: {
    marginLeft: 30,
    fontSize: 16,
    marginTop: 30,
    fontWeight: "bold",
  },
  text5: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 15,
    padding: 6,
    color: '#fff',
  },
  text6: {
    marginLeft: 5,
    fontSize: 18,
    paddingTop: 10,
    fontWeight: "bold",
  },
  text7: {
    fontSize: 18,
    marginTop: -20,
    textAlign: 'right',
    marginRight: 20,
  },
  input: {
    height: 50,
    width: 150,
    fontSize: 25,
    marginLeft: 20,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 2,
  },
  forme: {
    marginLeft: 150,
    marginTop: -58,
  },
  button: {
    height: 50,
    width: 200,
    backgroundColor: "#37C1FB",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
  },
  button1: {
    height: 30,
    width: 90,
    backgroundColor: "#37C1FB",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    marginLeft: 250,
    marginTop: -25,
    marginBottom: 5,
    borderRadius: 10,
  },
});


const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps, null)(address);