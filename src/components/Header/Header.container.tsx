import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {RootStateRedux} from "../../redux/redux-store";


type MapStateType = {
    isAuth: boolean,
    login: string,
}

type MapDispatchPropsType = {
    logout: () => void
}

type PropsType = MapStateType & MapDispatchPropsType;


class HeaderContainer extends React.Component<PropsType> {


    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>;
    }

}

const mapStateToProps = (state:RootStateRedux): MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};

export default connect<MapStateType, MapDispatchPropsType, {}, RootStateRedux>(mapStateToProps, {logout})(HeaderContainer);