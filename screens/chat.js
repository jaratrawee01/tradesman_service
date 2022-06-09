import * as React from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text, View, Image, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function Chat() {

    return (
      <SafeAreaView style={styles.container}> 
        <View style={styles.footer}>
          <View >
              <Image
                style={styles.image}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD47w-kjxI64_mo8RmdEFl0qJz-zZAwXDn8r6wNKZsyck8f4g3he8Qib_S_aXrygr6rlY&usqp=CAU' }}
              />
              
          </View>
              
          <View style={styles.box1}>
            <View style={styles.boxhead}> 
               <TextInput
                style={styles.text}
                placeholder="Type a message"
                underlineColorAndroid="transparent"/>
                <AntDesign name="smile-circle" style={styles.icons} /> 
            </View>
          </View>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
container: {
  width: '100%',
  height: '100%',
  position: 'relative',
  backgroundColor: '#f8fdff',
},
boxhead: {
  flexDirection: "row",
  justifyContent: 'space-between',
},
footer: {
  flex: 1,
  justifyContent: 'flex-end',
},
text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 10,
},
box1: {
  height: 50,
  marginLeft: 25,
  marginRight: 25,
  borderRadius: 25,
  backgroundColor: '#bcbdbe',
  shadowColor: "#000",
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 2,
  marginBottom: 10,
  },
icons: {
  fontSize: 30,
  color: '#00c2fe',
  marginTop: 10,
  marginRight: 20,
},
image: {
  width: 50,
  height: 50,
  paddingTop: -20,
  borderRadius: 50,
},



});
