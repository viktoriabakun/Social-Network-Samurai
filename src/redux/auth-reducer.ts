import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from 'redux-thunk';
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

export type InitialStateType = {
    userId: null | number,
    email: null | string,
    login: null | string,
    isAuth: boolean
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }


        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const)

type SetAuthUserDataACType = ReturnType<typeof setAuthUserData>
type ActionType = SetAuthUserDataACType


export const getAuthUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: ThunkDispatch<InitialStateType, {}, any>) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logout = () => async (dispatch: ThunkDispatch<InitialStateType, {}, any>) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;