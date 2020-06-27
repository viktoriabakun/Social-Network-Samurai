import React, {FC, ReactChild, ReactPortal} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {addPost, MessagesPage, PostsProps, RootStateType} from "./redux/state";

type PropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
const App: FC<PropsType> = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                <Route path='/profile'
                       render={() => <Profile
                                        profilePage={props.state.profilePage}
                                        addPost={props.addPost}
                       updateNewPostText={props.updateNewPostText}
                       />}/>


                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    )
}
export default App;
