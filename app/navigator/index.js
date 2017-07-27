import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import LoginStack from '../containers/LoginNav';
import MainTab from '../containers/MainTab'

//应用主要导航器
const MainNav = StackNavigator({
    MainTabScreen: {
        screen: MainTab
    }
}, {
        navigationOptions: () => ({
            headerStyle: { backgroundColor: common.themeColor },
            headerTintColor: '#fff'
        })
    });

//应用顶层导航器
export const AppNavigator = StackNavigator({
    MainNav: {
        screen: MainNav
    },
    LoginNav: {
        screen: LoginStack
    }
}, {
        headerMode: 'none',
        mode: 'modal'
    });

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => (
    { nav: state.navigator }
);

export default connect(mapStateToProps)(AppWithNavigationState);

