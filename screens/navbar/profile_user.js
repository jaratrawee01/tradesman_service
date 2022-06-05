import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, ImageBackground, View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const image = { uri: 'https://www.bangkoksync.com/images/listings/changsombaan-3ca376e6e2.jpg' };

class Profile_user extends Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.box1}>
            <View>
              <ImageBackground source={image} resizeMode="cover" style={styles.backgroun}>
                <Image
                  style={styles.image}
                  source={{ uri: 'https://st.depositphotos.com/1647366/2315/v/950/depositphotos_23151444-stock-illustration-cartoon-of-technician-or-repairman.jpg' }}
                />
                <Text style={styles.text}>Yonzook</Text>
              </ImageBackground>
            </View>
          </View>

          <View style={styles.box2}>
            <View style={styles.box3}>
              <View style={styles.input}>
                <FontAwesome5 name="user-alt" size={24} color="#00c2fe" placeholder="Password" />
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
    height: 300,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 50,
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
    backgroundColor: '#d2e4ee',
  },
  box3: {
    height: 300,
    width: 320,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 20,
    marginLeft: 18,
    marginRight: 20,
    marginTop: -50,
    borderWidth: 1,
    borderColor: '#00c2fe',
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 35,
    color: '#fff',
    marginTop: 10,
  },
  input: {
    marginLeft: 30,
    marginTop: 30,
    borderColor: '#00c2fe',
  },
  text1: {
    marginLeft: 45,
    marginTop: -23,
    fontWeight: 'bold',
    fontSize: 20,
  },
});



export default Profile_user; 