import React from "react";
import {ActionType, PostsProps, RootStateType, StoreType,} from "../../../redux/state";
import {addPostCreator, changeNewTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// type PropsType = {
//     store?: StoreType
//     posts?: Array<PostsProps>
//     newPostText?: string
//     updateNewPostText?: (text: string) => void
// }

// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     let state = store.getState();
//                     const addPost = () => {
//                         store.dispatch(addPostCreator());
//                         console.log('add post was clicked')
//                     }
//
//                     const onPostChange = (text: string) => {
//                         // let text = newPostElement.current ? newPostElement.current.value : "---";
//                         // props.dispatch(changeNewTextCreator(text))
//                         let action = changeNewTextCreator(text);
//                         store.dispatch(action)
//                     }
//                     return <MyPosts updateNewPostText={onPostChange}
//                                     addPost={addPost}
//                                     posts={store.getState().profilePage.posts}
//                                     newPostText={store.getState().profilePage.newPostText}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
// }

const mapStateToProps = (state: RootStateType) => {
    debugger
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewPostText: (text: string) => {
            let action = changeNewTextCreator(text);
            dispatch(action)
        },
        addPost: () => dispatch(addPostCreator())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;