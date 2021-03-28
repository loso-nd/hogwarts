import React, { Component } from 'react'

class HogDetails extends Component {

    
    render () {
        let {specialty, weight, greased } = this.props.hog
        return(
            <div>
                <div>Specialty: {specialty}</div>
                <div>Weight: {weight}</div>
                <div>{greased ? "Greased Up" : "Tanned"}</div>
            </div>
        )
    }
}
export default HogDetails