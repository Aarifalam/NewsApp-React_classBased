import React, { Component } from "react";

class NewsItems extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        // this newsUrl is used because to give NewsDetails button id
        return (
            <div>
                <div className="card mx-3 my-3" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" : imageUrl} className="card-img-top" alt="Image of NEWS" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-dark    ">Details of NEWS</a>
                        {/* this button has "/" thats why after clicking this is refreshing the web app */}
                    </div>
                </div>
            </div>
        )
    };
};
export default NewsItems;