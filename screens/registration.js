import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

class Registration extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.text}>
              Registration
            </Text>
          </View>


          <View style={styles.marginTop}>
            <View style={styles.input}>
              <FontAwesome name="user" size={24} color="#00c2fe" />
              <TextInput
                style={{ flex: 1, paddingLeft: 12 }}
                placeholder="Name"
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.input}>
              <MaterialIcons name="mail" size={24} color="#00c2fe" />
              <TextInput
                style={{ flex: 1, paddingLeft: 12 }}
                placeholder="Email"
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.input}>
              <FontAwesome name="phone-square" size={24} color="#00c2fe" />
              <TextInput
                style={{ flex: 1, paddingLeft: 12 }}
                placeholder="Number"
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.input}>
              <FontAwesome name="unlock-alt" size={24} color="#00c2fe" />
              <TextInput
                style={{ flex: 1, paddingLeft: 12 }}
                placeholder="Password"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={styles.button}>
            <TouchableOpacity style={styles.button1}>
              <Text style={{ fontSize: 34, textAlign: 'center', color: 'white', marginTop: 4, }}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxIcon}>
            <View style={styles.icons1}>
              <FontAwesome name="facebook" size={35} color="#00c2fe" />
            </View>
            <View style={styles.icons2}>
              <AntDesign name="google" size={35} color="#00c2fe" />
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
  boxIcon: {
    height: 100,
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
    borderWidth: 1,
    borderColor: '#00c2fe',
    fontSize: 23,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 50,
    color: '#00c2fe',
  },
  button: {
    marginTop: 40,
    marginLeft: 70,
    marginRight: 70,
    marginBottom: 70
  },
  button1: {
    backgroundColor: '#01C1FF',
    height: 50,
    borderRadius: 25,
  },
  text1: {
    marginLeft: 24,
    marginTop: -18,
    fontSize: 16,
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
    marginTop: -30,
    marginLeft: 100,
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
    marginLeft: 200,
    alignItems: 'center',
    padding: 8,
    marginTop: -50,

  },
  scrollView: {
    marginHorizontal: 5,
    height: '100%',
  }

});


export default Registration;