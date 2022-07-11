import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
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
import technician_type from "./service/getService";
import * as Location from "expo-location";
import { setDisabled } from "react-native/Libraries/LogBox/Data/LogBoxData";
import { Picker } from "@react-native-picker/picker";
import { useSelector, useDispatch } from "react-redux";

// You can import from local files

let apiKey = "AIzaSyBdjxXSNpAnyW0lzE_uliQ121U4mkmSgPk";

const Service_form = ({ navigation: { popToTop } }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const [name, setName] = useState(null);
  const [addressUser, setAddressUser] = useState(null);
  const [subdistrict, setSubdistrict] = useState(null);
  const [district, setDistrict] = useState(null);
  const [province, setProvince] = useState(null);
  const [zipcode, setZipcode] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [technicianType, setTechnicianType] = useState(null);
  const [technician_1, setTechnician_1] = useState(null);
  const [technician_2, setTechnician_2] = useState(null);
  const [technician_3, setTechnician_3] = useState(null);
  const [idPhone, setIdPhone] = useState(useSelector((state) => state.login.id));

  const mapRef = React.createRef();

  // const [getLocation, setGetLocation] = useState(false);

  const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }

    Location.setGoogleApiKey(apiKey);

    console.log(status);

    let { coords } = await Location.getCurrentPositionAsync();

    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });

    if (coords) {
      let { longitude, latitude } = coords;

      let regionName = await Location.reverseGeocodeAsync({
        longitude,
        latitude,
      });

      const name = regionName[0];
      const address = JSON.stringify(name?.["subregion"]);
      setAddress(address);
    }
  };

  const map = () => {
    return (
      <>
        <MapView
          style={styles.map}
          initialRegion={{
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
    );
  };

  const serve = async () => {
    const data = [
      idPhone,
      name,
      addressUser,
      subdistrict,
      district,
      province,
      zipcode,
      location,
      technician_1,
      technician_2,
      technician_3,
    ];
    const result = await technician_type.createAddress(data);
    if (result === "success") {
      await Alert.alert("บันทึกสำเร็จ");
      popToTop();
    } else {
      await Alert.alert("บันทึกไม่สำเร็จ กรุณาลองใหม่");
    }
  };

  const logde = async () => {
    const result = await technician_type.technician_type();
    setTechnicianType(result);
  };

  useEffect(() => {
    if (location.longitude === null) {
      getLocation();
      map();
    }
    if (technicianType === null) {
      logde();
    }
  }, []);

  const image = {
    uri: "https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg",
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.backgroun}
          >
            <Image
              style={styles.image}
              source={{
                uri: "https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg",
              }}
            />
          </ImageBackground>
        </View>

        <View style={styles.box3}>
          <View>
            <Text style={styles.text1}>รายละเอียดติดต่อ</Text>
          </View>
          <View style={styles.boxhead}>
            <View>
              <Text style={styles.text2}>{"ชื่อ"}</Text>
              <TextInput
                style={styles.box4}
                onChange={(e) => {
                  setName(e.nativeEvent.text);
                }}
              />
            </View>
            <View>
              <View>
                <Text style={styles.text2}>{"เลือกประเภทงานช่าง"}</Text>
                <View>
                  <Picker
                    style={styles.text3}
                    selectedValue={technician_1}
                    onValueChange={(itemValue, itemIndex) =>
                      setTechnician_1(itemValue)
                    }
                  >
                    <Picker.Item label="เลือกประเภทงาน" value="null" />
                    {technicianType !== null
                      ? technicianType.map((value) => {
                          let name = value.technician_type;
                          let picker = (
                            <Picker.Item label={name} value={name} />
                          );
                          return picker;
                        })
                      : null}
                  </Picker>
                </View>
              </View>
              <View>
                <Text style={styles.text4}>{"เลือกประเภทงานช่าง"}</Text>
                <View>
                  <Picker
                    style={styles.text3}
                    selectedValue={technician_2}
                    onValueChange={(itemValue, itemIndex) =>
                      setTechnician_2(itemValue)
                    }
                  >
                    <Picker.Item label="เลือกประเภทงาน" value="null" />
                    {technicianType !== null
                      ? technicianType.map((value) => {
                          let name = value.technician_type;
                          let picker = (
                            <Picker.Item label={name} value={name} />
                          );
                          return picker;
                        })
                      : null}
                  </Picker>
                </View>
              </View>
              <View>
                <Text style={styles.text4}>{"เลือกประเภทงานช่าง"}</Text>
                <View>
                  <Picker
                    style={styles.text3}
                    selectedValue={technician_3}
                    onValueChange={(itemValue, itemIndex) =>
                      setTechnician_3(itemValue)
                    }
                  >
                    <Picker.Item label="เลือกประเภทงาน" value="null" />
                    {technicianType !== null
                      ? technicianType.map((value) => {
                          let name = value.technician_type;
                          let picker = (
                            <Picker.Item label={name} value={name} />
                          );
                          return picker;
                        })
                      : null}
                  </Picker>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.text4}>{"บ้านเลขที่"}</Text>
              <TextInput
                style={styles.box4}
                onChange={(e) => {
                  setAddressUser(e.nativeEvent.text);
                }}
              />
            </View>

            <View>
              <Text style={styles.text2}>{"ตำบล"}</Text>
              <TextInput
                style={styles.box4}
                onChange={(e) => {
                  setSubdistrict(e.nativeEvent.text);
                }}
              />
            </View>

            <View>
              <Text style={styles.text2}>{"อำเภอ"}</Text>
              <TextInput
                style={styles.box4}
                onChange={(e) => {
                  setDistrict(e.nativeEvent.text);
                }}
              />
            </View>

            <View>
              <Text style={styles.text2}>{"จังหวัด"}</Text>
              <TextInput
                style={styles.box4}
                onChange={(e) => {
                  setProvince(e.nativeEvent.text);
                }}
              />
            </View>
            <View>
              <Text style={styles.text2}>{"รหัสไปรษณีย์"}</Text>
              <TextInput
                style={styles.box4}
                onChange={(e) => {
                  setZipcode(e.nativeEvent.text);
                }}
              />
            </View>
          </View>
          <Text style={styles.text2}>{"GPS"}</Text>
          <View style={styles.containerMap}>
            {location.longitude === null ? null : <>{map()}</>}
          </View>
          <TouchableOpacity style={styles.button} onPress={() => serve()}>
            <Text style={styles.text}>บันทึก</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    height: 330,
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
    marginTop: -60,
    marginBottom: 10,
  },
  box4: {
    height: 40,
    width: 280,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 20,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 5,
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

  text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 5,
  },
  text1: {
    marginLeft: 45,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  text2: {
    marginLeft: 45,
    fontSize: 16,
    marginTop: 15,
    fontWeight: "bold",
  },
  text3: {
    marginLeft: 45,
    fontSize: 16,
    marginTop: -5,
  },
  text4: {
    marginLeft: 45,
    fontSize: 16,
    marginTop: 5,
    fontWeight: "bold",
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
    borderRadius: 30,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    marginBottom: 30,
  },
});

export default Service_form;
