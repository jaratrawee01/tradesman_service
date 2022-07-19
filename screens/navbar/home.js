import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, TouchableWithoutFeedback, View, Image, ScrollView } from 'react-native';
import { connect } from "react-redux";
import technician_type from "../service/getService";


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      address: this.props.posts.address,
      technician: null,
      urlImg: this.props.posts.urlImage,
      login: this.props.posts.login,
    };
  }



  componentDidMount() {

    this.setUrl();
    this.getTechnician_type();

  }
  getTechnician_type = async () => {
    const result = await technician_type.technician_type();
    this.setState({
      technician: result
    });
  }


  setUrl = () => {
    this.props.dispatch({
      type: 'ADD_URL',
      payload: "http://192.168.1.4/project/api-database/images/"
    })
    this.props.dispatch({
      type: 'DELETE_TECHNICAN',
      payload: null
    })
  }

  setLogin(e) {
    if (this.state.login !== null) {
      this.props.navigation.navigate("Tradesman");
      this.props.dispatch({
        type: 'ADD_TECHNICAN',
        payload: e
      })

    }
  }


  customer = () => {
    const { technician, urlImg } = this.state;

    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.box1}>
              <View style={styles.box}>
                <Image
                  style={styles.image2}
                  source={require('../../assets/images/A-11.png')}
                />
              </View>
              <Text style={styles.text}>ประเภทงาน User</Text>
            </View>
            <View style={styles.boxhead}>
              {technician && technician.map((index) => {

                const nameImage = index.image_name;
                const name = index.technician_type;
                const image = (
                  <TouchableWithoutFeedback onPress={() => this.setLogin(name)}>
                    <View style={styles.box3}>
                      <Text style={styles.text1}>{name}</Text>
                      {
                        nameImage !== null ?
                          <Image style={styles.image1} source={{ uri: `${urlImg}image_tradesman/${nameImage}` }} />
                          :
                          <Image style={styles.image1} source={require('../../assets/images/B-1.png')} />
                      }
                    </View>
                  </TouchableWithoutFeedback>
                )
                return image;
              })}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

  tradesman = () => {
    const { technician, urlImg, address } = this.state;
    var technician_1 = [address.technician_1, address.technician_2];


    return (
      <>
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <View style={styles.box1}>
              <View style={styles.box}>
                <Image
                  style={styles.image2}
                  source={require('../../assets/images/A-11.png')}
                />
              </View>
              <Text style={styles.text}>ประเภทงานของคุณ</Text>
            </View>

            <View style={styles.boxhead}>
              {
                technician_1 && technician_1.map((va) => {
                  const image_type = technician && technician.filter((index, id) => {
                    if (va === index.technician_type) {
                      const name = index;
                      return name
                    }
                  })
                  if (image_type) {
                    const nameImage = image_type[0].image_name;
                    const name = image_type[0].technician_type;
                    const image = (
                      <TouchableWithoutFeedback>
                        <View style={styles.box3}>
                          <Text style={styles.text1}>{name}</Text>
                          {
                            nameImage !== null ?
                              <Image style={styles.image1} source={{ uri: `${urlImg}image_tradesman/${nameImage}` }} />
                              :
                              <Image style={styles.image1} source={require('../../assets/images/B-1.png')} />
                          }
                        </View>
                      </TouchableWithoutFeedback>
                    )
                    return image;
                  }
                })
              }


            </View>
          </ScrollView>
        </SafeAreaView>

      </>
    )
  }

  render() {

    const login = this.props.posts.login;

    return (
      <>
        {login !== null ?
          this.props.posts.login.status_user === "ช่าง" ?
            this.tradesman()
            :
            this.customer()
          :
          this.customer()
        }
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',

  },
  boxhead: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: '#37C1FB',
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 100,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 5,
    borderColor: '#fff',
  },
  box1: {
    width: 360,
    height: 220,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
    marginBottom: 4,
    padding: -10,
  },
  box3: {
    width: 160,
    height: 100,
    padding: 5,
    marginTop: 10,
    marginLeft: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2,
    marginBottom: 4,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image1: {
    width: 120,
    height: 70,
    marginTop: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image2: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  text: {
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text1: {
    fontSize: 15,
    fontWeight: 'bold',

  },



});

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps, null)(Home);






