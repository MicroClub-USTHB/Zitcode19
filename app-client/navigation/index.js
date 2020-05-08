import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AppNavigator from "./AppNavigator";
import Sign from "../screen/Sign";
const RootNavigation = createSwitchNavigator({
  App: AppNavigator,
});

export default createAppContainer(RootNavigation);
