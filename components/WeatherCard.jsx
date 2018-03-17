import React from 'react';
import '../styles/weathercard.css';
import MiniWeatherStat from './MiniWeatherStat';

export default class WeatherCard extends React.Component{
    render(){
        return(
            <div className="weatherCard">
                <div className="city">{this.props.city}</div>
                <div className="weather">
                    <img src={this.props.iconURL} className="iconImg" />
                    <div className="temp-cond">
                        <div className="weather-cond">{this.props.weatherCondition}</div>
                        <div className="temp">{this.props.temp}ºC</div>
                    </div>
                </div>
                <div className="miniweather">
                    <MiniWeatherStat param="Humidity" value={this.props.humidity} />
                    <MiniWeatherStat param="Pressure" value={this.props.pressure} />
                    <MiniWeatherStat param="Wind" value={this.props.wind} />
                </div>
            </div>
        );
    }
}