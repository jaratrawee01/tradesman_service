import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";
import getMessage from '../service/getService';

class Message extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: null,
      urlImg: null,
      messageGrou: null,
      starusLogin: this.props.posts.login
    };
  }

  componentDidMount() {
    if (this.state.starusLogin === null || this.state.message === null) {
      this.set_State();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.starusLogin !== this.state.starusLogin && this.state.starusLogin !== null) {
      this.set_State();
    }
    if (this.state.message === null && prevProps.message !== this.state.message) {
      this.set_State();
    }
  }

  set_State = async () => {
    const { starusLogin } = this.state;
    if (starusLogin !== null) {
      if (starusLogin.status_user === "ลูกค้าทั่วไป") {
        const idlogin = starusLogin.id;
        const result = await getMessage.getMessage_user(idlogin);
        const resultGrouBy = await getMessage.getMessage_user_groupBy(idlogin);
        if (result) {
          this.setState({
            message: result,
            messageGrou: resultGrouBy,
            urlImg: this.props.posts.urlImage,
            starusLogin: this.props.posts.login
          })
        }
      } else {
        const idlogin2 = starusLogin.id;
        const result1 = await getMessage.getMessage_technician(idlogin2);
        const resultGrouBy = await getMessage.getMessage_technician_groupBy(idlogin2);
        if (result1) {
          this.setState({
            message: result1,
            messageGrou: resultGrouBy,
            urlImg: this.props.posts.urlImage,
            starusLogin: this.props.posts.login
          })
        }
      }
    }

  }
  clickChat(e) {
    console.log(e);
    this.props.dispatch({
      type: 'ADD_IDTECHNICAN',
      payload: e
    })
    this.props.navigation.navigate("Chat")

  }

  user = async () => {
    const { message, messageGrou, urlImg } = this.state;
    return (
      <>
        {
          messageGrou && messageGrou.map((index) => {
            const id_teh = message && message.filter((va) => {
              if (va.id_technician === index.id_technician) {
                if (va.status_read === "0") {
                  return va.id_technician;
                }
              }
            }
            )
            const name = (
              <TouchableWithoutFeedback onPress={() => this.clickChat(index.id_technician)}>
                <View style={styles.box1}>
                  {index.file_src !== null ?
                    <Image style={styles.image} source={{ uri: `${urlImg}profile/${index.file_src}` }} />
                    :
                    <Image style={styles.image} source={{ uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg" }} />
                  }
                  <Text style={styles.text1}>
                    <Text style={styles.text2}>{index.name}</Text> {"14.06"}
                  </Text>
                  <Text style={styles.text3}>Message  ลูกค้า </Text>
                  {
                    id_teh.length !== 0 ? <Text style={styles.text4}>{id_teh.length}</Text>
                      :
                      null
                  }
                </View>
              </TouchableWithoutFeedback>
            )
            return name;
          })
        }
      </>
    )
  }

  technician() {
    const { message, messageGrou, urlImg } = this.state;
    return (
      <>
        {
          messageGrou && messageGrou.map((index) => {
            const id_teh = message && message.filter((va) => {
              if (va.idUser === index.idUser) {
                if (va.status_read === "0") {
                  return va.idUser;
                }
              }
            }
            )
            const name = (
              <TouchableWithoutFeedback onPress={() => this.clickChat(index.idUser)}>
                <View style={styles.box1}>
                  {index.file_src !== null ?
                    <Image style={styles.image} source={{ uri: `${urlImg}profile/${index.file_src}` }} />
                    :
                    <Image style={styles.image} source={{ uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg" }} />
                  }
                  <Text style={styles.text1}>
                    <Text style={styles.text2}>{index.name}</Text> {"14.06"}
                  </Text>
                  <Text style={styles.text3}>Message {index.idUser}</Text>
                  {
                    id_teh.length !== 0 ? <Text style={styles.text4}>{id_teh.length}</Text>
                      :
                      null
                  }

                </View>
              </TouchableWithoutFeedback>
            )
            return name;
          })
        }
      </>
    )
  }

  render() {
    const { message, messageGrou, urlImg, } = this.state;
    console.log("55");
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.top}>

            {
              this.props.posts.login !== null ?
                this.props.posts.login.status_user === "ลูกค้าทั่วไป" ?
                  <>
                    {
                      messageGrou && messageGrou.map((index) => {
                        const id_teh = message && message.filter((va) => {
                          if (va.id_technician === index.id_technician) {
                            if (va.status_read === "0") {
                              return va.id_technician;
                            }
                          }
                        }
                        )
                        const name = (
                          <TouchableWithoutFeedback onPress={() => this.clickChat(index.id_technician)}>
                            <View style={styles.box1}>
                              {index.file_src !== null ?
                                <Image style={styles.image} source={{ uri: `${urlImg}profile/${index.file_src}` }} />
                                :
                                <Image style={styles.image} source={{ uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg" }} />
                              }
                              <Text style={styles.text1}>
                                <Text style={styles.text2}>{index.name}</Text> {"14.06"}
                              </Text>
                              <Text style={styles.text3}>Message  ลูกค้า </Text>
                              {
                                id_teh.length !== 0 ? <Text style={styles.text4}>{id_teh.length}</Text>
                                  :
                                  null
                              }
                            </View>
                          </TouchableWithoutFeedback>
                        )
                        return name;
                      })
                    }
                  </>
                  :
                  <>
                    {
                      messageGrou && messageGrou.map((index) => {
                        const id_teh = message && message.filter((va) => {
                          if (va.idUser === index.idUser) {
                            if (va.status_read === "0") {
                              return va.idUser;
                            }
                          }
                        }
                        )
                        const name = (
                          <TouchableWithoutFeedback onPress={() => this.clickChat(index.idUser)}>
                            <View style={styles.box1}>
                              {index.file_src !== null ?
                                <Image style={styles.image} source={{ uri: `${urlImg}profile/${index.file_src}` }} />
                                :
                                <Image style={styles.image} source={{ uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg" }} />
                              }
                              <Text style={styles.text1}>
                                <Text style={styles.text2}>{index.name}</Text> {"14.06"}
                              </Text>
                              <Text style={styles.text3}>Message {index.idUser}</Text>
                              {
                                id_teh.length !== 0 ? <Text style={styles.text4}>{id_teh.length}</Text>
                                  :
                                  null
                              }

                            </View>
                          </TouchableWithoutFeedback>
                        )
                        return name;
                      })
                    }
                  </>
                : null

            }

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  top: {
    marginTop: 20,
  },
  box1: {
    height: 80,
    marginLeft: 25,
    marginRight: 25,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 4,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 5,
    borderRadius: 50,
  },
  text1: {
    marginLeft: 55,
    marginTop: -50,
    fontSize: 18,
  },
  text2: {
    marginTop: -18,
    fontSize: 20,
    fontWeight: "bold",
  },
  text3: {
    marginLeft: 60,
    fontSize: 18,
  },
  text4: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: 20,
    marginTop: -18,
    fontSize: 20,
    width: 40,
    height: 30,
    padding: 5,
    backgroundColor: "#37C1FB",
    color: "#ffff",
  },
});

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}
export default connect(mapStateToProps, null)(Message);


