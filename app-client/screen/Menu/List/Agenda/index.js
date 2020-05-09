import React, { Component } from "react";
import { Text, View, TextInput, ScrollView, TouchableOpacity } from "react-native";

import Note from "../../../../components/Note";
import Carousel from "../../../../components/Carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
export default class Todo extends Component {
  state = {
    noteArray: [
      { date: "testdate", note: "testnote 1" },
      { date: "testdate", note: "testnote 1" },
    ],
    noteText: "",
  };
  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      //   this.state.noteArray.push();

      this.setState({
        noteText: "",
        noteArray: [
          ...this.state.noteArray,
          {
            date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
            note: this.state.noteText,
          },
        ],
      });
      //   this.setState({  });
    }
  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
  }
  render() {
    let notes = this.state.noteArray.map((val, index) => {
      return <Note key={index} keyval={index} val={val} deleteMethod={() => this.deleteNote(index)} />;
    });
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>- NOTER -</Text>
          </View>

          <ScrollView style={styles.scrollContainer}>
            <Carousel
              style="stats"
              itemsPerInterval={2}
              items={[
                {
                  label: "LAVER les mains ",
                  value: 1,
                  navigate: this.props.navigation.navigate,
                },
                {
                  label: "FAIRE les exercice",
                  value: 2,
                  navigate: this.props.navigation.navigate,
                },
                {
                  label: " BOIR de l'eau",
                  value: 3,
                  navigate: this.props.navigation.navigate,
                },
                {
                  label: "NETTOYER la maison",
                  value: 4,
                  navigate: this.props.navigation.navigate,
                },
                {
                  label: "OUVRIR les fenetres",
                  value: 5,
                  navigate: this.props.navigation.navigate,
                },
              ]}
            />
            {notes}
            <View>
              <TextInput
                style={styles.textInput}
                onChangeText={(noteText) => this.setState({ noteText })}
                value={this.state.noteText}
                placeholder="> note"
                placeholderTextColor="#5D71AD"
                underlineColorAndroid="transparent"
              ></TextInput>
              <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
