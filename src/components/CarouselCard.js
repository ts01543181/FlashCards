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
    }

    render() {
        return (
            <div className={`carousel-item${this.props.featured ? " featured" : ""}`} onClick={this.onClick}>
                <div className="carousel-item-text">{this.props.card.term.length ? this.props.card.term : "this card has no text"}</div>
            </div>
        )
    }
}

export default CarouselCard;