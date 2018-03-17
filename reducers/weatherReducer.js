export default function weatherReducer(state={
    weather:{},
    weatherFetched:false
    }, action){
    console.log("in reducer");
    switch(action.type){
        case 'FETCH_WEATHER_DONE':
            // console.log(action.payload);
            // console.log(state);
            return {...state,weatherFetched:true,weather:action.payload};
        break;
        default:
            return state;
        break;
    }

}