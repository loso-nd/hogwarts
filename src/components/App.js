import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data"; //can be called w.e / convention
import HelloWorld from "./HelloWorld";

class App extends Component {

//We want to keep track of the clicks associated with the grease filter 

  state = {
    greased: false,
    sort: ""
  }

  oiledUp = () => {
    this.setState({
        greased: !this.state.greased
    })
  }

  sortMe = (e) => {
    //console.log(e.target.value)
    this.setState({
      sort: e.target.value
    })
  }

  //I need to check the arr of hogs ,specifically the boolean of hog obj of greaased
  greasyOnesFilter = () => {
    if (this.state.greased ){
      return hogs.filter( hog => hog.greased)
    }
    else {
      return hogs
    }
  }
//How can you check to see what you will sort by
//what are we calling sort on? -greasyOnesFilter
//What does for pass as a callback?
//As sort iterates the arr it pick up two items compares and then returns the postive or the negative one depending on the if condition. deciding on which goes 1st  
  sortHogs = () => {
    switch (this.state.sort) {
      case 'name':
        return [...this.greasyOnesFilter()].sort((a,b) => {
          if (a.name < b.name){
            return -1
          }
          else {
            return 1
          }
        })
      case 'weight':
        return [...this.greasyOnesFilter()].sort((a,b) => a.weight - b.weight)
      default : 
        return this.greasyOnesFilter()
    }
  }

  render() {
    //console.log(this.state.greased)
    console.log(this.state.sort)
  
    return (
      <div className="App">
        <Nav handleClick={this.oiledUp} sort={this.sortMe}/>
        <HelloWorld hogs={this.sortHogs()}/>
        {/* <HelloWorld hogs={this.greasyOnesFilter()}/> */}
{/* accessing the data, mapping thru the data return the names of the Obj in the array 
 {hogs.map( singleHog => singleHog.name )} */}
      </div>
    );
  }
}

export default App;
