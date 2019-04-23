import React, { Component } from "react";
// import ReviewCarouselCard from "./ReviewCarouselCard"

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewCard:null,
            reviewCardId: null
        }
    }
    render() {
        return (
            <div>
                123
                {
                    this.props.review.map((card, id) => {
                        return (
                            // <ReviewCarouselCard 
                            //     card={card}
                            //     id={id}
                            //     reviewed={id === this.state.reviewCardId}
                            // />
                        )
                    })
                }
            </div>
        )
    }
}

export default Review;