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
    componentDidMount() {
        $(".carousel-item").on("click", function(e) {
            // $(".carousel-item.blue-border").toggleClass("blue-border");
        })
    }
    onClick() {
        this.props.setFeatureCard(this.props.card, this.props.id);
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