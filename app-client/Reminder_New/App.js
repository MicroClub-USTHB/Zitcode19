import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import  INSTRUCTIONS from './Screens/INSTRUCTIONS';
import ChatScreen from './Screens/ChatScreen';


const TabNavigator = createBottomTabNavigator(
  {
    Procédures : {
      screen:  INSTRUCTIONS,
    },
     Memo : {
      screen: ChatScreen,
    },
   }
   ,{
    tabBarOptions: {
      activeTintColor: 'white',
      
      inactiveTintColor: 'gray',
      style: {
        
        backgroundColor: '#5F71FF',
        }
      } 
    }
   
   );

   export default createAppContainer(TabNavigator);
