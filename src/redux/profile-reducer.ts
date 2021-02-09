import {PostsProps, ProfileType} from "./store";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState: initialStateType = {
    posts: [
        {id: v1(), message: 'Hi', count: 15},
        {id: v1(), message: 'It\'s my first post', count: 20},
        {id: v1(), message: 'I studied React for 10 hours today', count: 50},
        {id: v1(), message: 'Hello', count: 40},
        {id: v1(), message: '123456789', count: 1000000}
    ],
    newPostText: '',
    profile: {} as ProfileType,
    status: ''
}

export type initialStateType = {
    posts: Array<PostsProps>
    profile: ProfileType
    status: string
    newPostText: string
}

const profileReducer = (state: initialStateType = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsProps = {
                id: '5',
                message: action.newPostText,
                count: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }

        default:
            return state;
    }
}

// AC types
type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string
}
type SetUserProfileACType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type SetStatusACType = { type: typeof SET_STATUS, status: string }
type DeleteProfileACType = { type: typeof DELETE_POST, postId: string }

// Action Creators
export const addPostCreator = (newPostText: string): AddPostActionCreatorType => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}

export const setStatus = (status: string): SetStatusACType => ({type: SET_STATUS, status})
export const setUserProfile = (profile: ProfileType): SetUserProfileACType => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
}
export const deletePost = (postId: string): DeleteProfileACType => {
    return {
        type: DELETE_POST,
        postId
    } as const
}

// Thunk
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0)
        dispatch(setStatus(status))
}


export type ProfileActionType = AddPostActionCreatorType
    | SetUserProfileACType
    | SetStatusACType
    | DeleteProfileACType
export default profileReducer;