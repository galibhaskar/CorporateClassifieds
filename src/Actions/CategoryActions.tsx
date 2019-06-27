import { AttributesFetch } from "./AttributesActions";
export const CATEGORY_FETCH_BEGIN='CATEGORY_FETCH_BEGIN';
export const CATEGORY_FETCH_SUCCESS='CATEGORY_FETCH_SUCCESS';
export const CATEGORY_FETCH_ERROR='CATEGORY_FETCH_ERROR';


export const CategoryFetchBegin=()=>({
        type:CATEGORY_FETCH_BEGIN
})
export const CategoriesFetchSuccess=(Categories: any)=> ({
        type: CATEGORY_FETCH_SUCCESS,
        payload: {Categories}
})

export const CategoriesFetchError=(error:any)=>({
        type:CATEGORY_FETCH_ERROR,
        payload:{error}
})

export function CategoriesFetch(){
    return async (dispatch:any)=>{
        debugger;
        try{
            const url="https://localhost:44378/api/Category";
            const response=await fetch(url);
            const res = await handleErrors(response);
            const Categories=await res.json();
            dispatch(CategoriesFetchSuccess(Categories));
           
        }
        catch (error) {
            return dispatch(CategoriesFetchError(error));
          }
    }
}

function handleErrors(response: any) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }