import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfileType} from "../../redux/store";
import {getUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router'
import {RootStateRedux} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";


type PathParamsType = {
    userId: any
}
type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        if (this.props.profile)
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

        else return <div>sdf</div>
    }
}

let mapStateToProps = (state: RootStateRedux):MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);