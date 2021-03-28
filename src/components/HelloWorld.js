import React, { Component } from "react";
import HogCard from './HogCard'

class HelloWorld extends Component {
  render() {
    return (
      <div className="ui grid container ">
        {/* accessing the data, mapping thru the data return the names of the Obj in the array */}
        {this.props.hogData.map(singleHog => <HogCard hog={singleHog}/> )}
      </div>
    );
  }
}

export default HelloWorld;
