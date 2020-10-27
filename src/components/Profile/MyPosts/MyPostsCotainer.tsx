// import React from "react";
import {ActionType, RootStateType,} from "../../../redux/store";
import {addPostCreator, changeNewTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state: RootStateType) => {
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