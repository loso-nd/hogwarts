import React, { Component } from 'react'
import HogDetails from './HogDetails'

class HogCard extends Component {

//How we keep track whether a tile was clicked to show the details of a hog if it was clicked

    state = {
        showDetails : true
    }

    formatImg = () => {
        return this.props.hog.name.toLowerCase().split(' ').join('_')
    }

    handleClick = () =>{
       // console.log("I was clicked!")

//updated the state of the showDetails
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    render() {
      //  console.log(this.state.showDetails)
        let pigImage = require(`../hog-imgs/${this.formatImg()}.jpg`)
        return (
            <div onClick={this.handleClick} 
            className="image ui four wide column pigTile">
                <div>{this.props.hog.name}</div>
                <img src={pigImage} alt={this.props.hog.name}/>
        {/* {this.state.showDetails ? <HogDetails /> : null} */}
        {/* Conditionally rendering my details Component */}
            {this.state.showDetails && <HogDetails 
            specialty={this.props.hog.specialty}
            weight={this.props.hog.weight}
            greased={this.props.hog.greased}
            reward={this.props.hog['highest medal achieved']}/> }

    {/* or I can simply pass the entire hog as props -> {this.props.hog} & then call the detail inside the {HogDetails} just like above. Multiple ways to do this .*/}
            </div>
            
        )
    }
}
export default HogCard;