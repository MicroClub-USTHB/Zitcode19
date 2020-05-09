import React from "react";
import { Component } from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import MenuBox from "../../components/MenuBox";
import Styles from "./style";
import AppHeader from "../../components/AppHeader";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
class MenuScreen extends Component {
  constructor(props) {
    const iconSize = 18;
    const iconColor = "white";
    super(props);
    this.state = {
      MenuList: [
        {
          name: "DECLARATION",
          color: "#ffb900",
          icon: <AntDesign name="notification" size={iconSize} color={iconColor} />,
          screen: "Declaration",
        },
        {
          name: "ZONES",
          color: "#ff8a48",
          icon: <MaterialIcons name="my-location" size={iconSize} color={iconColor} />,
          screen: "Zones",
        },
        {
          name: "DONATION",
          color: "#ff5e99",
          icon: <AntDesign name="hearto" size={iconSize} color={iconColor} />,
          screen: "Donation",
        },
        {
          name: "PHARMACIES",
          color: "#c840e9",
          icon: <MaterialIcons name="healing" size={iconSize} color={iconColor} />,
          screen: "Pharmacies",
        },
        {
          name: "AGENDA",
          color: "#665eff",
          icon: <AntDesign name="clockcircleo" size={iconSize} color={iconColor} />,
          screen: "Agenda",
        },
        {
          name: "PREVENTION",
          color: "#3acce1",
          icon: <AntDesign name="checkcircleo" size={iconSize} color={iconColor} />,
          screen: "Prevention",
        },
      ],
    };
  }
  render() {
    return (
      <View>
        <AppHeader />
        <View style={Styles.container}>
          {this.state.MenuList.map((item, index) => {
            return (
              <MenuBox
                key={index}
                name={item.name}
                color={item.color}
                icon={item.icon ? item.icon : <View />}
                screen={item.screen}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

export default withNavigation(MenuScreen);
