import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import { setSpText } from '../../utils/fitSize';
import CompanyScreen from './Company';
import MatterScreen from './Matter';
import OrderScreen from './Orders';
import MeScreen from './Me';

const MainTab = TabNavigator({
    CompanyPage: {
        screen: CompanyScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: '拜访客户',
            tabBarLabel: '客户',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name={focused ? 'ios-create' : 'ios-create-outline'} size={setSpText(26)} color={tintColor} />
            )
        })
    },
    MatterPage: {
        screen: MatterScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: '事物列表',
            tabBarLabel: '事物',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name={focused ? 'ios-copy' : 'ios-copy-outline'} size={setSpText(26)} color={tintColor} />
            )
        })
    },
    OrderPage: {
        screen: OrderScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: '订单审核',
            tabBarLabel: '订单',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name={focused ? 'ios-paper' : 'ios-paper-outline'} size={setSpText(26)} color={tintColor} />
            )
        })
    },
    MePage: {
        screen: MeScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: '我',
            tabBarLabel: '我',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon name={focused ? 'ios-contact' : 'ios-contact-outline'} size={setSpText(26)} color={tintColor} />
            )
        })
    }
}, {
        tabBarOptions: {
            activeTintColor: "#46bdf0"
        }
    });

export default MainTab;