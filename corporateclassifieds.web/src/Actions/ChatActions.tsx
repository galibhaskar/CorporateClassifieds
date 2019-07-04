
export const fetchOffersBegin = () =>
({
  type: 'FETCH_OFFERS_BEGIN'
})


export const fetchOffersSuccess = (Offers: any) =>
({
  type: 'FETCH_OFFERS_SUCCESS',
  payload: { Offers }
})

export const fetchOffersError = (error: any) =>
({
  type: 'FETCH_OFFERS_ERROR',
  payload: { error }
})

export const postOfferError = () => ({
type: 'POST_OFFER_ERROR'
})


export const postOffersuccess=()=>({
type:'POST_OFFER_SUCCESS'
})



export function fetchUserOffers(userID:number){
return async(dispatch:any)=>{
  debugger;
  dispatch(fetchOffersBegin());
  try{
    const url="https://localhost:44378/api/Offers/"+userID;
    const response= await fetch(url);
    debugger;
    const res=await handleErrors(response);
    const json=await res.json();
    dispatch(fetchOffersSuccess(json));
  }
  catch(error){
    debugger;
    dispatch(fetchOffersError(error));
  }
}
}


export function postMessage() {
debugger;
return async (dispatch: any) => {
  try {
    const url = "";
    const response=await fetch(url, {
      method: 'post',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify("gfdgd")
    });
    const res = await handleErrors(response);
    dispatch(postOffersuccess());
  }
  catch (error) {
    return dispatch(postOfferError());
  }
}
}



// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
if (!response.ok) {
  throw Error(response.statusText);
}
return response;
}




