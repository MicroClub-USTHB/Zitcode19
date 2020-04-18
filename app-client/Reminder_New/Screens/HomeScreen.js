import  React,{Component} from 'react';
import { Image , ImageBackground, Text, View, StyleSheet , TouchableOpacity,Button ,Alert} from 'react-native';
import Carousel from '../Carousel'

  

export default  class HomeScreen extends Component {
    constructor(props) {
        super(props);   
     
    }

    render(){
        return (
          <View style={this.styles.container}>
            <View style = {this.styles.Area}>
              <Image source ={ require('../Assets/Phato.jpg') }    style={{  flex :1, height: undefined, width: undefined  ,borderRadius : 11 , resizeMode : 'stretch' }}  />
               </View>
               <Carousel
        style='stats'
        itemsPerInterval={3}
        items={[{
          label : 'LAVER les mains ',
          value: 1,
          navigate :  this.props.navigation.navigate,
        }, {
          label: 'FAIRE les exercice',
          value: 2,
          navigate :    this.props.navigation.navigate,
        }, {
          label: ' BOIR de l\'eau',
          value: 3,
          navigate :  this.props.navigation.navigate,
        }, {
          label: 'NETTOYER la maison',
          value: 4,
          navigate :    this.props.navigation.navigate,
        }, {
          label: 'OUVRIR les fenetres',
          value: 5,
          navigate :    this.props.navigation.navigate,
        }]}
      />
               </View>
        );

    }
   
    styles = StyleSheet.create({
      Area : {
        borderWidth : 2,
        borderColor : "#5D71AD",
        flex : 0.8,
       borderRadius : 20,
       flexDirection :"row",
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 10,
       },
       shadowOpacity: 0.51,
       shadowRadius: 13.16,
       
       elevation: 20,
      },
      image : {
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        
        elevation: 20,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      },
    });

}


