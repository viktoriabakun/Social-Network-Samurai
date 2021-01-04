import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {RootStateRedux} from "../../redux/redux-store";


type MapStateType = {
    isAuth: boolean,
    login: string,
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

type PropsType = MapStateType & MapDispatchPropsType;


class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {

        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }

}

const mapStateToProps = (state:RootStateRedux): MapStateType => {

    return {
        isAuth: state.authReducer.isAuth,
        login: state.authReducer.login,
    }
};

export default connect<MapStateType, MapDispatchPropsType, {}, RootStateRedux>(mapStateToProps, {getAuthUserData})(HeaderContainer);