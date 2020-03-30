import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import Styles from './Styles'
import Scrollable from '../../components/Scrollable'

export default class Sign extends Component {
    render(){
        return(
            <View style={Styles.container}>
                <StatusBar barStyle='dark-content'/>
               <View style={Styles.header}>
                   <View style={{ height:160, width:160,alignItems:'center',justifyContent:'center',borderRadius:150,borderWidth:5,borderColor:'#40E0D050'}}>
                   <Text style={{fontWeight:'bold',fontSize:50,color:'#40E0D050'}}>LOGO</Text>
                   </View>
                </View> 
                <Scrollable />

            </View>
        )
    }
}