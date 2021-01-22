import React from "react";
import {ActionType,} from "../../../redux/store";
import {addPostCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateRedux} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type DispatchType = Dispatch<ActionType>;
const mapStateToProps = (state: RootStateRedux) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: (newPostText: string) =>
            dispatch(addPostCreator(newPostText))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;