import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import { connect } from "react-redux";

const image = { uri: 'https://www.roojai.com/wp-content/uploads/2018/07/how-to-choose-garage-car-mechanic-cover.jpg' };

class Information extends Component {
  render() {

console.log(this.props.posts.login);
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView>

          <View style={styles.box}>
            <Text style={styles.text}>ข้อมูลเกี่ยวกับบัญชี</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.box3}>
              <Text style={styles.text2}>{'เบอร์โทร'}</Text>
              <Text style={styles.text3}>{this.props.posts.login.phone}</Text>
            </View>


            <View style={styles.box3}>
              <Text style={styles.text2}>{'สถานะการสมัคร'}</Text>
              <Text style={styles.text3}>{this.props.posts.login.status_user}</Text>
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
    marginBottom: 10,
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
  text2: {
    marginLeft: 25,
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold',
  },
  text3: {
    marginLeft: 210,
    fontSize: 18,
    marginTop: -20,
    fontWeight: 'bold',
  },

});

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps,null)(Information);
