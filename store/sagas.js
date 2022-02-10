import * as types from './types';
import {getUserPosts} from '../api/posts';
import {takeEvery, put, call} from 'redux-saga/effects';

function* fetchUserPosts(action) {
    try {
        const userPosts = yield call(getUserPosts)
        yield put({
            type: types.USER_POSTS_FETCH_SUCCEEDED,
            payload: {
                data: userPosts
            }
        })
    } catch (error) {
        yield put({
            type: types.USER_POSTS_FETCH_FAILED,
            payload: {
                message: error.message
            }
        })
    }
}

export function* rootSaga(){
    yield takeEvery(types.USER_POSTS_FETCH_REQUESTED, fetchUserPosts)
}