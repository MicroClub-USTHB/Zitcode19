import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view'
import Up from '../../screen/Sign/Sign-up'
import In from '../../screen/Sign/Sign-in'
import { PRIMARY } from '../../utils/const'

export default class Scrollable extends Component {
    render() {
        return (
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <DefaultTabBar textStyle={{ fontSize: 16 }} style={{
                     borderBottomWidth: 0,
                      height: 60,
                      elevation:4,
                     }}
                      tabStyle={{ borderRightWidth: 0.4, borderTopWidth: 0.4, borderColor: "#2A2A2A20" }} />}
                tabBarBackgroundColor="#ffe"
                tabBarUnderlineStyle={{ backgroundColor: PRIMARY, height:6}}
                tabBarInactiveTextColor="#2A2A2A50"
                tabBarActiveTextColor={PRIMARY}
                
            >
                <View tabLabel='SIGN IN'>
                    <In />
                </View>
                <View tabLabel='SIGN UP'>
                    <Up />
                </View>


            </ScrollableTabView>
        )
    }
}