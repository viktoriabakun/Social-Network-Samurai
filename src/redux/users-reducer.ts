const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitriy',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 1,
            followed: true,
            fullName: 'Sasha',
            status: 'I am a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 1,
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss too',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
}

const usersReducer = (state = initialState, action: any) => {

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

        default:
            return state;
    }

}


export const followAC = (userID: number) => ({type: FOLLOW, userID})
export const unfollowAC = (userID: number) => ({type: UNFOLLOW, userID})

export default usersReducer;