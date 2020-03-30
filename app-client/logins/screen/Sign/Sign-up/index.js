import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import { PRIMARY, PRIMARY_TEXT, SECENDARY_BACKGROUND, PRIMARY_BACKGROUND } from '../../../utils/const'


export default class Up extends Component{
    constructor(props){
        super(props);
        this.state={
            Password : true,
            eye: 'eye',
            eye_color: SECENDARY_BACKGROUND,
            fname:'',
            log:''
        }
    }
    render(){
        return(
            <View style={Styles.container}>
                 <View style={Styles.input}>
                <TextInput 
                placeholder={"number"}
                placeholderTextColor={SECENDARY_BACKGROUND}
                style={{fontSize:18,color:PRIMARY,width:"90%"}}
                keyboardType={'numeric'}
                onChangeText={ fname => this.setState({fname}) }
                selectionColor={'#aaa'}
              
                />
                </View>

                <View style={Styles.input}>
                <TextInput 
                placeholder={"Password"}
                secureTextEntry={this.state.Password}
                placeholderTextColor={SECENDARY_BACKGROUND}
                style={{fontSize:18,color:PRIMARY,width:"90%"}}
                
                />
                </View>

                <View style={Styles.input}>
                <TextInput 
                placeholder={"Confirm Password"}
                secureTextEntry={this.state.Password}
                placeholderTextColor={SECENDARY_BACKGROUND}
                style={{fontSize:18,color:PRIMARY,width:"90%"}}
                
                />
                </View>

                <TouchableOpacity style={{backgroundColor:PRIMARY, width:'50%', height:50 ,borderRadius:50 , alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:PRIMARY_BACKGROUND}}>SIGN UP</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}