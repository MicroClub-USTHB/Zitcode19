import { StyleSheet } from "react-native";
import { PRIMARY_BACKGROUND } from "../../../utils/const";

const Styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:50,
        alignItems:'center'

    },
    input:{
      
        backgroundColor: PRIMARY_BACKGROUND,
        paddingHorizontal:20,
        height:55,
        borderRadius:25,
        alignItems:'center',
        marginBottom:30,
        flexDirection:'row',
        width:'100%'
        
    }
})

export default Styles;