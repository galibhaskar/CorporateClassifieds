export const VALIDATE_USER_BEGIN = 'VALIDATE_USER_BEGIN';
export const VALIDATE_USER_SUCCESS = 'VALIDATE_USER_SUCCESS';
export const VALIDATE_USER_ERROR = 'VALIDATE_USER_ERROR';
export const FETCH_USERS_BEGIN = 'FETCH_USERS_BEGIN';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';
export const UPSERT_USER_SUCCESS = 'UPSERT_USER_SUCCESS';
export const UPSERT_USER_ERROR = 'UPSERT_USER_ERROR';

export const ValidateUserBegin = () => ({
    type: VALIDATE_USER_BEGIN
})
export const ValidateUserSuccess = (UserDetails: any) => ({
    type: VALIDATE_USER_SUCCESS,
    payload: { UserDetails }
})
export const ValidateUserError = (Error: any) => ({
    type: VALIDATE_USER_ERROR,
    payload: { Error }
})

export const fetchUsersBegin = () => ({
    type: FETCH_USERS_BEGIN
})

export const fetchUsersSuccess = (Users: any) => ({
    type: FETCH_USERS_SUCCESS,
    payload: { Users }
})

export const fetchUsersError = (error: any) => ({
    type: FETCH_USERS_ERROR,
    payload: { error }
})

export const UpsertUserSuccess = () => ({
    type: UPSERT_USER_SUCCESS
})

export const UpsertUserError = (error: any) => ({
    type: UPSERT_USER_ERROR,
    payload: { error }
})

export const ValidateCredentials = (Credentials: any) => {
    return async (dispatch: any) => {
        dispatch(ValidateUserBegin());
        try {
            const url = "" + Credentials;
            const res = fetch(url);
            const response = handleError(res);
            dispatch(ValidateUserSuccess(response));
        }
        catch (error) {
            return dispatch(ValidateUserError(error));
        }
    }
}

export const FetchUsers = () => {
    return async (dispatch: any) => {
        dispatch(fetchUsersBegin());
        try {
            const url = "https://localhost:44378/api/User";
            const res = await fetch(url);
            const response = await handleError(res);
            const json = await response.json();
            dispatch(fetchUsersSuccess(json));
        }
        catch (error) {
            dispatch(fetchUsersError(error));
        }
    }
}


export const UpsertUser = (UsersList: any) => {
    return async (dispatch: any) => {
        try {
            const url = "https://localhost:44378/api/User";
            const res = await fetch(url, {
                method: 'post',
                headers: new Headers({ 'content-type': 'application/json' }),
                body: JSON.stringify(UsersList)
            })
            const response = await handleError(res);
            dispatch(UpsertUserSuccess());
        }
        catch (error) {
            dispatch(UpsertUserError(error));
        }
    }
}

function handleError(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}