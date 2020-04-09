import React from 'react'
import { View, Text, Image,Alert ,TouchableOpacity} from 'react-native'
import { styles } from './styles'

export const Stat = (props: any) => {

  const { label, value,navigate } = props;
  
 const imagepath  =[require('../../Assets/Wash.png'),   require('../../Assets/Exercise.png') , require('../../Assets/Drink.png') , require('../../Assets/Clean.png') , require('../../Assets/Window.png')]
  
        
   return (
    <TouchableOpacity style={styles.stat} onPress = {() => { if(value == 1){  navigate('Wash'); }
                                                             if(value == 2){  navigate('Exercice'); }
                                                             if(value == 3){  navigate('Drink'); } 
                                                             if(value == 4){  navigate('Clean');  }
                                                             if(value == 5){  navigate('Open');  }
                                                                   }}>
      <Image style={{ ...styles.statText }} source = { imagepath[value-1] }   />
       
     
     
       <View style={styles.statHold}>
        <Text style={{ ...styles.statLabel }}>
          {label}
        </Text>
     
      </View>
    </TouchableOpacity>
  );
}

export default Stat;