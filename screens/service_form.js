import React, { useEffect, useState,useRef } from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { SafeAreaView, StyleSheet, TextInput, Text, ImageBackground, View, Image,Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

let apiKey = 'AIzaSyBdjxXSNpAnyW0lzE_uliQ121U4mkmSgPk';

import * as Location from 'expo-location';

const Service_form = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });


  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const mapRef = React.createRef();

  // const [getLocation, setGetLocation] = useState(false);

  const getLocation = async () => {

    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
    }

    Location.setGoogleApiKey(apiKey);

     console.log(status); 

    let { coords } = await Location.getCurrentPositionAsync();

    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude
    })


    if (coords) {
      let { longitude, latitude } = coords;

      let regionName = await Location.reverseGeocodeAsync({
        longitude,
        latitude,
      });

      const name = regionName[0];
      const address = JSON.stringify(name?.['subregion']);
      setAddress(address);

    }
  };



  const map = () => {
    return (
      <>
        <MapView style={styles.map} initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
        }>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            draggable={true}
            onDragStart={(e) => {
              setLocation({
                latitude:  e.nativeEvent.coordinate.latitude,
                longitude:  e.nativeEvent.coordinate.longitude
               })  
            }}
            onDragEnd={(e) => {
               setLocation({
              latitude:  e.nativeEvent.coordinate.latitude,
              longitude:  e.nativeEvent.coordinate.longitude
             }) 
            }}
            provider="google"
          >
            <Callout>
              <Text>ตำเเหน่งของคุณ</Text>
            </Callout>
          </Marker>
        </MapView >
      </>
    )
    
  }




  useEffect(() => {
    if (location.longitude === null) {
      getLocation()
      map()
    }
  },[]);
  const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <ImageBackground source={image} resizeMode="cover" style={styles.backgroun}>
            <Image
              style={styles.image}
              source={{ uri: 'https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg' }}
            />
            <Text style={styles.text}>Yonzook</Text>
          </ImageBackground>
        </View>

        <View style={styles.box3}>
          <View>
            <Text style={styles.text1}>Personal information Form</Text>
          </View>
          <View style={styles.boxhead}>

            <View>
              <Text style={styles.text2}>{'ชื่อ'}</Text>
              <TextInput style={styles.box4} />
            </View>

            <View>
              <Text style={styles.text2}>{'อีเมล'}</Text>
              <TextInput style={styles.box4} />
            </View>

            <View>
              <Text style={styles.text2}>{'บ้านเลขที่'}</Text>
              <TextInput style={styles.box4} />
            </View>

            <View>
              <Text style={styles.text2}>{'ตำบล'}</Text>
              <TextInput style={styles.box4} />
            </View>

            <View>
              <Text style={styles.text2}>{'อำเภอ'}</Text>
              <TextInput style={styles.box4} />
            </View>

            <View>
              <Text style={styles.text2}>{'จังหวัด'}</Text>
              <TextInput style={styles.box4} />
            </View>
            <View>
              <Text style={styles.text2}>{'รหัสไปรษณีย์'}</Text>
              <TextInput style={styles.box4} />
            </View>
          </View>
          <Text style={styles.text2}>{'GPS'}</Text>
          <View style={styles.containerMap}>

            {location.longitude === null
              ? null
              :
              <>
                {map()}
              </>
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  containerMap: {
    padding: 10
  },
  map: {
    width: "auto",
    height: 330,
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
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image1: {
    width: 128,
    height: 145,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  box3: {
    height: 1000,
    width: 320,
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 5,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 5,
  },
  box6: {
    height: 150,
    width: 280,
    backgroundColor: '#fff',
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
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#00c2fe',
    marginTop: 5,
  },
  text1: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  text2: {
    marginLeft: 20,
    fontSize: 16,
    marginTop: 15,
  },
  input: {
    height: 50,
    width: 150,
    fontSize: 25,
    marginLeft: 20,
    shadowOffset: { width: 0, height: 6, },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 2,

  },
  forme: {
    marginLeft: 150,
    marginTop: -58,
  },

});

export default Service_form;
 
