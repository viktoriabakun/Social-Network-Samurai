import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type PropsType = {
    isAuth?: boolean,
    login?: string
}

const Header = (props: PropsType) => {
    return <header className={s.header}>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;