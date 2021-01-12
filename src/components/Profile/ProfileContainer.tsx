import React, {FC} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType} from "../../redux/store";
import {getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router'
import {RootStateRedux} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from "redux";


type PathParamsType = {
    userId: any
}
type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
       this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state: RootStateRedux):MapStatePropsType => ({
    profile: state.profilePage.profile
})


export default compose<FC>(
    connect(mapStateToProps, {getUserProfile}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)