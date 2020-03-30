import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import Styles from './style'
import Scrollable from '../../components/Scrollable'
import { withNavigation } from 'react-navigation'
import { PRIMARY } from '../../utils/const'

class Sign extends Component {
    render(){
        return(
            <View style={Styles.container}>
                <StatusBar barStyle='dark-content'/> 
               <View style={Styles.header}>
                   <View style={{ height:160, width:160,alignItems:'center',justifyContent:'center',borderRadius:150,borderWidth:5,borderColor:PRIMARY+'50'}}>
                   <Text style={{fontWeight:'bold',fontSize:50,color:PRIMARY+'50'}}>LOGO</Text>
                   </View>
                </View> 
                <Scrollable />

            </View>
        )
    }
}
export default withNavigation(Sign)