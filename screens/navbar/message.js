import * as React from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text, View, Image, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Message() {

    return (
      <SafeAreaView style={styles.container}> 
        <ScrollView>
          <View style={styles.top}>
            <View style={styles.box1}>
              <Image
                  style={styles.image}
                  source={{uri: 'https://i.pinimg.com/originals/0c/62/50/0c6250e9411e1042671f170db1aab1fc.jpg'}}
              />
              <Text style={styles.text1}><Text style={styles.text2}>{'# Anna'}</Text>                             {'14.06'}</Text>
              <Text style={styles.text3}>hello</Text>
              <Text style={styles.text4}>{'2'}</Text>
            </View>

            <View style={styles.box1}>
              <Image
                  style={styles.image}
                  source={{uri: 'https://i.pinimg.com/736x/27/52/8c/27528cc7acfc0694be05a32c7673a052.jpg'}}
              />
              <Text style={styles.text1}><Text style={styles.text2}>{'# Jenny'}</Text>                           {'22.36'}</Text>
              <Text style={styles.text3}>what's the jod</Text>
              <Text style={styles.text4}>{'1'}</Text>
            </View>

            <View style={styles.box1}>
              <Image
                  style={styles.image}
                  source={{uri: 'https://i.pinimg.com/736x/11/9b/61/119b617c1d7e60a63466016066353a47.jpg'}}
              />
              <Text style={styles.text1}><Text style={styles.text2}>{'# Minton'}</Text>                         {'14.06'}</Text>
              <Text style={styles.text3}>want to see the work</Text>
              <Text style={styles.text4}>{'3'}</Text>
            </View>

            <View style={styles.box1}>
              <Image
                  style={styles.image}
                  source={{uri: 'https://png.pngtree.com/element_origin_min_pic/16/06/18/2257655487af886.jpg'}}
              />
              <Text style={styles.text1}><Text style={styles.text2}>{'# Jasmine'}</Text>                       {'14.06'}</Text>
              <Text style={styles.text3}>want to see the work</Text>
              <Text style={styles.text4}>{'3'}</Text>
            </View>
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
  backgroundColor: '#eefbff',
},
top: {
  marginTop: 20,
},
box1: {
  height: 80,
  marginLeft: 25,
  marginRight: 25,
  padding: 10,
  marginTop: 10,
  borderRadius: 10,
  backgroundColor: '#fff',
  shadowColor: "#000",
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 4,
  marginBottom: 10,
},
image: {
  width: 50,
  height: 50,
  marginTop: 5,
  borderRadius: 50,
  borderWidth: 1,
  borderColor: '#00c2fe',
},
text1: {
  marginLeft: 55,
  marginTop: -50,
  fontSize: 18,
},
text2: {
  marginTop: -18,
  fontSize: 20,
  fontWeight: 'bold',
},
text3: {
  marginLeft: 60,
  fontSize: 20,
  
},
text4: {
  textAlign: 'center',
  marginLeft: 'auto',
  marginRight: 20,
  marginTop: -18,
  fontSize: 18,
  width: 20,
  height: 20,
  backgroundColor: '#5f6569',
  borderRadius: 20,
  color: '#fff'
},


});
