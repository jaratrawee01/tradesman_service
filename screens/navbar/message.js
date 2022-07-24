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
      messageGrou: null
    };
  }

  componentDidMount() {
    this.set_State();
  }

  /*   componentDidUpdate() {
      this.set_State();
    } */

  set_State = async () => {
    const userlogin = this.props.posts.login.status_user;

    if (userlogin === "ลูกค้าทั่วไป") {
      const idlogin = this.props.posts.login.id;
      ;
      const result = await getMessage.getMessage_user(idlogin);
      const resultGrouBy = await getMessage.getMessage_user_groupBy(idlogin);
      if (result) {
        this.setState({
          message: result,
          messageGrou: resultGrouBy,
          urlImg: this.props.posts.urlImage,
        })
      }
    } else {
      const idlogin = this.props.posts.login.id;
      const result1 = await getMessage.getMessage_technician(idlogin);
      if (result1) {
        this.setState({
          message: result1,
          urlImg: this.props.posts.urlImage,
        })
      }
    }
  }
  render() {

    const { message, messageGrou, urlImg } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.top}>

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
                  <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Chat")}>
                    <View style={styles.box1}>
                      {index.file_src !== null ?
                        <Image style={styles.image} source={{ uri: `${urlImg}profile/${index.file_src}` }} />
                        :
                        <Image style={styles.image} source={{ uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg" }} />

                      }

                      <Text style={styles.text1}>
                        <Text style={styles.text2}>{index.name}</Text> {"14.06"}
                      </Text>
                      <Text style={styles.text3}>Message</Text>
                      <Text style={styles.text4}>{id_teh.length}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )

                return name;

              })
            }

            {/* <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Chat")}>
              <View style={styles.box1}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg",
                  }}
                />
                <Text style={styles.text1}>
                  <Text style={styles.text2}>{"# Anna"}</Text> {"14.06"}
                </Text>
                <Text style={styles.text3}>Message</Text>
                <Text style={styles.text4}>{"2"}</Text>
              </View>
            </TouchableWithoutFeedback> */}
            {/*   <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Chat")}>
              <View style={styles.box1}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg",
                  }}
                />
                <Text style={styles.text1}>
                  <Text style={styles.text2}>{"# Anna"}</Text> {"14.06"}
                </Text>
                <Text style={styles.text3}>Message</Text>
                <Text style={styles.text4}>{"2"}</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate("Chat")}>
              <View style={styles.box1}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD47w-kjxI64_mo8RmdEFl0qJz-zZAwXDn8r6wNKZsyck8f4g3he8Qib_S_aXrygr6rlY&usqp=CAU",
                  }}
                />
                <Text style={styles.text1}>
                  <Text style={styles.text2}>{"# Jenny"}</Text> {"22.36"}
                </Text>
                <Text style={styles.text3}>Message</Text>
                <Text style={styles.text4}>{"1"}</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate("Chat")}>
              <View style={styles.box1}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://img.my-best.in.th/press_component/images/60032404a06bfae09ca65f06363457f6.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=690&fit=max",
                  }}
                />
                <Text style={styles.text1}>
                  <Text style={styles.text2}>{"# Minton"}</Text> {"14.06"}
                </Text>
                <Text style={styles.text3}>Message</Text>
                <Text style={styles.text4}>{"3"}</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback  onPress={() => this.props.navigation.navigate("Chat")}>
              <View style={styles.box1}>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://www.josephiteweb.org/wp-content/uploads/2017/03/sel_237-400x300.jpg",
                  }}
                />
                <Text style={styles.text1}>
                  <Text style={styles.text2}>{"# Jasmine"}</Text> {"14.06"}
                </Text>
                <Text style={styles.text3}>Message</Text>
                <Text style={styles.text4}>{"3"}</Text>
              </View>
            </TouchableWithoutFeedback> */}
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


