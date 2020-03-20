
export interface LoginState {
    username: string
    password: string
}

enum LoginType {
    USERNAME = 'username',
    PASSWORD = 'password',
}

export interface LoginAction {
    type: LoginType
    value: string
}

export const loginReducer = (state: LoginState, action: LoginAction) => {
    return {
        ...state,
        [action.type] : action.value
    }
};

export const loginInitialState: LoginState = {
    username: '',
    password: '',
};