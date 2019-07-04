import { SUBMISSION_SUCCESS, SUBMISSION_ERROR } from "../Actions/ReportActions";

const intialstate = {
    showSucess: false,
    showFail: false
}

export default function ReportReducer(state = intialstate, action: any) {
    switch (action.type) {

        case SUBMISSION_SUCCESS: console.log("Reports Fetch success")
            return {
                ...state,
                showSucess: true
            }

        case SUBMISSION_ERROR: console.log("Reports fetch error")
            return {
                ...state,
                showFail: true,
                error: action.payload.error
            }

        default:
            return state;
    }
}