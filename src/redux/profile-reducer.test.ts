import profileReducer, {addPostCreator, deletePost, initialStateType} from "./profile-reducer";
import {v1} from "uuid";
import {ProfileType} from "./store";

let state: initialStateType = {
    posts: [
        {id: v1(), message: 'Hi', count: 15},
        {id: v1(), message: 'It\'s my first post', count: 20},
        {id: v1(), message: 'I studied React for 10 hours today', count: 50},
        {id: v1(), message: 'Hello', count: 40},
    ],
    newPostText: '',
    profile: {} as ProfileType,
    status: ''
}

test('length of posts should be incremented', () => {
    let action = addPostCreator('it-kamasutra.com')
    let newState =  profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
})


test('new post message should be correct', () => {
    let action = addPostCreator('it-kamasutra.com')
    let newState = profileReducer(state, action)
    expect(newState.posts[4].message).toBe('it-kamasutra.com')
})

// test('length of messages should be decremented after delete', () => {
//     let action = deletePost('1')
//     let newState = profileReducer(state, action)
//     expect(newState.posts.length).toBe(3)
// })


test('length of messages shouldn\'t be decremented if id is wrong', () => {
    let action = deletePost('kamasutra')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
})
