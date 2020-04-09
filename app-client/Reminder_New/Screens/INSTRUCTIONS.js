import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import  HomeScreen from '../Screens/HomeScreen';
import LottieView from 'lottie-react-native';
import  index from '../Carousel/Stat/index';

class Drink extends Component {
    render() {
      return (
        <View style={styles.eachView} >
           <LottieView source={require('../Assets/drink.json')} autoPlay loop />     
        </View>
      );
    }
  }
  class Wash extends Component {
    render() {
      return (
       <View style = {{  flex : 1 ,justifyContent
       :"center" , alignItems :"center"}}>
        <LottieView source={require('../Assets/hand.json')} autoPlay loop  /> 
        </View>
      );
    }
  }
  class Exercice extends Component {
    render() {
      return (
        <View style={styles.eachView} >
           <LottieView source={require('../Assets/exercise.json')} autoPlay loop />     
        </View>
      );
    }
  }
  class Open extends Component {
    render() {
      return (
        <View style={styles.eachView} >
           <LottieView source={require('../Assets/drink.json')} autoPlay loop />     
        </View>
      );
    }
  }
  class Clean extends Component {
    render() {
      return (
        <View style={styles.eachView} >
           <LottieView source={require('../Assets/clean.json')} autoPlay loop />     
        </View>
      );
    }
  }  
const App = createStackNavigator(
  {
    Reminder : {
      screen: HomeScreen,
    },
    Wash : {
        screen: Wash,
      },
    Clean : {
        screen: Clean,
      },  
    Open : {
        screen: Open,
      },
    Exercice : {
        screen: Exercice,
      },
    Drink : {
        screen: Drink,
      }, 
 
  },
  
);

const AppContainer = createAppContainer(App);

export default () => (
  <AppContainer />
);

const styles = StyleSheet.create({
  centerView: {
    flex: 1,

  },
  eachView: {
    flex: 1,
 
  }
})