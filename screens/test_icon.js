import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,Text,TextInput, View,TouchableOpacity,Image} from 'react-native';
import { Button } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

class Login extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
            <AntDesign name="checkcircleo"  style={styles.imageStyle} size={20}color="rgba(159, 63, 233, 1)" />    
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.sectionStyle}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
            }}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Mobile No Here"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop:150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
  paddingLeft:5,
  paddingRight:20,
  paddingTop:5,
  paddingBottom:10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});


export default Login;