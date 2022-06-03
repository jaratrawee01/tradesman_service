import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,Text,TextInput,Image, View,TouchableOpacity, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

class Login extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.image}>
          <Image 
            source={{ uri: 'https://www.opexengine.com/wp-content/uploads/2018/11/Professional-Services-for-Private-SaaS-Vendors.png' }}
            style={{ width: 200, height: 130 }}
          />
        </View>
          

        <View style={styles.marginTop}>
            <View style={styles.input}>
            <FontAwesome name="user" size={24} color="#00c2fe" />   
                <TextInput 
                    style={{flex: 1, paddingLeft: 12}}
                    placeholder="Name"
                    underlineColorAndroid="transparent"
                />
            </View>

            <View style={styles.input}>
            <FontAwesome name="unlock-alt" size={24} color="#00c2fe" />   
                <TextInput
                    style={{flex: 1, paddingLeft: 12}}
                    placeholder="Password"
                    underlineColorAndroid="transparent"
                />
            </View>
        </View>

            <View style={styles.icons}>
            <AntDesign name="checkcircleo" size={20} color="#00c2fe" />
            <Text style={styles.text1}><Text style={styles.text2}>{'Remember me'}</Text>           {'Forgot Password?'}</Text>
            </View>

          <View style={styles.button}>
            <TouchableOpacity   style={styles.button1}>
              <Text  style={{ fontSize: 34 , textAlign: 'center' ,color: 'white', marginTop: 4,}}>Log in</Text>
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
    height:  100,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
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
    color: 444,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
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
  text2: {
    marginTop: -18,
    fontSize: 16,
  },
  icons: {
     marginTop: 16,
     marginLeft: 50,
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
    marginTop: -20,
    marginLeft: 100 ,
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
    marginLeft: 200 ,
    alignItems: 'center',
    padding: 8,
    marginTop: -50,

  },
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '25%',
  },
  scrollView: {
    marginHorizontal: 5,
    height: '100%',
  }

});


export default Login;