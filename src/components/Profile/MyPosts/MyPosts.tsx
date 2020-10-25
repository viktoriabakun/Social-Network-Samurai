import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsProps,} from "../../../redux/state";


type PropsType = {
    posts: Array<PostsProps>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void

}

const MyPosts = (props: PropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} count={p.count}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = () => {
        props.addPost();
        console.log('add post was clicked')
    }

    const onPostChange = () => {
        let text = newPostElement.current ? newPostElement.current.value : "---";
        props.updateNewPostText(text);
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
                <button onClick={onAddPost}>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>

    </div>
}

export default MyPosts;