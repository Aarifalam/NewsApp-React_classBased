// import { json } from "express";

import React, { Component } from "react";
import NewsItems from "./NewsItem";
import Spinner from "./Spinner";

class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c05902697d8c4abcacea6c7c81d3e024&page=1&pageSize=${this.props.pageSize}`
        { this.setState({ loading: true }) }
        let data = await fetch(url)
        // console.log(data.json) 
        let parsedData = await data.json()
        this.setState({
            totalResults: parsedData.totalResults,
            articles: parsedData.articles,
            loading: false
        })
        // console.log(parsedData)
    }

    handlePreClick = async () => {
        console.log("previous")
        // console.log(this.state.page)
        if (!(this.state.page - 1 < 1)) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c05902697d8c4abcacea6c7c81d3e024&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
            { this.setState({ loading: true }) }
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    handleNextClick = async () => {
        console.log("next")
        // console.log(this.state.page)
        // console.log(Math.ceil(this.state.totalResults / 20))
        console.log(this.state.totalResults)
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c05902697d8c4abcacea6c7c81d3e024&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            { this.setState({ loading: true }) }
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }


    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center"><strong>NewsApplication :-</strong> INDIAN News Kashmir to Kanyakumari </h2>
                {this.state.loading && < Spinner />}

                <div className="row ">

                    {!this.state.loading && this.state.articles.map((element) => {
                        // this condition(!this.state.loading &&) we are taking because to remove news perameters while clicking button 
                        // console.log(element)
                        return <div className="col-4" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.handlePreClick} className="btn btn-success">&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-success">Next &rarr;</button>
                </div>
            </div>
        )
    };
};
export default News;