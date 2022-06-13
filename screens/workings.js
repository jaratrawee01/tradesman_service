import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text,ImageBackground, View, Image, ScrollView} from 'react-native';


const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };

class Workings extends Component {
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
                    </ImageBackground>
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
    height: 250 ,
  },
  boxhead: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -8,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image1: {
    width: 128,
    height: 145,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  box2: {
    height: 720,
    width: 360,
    backgroundColor: '#FFF',    
  },
  box3: {
    height: 765,
    width: 320,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,  
    marginTop: -60, 
    marginBottom: 10,
  },






});



export default Workings; 