import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <select onChange={ (e) => {
        props.sort(e)
        //console.log(e.target.value)
      }}>
        <option value=""></option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <span className="headerText">Hogwarts</span>
      <div onClick={ () => props.handleClick()} className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
