import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text,  View, ImageBackground, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };

class Profile_user extends Component {
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
                <View style={styles.icons1}>
                  <View style={styles.boxhead}>
                      <FontAwesome name="star" style={styles.icons} />
                      <FontAwesome name="star" style={styles.icons} />
                      <FontAwesome name="star" style={styles.icons} />
                      <FontAwesome name="star" style={styles.icons} />
                      <FontAwesome name="star" style={styles.icons} />
                  </View>
                </View>
            </ImageBackground>
          </View>

          <View style={styles.box1}>
              <View style={styles.box2}>

                  <View style={styles.boxhead}>
                    <FontAwesome5 name="user-alt" style={styles.icons2} />
                    <Text style={styles.text1}>{'Profile'}</Text>
                  </View> 

                  <View style={styles.boxhead}>
                    <FontAwesome5 name="address-book" style={styles.icons2} />
                    <Text style={styles.text1}>{'Contact informatiom'}</Text>  
                  </View>  

                  <View style={styles.boxhead}>
                    <FontAwesome5 name="unlock-alt" style={styles.icons2} />
                    <Text style={styles.text1}>{'Change user/password'}</Text>   
                  </View> 

                  <View style={styles.boxhead}>
                    <Ionicons name="chatbox-ellipses-sharp" style={styles.icons2} />
                    <Text style={styles.text1} onPress={() => this.props.navigation.navigate('Login')}>{'Cnat'}</Text>
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
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#f8fdff',
  },
  backgroun: {
    width: 360,
    height: 250 ,
  },
  boxhead: {
    flexDirection: "row",
    flexWrap: "wrap",
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
    height: 365,
    width: 360,
    backgroundColor: '#FFF0F0',    
  },
  box2: {
    height: 300,
    width: 320,
    backgroundColor: '#f8fdff',
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: -20,
    marginBottom: 4,
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
    fontSize: 24,
    marginTop: 30,
  },
  icons: {
    marginLeft: 5,
    fontSize: 24, 
    color: '#d7d13d'
  },
  icons1: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  icons2: {
    marginTop: 30,
    marginLeft: 25,
    fontSize: 26,
    color: '#00c2fe',
  },

 
});



export default Profile_user; 


