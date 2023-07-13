export type SignupRequest = {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
};

export type SigninRequest = {
    login: string;
    password: string;
};

export type User = {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
};

export interface ILoadable {
    fetching: boolean;
}

export type TOAuthCredentials = {
    code: string;
    redirect_uri: string;
};

export type TOAuthId = {
    service_id: string | null;
};

export type TOAuthResult = {
    reason: string;
};
