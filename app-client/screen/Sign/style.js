import React from 'react'
import { StyleSheet } from "react-native";
import { SECENDARY_BACKGROUND, PRIMARY_BACKGROUND } from '../../utils/const';

const Styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:SECENDARY_BACKGROUND

    },
    header:{
        height:'33%',
        width:'100%',
        backgroundColor:PRIMARY_BACKGROUND,
        alignItems:'center',
        justifyContent:'center',
        elevation:1
    }
})

export default Styles;