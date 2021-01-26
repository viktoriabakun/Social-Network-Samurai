import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkDispatch} from 'redux-thunk';

const SET_USER_DATA = 'SET_USER_DATA';

export type InitialStateType = {
    userId: null | string,
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

const authReducer = (state: InitialStateType = initialState, action: any) => {

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

export const setAuthUserData = (userId: number|null, email: string|null, login: string|null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})

export const getAuthUserData = () => (dispatch: Dispatch) => {
     authAPI.me()
        .then(response => {

            if(response.data.resultCode === 0){
                let {id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        });
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch:  ThunkDispatch<InitialStateType, {}, any>) => {
    authAPI.login(email,password,rememberMe)
        .then(response => {

            if(response.data.resultCode === 0){
               dispatch(getAuthUserData())
            }
        });
}

export const logout = () => (dispatch:  ThunkDispatch<InitialStateType, {}, any>) => {
    authAPI.logout()
        .then(response => {

            if(response.data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default authReducer;