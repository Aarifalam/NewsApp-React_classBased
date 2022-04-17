import React, { Component } from "react";

class NewsItems extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        // this newsUrl is used because to give NewsDetails button id
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Go somewhere</a>
                        {/* this button has "/" thats why after clicking this is refreshing the web app */}
                    </div>
                </div>
            </div>
        )
    };
};
export default NewsItems;