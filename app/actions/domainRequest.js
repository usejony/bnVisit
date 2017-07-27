import TYPES from '../constants';
import { GET, POST } from '../utils/request';
//请求开始
function requestStart() {
    return {
        type: TYPES.REQUEST_START
    }
}

//请求失败
function requestErr() {
    return {
        type: TYPES.REQUEST_ERR
    }
}

//请求成功
function requestSuccess(data) {
    return {
        type: TYPES.REQUEST_SECCESS,
        data
    }
}

//发起一步请求
export function fetchData(url) {
    return function(dispatch) {
        dispatch(requestStart());
        return GET(url).then(
            json => dispatch(requestSuccess(json))
        ).catch(e)(
            e => dispatch(requestErr())
        );
    }
}

