import React from 'react';
import '../styles/weathercard.css';
export default class MiniWeatherStat extends React.Component{
    render(){
        return(
            <span className="miniweatherel">
                {this.props.param} <br />
                {this.props.value}
            </span>
        )
    }
}