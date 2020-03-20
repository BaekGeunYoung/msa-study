import React, {useState, useReducer, ChangeEvent} from 'react';
import {History} from 'history'
import {AuthViewMode} from "../../constants";
import Register from "../../component/auth/register";
import Login from "../../component/auth/login";
import './index.scss'
import {loginInitialState, loginReducer} from "../../reducers/LoginReducer";
import {registerInitialState, registerReducer} from "../../reducers/RegisterReducer";

interface Props {
    history: History
}

const AuthContainer = (props: Props) => {
    const [viewMode, setViewMode] = useState(AuthViewMode.LOGIN);

    const handleChangeViewMode = (value: number) => {
        setViewMode(value)
    };

    const [loginState, dispatchLogin] = useReducer(loginReducer, loginInitialState);

    const [registerState, dispatchRegister] = useReducer(registerReducer, registerInitialState);


    const handleChangeLoginState = (e: ChangeEvent<HTMLInputElement>) => {
        const action = {
            type: e.target.name,
            value: e.target.value
        };

        //@ts-ignore
        dispatchLogin(action)
    };

    const handleChangeRegisterState = (e: ChangeEvent<HTMLInputElement>) => {
        const action = {
            type: e.target.name,
            value: e.target.value
        };

        //@ts-ignore
        dispatchRegister(action)
    };

    return (
        <div className={"auth-container"}>
            <div className={"auth-header-container"}>
                <div className={"auth-header-circle"}>
                </div>
                <hr className={"auth-header-hr"} />
            </div>
            <div className={"auth-body-container"}>
                {
                    viewMode === AuthViewMode.LOGIN
                        ? <Login
                            onChangeLoginState={handleChangeLoginState}
                            onChangeViewMode={handleChangeViewMode}
                            username={loginState.username}
                            password={loginState.password}
                        />
                        : <Register />
                }
            </div>
            <div className={"auth-footer-container"}>
                <hr className={"auth-footer-hr"} />
            </div>
        </div>
    )
};

export default AuthContainer;