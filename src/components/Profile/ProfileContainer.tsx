import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType} from "../../redux/store";
import {setUserProfileCreator} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router'
import {RootStateRedux} from "../../redux/redux-store";
import {usersAPI} from "../../api/api";


type PathParamsType = {
    userId: any
}
type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setUserProfileCreator: (profile: ProfileType) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        usersAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfileCreator(response.data)
            });
    }

    render() {

        if (this.props.profile)

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )

        else return <div>sdf</div>
    }
}

let mapStateToProps = (state: RootStateRedux):MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileCreator})(WithUrlDataContainerComponent);