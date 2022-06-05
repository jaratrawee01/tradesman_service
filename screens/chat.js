import * as React from 'react';
import { SafeAreaView,StyleSheet,TextInput,Text, View, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function Chat() {

    return (
      <SafeAreaView style={styles.container}> 
        <ScrollView>
            <View style={styles.input}>
                <Ionicons name="arrow-back" style={styles.icons}/>
                <Text style={styles.text}>Anna</Text>
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
icons: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 40, 
    color: "black" ,
},
text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 70,
    marginTop: -35,
}



});
