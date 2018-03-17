import React from 'react';
import '../styles/news.css'

export default class NewsItem extends React.Component{
    render(){
        return(
            <div className="newsitem">
                <img src={this.props.imgURL} className="newsImg" />
                <div className="newsTitle">{this.props.title}</div>
                <p className="newsDesc">{this.props.desc}</p>
                <div className="newsSource">Source: {this.props.source}</div>
            </div>
        );  
    }
}