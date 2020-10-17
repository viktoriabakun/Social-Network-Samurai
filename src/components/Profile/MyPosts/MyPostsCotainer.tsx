import React from "react";
import {PostsProps, StoreType,} from "../../../redux/state";
import {addPostCreator, changeNewTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


// type PropsType = {
//     store?: StoreType
//     posts?: Array<PostsProps>
//     newPostText?: string
//     updateNewPostText?: (text: string) => void
// }

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                let state = store.getState();
                const addPost = () => {
                    store.dispatch(addPostCreator());
                    console.log('add post was clicked')
                }

                const onPostChange = (text: string) => {
                    // let text = newPostElement.current ? newPostElement.current.value : "---";
                    // props.dispatch(changeNewTextCreator(text))
                    let action = changeNewTextCreator(text);
                    store.dispatch(action)
                }
                return  <MyPosts updateNewPostText={onPostChange}
                               addPost={addPost}
                               posts={store.getState().profilePage.posts}
                               newPostText={store.getState().profilePage.newPostText}
        />}
        }
        </StoreContext.Consumer>
        )
    
}

export default MyPostsContainer;