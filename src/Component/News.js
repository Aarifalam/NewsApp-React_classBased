import React, { Component } from "react";
import NewsItems from "./NewsItem";

class News extends Component {
    render() {
        return (
            <div className="container my-3">
                News Component is working

                <div className="row">
                    <div className="col-4">
                        <NewsItems title="Farmers" description="In INDIA many farmer are not getting good price for their crops. India Government is working on this since 12 Years still then didn't get solution for this big issue." />
                    </div>
                    <div className="col-4">
                        <NewsItems title="my Title" description="this is the description" />
                    </div>
                    <div className="col-4">
                        <NewsItems title="my Title" description="this is the description" />
                    </div>
                </div>
                <NewsItems />
                <NewsItems />
                <NewsItems />
            </div>
        )
    };
};
export default News;