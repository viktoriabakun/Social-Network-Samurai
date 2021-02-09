import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {createField, Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateRedux} from "../../redux/redux-store";
import s from '../common/FormsControls/FormControls.module.css'

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

type LoginType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> =
    ({handleSubmit, error}) => {
        return (
            <form onSubmit={handleSubmit}>
                {createField('Email', 'email', [required], Input)}
                {createField('Password', 'password', [required], Input, {type: 'password'})}
                {createField(null, 'rememberMe', null, Input, {type: 'checkbox'}, 'remember me')}

                {error &&
                <div className={s.formSummaryError}>{error}</div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    };

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)


const Login = (props: LoginType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        console.log('REDIRECT')
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
};

const mapStateToProps = (state: RootStateRedux) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);