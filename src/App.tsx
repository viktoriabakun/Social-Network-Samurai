import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, RootStateType, StoreType} from "./redux/state";

type PropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
    // updateNewPostText: (newText: string) => void
}
const App = (props: PropsType) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs store={props.store}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                                        profilePage={props.state.profilePage}
                                        dispatch={props.dispatch}
                       />}/>


                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    )
}
export default App;
