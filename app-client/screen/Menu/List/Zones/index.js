import React, { Component } from "react";
import { View, Text, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import MapView from "react-native-maps";
import Styles from "./style";

class ZonesScreen extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor={"white"} barStyle={"light-content"} />
        <MapView
          style={Styles.mapStyle}
          initialRegion={{
            latitude: 36.7538,
            longitude: 3.0588,
            latitudeDelta: 0.2,
            longitudeDelta: 0.1,
          }}
        ></MapView>
      </View>
    );
  }
}

export default withNavigation(ZonesScreen);
