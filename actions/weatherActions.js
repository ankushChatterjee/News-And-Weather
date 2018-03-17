export function fetchWeather() {
     return function(dispatch){
            navigator.geolocation.getCurrentPosition(position=>{
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const appId = '3bfc09309de8f933022b94364136654b';
            const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${appId}`;
            fetch(url).then(response=>{
                if(response.status != 200){
                    dispatch({type:"FETCH_WEATHER_FAIL",payload:response.statusText});
                    return;
                }
                return response.json();
            }).then(jsonData=>{
                
                dispatch({type:"FETCH_WEATHER_DONE",payload:jsonData});
            })

        },err=>{   
            dispatch({type:"FETCH_WEATHER_FAIL",payload:err});
            console.log(err);
        });
     }
}