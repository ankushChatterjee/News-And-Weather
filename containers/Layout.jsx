import React from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions/weatherActions';
import WeatherCard from '../components/WeatherCard';
import NewsLayout from './NewsLayout';


@connect((store)=>{
    return {
        weather:store.weather.weather,
        weatherFetched:store.weather.weatherFetched
    }
})
export default class Layout extends React.Component{
    componentWillMount(){
        this.props.dispatch(fetchWeather());
    }
    render() {
       
        //return <div>hello</div>
        if(!this.props.weatherFetched)
            return(
                <div className="loading">Loading...</div>
            );
        else{
            console.log("this>",this.props.weather);
            const city = this.props.weather.name;
            const temp = this.props.weather.main.temp;
            const icon = this.props.weather.weather[0].icon;
            const iconURL = `http://openweathermap.org/img/w/${icon}.png`;
            const weatherCond = this.props.weather.weather[0].main;

            const humidity = this.props.weather.main.humidity;
            const pressure = this.props.weather.main.pressure;
            const wind = this.props.weather.wind.speed;
            const country = this.props.weather.sys.country;
            console.log(humidity,pressure, wind);

            console.log(city,temp,iconURL,weatherCond);
            return(
                <div className="weather-layout">
                    <WeatherCard city={city} temp={temp} weatherCondition={weatherCond} iconURL={iconURL}
                        humidity={humidity} pressure={pressure} wind={wind}
                    />
                    <NewsLayout country={country} />
                </div>
            );
        }
    }
}