import React, {useState} from 'react';
import {History} from 'history'
import {AuthViewMode} from "../../constants";
import Register from "../../component/auth/register";
import Login from "../../component/auth/login";
import './index.scss'

interface Props {
    history: History
}

const AuthContainer = (props: Props) => {
    const [viewMode, setViewMode] = useState(AuthViewMode.LOGIN);

    const changeViewMode = (value: number) => {
        setViewMode(value)
    };

    return (
        <div className={"auth-container"}>
            <div className={"auth-header-container"}>
                <div className={"auth-header-circle"}>
                </div>
                <hr className={"auth-header-hr"} />
            </div>
            <div>
                {
                    viewMode === AuthViewMode.LOGIN
                        ? <Login />
                        : <Register />
                }
            </div>
            <div>

            </div>
        </div>
    )
};

export default AuthContainer;