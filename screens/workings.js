import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text,ImageBackground, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };

class Workings extends Component {
   render() {
    return (

      <SafeAreaView style={styles.container}> 
        <ScrollView>
                <View>
                    <ImageBackground source={image} resizeMode="cover" style={styles.backgroun}>
                    <View style={styles.box4}>
                        <Image
                          style={styles.image2}
                          source={require('../assets/images/A-11.png')}
                        />
                      </View>
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
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.box1}>
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.box}>
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.box}>
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.box1}>
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.box1}>
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.box}>
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.box}>
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.box}>
                    <TouchableOpacity>
                      <AntDesign name="pluscircleo" style={styles.icons}/>
                    </TouchableOpacity>
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
    height: 220 ,
  },
boxhead: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 10,
  marginBottom: 20,
},
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image2: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  box1: {
    width: 160,
    height: 180,
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
    height: 180,
    padding: 2,      
    marginTop: 8,
    marginLeft: 13,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
    marginBottom: 5, 
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
  box4: {
    height: 140,
    width: 140,
    backgroundColor: '#78a0e3',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 100,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 5,
    borderColor: '#fff',
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
    marginTop: 60,
  },

});
export default Workings;
