import React, { Component } from 'react';
import { View,Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import AppWithNavigationState from './navigator';
import RootReducers from './reducers/index';
import './common/global';
EStyleSheet.build({
    themeBg: '#f9f9f9',
    themeColor: '#46bdf0', 
})

const store = createStore(RootReducers, composeWithDevTools(
    applyMiddleware(thunk, logger)
));

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        )
    }
}

export default Root;