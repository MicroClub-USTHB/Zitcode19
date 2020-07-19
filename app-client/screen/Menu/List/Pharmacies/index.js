import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { withNavigation } from "react-navigation";
import MapView from "react-native-maps";
import Styles from "./style";
import { Marker } from "react-native-maps";
class PharmaciesScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={"white"} barStyle={"light-content"} />
        <MapView
          style={Styles.mapStyle}
          initialRegion={{
            latitude: 36.7375279,
            longitude: 3.1212025,
            latitudeDelta: 0.2,
            longitudeDelta: 0.1,
          }}
        >
          <Marker
            coordinate={{
              latitude: 36.7338135,
              longitude: 3.1281977,
              latitudeDelta: 0.2,
              longitudeDelta: 0.1,
            }}
            title={"Pharmacie de Bayou"}
            description={"description de la pharmacie"}
          />
          <Marker
            coordinate={{
              latitude: 36.7375279,
              longitude: 3.1212025,
              latitudeDelta: 0.2,
              longitudeDelta: 0.1,
            }}
            title={"Pharmacie Chikhi"}
            description={"description de la pharmacie"}
          />
        </MapView>
      </View>
    );
  }
}

export default withNavigation(PharmaciesScreen);
