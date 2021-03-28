import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";

class App extends Component {

  state={
    greased: false,
    sort: ""
  }

  greaseUpdate = () => {
    this.setState({
        greased: !this.state.greased
    })
  }

  greaseFilter = () => {
    if (this.state.greased ){
      return hogs.filter( hog => hog.greased)
    }
    else {
      return hogs
    }
  }

  sortMe = (e) => { // remember to pass in the event for targeting
     console.log(e.target.value)
    this.setState({
      sort: e.target.value
    })
  }

  sortWithFilter = () => {
    switch(this.state.sort){
      case 'name':
        return [...this.greaseFilter()].sort((a,b) => {
          if (a.name < b.name){
            return -1
          }
          else {
            return 1
          }
        })
      case 'weight':
        return[...this.greaseFilter()].sort((a,b) => a.weight -b.weight)
        default:
          return this.greaseFilter()
    }
  }

  render() {
    return (
      <div className="App">
        <Nav handleClick={this.greaseUpdate}  sort={this.sortMe}/>
        <HelloWorld hogData={this.sortWithFilter()} /> 
        {/* After Fileter / Before sort
        <HelloWorld hogData={this.greaseFilter()} /> */}
        {/* Before Filter: 
        <HelloWorld hogData={hogs} /> */}
      </div>
    );
  }
}

export default App;



