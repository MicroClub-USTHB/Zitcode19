import React, { Component } from 'react'
import { View,Text } from 'react-native'
import Styles from './style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
export default class AppHeader extends Component{
    render(){
        const size = 20;
        const color = "#888"; 

        // cherif hani salah eddine // hany.cher@gmail.com
        return(
            <View style={Styles.container}>
                <FontAwesome5 name='bars' size={size} color={color} />
                <View>
                    <Text style={[Styles.title,{fontSize:23 , color: color}]}>Home</Text>
                </View>
                <FontAwesome5 name='bell' size={size} color={color}/>
            </View>
        )
    }
}