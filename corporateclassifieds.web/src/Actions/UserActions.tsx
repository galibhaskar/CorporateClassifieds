export const VALIDATE_USER_BEGIN = 'VALIDATE_USER_BEGIN';
export const VALIDATE_USER_SUCCESS = 'VALIDATE_USER_SUCCESS';
export const VALIDATE_USER_ERROR = 'VALIDATE_USER_ERROR';

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

function handleError(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}