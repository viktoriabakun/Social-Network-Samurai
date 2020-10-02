import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    PostsProps, StoreType,
} from "../../../redux/state";
import {changeNewTextCreator, addPostCreator, ChangeNewTextActionCreatorType} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type PropsType = {
    store: StoreType
    posts?: Array<PostsProps>
    newPostText?: string
    updateNewPostText?: (text: string) => void
}

const MyPostsContainer = (props: PropsType) => {

    // let postsElements = props.posts.map(p => <Post message={p.message} count={p.count}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostCreator());
        console.log('add post was clicked')
    }

    const onPostChange = (text: string) => {
        // let text = newPostElement.current ? newPostElement.current.value : "---";
        // props.dispatch(changeNewTextCreator(text))
        let action = changeNewTextCreator(text);
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
        )
    
}

export default MyPostsContainer;