/* import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text,ImageBackground, View, Image, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };

class Workings extends Component {
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
                    </ImageBackground>
                </View>
                
                <View>
                    <Text style={styles.text2}>{'ประเภทงาน'}</Text>                 
                    <TextInput style={styles.box3}/> 
                </View>

                <View>
                    <Text style={styles.text2}>{'ผลงานช่าง'}</Text>                 
                    <TextInput style={styles.box3}/> 
                </View>

                <View style={styles.box2}>
                  <Text style={styles.text1}>อัพโหลดภาพ</Text>
                </View>

                <View style={styles.boxhead}>
                  <View style={styles.box1}>
                     <AntDesign name="pluscircleo" style={styles.icons}/>
                  </View>

                  <View style={styles.box1}>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                  </View>

                  <View style={styles.box}>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                  </View>

                  <View style={styles.box}>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                  </View>

                </View>

          </ScrollView>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    container: {
      width: '100%',
      height: '100%',
      position: 'relative',
  },
  },
  backgroun: {
    width: 360,
    height: 200 ,
  },
boxhead: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 10,
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
    width: 160,
    height: 160,
    padding: 2,      
    marginTop: 5,
    marginLeft: 13,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
    marginBottom: 4, 
  },
  box: {
    width: 160,
    height: 160,
    padding: 2,      
    marginTop: 8,
    marginLeft: 13,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
    marginBottom: 20, 
  },
  box2: {
    height: 25,
    width: 120,
    backgroundColor: '#bcbdbe',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 20,
  },
  box3: {
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 20,
    marginLeft: 30,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 5,
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
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 2,
  },
  text2: {
    marginLeft: 30,
    fontSize: 16,
    marginTop: 15,
    fontWeight: 'bold',
  },
  icons: {
    fontSize: 40,
    color: '#000',
    textAlign: 'center',
    marginTop: 55,
  },






});



export default Workings;  */

import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import createUser from './service/getService';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result);
    }
  };

  const serve = async () => {



    const result = await createUser.uplodeImages(image);

    /*    console.log(result); */
    /*   if (result === "success") {
       popToTop();
     } 
     */
  }



  return (
    <>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
        <TouchableOpacity onPress={() => serve()}>
            <Text
              style={{
                textAlign: "center"
              }}
            >
              สมัครสมาชิก
            </Text>
          </TouchableOpacity>
      </View> 

   

    </>
  );
}
