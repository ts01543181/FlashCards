import React, { Component } from "react";
import { Icon, Popup } from "semantic-ui-react";
import $ from "jquery";

class FeatureCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
        this.toggleButtonsOn = this.toggleButtonsOn.bind(this);
        this.toggleButtonsOff = this.toggleButtonsOff.bind(this);
        this.editCard = this.editCard.bind(this);
    }
    toggleButtonsOn() {
        if (!this.props.featureCard) return;
        this.setState({
            toggle: true
        })
    }

    toggleButtonsOff() {
        if (!this.props.featureCard) return;
        this.setState({
            toggle: false
        })
    }

    editCard() {
        this.props.editCard({
            term: "edited",
            definition: this.props.featureCard.definition,
            comment: "",
            definition: this.props.featureCard.definition,
            collection: this.props.featureCard.collection
        }, this.props.id);

    }
    render() {
        return (
            <div className="generic-container">
                <div className="feature-card-container"
                    onMouseEnter={this.toggleButtonsOn} 
                    onMouseLeave={this.toggleButtonsOff}
                >
                {
                    this.props.featureCard ? 
                    this.props.featureCard.term : ""
                }
                {
                    this.props.featureCard && this.state.toggle ? 
                    <div className="feature-card-button">
                        <Popup trigger={<div className="feature-button"><Icon name="exchange"/></div>}
                            content="Flip"
                            position="right center"
                            size="mini"
                        />
                        <Popup trigger={<div className="feature-button" onClick={this.editCard}><Icon name="edit outline"/></div>}
                            content="Edit"
                            position="right center"
                            size="mini"
                        />
                        <Popup trigger={<div className="feature-button"><Icon name="trash alternate outline"/></div> }
                            content="Delete"
                            position="right center"
                            size="mini"
                        />
                        <Popup trigger={<div className="feature-button"><Icon name="star outline"/></div> }
                            content="Favorite"
                            position="right center"
                            size="mini"
                        />
                    </div> :
                    null
                }
                </div>
            </div>
        )
    }
}

export default FeatureCard;