import TYPES from '../constants';

//控制界面Ui的显示reducer
const initUi = {
    searchModal: false,
}
export default function ui(state = initUi, action) {
    switch (action.type) {
        case TYPES.SHOW_SEARCH_MODAL:
            return Object.assign({}, state, {
                searchModal: true
            });
        case TYPES.CLOSE_SEARCH_MODAL:
            return Object.assign({}, state, {
                searchModal: false
            });
        default:
            return state;
    }
}