import {PostsProps, ProfilePage} from "./state";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_TEXT = 'CHANGE_NEW_TEXT';


const profileReducer = (state: ProfilePage, action: ProfileActionType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsProps = {
                id: '5',
                message: state.newPostText,
                count: 0
            };
            state.posts.push(newPost);
            state.newPostText = ('');
            return state;

        case CHANGE_NEW_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

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