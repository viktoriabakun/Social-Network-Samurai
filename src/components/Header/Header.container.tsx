import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {RootStateRedux} from "../../redux/redux-store";
import {authAPI} from "../../api/api";


type MapStateType = {
    isAuth: boolean,
    login: string,

}

type MapDispatchPropsType = {
    setAuthUserData: (userId:number, email:string, login:string) => void
}


type PropsType = MapStateType & MapDispatchPropsType;


class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {

        authAPI.me()
            .then(response => {

                if(response.data.resultCode === 0){
                    let {id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            });
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

export default connect<MapStateType, MapDispatchPropsType, {}, RootStateRedux>(mapStateToProps, {setAuthUserData})(HeaderContainer);