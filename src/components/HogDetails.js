import React, { Component } from 'react';


class HogDetails extends Component {

    render(){
        return (
            <div>
                
                <div>Specialty: {this.props.specialty}</div>
                <div>Big Body: {this.props.weight}</div>
                <div>{this.props.greased ? "Too much lotion" : "Ashy Larry"}</div>
                <div>Grammy's: {this.props.reward}</div>
            </div>
        )
    }
}

export default HogDetails;