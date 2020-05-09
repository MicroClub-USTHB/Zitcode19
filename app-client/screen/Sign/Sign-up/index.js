import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Styles from "./Styles";
import { PRIMARY, PRIMARY_TEXT, SECENDARY_BACKGROUND, PRIMARY_BACKGROUND } from "../../../utils/const";
import { fetchSignUp } from "../../../api/auth";

export default class Up extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Password: true,
      eye: "eye",
      eye_color: SECENDARY_BACKGROUND,
      fname: "",
      log: "",
    };
  }
  submitSignUp() {
    fetchSignUp("John", "Wick", "Male", "1964-09-02", "Los Angeles", "0651812340", "password")
      .then((res) => {
        Alert.alert("Succès", "Votre compte a été créé avec succès");
      })
      .catch((err) => {
        Alert.alert("Oops!", err.message);
      });
  }
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.input}>
          <TextInput
            placeholder={"number"}
            placeholderTextColor={SECENDARY_BACKGROUND}
            style={{ fontSize: 18, color: PRIMARY, width: "90%" }}
            keyboardType={"numeric"}
            onChangeText={(fname) => this.setState({ fname })}
            selectionColor={"#aaa"}
          />
        </View>

        <View style={Styles.input}>
          <TextInput
            placeholder={"Password"}
            secureTextEntry={this.state.Password}
            placeholderTextColor={SECENDARY_BACKGROUND}
            style={{ fontSize: 18, color: PRIMARY, width: "90%" }}
          />
        </View>

        <View style={Styles.input}>
          <TextInput
            placeholder={"Confirm Password"}
            secureTextEntry={this.state.Password}
            placeholderTextColor={SECENDARY_BACKGROUND}
            style={{ fontSize: 18, color: PRIMARY, width: "90%" }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            this.submitSignUp();
          }}
          style={{
            backgroundColor: PRIMARY,
            width: "50%",
            height: 50,
            borderRadius: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: PRIMARY_BACKGROUND }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
