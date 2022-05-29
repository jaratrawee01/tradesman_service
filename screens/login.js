import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,Text,TextInput, View,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class Login extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
            <Text style={styles.text}>App Service</Text>
          <View style={styles.marginTop}>
            <TextInput  style={styles.input}
                placeholder={'Name'}

            />
            <TextInput style={styles.input}
                placeholder={'Passwrod'}
            />
            </View>

            <View style={styles.icons}>
            <AntDesign name="checkcircleo" size={20}color="rgba(159, 63, 233, 1)" />
            <Text style={styles.text1}><Text style={styles.text2}>{'Remember me'}</Text>                   {'Forgot Password?'}</Text>
            </View>

          <View style={styles.button}>
            <TouchableOpacity   style={styles.button1}>
              <Text  style={{ fontSize: 34 , textAlign: 'center' ,color: 'white', marginTop: 4,}}>Log in</Text>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 150,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  input: {
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    padding: 10,
    marginTop: 30,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: 'rgba(159, 63, 233, 1)',
    fontSize: 23,
  },
  text: {
    color: 444,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  button: {
  marginTop: 50,
  margin: 110,
  },
  button1: {
  backgroundColor: 'rgba(159, 63, 233, 1)',
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
     marginLeft: 34,
  },
  marginTop: {
    marginTop: 20,
  },

});


export default Login;