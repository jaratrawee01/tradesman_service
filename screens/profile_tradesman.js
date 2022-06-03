import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,Text,TextInput, View, Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


class Profile_tradesman extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
     
            <View style={styles.box1}>
                <Image
                    source={{ uri: 'https://s.isanook.com/ap/0/1/13/jpg/125/2516252.jpg' }}
                    style={{ width: 120, height: 120,borderRadius: 100, top: 70, left: '40%',}}
                /> 

                <Text style={styles.text}>
                    yonzook
                </Text>
            </View>

            <View style={styles.box2}>
                <View style={styles.box3}>
                    <View style={styles.input}>
                        <FontAwesome5 name="user-alt" size={26} color="#00c2fe" />   
                    </View>

                    <View style={styles.input}>
                    <FontAwesome5 name="address-book" size={26} color="#00c2fe" />   
                    </View>

                    <View style={styles.input}>
                        <FontAwesome name="unlock-alt" size={30} color="#00c2fe" />   
                    </View>

                    <View style={styles.input}>
                    <MaterialIcons name="chat" size={26} color="#00c2fe" />   
                    </View>

                    <View style={styles.input}>
                        <FontAwesome5 name="money-check-alt" size={20} color="#00c2fe" />   
                    </View>
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
  box1: {
    flex: 1,
    flexDirection: "row",
    height: 300,
    width: 360,
    backgroundColor: '#444', 
  },
  box2: {
    flex: 1, 
    flexDirection: "row",
    height: 390,
    width: 360,
    backgroundColor: '#FFF0F0',    
  },
  box3: {
    height: '65%',
    width: 330,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto', 
    marginTop: -60,  
  },
  box4: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
  },
  text: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 190,
    color: '#00c2fe',
  },
  input: {
    marginLeft: 20,
    padding: 12,
    borderColor: '#00c2fe',
  },

});



export default Profile_tradesman; 