import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import MenuScreen from '../screen/Menu'
import Sign from '../screen/Sign'
import AgendaScreen from '../screen/Menu/List/Agenda';
import Zones from '../screen/Menu/List/Zones';
import DeclarationScreen from '../screen/Menu/List/Declaration'
import Donation from '../screen/Menu/List/Donation';
import Pharmacies from '../screen/Menu/List/Pharmacies';
import Prevention from '../screen/Menu/List/Prevention';
const AppNavigator = createStackNavigator({
    Signing :{
        screen : Sign ,
        navigationOptions:{
            headerShown:false
        }
    },
    Menu :{
        screen: MenuScreen,
        navigationOptions:{
            headerShown:false
        }    
    },
    Agenda:{
        screen:AgendaScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    Declaration:{
        screen:DeclarationScreen
    },
    Zones:{
        screen:Zones,
        navigationOptions:{
            headerShown:false
        }
    },
    Donation:{
        screen:Donation
    },
    Pharmacies:{
        screen:Pharmacies
    },
    Prevention:{
        screen:Prevention
    }


});

export default AppNavigator;