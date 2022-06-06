import * as React from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text, View, Image, ScrollView} from 'react-native';



export default function Home() {

    return (
      <SafeAreaView style={styles.container}> 
      <ScrollView>
          <View >
                <Text style={styles.text}>Product Portfolio</Text>
          </View>

          <View style={styles.box1}>
              <Image
                style={styles.image}
                source={{ uri: 'https://st.depositphotos.com/1647366/2315/v/950/depositphotos_23151444-stock-illustration-cartoon-of-technician-or-repairman.jpg' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://i.pinimg.com/originals/0c/62/50/0c6250e9411e1042671f170db1aab1fc.jpg'}}
              />
              <Text style={styles.text1}>
                  Half chopping
              </Text>
          </View>

          <View style={styles.box2}>
              <Image
                style={styles.image}
                source={{ uri: 'https://st.depositphotos.com/1647366/2315/v/950/depositphotos_23151444-stock-illustration-cartoon-of-technician-or-repairman.jpg' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://i.pinimg.com/originals/0c/62/50/0c6250e9411e1042671f170db1aab1fc.jpg'}}
              />
              <Text style={styles.text1}>
                  Half chopping
              </Text>
          </View>

          <View style={styles.box1}>
              <Image
                style={styles.image}
                source={{ uri: 'https://st.depositphotos.com/1647366/2315/v/950/depositphotos_23151444-stock-illustration-cartoon-of-technician-or-repairman.jpg' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://i.pinimg.com/originals/0c/62/50/0c6250e9411e1042671f170db1aab1fc.jpg'}}
              />
              <Text style={styles.text1}>
                  Half chopping
              </Text>
          </View>

          <View style={styles.box2}>
              <Image
                style={styles.image}
                source={{ uri: 'https://st.depositphotos.com/1647366/2315/v/950/depositphotos_23151444-stock-illustration-cartoon-of-technician-or-repairman.jpg' }}
              />
               <Image
                  style={styles.image1}
                  source={{uri: 'https://i.pinimg.com/originals/0c/62/50/0c6250e9411e1042671f170db1aab1fc.jpg'}}
              />
              <Text style={styles.text1}>
                  Half chopping
              </Text>
          </View>

        </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
container: {
  width: '100%',
  height: '100%',
  position: 'relative',
  backgroundColor: '#98c5df',
},
text:{
  marginTop: 20,
  marginLeft: 20,
  fontSize: 22,
  fontWeight: 'bold',
},
box1: {
  height: 240,
  marginLeft: 20,
  marginRight: 190,
  marginTop: 30,
  borderRadius: 10,
  backgroundColor: '#fff',
  shadowColor: "#000",
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 8,
},
box2: {
  height: 240,
  marginLeft: 190,
  marginRight: 20,
  marginTop: -240,
  borderRadius: 10,
  backgroundColor: '#fff',
  shadowColor: "#000",
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 8,
},
  image: {
    width: 130,
    height: 120,
    marginTop: 10,
    borderRadius: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderColor: '#000',
  },
  image1: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#00c2fe',
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 45,
    marginTop: -20,
  },


});
