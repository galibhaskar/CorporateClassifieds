import { FETCH_ADS_BEGIN, FETCH_ADS_SUCCESS, FETCH_ADS_ERROR, POST_AD_ERROR, APPLY_FILTERS, FETCH_ACTIVE_ADS_BEGIN, FETCH_ACTIVE_ADS_SUCCESS, FETCH_ACTIVE_ADS_ERROR, FETCH_HISTORY_ADS_BEGIN, FETCH_HISTORY_ADS_SUCCESS, FETCH_HISTORY_ADS_ERROR, CHANGE_VIEW, FETCH_AD_BY_ID_ERROR, FETCH_AD_BY_ID_BEGIN, FETCH_AD_BY_ID_SUCCESS, CHANGE_DISPLAY_STATUS, FETCH_EXPIRED_ADS_BEGIN, FETCH_EXPIRED_ADS_SUCCESS, FETCH_EXPIRED_ADS_ERROR, FETCH_DELETED_ADS_BEGIN, FETCH_DELETED_ADS_SUCCESS, FETCH_DELETED_ADS_ERROR } from "../Actions/AdActions";

const intialstate = {
    Ad: [],
    viewAd: false,
    Ads: [],
    FilteredAds: [],
    ActiveAds: [],
    HistoryAds: [],
    ExpiredAds: [],
    DeletedAds: [],
    error: false,
    loading: true,
    adPostError: false,
    AdsAvailable: false,
    ActiveAdsAvailable: false,
    HistoryAdsAvailable: false,
    DeletedAdsAvailable: false,
    ExpiredAdsAvailable: false,
    errorInfo: "",
    ListView: true,
};



// function handlefilter(AdsList: any, filtersList: any): boolean {
//     var filteredAds: any = [];
//     AdsList.forEach((item: any) => {
//         (filtersList.AdType).forEach((Type: any) => {
//             if (item.Type == Type)
//                 filteredAds.push(item)
//         })

//     });

//     AdsList.forEach((item: any) => {
//         (filtersList.AdType).forEach((Type: any) => {
//             if (item.Type == Type)
//                 filteredAds.push(item)
//         })

//     });
//     return true;
// }




export default function AdReducer(state = intialstate, action: any) {
    switch (action.type) {

        case FETCH_ADS_BEGIN:
            console.log("Ads Fetch begin");
            if (state.Ads === [])
                return {
                    ...state,
                    loading: true,
                    error: false,
                    Ads: []
                }
            else
                return {
                    ...state,
                    loading: true,
                    error: false
                }


        // case FETCH_START_ADS_BEGIN:
        //     return {
        //         ...state,
        //         loading: true,
        //         error: false,
        //         Ads: []
        //     }


        case FETCH_ADS_SUCCESS:
            console.log("Ads Fetch success")
            //debugger;

            if (action.payload.Ads.length == 0)
                return {
                    ...state,
                    loading: false,
                    Ads: state.Ads,
                    AdsAvailable: false,
                    error: false
                }
            else {
                return {
                    ...state,
                    loading: false,
                    Ads: [...state.Ads, ...action.payload.Ads],
                    AdsAvailable: true,
                    error: false
                }
            }


        case FETCH_ADS_ERROR:
            console.log("Ads Fetch error")
            return {
                ...state,
                loading: false,
                errorInfo: action.payload.error,
                error: true,
                Ads: [],
                AdsAvailable: false
            }


        case POST_AD_ERROR:
            return {
                ...state,
                adPostError: true
            }


        case FETCH_ACTIVE_ADS_BEGIN:
            console.log("active ads fetch begin");
            if (state.ActiveAds === [])
                return {
                    ...state,
                    loading: true,
                    error: false,
                    ActiveAds: []
                }
            else
                return {
                    ...state,
                    loading: true,
                    error: false
                }


        case FETCH_ACTIVE_ADS_SUCCESS:
            console.log("active ads fetch success");
            if (action.payload.ActiveAds.length == 0) {
                if (state.ActiveAds.length) {
                    //debugger;
                    return {
                        ...state,
                        loading: false,
                        ActiveAdsAvailable: true,
                        error: false
                    }
                }
                else {
                    //debugger;
                    return {
                        ...state,
                        loading: false,
                        ActiveAdsAvailable: false,
                        error: false
                    }
                }
            }
            else {
                //debugger;
                return {
                    ...state,
                    loading: false,
                    ActiveAds: [...state.ActiveAds, ...action.payload.ActiveAds],
                    ActiveAdsAvailable: true,
                    error: false
                }
            }


        case FETCH_ACTIVE_ADS_ERROR:
            console.log("active ads fetch error");
            return {
                ...state,
                loading: false,
                error: true,
                errorInfo: action.payload.error
            }


        case FETCH_HISTORY_ADS_BEGIN:
            console.log("History ads fetch begin");
            if (state.HistoryAds === [])
                return {
                    ...state,
                    loading: true,
                    error: false,
                    HistoryAds: []
                }
            else
                return {
                    ...state,
                    loading: true,
                    error: false
                }



        case FETCH_HISTORY_ADS_SUCCESS:
            console.log("History ads fetch success");
            if (action.payload.HistoryAds.length == 0) {
                if (state.HistoryAds.length) {
                    return {
                        ...state,
                        loading: false,
                        HistoryAdsAvailable: true,
                        error: false
                    }
                }
                else {
                    return {
                        ...state,
                        loading: false,
                        HistoryAdsAvailable: false,
                        error: false
                    }
                }
            }
            else {
                return {
                    ...state,
                    loading: false,
                    HistoryAds: [...state.HistoryAds, ...action.payload.HistoryAds],
                    HistoryAdsAvailable: true,
                    error: false
                }
            }


        case FETCH_HISTORY_ADS_ERROR:
            console.log("History ads fetch error");
            return {
                ...state,
                loading: false,
                error: true,
                errorInfo: action.payload.error
            }


        case FETCH_AD_BY_ID_BEGIN:
            return {
                ...state,
                loading: true,
                error: false,
                Ad: []
            }


        case FETCH_AD_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                Ad: action.payload.Ad,
                error: false,
                viewAd: true
            }


        case FETCH_AD_BY_ID_ERROR:
            return {
                ...state,
                loading: false,
                errorInfo: action.payload.error,
                error: true
            }


        case CHANGE_VIEW:
            if (action.payload.ViewID == 0)
                return {
                    ...state,
                    ListView: false
                }
            else
                return {
                    ...state,
                    ListView: true
                }

        case CHANGE_DISPLAY_STATUS:
            if (action.payload.active == 1)
                return {
                    ...state,
                    viewAd: true
                }
            else
                return {
                    ...state,
                    viewAd: false
                }


        case FETCH_EXPIRED_ADS_BEGIN:
            if (state.ExpiredAds === [])
                return {
                    ...state,
                    loading: true,
                    error: false,
                    ExpiredAds: []
                }
            else
                return {
                    ...state,
                    loading: true,
                    error: false
                }


        case FETCH_EXPIRED_ADS_SUCCESS:
            if (action.payload.ExpiredAds.length == 0) {
                if (state.ExpiredAds.length) {
                    return {
                        ...state,
                        loading: false,
                        ExpiredAdsAvailable: true,
                        error: false
                    }
                }
                else {
                    return {
                        ...state,
                        loading: false,
                        ExpiredAdsAvailable: false,
                        error: false
                    }
                }
            }
            else {
                return {
                    ...state,
                    loading: false,
                    ExpiredAds: [...state.ExpiredAds, ...action.payload.ExpiredAds],
                    ExpiredAdsAvailable: true,
                    error: false
                }
            }

        case FETCH_EXPIRED_ADS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorInfo: action.payload.error,
                ExpiredAds: []
            }

        case FETCH_DELETED_ADS_BEGIN:
            if (state.DeletedAds === [])
                return {
                    ...state,
                    loading: true,
                    error: false,
                    DeletedAds: []
                }
            else
                return {
                    ...state,
                    loading: true,
                    error: false
                }

        case FETCH_DELETED_ADS_SUCCESS:
            if (action.payload.DeletedAds.length == 0) {
                if (state.DeletedAds.length) {
                    return {
                        ...state,
                        loading: false,
                        DeletedAdsAvailable: true,
                        error: false
                    }
                }
                else {
                    return {
                        ...state,
                        loading: false,
                        DeletedAdsAvailable: false,
                        error: false
                    }
                }
            }
            else {
                return {
                    ...state,
                    loading: false,
                    DeletedAds: [...state.DeletedAds, ...action.payload.DeletedAds],
                    DeletedAdsAvailable: true,
                    error: false
                }
            }

        case FETCH_DELETED_ADS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                errorInfo: action.payload.error
            }

        default:
            return state;
    }
}