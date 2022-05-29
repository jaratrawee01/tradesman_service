import * as React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,TextInput,TouchableOpacity,Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#000000', '#FFFF00', 'red']}
        style={styles.background}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', 'red']}
        style={styles.button}>
        <Text style={styles.text}>Sign in with Facebook</Text>
      </LinearGradient>
 

      <View style={styles.sectionStyle}>
            <AntDesign name="checkcircleo"  style={styles.imageStyle} size={20}color="rgba(159, 63, 233, 1)" />    
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"
          />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  button: {
    marginTop: 150,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
 /*    color: '#fff', */
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
});
