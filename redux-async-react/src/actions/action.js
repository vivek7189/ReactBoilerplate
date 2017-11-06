export function increment() {
    return {
        type:'INCREMENT'
    }
}

export function decrement() {
    return {
        type: 'DECREMENT'
    }
}

export function addFriend(id){
    return {
        type:'ADD_FRIEND',
        id
    }
}

export function deleteFriend(id){
   // console.log('deletefrnd',store.get());
    return{
        type:'DELETE_FRIEND',
        id
    }
}

export function starFriend(id){
    return{
        type:'STAR_FRIEND',
        id
    }
}

export function itemsHasErrored(bool){
    return{
        type:'ITEMS_HAS_ERRORED',
        hasErrored:bool
    }
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}


export function itemsFetchData(url){
       return (dispatch)=>{
        dispatch(itemsIsLoading(true));
           fetch(url)
           .then((response)=>{
               
               if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                  return response;
              }
              response.json().then(function(data) {
                console.log(data);
                dispatch(itemsFetchDataSuccess(data))
              });
            dispatch(itemsIsLoading(false));
            
           })

       }
}