import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



class Login extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.box}>
                <Image
                  style={styles.image2}
                  source={require('../assets/images/A-11.png')}
                />
              </View>


          <View style={styles.marginTop}>
            <View style={styles.input}>
              <FontAwesome name="user" style={styles.icons3} />
              <TextInput
                style={{ flex: 1, paddingLeft: 12 , fontSize: 20 }}
                placeholder="Name"
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.input}>
              <FontAwesome name="unlock-alt" style={styles.icons3} />
              <TextInput
                style={{ flex: 1, paddingLeft: 12 , fontSize: 20}}
                placeholder="Password"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={styles.icons}>
            <AntDesign name="checkcircleo" size={20} color="#00c2fe" />
            <Text style={styles.text1}>{'จดจำฉัน'}</Text>
            <View style={styles.button2}>
            <Text
              style={styles.text2}
              title="Go to Details"
              onPress={() => this.props.navigation.navigate('Registration')}>สมักสมาชิก</Text>
            </View>
          </View>
  
          <View style={styles.button}>
            <TouchableOpacity style={styles.button1}>
              <Text style={{ fontSize: 30, textAlign: 'center', color: 'white', marginTop: 4, }}>Log in</Text>
            </TouchableOpacity>
          </View>
{/* 
          <View style={styles.boxIcon}>
            <View style={styles.icons1}>
              <FontAwesome name="facebook" size={35} color="#00c2fe" />
            </View>

            <View style={styles.icons2}>
              <AntDesign name="google" size={35} color="#00c2fe" />
            </View>
          </View>
           */}
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
    backgroundColor: '#fff'
  },
  boxIcon: {
    height: 100,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: '#78a0e3',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 100,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 5,
    borderColor: '#fff',
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    fontSize: 23,
  },
  text: {
    color: 444,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text1: {
    marginLeft: 30,
    marginTop: -20,
    fontSize: 16,
    marginBottom: 2,
  },
  text2: {
    marginLeft: -15,
    marginTop: -4,
    fontSize: 16,
    marginBottom: 2,
  },
  button: {
    marginTop: 40,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 20,
  },
  button1: {
    backgroundColor: '#01C1FF',
    height: 50,
    borderRadius: 25,
  },
  button2: {
    marginTop: -16,
    marginLeft: 180,
  },
  icons: {
    marginTop: 25,
    marginLeft: 60,
  },
  marginTop: {
    marginTop: 20,
  },
  icons1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 110,
    alignItems: 'center',
    padding: 10,
  },
  icons2: {
    width: 50,
    height: 50,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
    backgroundColor: '#fff',
    marginLeft: 210,
    alignItems: 'center',
    padding: 8,
    marginTop: -50,
  },
  icons3: {
    fontSize: 24,
    color: '#01C1FF',
    marginLeft: 10,
  },
  image2: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  scrollView: {
    marginHorizontal: 5,
    height: '100%',
  }

});


export default Login;