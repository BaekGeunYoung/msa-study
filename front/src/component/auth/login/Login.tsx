import React, {ChangeEvent} from 'react'
import {Button, Input} from 'reactstrap'
import "./index.scss"

interface Props {
    username: string
    password: string
    onChangeViewMode: (value: number) => void
    onChangeLoginState: (e: ChangeEvent<HTMLInputElement>) => void
}

const Login = (props: Props) => {
    return(
        <div className={"login-form-container"}>
            <div className={"username-container"}>
                <Input
                    className={"login-input"}
                    name={"username"}
                    placeholder={"username"}
                    value={props.username}
                    onChange={props.onChangeLoginState}
                />
            </div>
            <div className={"password-container"}>
                <Input
                    className={"login-input"}
                    name={"password"}
                    placeholder={"password"}
                    value={props.password}
                    onChange={props.onChangeLoginState}
                />
            </div>
            <div className={"login-button-container"}>
                <Button className={"login-button"} color={"primary"}>Login</Button>
            </div>
        </div>
    )
};

export default Login;