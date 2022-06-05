import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,Text,ImageBackground, View, Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const image = { uri: 'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4001/1024001-h-ba8013ea561b' };

class Profile_tradesman extends Component {
   render() {
    return (

      <SafeAreaView style={styles.container}> 
        <ScrollView>
            <View style={styles.box1}>
                <View>
                    <ImageBackground source={image} resizeMode="cover" style={styles.backgroun}>
                      <Image
                        style={styles.image}
                        source={{uri: 'https://i.pinimg.com/originals/0c/62/50/0c6250e9411e1042671f170db1aab1fc.jpg'}}
                      />
                      <Text style={styles.text}>Yonzook</Text>
                    </ImageBackground>
                </View>
            </View>

            <View style={styles.box2}>
                <View style={styles.box3}>
                    <View style={styles.input}>
                        <FontAwesome5 name="user-alt" size={24} color="#00c2fe" placeholder="Password"/> 
                        <Text style={styles.text1}>{'Profile'}</Text>       
                    </View>

                    <View style={styles.input}>
                    <FontAwesome5 name="address-book" size={24} color="#00c2fe" />  
                    <Text style={styles.text1}>{'Contact informatiom'}</Text>        
                    </View>

                    <View style={styles.input}>
                        <FontAwesome name="unlock-alt" size={28} color="#00c2fe" /> 
                        <Text style={styles.text1}>{'Change user/password'}</Text>    
                    </View>

                    <View style={styles.input}>
                    <MaterialIcons name="chat" size={24} color="#00c2fe" />  
                    <Text style={styles.text1}>{'Cnat'}</Text>                              
                    </View>

                    <View style={styles.input}>
                        <FontAwesome5 name="money-check-alt" size={18} color="#00c2fe" />  
                        <Text style={styles.text1}>{'Pay for'}</Text>                        
                    </View>
                </View>

                <View style={styles.box4}>
                    <Image
                        style={styles.image1}
                        source={{uri: 'https://inwfile.com/s-dx/pw8rqy.jpg'}}
                      />
                    <Image
                        style={styles.image2}
                        source={{uri: 'https://www.ตรวจระบบไฟฟ้าประจําปี.com/wp-content/uploads/2021/09/%E0%B8%AD%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B8%8A%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B8%E0%B8%95%E0%B8%AA%E0%B8%B2%E0%B8%AB%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1.jpg'}}
                      />
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
    height: 300 ,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: '#00c2fe',
  },
  image1: {
    width: 128,
    height: 145,
    marginLeft: 22,
    marginTop: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00c2fe',
    
  },
  image2: {
    width: 128,
    height: 145,
    marginLeft: 170,
    marginTop: -145,
    borderRadius: 20,
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
    backgroundColor: '#d2e4ee',    
  },
  box3: {
    height: 255,
    width: 320,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 20,
    marginLeft: 18,
    marginRight: 20, 
    marginTop: -120, 
    borderWidth: 1,
    borderColor: '#00c2fe', 
  },
  box4:{
    flex: 1,
    backgroundColor: '#d2e0e8',
    height: '50%',
    marginTop: '45%',
    marginLeft: '-94%',
    marginRight: 20,
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
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