import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,

} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Register from './Register';
import IconBtn from '../../components/IconBtn';
import closeKeyboard from '../../utils/closeKeyboard';
import { scaleSize } from '../../utils/fitSize';

const LoginNav = StackNavigator({
    loginScreen: {
        screen: Login
    },
    RegisterScreen: {
        screen: Register
    }
},{
    navigationOptions: ({navigation}) => ({
        headerBackTitle: null,
        headerBackTitleStyle: { color: 'red'},
        headerLeft: (
        <IconBtn name="ios-arrow-back" color="#46bdf0" onPress={() => {closeKeyboard();navigation.goBack()}} size={30} style={{marginLeft: scaleSize(15)}}/>
        )
    })
});

export default LoginNav;
