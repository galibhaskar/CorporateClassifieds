import { FETCH_USERS_BEGIN, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from "../Actions/UserActions";

const intialstate = {
    Users: [],
    UserFetchError: false,
    UserFetchErrorInfo: "",
    loading: false

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
        default:
            return state;
    }
}