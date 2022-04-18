// import { json } from "express";

import React, { Component } from "react";
import NewsItems from "./NewsItem";

class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false
        }
    }


    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c05902697d8c4abcacea6c7c81d3e024"
        let data = await fetch(url)
        // console.log(data.json)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles
        })
        console.log(parsedData)
    }


    render() {
        return (
            <div className="container my-3">
                <h2>News Component is working </h2>

                <div className="row ">

                    {this.state.articles.map((element) => {
                        // console.log(element)
                        return <div className="col-4" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}


                </div>
            </div>
        )
    };
};
export default News;