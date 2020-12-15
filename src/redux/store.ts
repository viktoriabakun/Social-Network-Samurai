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
            newPostText: '',
            profile: {} as  ProfileType,
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
        },
        // usersPage: {
        //     users: [
        //         {
        //             id: 1,
        //             photos: {
        //                 small: 'https://listim.com/resize?path=%2Fupload%2F2017%2F10%2Fbykov--croped.jpg&w=200&h=200',
        //                 large: 'https://listim.com/resize?path=%2Fupload%2F2017%2F10%2Fbykov--croped.jpg&w=200&h=200',
        //             },
        //             followed: false,
        //             name: 'Dmitriy',
        //             status: 'I am a boss',
        //             location: {city: 'Minsk', country: 'Belarus'}
        //         },
        //         {
        //             id: 2,
        //             photos: {
        //                 small: 'data:image/jpeg;base64,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',
        //                 large: 'data:image/jpeg;base64,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',
        //             },
        //             followed: true,
        //             name: 'Sasha',
        //             status: 'I am a boss too',
        //             location: {city: 'Moscow', country: 'Russia'}
        //         },
        //         {
        //             id: 3,
        //             photos: {
        //                 small: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3065-6232-4363-b433-336436393166__19800510_gaf_rg10_00.jpg',
        //                 large: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3065-6232-4363-b433-336436393166__19800510_gaf_rg10_00.jpg',
        //             } ,
        //             followed: false,
        //             name: 'Andrew',
        //             status: 'I am a boss too',
        //             location: {city: 'Kiev', country: 'Ukraine'},
        //         },
        //     ],
        //     pageSize: 5,
        //     totalUsersCount: 20,
        //     currentPage: 1,
        //     isFetching: true,
        // },
        // auth: {
        //     isAuth: true || false,
        //     login: ''
        // }
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
export type ProfileReducerType = {
    posts: Array<PostsProps>
    newPostText: string
    profile: ProfileType
}
export type ProfileType = {
    aboutMe: string,
    contacts:
        {
            facebook: null | string,
            website: null | string,
            vk: null | string,
            twitter: null | string,
            instagram: null | string,
            youtube: null | string,
            github: null | string,
            mainLink: null | string
        },
    lookingForAJob: boolean,
    lookingForAJobDescription: null | string,
    fullName: string,
    userId: number,
    photos:
        {
            small: string,
            large: string
        }
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
    profilePage: ProfileReducerType
    dialogsPage: MessagesPage
    // usersPage: {
    //     isFetching: boolean;
    //     currentPage: number;
    //     pageSize: number,
    //     totalUsersCount: number,
    //     users: Array<UserObjType>
    // }
}
export type StoreType = {
    _state: RootStateType,
    _callSubscriber: (state: RootStateType) => void,
    subscribe: (observer: any) => void,
    getState: () => RootStateType,
    dispatch: (action: ActionType) => void,
    action?: ActionType
}

export type LocationType = {
    city: string
    country: string
}

export type UserObjType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type UsersType = {
    users: Array<UserObjType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserObjType>) => void
}

export type ActionType = ProfileActionType | DialogsActionType


export default store;
// window._store = store;

