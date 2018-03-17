export default function newsReducer(state={
    articles:[],
    newsFetched:false
    }, action){
    console.log("in reducer");
    switch(action.type){
        case 'FETCH_NEWS_DONE':

            return {...state,newsFetched:true,articles:action.payload};
        break;
        default:
            return state;
        break;
    }

}