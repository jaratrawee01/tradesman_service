import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text,  View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


class Profile_tradesman extends Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.box1}>
              <Image
                style={styles.image}
                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1zrmmzTYC6hHZP-XapM5K0eCU3cy8LldkTz6C-MXkUxO6iRX1GQvar3LCvtzvhzWb2Y&usqp=CAU'}}
             />
             <Text style={styles.text}>Jason Amada</Text>
             <Text style={styles.text1}>aaaa_dddd@gmail.com</Text>
             <FontAwesome name="star" style={styles.icons} />
             <FontAwesome name="star" style={styles.icons1} />
             <FontAwesome name="star" style={styles.icons2} />
             <FontAwesome name="star" style={styles.icons3} />
             <FontAwesome name="star" style={styles.icons4} />
          </View>

          <View style={styles.box3}>
              <FontAwesome5 name="user-alt" style={styles.icons5} />
              <Text style={styles.text2}>{'Profile'}</Text>                            
          </View>

          <View style={styles.box3}>
              <FontAwesome5 name="address-book" style={styles.icons5} />
              <Text style={styles.text2}>{'Contact informatiom'}</Text>                           
          </View>

          <View style={styles.box3}>
              <FontAwesome5 name="unlock-alt" style={styles.icons5} />
              <Text style={styles.text2}>{'Change user/password'}</Text>                             
          </View>

          <View style={styles.box3}>
              <Ionicons name="chatbox-ellipses-sharp" style={styles.icons5} />
              <Text style={styles.text2} onPress={() => this.props.navigation.navigate('Login')}>{'Cnat'}</Text>                             
          </View>

          <View style={styles.box3}>
              <FontAwesome5  name="money-check-alt" style={styles.icons6} />
              <Text style={styles.text2}>{'Pay for'}</Text>                             
          </View>

          <View style={styles.box4}>
              <Image
                style={styles.image1}
                source={{uri: 'https://teerapong5839010009.files.wordpress.com/2017/04/011.jpg'}}
             />
              <Image
                style={styles.image2}
                source={{uri: 'https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg'}}
             />
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
    backgroundColor: '#eefbff',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: '#000',
  },
  image1: {
    width: 130,
    height: 130,
    marginTop: 15,
    borderRadius: 10,
    marginLeft: 13,
    borderWidth: 1,
    borderColor: '#000',
  },
  image2: {
    width: 130,
    height: 130,
    marginTop: -130,
    borderRadius: 10,
    marginLeft: 158,
    borderWidth: 1,
    borderColor: '#000',
  },
  box1: {
    height: 250,
    width: 300,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 20,
    marginLeft: 28,
    marginRight: 20,
    marginTop: 25,
  },
  box3: {
    height: 60,
    width: 300,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 10,
    marginLeft: 28,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 4,
  },
  box4:{
    height: 160,
    width: 300,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 10,
    marginLeft: 28,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 4,
  }, 
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
  },
  text1: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 20,
    marginTop: 5,
  },
  text2: {
    marginLeft: 80,
    fontSize: 20,
    marginTop: -35,
  },
  icons: {
    marginLeft: 80,
    marginTop: 15,
    fontSize: 24, 
    color: '#bcbdbe'
  },
  icons1: {
    marginLeft: 110,
    marginTop: 15,
    fontSize: 24, 
    color: '#bcbdbe',
    marginTop: -25,
  },
  icons2: {
    marginLeft: 140,
    marginTop: 15,
    fontSize: 24, 
    color: '#bcbdbe',
    marginTop: -25,
  },
  icons3: {
    marginLeft: 170,
    marginTop: 15,
    fontSize: 24, 
    color: '#bcbdbe',
    marginTop: -25,
  },
  icons4: {
    marginLeft: 200,
    marginTop: 15,
    fontSize: 24, 
    color: '#bcbdbe',
    marginTop: -25,
  },
  icons5: {
    width: 50,
    height: 48,
    marginLeft: 10,
    marginTop: 6,
    fontSize: 24, 
    color: '#00c2fe',
    backgroundColor: '#dcecf4',
    borderRadius: 10,
    paddingTop: 12,
    paddingLeft: 14,
  },
  icons6: {
    width: 50,
    height: 48,
    marginLeft: 10,
    marginTop: 6,
    fontSize: 22, 
    color: '#00c2fe',
    backgroundColor: '#dcecf4',
    borderRadius: 10,
    paddingTop: 12,
    paddingLeft: 12,
  },

});



export default Profile_tradesman; 






