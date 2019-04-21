import React, { Component } from "react";

class CarouselCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="carousel-item" onClick={() => this.props.setFeatureCard(this.props.card, this.props.id)}>
                {this.props.card.term}
            </div>
        )
    }
}

export default CarouselCard;