import React from 'react';
import {connect} from 'react-redux';
import {fetchNews} from '../actions/newsActions';
import NewsItem from '../components/NewsItem';
import '../styles/news.css'

@connect((store)=>{
    return {
        articles:store.news.articles,
        newsFetched:store.news.newsFetched
    }
})
export default class NewsLayout extends React.Component{
    componentWillMount(){
        this.props.dispatch(fetchNews(this.props.country));
    }
    render(){
        console.log(this.props);
        const newsItems = this.props.articles.map(news=>{
            return (
                <NewsItem key={news.publishedAt} imgURL={news.urlToImage} title={news.title} desc={news.description}
                source={news.source.name}
                />
            ); 
        });
        if(!this.props.newsFetched){
            return <div>Loading...</div>
        }
        else{
            return <div className="newslayout">
                {newsItems}
            </div>
        }
    }
    
}