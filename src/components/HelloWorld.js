import React, { Component } from "react";
import HogCard from "./HogCard";

class HelloWorld extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map( singleHog => <HogCard hog={singleHog}/> )}
      </div>
    );
  }
}

export default HelloWorld;

//filter the hogs that are greased
//* Where was the last time I had acces to all of my hogs
