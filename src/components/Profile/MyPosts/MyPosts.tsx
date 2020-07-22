import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsProps} from "../../../redux/state";


type PropsType = {
    posts:  Array<PostsProps>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} count={p.count}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
            props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current;
        if (text)
            props.updateNewPostText(text.value);
    }

    return <div className={s.posts_block}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
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