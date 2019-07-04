export const SUBMISSION_SUCCESS='SUBMISSION_SUCCESS';
export const SUBMISSION_ERROR='SUBMISSION_ERROR';

export const ReportSubmissionError = (error: any) => ({
    type: SUBMISSION_ERROR,
    payload: { error }
})

export const ReportSubmissionSuccess = () => ({
    type: SUBMISSION_SUCCESS
})

export function SubmitReport() {
    return async (dispatch: any) => {
        try {
            const response = await fetch("https://localhost:44378/api/Ads");
            console.log(response);
            const res = await handleErrors(response);
            dispatch(ReportSubmissionSuccess());
        }
        catch (error) {
            return dispatch(ReportSubmissionError(error));
        }
    };
}
function handleErrors(response: any) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}