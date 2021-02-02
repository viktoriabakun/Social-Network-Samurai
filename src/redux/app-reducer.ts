import {getAuthUserData} from "./auth-reducer";
import {RootStateRedux} from "./redux-store";
import {ThunkDispatch} from 'redux-thunk';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

const appReducer = (state: InitialStateType = initialState, action: initializedSuccessACType):InitialStateType => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

// AC
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

// AC types
type initializedSuccessACType = ReturnType<typeof initializedSuccess>

// THUNK
export const initializeApp = () => (dispatch: ThunkDispatch<RootStateRedux, unknown, ActionType>) => {
   const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


type ActionType = initializedSuccessACType
export default appReducer;