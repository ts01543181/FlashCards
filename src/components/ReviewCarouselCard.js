import React, { Component } from "react";
import $ from "jquery";

class ReviewCarouselCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        $(".feature-card-inner.flipped").toggleClass("flipped");
        this.props.setReviewCard(this.props.card, this.props.id);
    }

    render() {
        return (
            <div className={`carousel-item${this.props.reviewed ? " featured" : ""}`} onClick={this.onClick}>
                {/* <div className="carousel-item-text">{this.props.card.term}</div> */}
                {
                    this.props.card.term.length ?
                    <div className="carousel-item-text">{this.props.card.term}</div>
                    :
                    this.props.card.frontImg ?
                    <div className="feature-card-img" style={{height:"100%", width:"100%", float:"left"}}>
                        <img src={this.props.card.frontImg} alt="invalid"/>
                    </div> 
                    :
                    <div className="carousel-item-text">this card has no term!</div>
                    
                }
            </div>
        )
    }
}

export default ReviewCarouselCard;