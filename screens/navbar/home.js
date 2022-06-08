import  React, { Component } from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text, View, Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}> 
      <ScrollView>
         
          <View style={styles.box1}>
              <Image
                style={styles.image}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49E9LZuJeK6okNHNhtXQHW3KYacfbvusmkQ&usqp=CAU' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49E9LZuJeK6okNHNhtXQHW3KYacfbvusmkQ&usqp=CAU'}}
              />
              <Text style={styles.text1}>
                  ช่างแอร์
              </Text>
              <Text style={styles.text}>
                รีวิว :
              </Text>
                <View style={styles.icons5}>
                  <FontAwesome name="star" style={styles.icons} />
                  <FontAwesome name="star" style={styles.icons1} />
                  <FontAwesome name="star" style={styles.icons2} />
                  <FontAwesome name="star" style={styles.icons3} />
                  <FontAwesome name="star" style={styles.icons4} />
                </View>
          </View>

          <View style={styles.box2}>
              <Image
                style={styles.image}
                source={{ uri: 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZO800hYYto9Jk1MwOEVqlw2qlaRfLF.jpg' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://static.thairath.co.th/media/4DQpjUtzLUwmJZZO800hYYto9Jk1MwOEVqlw2qlaRfLF.jpg'}}
              />
              <Text style={styles.text1}>
                  ช่างไฟ
              </Text>
              <Text style={styles.text}>
                รีวิว :
              </Text>
                <View style={styles.icons5}>
                  <FontAwesome name="star" style={styles.icons} />
                  <FontAwesome name="star" style={styles.icons1} />
                  <FontAwesome name="star" style={styles.icons2} />
                  <FontAwesome name="star" style={styles.icons3} />
                  <FontAwesome name="star" style={styles.icons4} />
                </View>
          </View>

          <View style={styles.box1}>
              <Image
                style={styles.image}
                source={{ uri: 'https://mythailiving.com/wp-content/uploads/2020/07/Be-a-mechanic-720x450.jpg' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://mythailiving.com/wp-content/uploads/2020/07/Be-a-mechanic-720x450.jpg'}}
              />
              <Text style={styles.text1}>
                  ช่างยนต์
              </Text>
              <Text style={styles.text}>
                รีวิว :
              </Text>
                <View style={styles.icons5}>
                  <FontAwesome name="star" style={styles.icons} />
                  <FontAwesome name="star" style={styles.icons1} />
                  <FontAwesome name="star" style={styles.icons2} />
                  <FontAwesome name="star" style={styles.icons3} />
                  <FontAwesome name="star" style={styles.icons4} />
                </View>
          </View>

          <View style={styles.box2}>
              <Image
                style={styles.image}
                source={{ uri: 'https://inwfile.com/s-dx/pw8rqy.jpg' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://inwfile.com/s-dx/pw8rqy.jpg'}}
              />
              <Text style={styles.text1}>
                  ช่างปะปา
              </Text>
              <Text style={styles.text}>
                รีวิว :
              </Text>
                <View style={styles.icons5}>
                  <FontAwesome name="star" style={styles.icons} />
                  <FontAwesome name="star" style={styles.icons1} />
                  <FontAwesome name="star" style={styles.icons2} />
                  <FontAwesome name="star" style={styles.icons3} />
                  <FontAwesome name="star" style={styles.icons4} />
                </View>
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
  backgroundColor: '#f8fdff',
},
box1: {
  height: 240,
  marginLeft: 15,
  marginRight: 185,
  marginTop: 20,
  borderRadius: 10,
  backgroundColor: '#fff',
  shadowColor: "#000",
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 6,
  marginBottom: 4,
},
box2: {
  height: 240,
  marginLeft: 185,
  marginRight: 15,
  marginTop: -245,
  borderRadius: 10,
  backgroundColor: '#fff',
  shadowColor: "#000",
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 6,
  marginBottom: 4,
},
  image: {
    width: 140,
    height: 150,
    marginTop: 10,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image1: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 50,
  },
  text: {
    marginTop: 15,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 15,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 45,
    marginTop: -22,
  },
  icons: {
    marginLeft: 35,
    marginTop: 15,
    fontSize: 18, 
    color: '#bcbdbe'
  },
  icons1: {
    marginLeft: 55,
    marginTop: 15,
    fontSize: 18, 
    color: '#bcbdbe',
    marginTop: -18,
  },
  icons2: {
    marginLeft: 75,
    marginTop: 15,
    fontSize: 18, 
    color: '#bcbdbe',
    marginTop: -18,
  },
  icons3: {
    marginLeft: 95,
    marginTop: 15,
    fontSize: 18, 
    color: '#bcbdbe',
    marginTop: -18,
  },
  icons4: {
    marginLeft: 115,
    marginTop: 15,
    fontSize: 18, 
    color: '#bcbdbe',
    marginTop: -18,
  },
  icons5: {
    marginTop: -33,
    marginLeft: 12,
  },
  


});

export default Home; 