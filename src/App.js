import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>
          This is my NewsApp
        </h1>
        <Navbar />
        <News />
      </div>
    )
  }
}
