import {combineReducers} from 'redux';
import AdReducer  from "./AdReducer";
import ImageReducer from "./ImageReducer";
import AttributesReducer from "./AttributesReducer";
import CategoriesReducer from './CategoriesReducer';
import OffersReducer from './OffersReducer';
export default combineReducers<any,any>(
    {
        AdReducer,
        ImageReducer,
        AttributesReducer,
        CategoriesReducer,
        OffersReducer
    }
);