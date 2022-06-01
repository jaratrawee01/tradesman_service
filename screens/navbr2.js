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

                    <View style={styles.textbox1}>
                        <MaterialCommunityIcons name="home" style={styles.iconColor} />
                        <Text style={styles.textIcon}>Home</Text>
                    </View>

                    <View style={styles.textbox1}>
                        <MaterialCommunityIcons name="shopping" style={styles.iconColor} />
                        <Text style={styles.textIcon}>Shop</Text>
                    </View>

                    <View style={styles.textbox1}>
                        <MaterialCommunityIcons name="message-processing" style={styles.iconColor} />
                        <Text style={styles.textIcon}>Message</Text>
                    </View>

                    <View style={styles.textbox1}>
                        <FontAwesome name="user" style={styles.iconColor} />
                        <Text style={styles.textIcon}>Profile</Text>
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
        height: 70,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 2,
        paddingLeft: 5,
        paddingRight: 5,

    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginLeft: -5,
        marginRight: -5,
    },
    textbox1: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textIcon: {
      fontSize: 16,
    },
    iconColor: {
        fontSize: 34, 
        color: '#01C1FF',
    },

});
