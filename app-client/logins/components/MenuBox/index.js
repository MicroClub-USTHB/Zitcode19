import React, { Component } from 'react'
import { View , Text ,TouchableOpacity } from 'react-native'
import Styles from './style'
import {withNavigation} from 'react-navigation'

class MenuBox extends Component{

    render(){
        return(
            <TouchableOpacity style={Styles.container} onPress={()=>this.props.navigation.navigate(this.props.screen)}>
            <View style={[Styles.box,{backgroundColor:this.props.color ? this.props.color : '#2A2A2A50'}]}>
                <View style={[Styles.cercleBox,{}]}>
                <View style={[Styles.cercleBox,{width:'60%',height:'60%'}]}>
                <View style={[Styles.cercleBox,{width:'50%',height:'50%'}]}>
                    {
                        this.props.icon
                    }
                </View>
                </View>
                </View>
            </View>
            <View style={Styles.titleBox}><Text style={[Styles.title,{color: this.props.color ? this.props.color : '#2A2A2A50'}]}>{this.props.name}</Text></View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation(MenuBox);