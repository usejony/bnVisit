/**
 * 应用行为
 */

import TYPES from '../constants';
//呼出登录注册界面
export function toLogin() {
    return {
        type: TYPES.TO_LOGIN
    }
}

//显示搜索Modal
export function showSearchModal() {
    return {
        type: TYPES.SHOW_SEARCH_MODAL
    }
}

//关闭搜索Modal
export function closeSearchModal() {
    return {
        type: TYPES.CLOSE_SEARCH_MODAL
    }
}