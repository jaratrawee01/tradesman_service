import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text,ImageBackground, View, Image, ScrollView} from 'react-native';


const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };

class Service_form extends Component {
   render() {
    return (

      <SafeAreaView style={styles.container}> 
        <ScrollView>
            <View style={styles.box1}>
                <View>
                    <ImageBackground source={image} resizeMode="cover" style={styles.backgroun}>
                      <Image
                        style={styles.image}
                        source={{uri: 'https://st2.depositphotos.com/2589681/8216/v/600/depositphotos_82168986-stock-illustration-plumber.jpg'}}
                      />
                      <Text style={styles.text}>Yonzook</Text>
                    </ImageBackground>
                </View>
            </View>

            <View style={styles.box2}>
                <View style={styles.box3}>
                    <View>
                        <Text style={styles.text1}>Personal information Form</Text>
                    </View>
                    <View>
                        <Text style={styles.text2}>{'name-username'}</Text>                 
                        <TextInput style={styles.input}/> 
                    </View>
                    <View style={styles.forme}>
                        <Text style={styles.text3}>{'Email'}</Text>                 
                        <TextInput style={styles.input1}/> 
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
    height: 300 ,
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
    backgroundColor: '#FFF0F0',    
  },
  box3: {
    height: 435,
    width: 320,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    borderRadius: 20,
    marginLeft: 18,
    marginRight: 20, 
    marginTop: -80, 
    borderWidth: 1,
    borderColor: '#00c2fe', 
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 35,
    color: '#00c2fe',
    marginTop: 10,
  },
  text1: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  text2: {
    marginLeft: 12,
    fontSize: 16,
    marginTop: 10,
  },
  text3: {
    marginLeft: 20,
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 30,
    width: 150,
    borderWidth: 1,
    borderColor: '#00c2fe',
    fontSize: 23,
    marginLeft: 10,
  
  },
  input1: {
    height: 30,
    width: 135,
    borderWidth: 1,
    borderColor: '#00c2fe',
    fontSize: 23,
    marginLeft: 20,
  
  },forme: {
    marginLeft: 150,
    marginTop: -58,
  },

});



export default Service_form; 