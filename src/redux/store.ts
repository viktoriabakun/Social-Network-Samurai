import {v1} from "uuid";
import profileReducer, {ProfileActionType} from "./profile-reducer";
import dialogsReducer, {DialogsActionType} from "./dialogs-reducer";

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hi', count: 15},
                {id: v1(), message: 'It\'s my first post', count: 20},
                {id: v1(), message: 'I studied React for 10 hours today', count: 50},
                {id: v1(), message: 'Hello', count: 40},
                {id: v1(), message: '123456789', count: 1000000}
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [],
            newMessageBody: '',
            dialogs: [
                {id: v1(), name: 'Dimych'},
                {id: v1(), name: 'Andrey'}
            ],
            avatars: [
                {
                    id: v1(),
                    src: 'data:image/jpeg;base64,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'
                },
                {
                    id: v1(),
                    src: 'https://s-media-cache-ak0.pinimg.com/564x/0c/d5/cf/0cd5cfd1ccf0b6ceb12ad7efba2b101c.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        debugger
        this._state.profilePage = profileReducer(this._state.profilePage, action as ProfileActionType);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as DialogsActionType);
        this._callSubscriber(this._state);
    }
}

export type PostsProps = {
    id: string,
    message: string,
    count: number
}
export type ProfilePage = {
    posts: Array<PostsProps>
    newPostText: string
}
export type DialogsProps = {
    id: string
    name: string
}
export type MessageProps = {
    id: string
    message: string
}
export type AvatarsType = {
    id: string
    src: string
}
export type MessagesPage = {
    dialogs: Array<DialogsProps>
    messages: Array<MessageProps>
    avatars: Array<AvatarsType>
    newMessageBody: any
}
export type RootStateType = {
    profilePage: ProfilePage
    dialogsPage: MessagesPage
}
export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void,
    subscribe: (observer: any) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionType) => void,
    action?: ActionType
}

export type ActionType = ProfileActionType | DialogsActionType


export default store;
// window._store = store;