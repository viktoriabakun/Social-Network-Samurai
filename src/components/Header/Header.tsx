import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth?: boolean,
    login?: string,
    logout: () => void
}

const Header = (props: PropsType) => {
    return <header className={s.header}>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login}  <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;