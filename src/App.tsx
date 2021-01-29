import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/Header.container";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {RootStateRedux} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component<MapDispatchPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }


        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <LoginPage/>}/>


                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>

        )
    }
}

const MapStateToProps = (state: RootStateRedux):MapStateType => {
    return {
        initialized: state.app.initialized
    }
} 

type MapStateType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void
}

export default compose<React.ComponentType>(
    withRouter,
    connect<MapStateType, MapDispatchPropsType, {}, RootStateRedux>(MapStateToProps, {initializeApp}))(App);
