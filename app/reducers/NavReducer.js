import { getStateForAction, NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigator/index';
import TYPES from '../constants';

export default function navigator(state, action){
    let nextState;
    switch(action.type) {
        case TYPES.TO_LOGIN:
            nextState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({
                    routeName: 'LoginNav'
                }),
                state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}