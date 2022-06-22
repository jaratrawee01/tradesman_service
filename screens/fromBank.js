import React, { Component , useState} from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text,TouchableOpacity, View, Image, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import bookBank from './service/getService';

 
const FromBank = () => {

    const [name, setName] = useState(null);
    const [number_bank, setNumber_bank] = useState(null);
    const [bank, setBank] = useState(null);



    const serve = async () => {

        const data = [name, number_bank, bank];

            const result = await bookBank.createBookBank(data);
            if (result === "success") {
              popToTop();
            }
          
      };
    
/* 
      bookbank = (e,m) => {
       console.log( e.nativeEvent.text);
      };
 */
      console.log(name ,number_bank, bank);
    return (

      <SafeAreaView style={styles.container}> 
        <ScrollView>
            <View style={styles.box}>
              <View>
                <Text style={styles.text1}>บัญชีธนาคาร</Text>
              </View>
              <View style={styles.boxhead}>

                <View>
                    <Text style={styles.text2}>{'ชื่อบัญชีธนาคาร'}</Text>
                    <TextInput style={styles.box2} 
                     onChange={(e) => {
                        setName(e.nativeEvent.text);
                      }}
                    />
                </View>

                <View>
                    <Text style={styles.text2}>{'เลขบัญชีธนาคาร'}</Text>
                    <TextInput style={styles.box2}
                     onChange={(e) => {
                        setNumber_bank(e.nativeEvent.text);
                      }}
                    />
                </View>

                <View>
                    <Text style={styles.text2}>{'ธนาคาร'}</Text>
                    <TextInput style={styles.box2} 
                    id="backname"
                    onChange={(e) => {
                        setBank(e.nativeEvent.text);
                      }}
                    />
                </View>

                <View >
                    <TouchableOpacity style={styles.button} onPress={() => serve()}>
                    <AntDesign name="pluscircleo" style={styles.icons} />
                      <Text style={styles.text}>เพิ่มบัญชี</Text>
                    </TouchableOpacity>
                </View>
            
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

  },
  box: {
    height: 420,
    width: 320,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 20,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 10,
  },
  box2: {
    height: 50,
    width: 280,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 5,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 10,
  },
  text: {
    flex: 1,
    paddingLeft: 110,
    fontSize: 20,
    marginTop: -25,
  },
  text1: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center'
  },
    text2: {
        marginLeft: 20,
        fontSize: 16,
        marginTop: 15,
    },
  icons: {
    fontSize: 25,
    marginTop: 13,
    marginLeft: 75
  },
  button: {
    height: 50,
    width: 280,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 5,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 30,
  },
  button1: {
    height: 25,
    width: 100,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 30,
    marginLeft: 162,
    marginTop: 8,
  },


});



export default FromBank; 