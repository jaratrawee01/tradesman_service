import  React, { Component } from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text, View, Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}> 
      <ScrollView>
          <View style={styles.boxhead}>
              <View style={styles.box}> 
                  <Image
                  style={styles.image}
                  source={{ uri: 'https://mythailiving.com/wp-content/uploads/2020/07/Be-a-mechanic-720x450.jpg' }}
                />
                <Image
                    style={styles.image1}
                    source={{uri: 'https://mythailiving.com/wp-content/uploads/2020/07/Be-a-mechanic-720x450.jpg'}}
                />
                <Text style={styles.text1}>
                    ช่าง : ยนต์
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

            <View style={styles.box}>
                <Image
                    style={styles.image}
                    source={{ uri: 'https://jobschiangrai.com/storage/uploads/image/master%20photography.jpg' }}
                  />
                  <Image
                      style={styles.image1}
                      source={{uri: 'https://inwfile.com/s-dx/pw8rqy.jpg'}}
                  />
                  <Text style={styles.text1}>
                      ช่าง : กล้อง
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

            <View style={styles.box}>
            <Image
                style={styles.image}
                source={{ uri: 'https://inwfile.com/s-dx/pw8rqy.jpg' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://www.knockdoor.net/info/wp-content/uploads/2020/12/technician-service-removing-air-filter-air-conditioner-cleaning-1200x800.jpg'}}
              />
              <Text style={styles.text1}>
                  ช่าง : แอร์
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

            <View style={styles.box}>
            <Image
                style={styles.image}
                source={{ uri: 'https://www.knockdoor.net/info/wp-content/uploads/2020/12/technician-service-removing-air-filter-air-conditioner-cleaning-1200x800.jpg' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://inwfile.com/s-dx/pw8rqy.jpg'}}
              />
              <Text style={styles.text1}>
                  ช่าง : แอร์
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
boxhead: {
  flexDirection: 'row',
  flexWrap: 'wrap'
},
box: {
  width: '45%',
  height: 240,
  padding: 5,      
  marginTop: 20,
  marginLeft: 12,
  borderRadius: 10,
  backgroundColor: '#fff',
  shadowColor: "#000",
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 2,
  marginBottom: 4,
},
image: {
  width: 140,
  height: 150,
  marginTop: 5,
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
  fontSize: 15, 
  color: '#bcbdbe'
},
icons1: {
  marginLeft: 55,
  fontSize: 15, 
  color: '#bcbdbe',
  marginTop: -16,
},
  icons2: {
    marginLeft: 75,
    fontSize: 15, 
    color: '#bcbdbe',
    marginTop: -15,
  },
  icons3: {
    marginLeft: 95,
    fontSize: 15, 
    color: '#bcbdbe',
    marginTop: -15,
  },
  icons4: {
    marginLeft: 115,
    fontSize: 15, 
    color: '#bcbdbe',
    marginTop: -15,
  },
  icons5: {
    marginTop: -30,
    marginLeft: 12,
  },
  


});

export default Home; 




  