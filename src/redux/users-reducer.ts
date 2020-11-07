import {UsersType} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState: any = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://listim.com/resize?path=%2Fupload%2F2017%2F10%2Fbykov--croped.jpg&w=200&h=200',
        //     followed: false,
        //     fullName: 'Dmitriy',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'data:image/jpeg;base64,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',
        //     followed: true,
        //     fullName: 'Sasha',
        //     status: 'I am a boss too',
        //     location: {city: 'Moscow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3065-6232-4363-b433-336436393166__19800510_gaf_rg10_00.jpg',
        //     followed: false,
        //     fullName: 'Andrew',
        //     status: 'I am a boss too',
        //     location: {city: 'Kiev', country: 'Ukraine'}
        // },
    ]
}

const usersReducer = (state: UsersType = initialState, action: any) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }


        default:
            return state;
    }
}


export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UsersType) => ({type: SET_USERS, users})

export default usersReducer;