import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {

    return (
        <View style={styles.footer}>
            <View style={styles.navbar}>

                <View style={styles.textbox1}>
                    <MaterialCommunityIcons name="home" style={styles.iconColorcheck} />
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
    );
}

