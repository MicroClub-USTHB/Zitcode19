import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import Styles from './Styles'
import { PRIMARY, PRIMARY_TEXT, SECENDARY_BACKGROUND, PRIMARY_BACKGROUND } from '../../../utils/const'
import Ionicons from 'react-native-vector-icons/FontAwesome'

export default class In extends Component{
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

    seePwd(){
        if(this.state.Password)
        {
            this.setState({
                Password: false,
                eye:'eye-slash',
                eye_color:PRIMARY
                
            })
        }else{
            this.setState({
                Password: true,
                eye:'eye',
                eye_color:SECENDARY_BACKGROUND
                
            })

        }
    }
    pressButton(){
        this.setState({
            log:this.state.fname
        })
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
                />
                </View>

                <View style={Styles.input}>
                <TextInput 
                placeholder={"Password"}
                secureTextEntry={this.state.Password}
                placeholderTextColor={SECENDARY_BACKGROUND}
                style={{fontSize:18,color:PRIMARY,width:"90%"}}
                
                />
                <TouchableOpacity onPress={()=>{this.seePwd()}} >
                <Ionicons name={this.state.eye} size={23} color={this.state.eye_color} />
                </TouchableOpacity>
                </View>

                <TouchableOpacity style={{backgroundColor:PRIMARY, width:'50%', height:50 ,borderRadius:50 , alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:PRIMARY_BACKGROUND}}>SIGN IN</Text>
                </TouchableOpacity>
                
        

               
                
                
                
            </View>
        )
    }
}