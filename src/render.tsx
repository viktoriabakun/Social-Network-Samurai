import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from './redux/state'
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state={state} addPost={addPost}/>
            </BrowserRouter>,
        document.getElementById('root')
    );
}
