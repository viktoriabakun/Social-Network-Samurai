import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, RootStateType} from "../../redux/store";
import {setUserProfileCreator} from "../../redux/profile-reducer";
import {withRouter, RouteComponentProps} from 'react-router'


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
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let mapStateToProps = (state: RootStateType):MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfileCreator})(WithUrlDataContainerComponent);