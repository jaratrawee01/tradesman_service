import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
    
    return (

        <SafeAreaView style={styles.container}>
           <View style={styles.box}>
           <Text>HO555566777888</Text>
           </View>
            <View style={styles.footer}>
                <View style={styles.navbar}>

                    <Text style={styles.textbox1}>
                        <MaterialCommunityIcons name="home" size={35} color="#01C1FF" />
                        <Text>Home</Text>
                    </Text>

                    <Text style={styles.textbox1}>
                        <MaterialCommunityIcons name="shopping" size={35} color="#01C1FF" />
                        <Text style={styles.text}>Shop</Text>
                    </Text>

                    <Text style={styles.textbox1}>
                        <MaterialCommunityIcons name="message-processing" size={35} color="#01C1FF" />
                        <Text>Chat</Text>
                    </Text>

                    <Text style={styles.textbox1}>
                        <FontAwesome name="user" size={35} color="#01C1FF" />
                        <Text>Profile</Text>
                    </Text>
                    
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
    },
    box: {
        width: '100%',
        height: '100%',
        height: 80,
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'skyblue',
    },
    navbar: {
        width: '100%',
        height: 90,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 2,

    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    textbox1: {
        position: 'relative',
        marginTop: 15,
        marginLeft: 30,
        margin: 10,
        width: 50, 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
    },
    text: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         position: 'absolute',
         marginLeft: 50,
    },

});
