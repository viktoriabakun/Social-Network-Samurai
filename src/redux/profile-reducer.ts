import {PostsProps, ProfileReducerType, ProfileType} from "./store";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState: ProfileReducerType = {
    posts: [
        {id: v1(), message: 'Hi', count: 15},
        {id: v1(), message: 'It\'s my first post', count: 20},
        {id: v1(), message: 'I studied React for 10 hours today', count: 50},
        {id: v1(), message: 'Hello', count: 40},
        {id: v1(), message: '123456789', count: 1000000}
    ],
    newPostText: 'it-kamasutra.com',
    profile: {} as ProfileType
}



const profileReducer = (state: ProfileReducerType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsProps = {
                id: '5',
                message: state.newPostText,
                count: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        default:
            return state;
    }
} // теперь этот редьюсер является чистой функцией (сделали копию)

export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
export type ChangeNewTextActionCreatorType = {
    type: typeof CHANGE_NEW_TEXT
    newText: string
}
export type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const addPostCreator = (): AddPostActionCreatorType => {
    return {
        type: ADD_POST,
    } as const
}

export const changeNewTextCreator = (text: string): ChangeNewTextActionCreatorType => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: text,
    } as const
}

export const setUserProfileCreator = (profile: ProfileType): SetUserProfileACType => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}

export type ProfileActionType = AddPostActionCreatorType | ChangeNewTextActionCreatorType | SetUserProfileACType


export default profileReducer;