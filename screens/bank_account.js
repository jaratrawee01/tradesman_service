import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text,TouchableOpacity, View, Image, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

 
class Bank_account extends Component {
   render() {
    return (

      <SafeAreaView style={styles.container}> 
        <ScrollView>
            <View style={styles.box}>
              <View>
                <Text style={styles.text1}>บัญชีธนาคาร</Text>
              </View>
              <View style={styles.boxhead}>

                <View>
                  <Text style={styles.text2}><Text style={styles.text2}>ข้อมูลล่าสุด</Text>    24 ก.พ 2565 17.00</Text>
                  <View style={styles.box1}>
                      <Text style={styles.text3}>เลขบัญชีธนาคาร</Text>
                      <Text style={styles.text4}>140-158-1555</Text>
                      <Text style={styles.text8}><Text style={styles.text8}>จรัสรวี</Text> สายวรรณ</Text>
                      <Text style={styles.text5}>ยอดเงินที่ใช้ได้</Text>
                      <Text style={styles.text6}><Text style={styles.text6}>50,900.00</Text>  THB</Text>
                      <TouchableOpacity style={styles.button1}>
                      <Text style={styles.text7}>ชำระเงิน</Text>
                      </TouchableOpacity>
                  </View>
                </View>

                <View >
                    <TouchableOpacity style={styles.button} 
                    onPress={() => this.props.navigation.navigate("FromBank")}
                    >
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
}



const styles = StyleSheet.create({
container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  box: {
    height: 350,
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
  box1: {
    height: 165,
    width: 290,
    backgroundColor: '#cacdd2',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 15,
    marginLeft: 15,
    marginRight: 5,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 15,

  },
  box2: {
    height: 50,
    width: 280,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 5,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 30,
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
    textAlign: 'center'
  },
  text3: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  text4: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  text5: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 165,
  },
  text6: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    marginLeft: 155,
  },
  text7: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text8: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
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



export default Bank_account; 