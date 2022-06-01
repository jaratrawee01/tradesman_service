import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Index from './screens/home/index';
import Navbar from './screens/navbar';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
    
        <View style={styles.box}>
        <ScrollView  style={styles.scrollView}>
          <Index />
          </ScrollView>
        </View>

      <Navbar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 0,
    height: '100%',
  },


});