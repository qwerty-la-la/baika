import React from 'react';
import "../Reg/auth.scss";
import {Link} from "react-router-dom";

const Auth = () => {
    return (
        <div className="auth">
            <div className="auth__wrapper">
                <p className="auth__title">Войти</p>
                <form className="auth__form">
                    <input type="text" className="auth__form-mail" placeholder="Почта"/>
                    <input type="password" className="auth__form-pass" placeholder="Пароль"/>
                    <div className="auth__form-wrapper">
                        <button className="auth__form-wrapper-btn">Войти</button>
                        <Link to="/registration" className="auth__form-wrapper-btnAuth">Нет аккаунта?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
