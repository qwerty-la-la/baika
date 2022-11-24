import React from 'react';
import "./auth.scss";
import {Link} from "react-router-dom";

const Reg = () => {
    return (
        <div className="auth">
            <div className="auth__wrapper">
                <p className="auth__title">Регистрация</p>
                <form className="auth__form">
                    <input type="text" className="auth__form-mail" placeholder="Почта"/>
                    <input type="password" className="auth__form-pass" placeholder="Придумайте пароль"/>
                    <input type="password" className="auth__form-pass" placeholder="Повторите ваш пароль"/>
                    <input type="text" className="auth__form-nick" placeholder="Придумайте ник"/>
                    <div className="auth__form-wrapper">
                        <button className="auth__form-wrapper-btn">Зарегистрироваться</button>
                        <Link to="/authorization" className="auth__form-wrapper-btnAuth">Есть аккаунт?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Reg;
