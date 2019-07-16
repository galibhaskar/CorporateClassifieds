import { FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, UPSERT_USER_ERROR, UPSERT_USER_SUCCESS, CHANGE_USERS_MODAL_STATUS, VALIDATE_USER_BEGIN, VALIDATE_USER_SUCCESS, VALIDATE_USER_ERROR } from "../Actions/UserActions";

const intialstate = {
    Users: [],
    UserFetchError: false,
    UserFetchErrorInfo: "",
    loading: false,
    UpsertUserSuccess: false,
    UpsertError: false,
    UpsertErrorInfo: "",
    UserLoggedIn: false,
    User: [],
    UserLogInError: false,

};

export default function UserReducer(state = intialstate, action: any) {
    switch (action.type) {

        case FETCH_USERS_BEGIN:
            return {
                ...state,
                Users: [],
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                Users: action.payload.Users,
                loading: false,
                UserFetchError: false
            }

        case FETCH_USERS_ERROR:
            return {
                ...state,
                Users: [],
                loading: false,
                UserFetchError: true,
                UserFetchErrorInfo: action.payload.error
            }

        case UPSERT_USER_SUCCESS:
            return {
                ...state,
                UpsertUserSuccess: true,
                UpsertError: false
            }

        case UPSERT_USER_ERROR:
            return {
                ...state,
                UpsertError: true,
                UpsertErrorInfo: action.payload.error
            }

        case CHANGE_USERS_MODAL_STATUS:
            return {
                ...state,
                UpsertUserSuccess: false
            }

        case VALIDATE_USER_BEGIN:
            return {
                ...state,
                User: []
            }

        case VALIDATE_USER_SUCCESS:
            return {
                ...state,
                User: action.payload.UserDetails,
                UserLoggedIn: true,
                UserLogInError: false,
            }

        case VALIDATE_USER_ERROR:
            return {
                ...state,
                User: [],
                UserLoggedIn: false,
                UserLogInError: true
            }

        default:
            return state;
    }
}