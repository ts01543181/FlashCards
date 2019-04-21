import React, { Component } from "react";

class FeatureCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
        this.toggleButtons = this.toggleButtons.bind(this);
    }
    toggleButtons() {
        this.setState({
            toggle: !this.state.toggle
        });
    }
    render() {
        return (
            <div className="generic-container">
                <div className="feature-card-container"
                    onMouseEnter={this.toggleButtons} 
                    onMouseLeave={this.toggleButtons}
                >
                {
                    this.props.featureCard ? 
                    this.props.featureCard.term : ""
                }
                {
                    this.state.toggle ? 
                    <div>
                        <button className="feature-button">Flip</button>
                        <button className="feature-button">Edit</button> 
                    </div> :
                    null
                }
                </div>
            </div>
        )
    }
}

export default FeatureCard;