import { combineReducers } from 'redux';

import navigator from './NavReducer';
import ui from './ui';
// import appData from './entities';

const Rootreducers = combineReducers({
    navigator,
    ui,
    // appData
});

export default Rootreducers;