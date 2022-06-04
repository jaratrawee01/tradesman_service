import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,Text,ImageBackground, View, Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const image = { uri: "https://s.isanook.com/ap/0/1/13/jpg/125/2516252.jpg" };

class Profile_tradesman extends Component {
   render() {
    return (

      <SafeAreaView style={styles.container}> 

            <View style={styles.box1}>
                <View>
                    <ImageBackground source={image} resizeMode="cover" style={styles.backgroun}>
                      <Image
                        style={styles.image}
                        source={{uri: 'https://รูปการ์ตูนน่ารักๆ.com/wp-content/uploads/2017/12/db4aa575960c4f90bec96f1e97d9b2c7.jpg'}}
                      />
                      <Text style={styles.text}>Yonzook</Text>
                    </ImageBackground>
                </View>
            </View>

            <View style={styles.box2}>
                <View style={styles.box3}>
                    <View style={styles.input}>
                        <FontAwesome5 name="user-alt" size={24} color="#00c2fe" placeholder="Password"/> 
                        <Text style={styles.text1}><Text style={styles.text1}>{'Profile'}</Text>                            {'>'}</Text>  
                    </View>

                    <View style={styles.input}>
                    <FontAwesome5 name="address-book" size={24} color="#00c2fe" />  
                    <Text style={styles.text1}><Text style={styles.text1}>{'Contact informatiom'}</Text>        {'>'}</Text>  
                    </View>

                    <View style={styles.input}>
                        <FontAwesome name="unlock-alt" size={28} color="#00c2fe" /> 
                        <Text style={styles.text1}><Text style={styles.text1}>{'Change user/password'}</Text>      {'>'}</Text>   
                    </View>

                    <View style={styles.input}>
                    <MaterialIcons name="chat" size={24} color="#00c2fe" />  
                    <Text style={styles.text1}><Text style={styles.text1}>{'Cnat'}</Text>                               {'>'}</Text> 
                    </View>

                    <View style={styles.input}>
                        <FontAwesome5 name="money-check-alt" size={18} color="#00c2fe" />  
                        <Text style={styles.text1}><Text style={styles.text1}>{'Pay for'}</Text>                            {'>'}</Text> 
                    </View>
                </View>

                <View style={styles.box4}>
                    <Image
                        style={styles.image1}
                        source={{uri: 'https://inwfile.com/s-dx/pw8rqy.jpg'}}
                      />
                        <Text style={styles.text2}>ระบบน้ำ</Text>
                </View>

                <View style={styles.box5}>
                    <Image
                        style={styles.image1}
                        source={{uri: 'https://dx.lnwfile.com/_/dx/_raw/7x/ck/dj.jpg'}}
                      />
                        <Text style={styles.text2}>ระบบไฟ</Text>
                </View>
                
            </View>

                 

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
    height: 300 ,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 60,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: '#00c2fe',
  },
  image1: {
    width: 128,
    height: 145,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#00c2fe',
  },
  box1: {
    flex: 1,
    flexDirection: "row",
    height: 300,
    width: 360,
  },
  box2: {
    flex: 1, 
    flexDirection: "row",
    height: 390,
    width: 360,
    backgroundColor: '#FFF0F0',    
  },
  box3: {
    height: 255,
    width: 320,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    borderRadius: 20,
    marginLeft: 18,
    marginRight: 20, 
    marginTop: -80, 
    borderWidth: 1,
    borderColor: '#00c2fe', 
  },
  box4:{
    height: 180,
    backgroundColor: '#d7d7d7',
    marginTop: 190,
    marginLeft: '-91%',
    marginRight: 190,
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00c2fe',
  },
   box5: {
    height: 180,
    backgroundColor: '#d7d7d7',
    marginTop: 190,
    marginLeft: '-45%',
    marginRight: 190,
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00c2fe',
  }, 
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 35,
    color: '#00c2fe',
  },
  input: {
    marginLeft: 30,
    marginTop: 22,
    borderColor: '#00c2fe',
  },
  text1: {
    marginLeft: 45,
    marginTop: -23,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text2: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
});



export default Profile_tradesman; 