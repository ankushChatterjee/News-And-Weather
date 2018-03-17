export function fetchNews(country){
    return function(dispatch){
        const apiKey = '1d51f86e8dda48779cbeb685a4cc174e';
        const url=`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;        
        fetch(url).then(response=>{
            if(response.status != 200){
                dispatch({type:"FETCH_NEWS_FAIL",payload:response.statusText});
                return;
            }
            return response.json();
        }).then(jsonData=>{
            dispatch({type:"FETCH_NEWS_DONE",payload:jsonData.articles});
        }).catch(err=>{
            dispatch({type:"FETCH_NEWS_FAIL",payload:err});
        });
    }
 }
