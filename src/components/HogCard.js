import React, { Component } from 'react';
import HogDetails from './HogDetails'

class HogCard extends Component {

    
    state ={
        showDetails: true,
    }
    

    handleClick = () => {
         console.log("I was clicked!") //updated the state of the showDetails
         this.setState({
             showDetails: !this.state.showDetails
         })
    }

    render () {
        const formatImg = () => {
            return this.props.hog.name.toLowerCase().split(' ').join('_')
         }
        let pigImage = require(`../hog-imgs/${formatImg()}.jpg`)
            return (
            <div onClick={this.handleClick} 
                className="image ui six wide column pigTile">
                <div>{this.props.hog.name}</div>
                <img src={pigImage} alt={this.props.hog.name} />
                {this.state.showDetails ? <HogDetails hog={this.props.hog}/> : null}
           {/*} or {this.state.showDetails && <HogDetails hog={this.props.hog}/>*/}
            </div>
            
        )
    }
}

export default HogCard;