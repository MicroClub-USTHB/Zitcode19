import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated';

export const styles = StyleSheet.create({
  stat: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderWidth : 2,
    borderColor : "#5D7FAF",
    flexBasis: '33%',
    flex: 1,
    maxWidth: '33%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  
    
    backgroundColor :"#899ECA",
      margin : 12,
      borderRadius :20,


      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,
      },
      
  statText: {
    
    alignSelf : 'center',
    marginLeft : -50,
    resizeMode : "center"
   
  
 
  },
  statHold: {
    width: '100%',
  
  },
  statLabel: {
   
    width: '100%',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily : 'sans-serif-condensed',
    textShadowColor : "#000000",
    textShadowRadius : 2.22,
    textShadowOffset : {
      width : 0,
      height :1,
      
    },
    color : 'white',
  },
});

export default styles;