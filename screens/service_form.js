import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text,ImageBackground, View, Image, ScrollView} from 'react-native';


const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };

class Service_form extends Component {
   render() {
    return (

      <SafeAreaView style={styles.container}> 
        <ScrollView>
                <View>
                    <ImageBackground source={image} resizeMode="cover" style={styles.backgroun}>
                      <Image
                        style={styles.image}
                        source={{uri: 'https://www.cdti.ac.th/uploads/images/image_750x422_5da3c6560cde8.jpg'}}
                      />
                      <Text style={styles.text}>Yonzook</Text>
                    </ImageBackground>
                </View>

            <View style={styles.box2}>
                 <View style={styles.box3}>
                    <View>
                        <Text style={styles.text1}>Personal information Form</Text>
                    </View>
                  <View style={styles.boxhead}>

                      <View>
                        <Text style={styles.text2}>{'name-username'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                      <View>
                        <Text style={styles.text2}>{'Email'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                      <View>
                        <Text style={styles.text2}>{'บ้านเลขที่'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                      <View>
                        <Text style={styles.text2}>{'ตำบล'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                      <View>
                        <Text style={styles.text2}>{'อำเภอ'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                      <View>
                        <Text style={styles.text2}>{'จังหวัด'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                  </View>

                  <View>
                      <View>
                        <Text style={styles.text2}>{'รหัสไปรษณีย์'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                      <View>
                        <Text style={styles.text2}>{'ชื่อช่าง'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                      <View>
                        <Text style={styles.text2}>{'ประเภทงาน'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                      <View>
                        <Text style={styles.text2}>{'ผลงานช่าง'}</Text>                 
                        <TextInput style={styles.box4}/> 
                      </View>

                      <View>
                        <Text style={styles.text2}>{'คำอธิบาย'}</Text>                 
                        <TextInput style={styles.box6}/> 
                      </View>

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
    height: 250 ,
  },
  boxhead: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -8,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
    borderRadius: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image1: {
    width: 128,
    height: 145,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

  },
  box2: {
    height: 860,
    width: 360,
    backgroundColor: '#FFF',    
  },
  box3: {
    height: 915,
    width: 320,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20, 
    marginTop: -60, 
    marginBottom: 10,
  },
  box4: {
    height: 40,
    width: 280,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 4,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 5, 
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 5,
  },
  box6: {
    height: 60,
    width: 280,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 5, 
    marginTop: 5,
    fontSize: 16,
  },

  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#00c2fe',
    marginTop: 5,
  },
  text1: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  text2: {
    marginLeft: 20,
    fontSize: 16,
    marginTop: 15,
  },
  input: {
    height: 50,
    width: 150,
    fontSize: 25,
    marginLeft: 20,
    shadowOffset: {width: 0,height: 6,},
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 2,
  
  },
  forme: {
    marginLeft: 150,
    marginTop: -58,
  },

});



export default Service_form; 