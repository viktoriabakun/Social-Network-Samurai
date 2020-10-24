import {PostsProps, ProfilePage} from "./state";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT';

let initialState: ProfilePage = {
    posts: [
        {id: v1(), message: 'Hi', count: 15},
        {id: v1(), message: 'It\'s my first post', count: 20},
        {id: v1(), message: 'I studied React for 10 hours today', count: 50},
        {id: v1(), message: 'Hello', count: 40},
        {id: v1(), message: '123456789', count: 1000000}
    ],
    newPostText: 'it-kamasutra.com'
}

const profileReducer = (state: ProfilePage = initialState, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsProps = {
                id: '5',
                message: state.newPostText,
                count: 0
            };
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ('');
            return stateCopy;
    }
        case CHANGE_NEW_TEXT:
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }
} // теперь этот редьюсер является чистой функцией (сделали копию)

export const addPostCreator = ():AddPostActionCreatorType => {
    return {
        type: ADD_POST,
    } as const
}

export const changeNewTextCreator = (text: string):ChangeNewTextActionCreatorType => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: text,
    } as const
}

export type AddPostActionCreatorType = {
    type: typeof ADD_POST
}
export type ChangeNewTextActionCreatorType = {
    type: typeof CHANGE_NEW_TEXT
    newText: string
}

export type ProfileActionType = AddPostActionCreatorType | ChangeNewTextActionCreatorType


export default profileReducer;