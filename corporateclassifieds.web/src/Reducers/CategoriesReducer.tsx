import { CATEGORY_FETCH_SUCCESS, CATEGORY_FETCH_ERROR, CATEGORY_FETCH_BEGIN } from "../Actions/CategoryActions";

const initialstate={
    Categories:[],
    CategoriesError:false
}

export default function CategoriesReducer(state=initialstate,action:any)
{
    switch(action.type)
    {
        case CATEGORY_FETCH_BEGIN:
            return{
                ...state,
                Categories:[]
            }
        case CATEGORY_FETCH_SUCCESS:
            return{
                ...state,
                Categories:action.payload.Categories
            }
        case CATEGORY_FETCH_ERROR:
            return{
                ...state,
                CategoriesError:true
            }
        default:
            return{
                ...state
            }
    }
}