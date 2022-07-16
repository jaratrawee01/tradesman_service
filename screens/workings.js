import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import bookBank from "./service/getService";
import { AntDesign } from "@expo/vector-icons";
import img1 from "../assets/images/A-3.png";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";

const ImagePickerExample = ({ navigation: { popToTop, navigate } }) => {

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [statusImage, setStatusImage] = useState(useSelector((state) => state.image));
  const [statusEditImage, setStatusEditImage] = useState(false);
  const [id_user, setId_user] = useState(useSelector((state) => state.login.id));
  const dispatch = useDispatch();
  const url = "http://192.168.1.9/project/api-database/images/";

  const pickImage = async (e) => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {


      if (e === "image1") {
        setImage1(result);
      } else if (e === "image2") {
        setImage2(result);
      } else if (e === "image3") {
        setImage3(result);
      } else if (e === "image4") {
        setImage4(result);
      } else if (e === "image5") {
        setImage5(result);
      }  else {
        setImage6(result);
      }
    }
  };

  const pickImage2 = async () => {
    console.log("555");
  }

  const serve = async (e) => {

    let result = null;
    if (image1 !== null) {
      const result1 = await bookBank.uplodeImages(image1, id_user);
      result = result1;
    }
    if (image2 !== null) {
      const result2 = await bookBank.uplodeImages(image2, id_user);
      result = result2;
    }
    if (image3 !== null) {
      const result2 = await bookBank.uplodeImages(image3, id_user);
      result = result2;
    }
    if (image4 !== null) {
      const result2 = await bookBank.uplodeImages(image4, id_user);
      result = result2;
    }
    if (image5 !== null) {
      const result2 = await bookBank.uplodeImages(image5, id_user);
      result = result2;
    }
    if (image6 !== null) {
      const result2 = await bookBank.uplodeImages(image6, id_user);
      result = result2;
    }
   
    console.log("result", result);

    if (result === "success") {
      await getImags(id_user)
      await alert("บันทึกภาพ สำเร็จ");

      await popToTop();
    } else {
      await alert("บันทึกภาพ ไม่สำเร็จ");
    }
  };
  const updateImage = async () => {

    let nameImage =  JSON.parse(statusImage);
    let index  =  JSON.parse(statusImage).length;
    var  dataImage  = [image1,image2,image3,image4,image5,image6];


  
    let  result;
    for (let i = 0; i < index; i++) {
        let id = nameImage[i].id;
        let name = nameImage[i].file_src;
        const result1 = await bookBank.uplodeUpdateImages(dataImage[i], id,name);
        result = result1;
    }

      for (let i = index; i < 6; i++) {
          console.log("I",dataImage[i]);

          if (dataImage[i] !== null) {
            const result2 = await bookBank.uplodeImages(dataImage[i], id_user);
            result = result2;
          }
    }


    if (result === "success") {
      await getImags(id_user)
      await alert("บันทึกภาพ สำเร็จ");

      await popToTop();
    } else {
      await alert("บันทึกภาพ ไม่สำเร็จ");
    }

    
  }

  const getImags = async (e) => {
    const result = await bookBank.getImage(e);
    const data = JSON.stringify(result);

    if (result !== null) {
      await dispatch({
        type: "ADD_IMAGE",
        payload: data,
      });
      await setStatusImage(data)
    }

  }



  const addImage = () => {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View>
              <ImageBackground
                source={img1}
                resizeMode="cover"
                style={styles.backgroun}
              >
                <View style={styles.box4}>
                  <Image
                    style={styles.image2}
                    source={require("../assets/images/A-11.png")}
                  />
                </View>
                <Text style={styles.text}>Yonzook</Text>
              </ImageBackground>
            </View>
            <View style={styles.box6}>
              <View style={styles.box2}>
                <Text style={styles.text1}>ประเภทงาน 1</Text>
              </View>

              <View style={styles.boxhead}>
                <View style={styles.box1}>
                  {image1 && (
                    <Image source={{ uri: image1.uri }} style={styles.image3} onPress={() => pickImage2()} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image1")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.box1}>
                  {image2 && (
                    <Image source={{ uri: image2.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image2")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.box1}>
                  {image3 && (
                    <Image source={{ uri: image3.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image3")}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.box5}>
                <Text style={styles.text1}>ประเภทงาน 2</Text>
              </View>

              <View style={styles.boxhead}>
                <View style={styles.box1}>
                  {image4 && (
                    <Image source={{ uri: image4.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image4")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.box1}>
                  {image5 && (
                    <Image source={{ uri: image5.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image5")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.box1}>
                  {image6 && (
                    <Image source={{ uri: image6.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image6")}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <TouchableOpacity style={styles.button} onPress={() => serve()}>
                  <Text style={styles.text3}>บันทึกข้อมูล</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
  const showImage = () => {
    if (statusImage !== null) {
      var img = JSON.parse(statusImage);
    }
    console.log(img[0].file_src);
    return (
      <>
        {
          statusImage !== null ?
            <>
              <ScrollView>
                {
                  JSON.parse(statusImage).map((index) => {
                    const image = <Image source={{ uri: `${url}${index.file_src}` }} style={styles.image4} />
                    return image;
                  })
                }
              </ScrollView>

            </>
            :
            null
        }
        <Text onPress={() => edit()}>EditImage</Text>
      </>
    )
  }
  const edit = () => {
    setStatusEditImage(true)
  }

  const editImage = () => {
    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View>
              <ImageBackground
                source={img1}
                resizeMode="cover"
                style={styles.backgroun}
              >
                <View style={styles.box4}>
                  <Image
                    style={styles.image2}
                    source={require("../assets/images/A-11.png")}
                  />
                </View>
                <Text style={styles.text}>Yonzook</Text>
              </ImageBackground>
            </View>
            <View style={styles.box6}>
              <View style={styles.box2}>
                <Text style={styles.text1}>เเก้ ภาพ ประเภทงาน 1</Text>
              </View>

              <View style={styles.boxhead}>
                <View style={styles.box1}>
                  {image1 && (
                    <Image source={{ uri: image1.uri }} style={styles.image3} onPress={() => pickImage2()} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image1")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.box1}>
                  {image2 && (
                    <Image source={{ uri: image2.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image2")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.box1}>
                  {image3 && (
                    <Image source={{ uri: image3.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image3")}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.box5}>
                <Text style={styles.text1}>ประเภทงาน 2</Text>
              </View>

              <View style={styles.boxhead}>
                <View style={styles.box1}>
                  {image4 && (
                    <Image source={{ uri: image4.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image4")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.box1}>
                  {image5 && (
                    <Image source={{ uri: image5.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image5")}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.box1}>
                  {image6 && (
                    <Image source={{ uri: image6.uri }} style={styles.image3} />
                  )}
                  <TouchableOpacity>
                    <AntDesign
                      name="pluscircleo"
                      style={styles.icons}
                      onPress={() => pickImage("image6")}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <TouchableOpacity style={styles.button} onPress={() => updateImage()}>
                  <Text style={styles.text3}>บันทึกข้อมูล</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }



  useEffect(() => {
    if (statusImage === null) {
      getImags(id_user);

    }
  }, []);
  /* console.log(JSON.parse(statusImage)); */

  return (
    <>
      {
        statusImage === null ?

          addImage()

          :
          statusEditImage === true ?
            editImage()
            :
            showImage()
      }
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    container: {
      width: "100%",
      height: "100%",
      position: "relative",
    },
  },
  backgroun: {
    width: 360,
    height: 220,
  },
  boxhead: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image2: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  image3: {
    width: 110,
    height: 150,
    borderRadius: 15,
    position: "absolute",
  },
  image4: {
    width: "auto",
    height: 200,

  },
  box1: {
    width: 110,
    height: 150,
    marginTop: 5,
    marginLeft: 7,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
    marginBottom: 4,
  },
  box: {
    width: 160,
    height: 180,
    padding: 2,
    marginTop: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
    marginLeft: "auto",
    marginRight: "auto",
  },
  box2: {
    height: 25,
    width: 120,
    backgroundColor: "#e8e9e9",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 20,
  },
  box5: {
    height: 25,
    width: 120,
    backgroundColor: "#e8e9e9",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 10,
    marginLeft: 15,
    marginTop: -5,
  },
  box3: {
    height: 40,
    width: 300,
    backgroundColor: "#fff",
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
  box4: {
    height: 140,
    width: 140,
    backgroundColor: "#37C1FB",
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 100,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 5,
    borderColor: "#fff",
  },
  box6: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: -10,
    marginBottom: 10,
  },
  text: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 30,
    color: "#37C1FB",
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
    fontWeight: "bold",
  },
  icons: {
    fontSize: 35,
    color: "#000",
    textAlign: "center",
    marginTop: 55,
  },
  button: {
    height: 50,
    width: 280,
    backgroundColor: "#37C1FB",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 30,
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 5,
    marginBottom: 10,

  },
  text3: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    marginTop: 12,
  },
});

export default connect()(ImagePickerExample);
