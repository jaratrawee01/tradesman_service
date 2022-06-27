import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text,ImageBackground, TouchableOpacity, View, Image, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };

class Information extends Component {
   render() {
    return (

      <SafeAreaView style={styles.container}> 
        <ScrollView> 

                <View style={styles.box}>
                <Text style={styles.text}>ข้อมูลเกี่ยวกับบัญชี</Text>
                </View>

              <View style={styles.box}>
                  <View  style={styles.box3}>
                        <Text style={styles.text2}><Text style={styles.text2}>{'ชื่อ'}</Text>                                        {'Jason Amada'}</Text>                
                    </View>

                    <View  style={styles.box3}>
                        <Text style={styles.text2}><Text style={styles.text2}>{'อีเมล'}</Text>                     {'aaaa_dddd@gmail.com'}</Text>                 
                    </View>

                    <View style={styles.box3}>
                        <Text style={styles.text2}><Text style={styles.text2}>{'เบอร์โทร'}</Text>                             {'09999999999'}</Text>              
                    </View>

                    <View  style={styles.box3}>
                        <Text style={styles.text2}><Text style={styles.text2}>{'รหัสผ่าน'}</Text>                              {'asasdlll11111'}</Text>                 
                    </View>
              </View>
            
{/* 
                <View style={styles.box2}>
                  <Text style={styles.text1}>อัพโหลดภาพ</Text>
                </View> */}

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
      backgroundColor: '#fff'
  },
  box: {
    marginTop: 20,
  },
  box2: {
    height: 40,
    width: 200,
    backgroundColor: '#bcbdbe',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
    marginBottom: 10,
  },
  box3: {
    height: 50,
    width: 320,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    padding: -10,
    marginBottom: 4,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 20,
  },
  text1: {
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 2,
  },
  text2: {
    marginLeft: 30,
    fontSize: 16,
    marginTop: 15,
    fontWeight: 'bold',
  },
  text3: {
    marginLeft: 30,
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold',
  },

});
export default Information;
