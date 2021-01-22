import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsProps,} from "../../../redux/store";
import {reduxForm, Field, InjectedFormProps} from "redux-form";


type PropsType = {
    posts: Array<PostsProps>
    newPostText: string
    addPost: (newPostText: string) => void
}

export type AddNewPostFormDataType = {
    newPostText: string
}


const MyPosts = (props: PropsType) => {

    let postsElements = props.posts
        .map(p => <Post key={p.id} message={p.message} count={p.count}/>)
    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = (values: AddNewPostFormDataType) => {
        props.addPost(values.newPostText);
    }

    // const onPostChange = () => {
    //     let text = newPostElement.current ? newPostElement.current.value : "---";
    //     // props.updateNewPostText(text);
    // }

    return <div className={s.posts_block}>
        <h3>My posts</h3>
        <AddNewPostReduxForm onSubmit={onAddPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>

    </div>
}
const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText'
                       component='textarea'
                       placeholder='Enter your text'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostReduxForm = reduxForm<AddNewPostFormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;