import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
    return (

        <SafeAreaView style={styles.container}>
            <Text style={styles.box}>HOL</Text>
            <View style={styles.footer}>
                <View style={styles.navbar}>
                    <Text style={styles.textbox1}>wwww</Text>
                    <Text style={styles.textbox2}>asd55555a</Text>
                    <Text style={styles.textbox1}>asd55555a</Text>
                    <Text style={styles.textbox1}>5555</Text>
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
        backgroundColor: 'orange',
    },
    box: {
        width: '100%',
        height: 80,
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'skyblue',
    },
    navbar: {
        width: '100%',
        height: 80,
        backgroundColor: 'red',
        flexDirection: 'row'
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    textbox1: {
        margin: 10,
        width: 50, height: 50, backgroundColor: 'powderblue',
    },
    textbox2: {
        margin: 10,
        width: 50, height: 50, backgroundColor: 'skyblue',
    },
    textbox3: {
        margin: 10,
        width: 50, height: 50, backgroundColor: 'powderblue',
    }
});
