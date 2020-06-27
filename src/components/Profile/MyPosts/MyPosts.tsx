import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsProps, ProfilePage} from "../../../redux/state";


type PropsType = {
    posts: Array<PostsProps>
    addPost: (message: string) => void
}
const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map( p => <Post message={p.message} count={p.count}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const  addPost = () => {
        if (newPostElement.current)
        props.addPost(newPostElement.current.value);
        if (newPostElement.current)
        newPostElement.current.value = '';
    }

    return <div className={s.posts_block}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} ></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>

    </div>
}

export default MyPosts;