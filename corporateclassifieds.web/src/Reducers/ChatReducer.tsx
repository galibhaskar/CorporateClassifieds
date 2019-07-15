const intialstate = {
   Messages: [],
    error: false,
    loading: true,
    MessagePostError:false,
    MessagesAvailable:false,
    errorInfo:""
};

export default function ChatReducer(state = intialstate, action: any) {
    switch (action.type) {
        case 'FETCH_MESSAGES_BEGIN': console.log("Messages fetch begin");
            return {
                ...state,
                loading: true,
                error: false,
            }

        case 'FETCH_MESSAGES_SUCCESS': console.log("Messages fetchsuccess")
        debugger;
        if(action.payload.Messages.length==0)
            return {
                ...state,
                loading: false,
                Messages: [],
                MessagesAvailable:false,
                error:false
            }
        else
            return {
                ...state,
                loading: false,
                Messages: action.payload.Messages,
                MessagesAvailable:true,
                error:false
            }

        case 'FETCH_MESSAGES_ERROR': console.log("Messages fetch error")
            return {
                ...state,
                loading: false,
                errorInfo: action.payload.error,
                error:true,
                Messages: [],
                MessagesAvailable:false
            }

        case 'POST_MESSAGE_ERROR':
            return{
                ...state,
                MessagePostError:true
            }
        default:
            return state;
    }
}