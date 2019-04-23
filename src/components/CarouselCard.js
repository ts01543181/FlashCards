import React, { Component } from "react";
import $ from "jquery";

class CarouselCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        
        $(".feature-card-inner.flipped").toggleClass("flipped");
        this.props.setFeatureCard(this.props.card, this.props.id);
        // $(".feature-card-inner").toggleClass("flipped");
    }
    render() {
        return (
            <div className={`carousel-item${this.props.featured ? " featured" : ""}`} onClick={this.onClick}>
                <div className="carousel-item-text">{this.props.card.term}</div>
            </div>
        )
    }
}

export default CarouselCard;