import React, { Component } from "react";
import NewsItems from "./NewsItem";

class News extends Component {
    render() {
        return (
            <>
                <div>News component is working</div>
                <div style={{ display: "flex", margin: "2px" }}>
                    <NewsItems />
                    <NewsItems />
                    <NewsItems />
                </div>
                <div style={{ display: "flex", margin: "2px" }}>
                    <NewsItems />
                    <NewsItems />
                    <NewsItems />
                </div>
            </>
        )
    };
};
export default News;