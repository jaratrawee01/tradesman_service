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
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";
import getMessage from "../service/getService";
import { Fontisto } from '@expo/vector-icons';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.posts.message,
      messageGrou: this.props.posts.messageGrouby,
      urlImg: null,
      starusLogin: this.props.posts.login,
    };
  }

  componentDidMount() {
    const { message, login } = this.props.posts;
    if (login != null) {
      this.set_State(this.state.starusLogin);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { message, login } = this.props.posts;
    if (this.props.posts.login != null) {
      this.set_State(this.props.posts.login);
    }
  }

  set_State = async (e) => {
    if (e !== null) {
      if (e.status_user === "ลูกค้าทั่วไป") {
        const { starusLogin } = this.state;
        const result = await getMessage.getMessage_user(e.id);
        const resultGrouBy = await getMessage.getMessage_user_groupBy(e.id);
        if (result) {
          this.setState({
            message: result,
            messageGrou: resultGrouBy,
            urlImg: this.props.posts.urlImage,
          });
        }
      } else {
        const result1 = await getMessage.getMessage_technician(e.id);
        const resultGrouBy = await getMessage.getMessage_technician_groupBy(
          e.id
        );
        if (result1 && resultGrouBy) {
          this.setState({
            message: result1,
            messageGrou: resultGrouBy,
            urlImg: this.props.posts.urlImage,
          });
        }
      }
    }
  };

  clickChat(e) {
    console.log(e);
    this.props.dispatch({
      type: "ADD_IDTECHNICAN",
      payload: e,
    });
    this.props.navigation.navigate("Chat");
  }

  user = (message, messageGrou, urlImg) => {
    return (
      <>
        {messageGrou &&
          messageGrou.map((index) => {
            const id_teh =
              message &&
              message.filter((va) => {
                if (va.id_technician === index.id_technician) {
                  if (va.status_read === "0") {
                    return va.id_technician;
                  }
                }
              });
            const name = (
  
                <TouchableWithoutFeedback
                  onPress={() => this.clickChat(index.id_technician)}
                >
                  <View style={styles.box1}>
                    {index.file_src !== null ? (
                      <Image
                        style={styles.image}
                        source={{ uri: `${urlImg}profile/${index.file_src}` }}
                      />
                    ) : (
                      <Image
                        style={styles.image}
                        source={{
                          uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg",
                        }}
                      />
                    )}
                    <Text style={styles.text1}>
                      <Text style={styles.text2}>{index.name}</Text> {"14.06"}
                    </Text>
                    <Text style={styles.text3}>
                      Message {index.id_technician}{}
                    </Text>
                    {id_teh.length !== 0 ? (
                      <Text style={styles.text4}>{id_teh.length}</Text>
                    ) : null}
                  </View>
                </TouchableWithoutFeedback>
              
            );
            return name;
          })}
      </>
    );
  };

  technician(message, messageGrou, urlImg) {
    /*     console.log("message",messageGrou); */
    return (
      <>
        {messageGrou &&
          messageGrou.map((index) => {
            const id_teh =
              message &&
              message.filter((va) => {
                if (va.idUser === index.idUser) {
                  if (va.status_read === "0") {
                    console.log("va", va);
                    return va.idUser;
                  }
                }
              });

            const name = (
              
                <TouchableWithoutFeedback
                  onPress={() => this.clickChat(index.idUser)}
                >
                  <View style={styles.box1}>
                    {index.file_src !== null ? (
                      <Image
                        style={styles.image}
                        source={{ uri: `${urlImg}profile/${index.file_src}` }}
                      />
                    ) : (
                      <Image
                        style={styles.image}
                        source={{
                          uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg",
                        }}
                      />
                    )}
                    <Text style={styles.text1}>
                      <Text style={styles.text2}>{index.name}</Text>{" "}
                      {index.created_at}
                    </Text>
                    <Text style={styles.text3}>Message</Text>
                    {id_teh.length !== 0 ? (
                      <Text style={styles.text4}>{id_teh.length}</Text>
                    ) : null}
                  </View>
                </TouchableWithoutFeedback>
              
            );
            return name;
          })}
      </>
    );
  }

  render() {
    const { starusLogin, message, messageGrou, urlImg } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.top}>
            {this.props.posts.login != null ? (
              this.props.posts.login.status_user === "ลูกค้าทั่วไป" ? 
                <>
                {/* <TouchableOpacity onPress={() => this.set_State(this.props.posts.login)}>
                    <Fontisto name="spinner-refresh" style={styles.icons} />
                </TouchableOpacity> */}
                {
                    this.user(message, messageGrou, urlImg)
                }
              
                </>
            
               : (
                this.technician(message, messageGrou, urlImg)
              )
            ) : (
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <View style={styles.box1}>
                  <Image
                    style={styles.image}
                    source={{
                      uri: "https://www.josephiteweb.org/wp-content/uploads/2018/02/paslk-600x400.jpg",
                    }}
                  />

                  <Text style={styles.text5}>ยังไม่ได้ login</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
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
  button: {
    height: 25,
    width: 60,
    backgroundColor: "#37C1FB",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 2,
    borderRadius: 10,
    marginLeft: 60,
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 5,
    padding: 1,
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
    elevation: 2,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 5,
    borderRadius: 50,
  },
  text0: {
    textAlign: "center",
    fontSize: 24,
    padding: 5,
    marginTop: -45,
    width: 150,
    height: 40,
    backgroundColor: "#37C1FB",
    marginLeft: 80,
    borderRadius: 10,
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    padding: 10,
    color: "#fff",
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
    marginRight: 10,
    marginTop: -30,
    fontSize: 20,
    width: 30,
    height: 30,
    padding: 4,
    backgroundColor: "#37C1FB",
    color: "#ffff",
    borderRadius: 30,
  },
  text5: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: -36,
    fontSize: 20,
    color: "#37C1FB",
  },
  icons: {
    fontSize: 30,
    color: "#37C1FB",
    marginLeft: 170,
    marginTop: -10,
  }
});

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps, null)(Message);
