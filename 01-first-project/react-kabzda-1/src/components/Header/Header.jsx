import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?size=626&ext=jpg' />

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;