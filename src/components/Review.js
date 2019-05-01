import React, { Component } from "react";
import ReviewCarouselCard from "./ReviewCarouselCard"
import $ from "jquery";
import { Popup, Icon } from "semantic-ui-react";

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewCard:null,
            reviewCardId: null
        }
        this.setReviewCard = this.setReviewCard.bind(this);
        this.toggleFlip = this.toggleFlip.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
    }
    
    componentDidMount() {
        if (this.props.review.length) {
            this.setState({
                reviewCard: this.props.review[0],
                reviewCardId: 0
            });
        }
    }

    toggleFlip() {
        $(".feature-card-inner").toggleClass("flipped");
        $(".flip-card-inner").toggleClass("flipped");
    }

    setReviewCard(card, id) {
        this.setState({
            reviewCard: card,
            reviewCardId: id
        });
    }

    deleteReview() {
        for (let col of this.props.collection) {
            let flag = false;
            for (let i = 0; i < col.cards.length; i++) {
                if (col.cards[i].term === this.state.reviewCard.term) {
                    const edited = {...this.state.reviewCard};
                    edited.review = false;
                    this.props.editCard(edited, i);
                    flag = true;
                    break;
                }
            }
            if (flag) break;
        }
        this.props.deleteReview(this.state.reviewCard, this.state.reviewCardId)
        .then(() => {
            if (this.props.review.length === 0) {
                this.setState({
                    reviewCard: null,
                    reviewCardId: null
                })
            } else {
                $(".feature-card-inner.flipped").toggleClass("flipped");
                if (this.state.reviewCardId === this.props.review.length) {
                    this.setState({
                        reviewCardId: this.state.reviewCardId-1,
                        reviewCard: this.props.review[this.state.reviewCardId-1]
                    });
                } else {
                    this.setState({
                        reviewCard: this.props.review[this.state.reviewCardId]
                    });
                }
            }
        })
    }

    switchReviewCard(prev) {
        const width = parseInt($(".carousel-item").first().css("width"))
            +parseInt($(".carousel-item").first().css("margin-left"))
            +parseInt($(".carousel-item").first().css("margin-right"))
        if (prev) {
            $(".feature-card-inner.flipped").toggleClass("flipped");
            this.setState({
                reviewCard: this.props.review[this.state.reviewCardId-1],
                reviewCardId: this.state.reviewCardId-1
            })
            $('.carousel-container-inner').animate({ scrollLeft: `-=${width}px` }, "medium");
        } else {
            $(".feature-card-inner.flipped").toggleClass("flipped");
            this.setState({
                reviewCard: this.props.review[this.state.reviewCardId+1],
                reviewCardId: this.state.reviewCardId+1
            })
            $('.carousel-container-inner').animate({ scrollLeft: `+=${width}px` }, "medium");
        }
    }
    render() {
        return (
            <div className="general-container">
                <div className="collection-header">
                    <h1>Review your cards</h1>
                </div>
                <hr />
                {
                    this.state.reviewCardId >= 1 ? 
                    <Icon size="huge" name="angle double left" className="prev-arrow" onClick={() => this.switchReviewCard(true)}/> : 
                    <Icon size="huge" name="angle double left" className="prev-arrow invalid" />
                }
                {
                    this.state.reviewCardId >= 0 && this.state.reviewCardId < this.props.review.length-1 ?
                    <Icon size="huge" name="angle double right" className="next-arrow" onClick={() => this.switchReviewCard(false)}/> : 
                    <Icon size="huge" name="angle double right" className="next-arrow invalid" />
                }
                <div className="feature-card-container">
                {
                    this.state.reviewCard ? 
                    <div className="feature-card-inner">
                        <div className="feature-card-front">
                            {
                                this.state.reviewCard.frontImg && this.state.reviewCard.frontImg.length ? 
                                <div className="feature-card-img" style={{height:"100%", width:`${this.state.reviewCard.term.length ? "50%" : "100%"}`, float:"left"}}>
                                    <img src={this.state.reviewCard.frontImg} alt="invalid"/>
                                </div>
                                : null
                            }
                            <div className="feature-card-text" style={this.state.reviewCard.frontImg && this.state.reviewCard.frontImg.length ? {height:"100%", width:"50%", float:"right", overflow:"hidden"} : null}><div>{this.state.reviewCard.term}</div></div>
                        </div>
                        <div className="feature-card-back">
                            {
                                this.state.reviewCard.backImg && this.state.reviewCard.backImg.length ? 
                                <div className="feature-card-img" style={{height:"100%", width:"50%", float:"left"}}>
                                    <img  src={this.state.reviewCard.backImg} alt="invalid"/>
                                </div>
                                : null
                            }
                            <div className="feature-card-text" style={this.state.reviewCard.backImg && this.state.reviewCard.backImg.length ? {height:"100%", width:"50%", float:"right", overflow:"hidden"} : null}><div>{this.state.reviewCard.definition}</div></div>
                        </div>
                    </div>
                    : 
                    <div className="feature-card-inner">
                        <div className="feature-card-front">
                            <div className="feature-card-text"><div>There are no cards to review yet!</div></div>
                        </div>
                    </div> 
                }
                {/* feature card buttons */}
                {
                    this.state.reviewCard ? 
                    <div className="feature-card-button">
                        <Popup trigger={<div className="feature-button" onClick={this.toggleFlip}><Icon name="exchange"/></div>}
                            content="Flip"
                            position="right center"
                            size="mini"
                        />
                        <Popup trigger={<div className="feature-button" onClick={this.deleteReview}><Icon name="checkmark"/></div> }
                            content="Remove Review"
                            position="right center"
                            size="mini"
                        />
                    </div> :
                    null
                }
                </div>
                <div className="generic-container">
                    <div className="carousel-container-inner">
                {
                    this.props.review.map((card, id) => {
                        return (
                            <ReviewCarouselCard 
                                card={card}
                                id={id}
                                reviewed={id === this.state.reviewCardId}
                                setReviewCard={this.setReviewCard}
                            />
                        )
                    })
                }
                    </div>
                </div>
            </div>
        )
    }
}

export default Review;