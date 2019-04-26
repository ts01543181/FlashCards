import React, { Component } from "react";
import { Modal, Form, Icon } from "semantic-ui-react";
import CarouselCard from "./CarouselCard";
import FeatureCard from "./FeatureCard";
import $ from "jquery";

class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCollection: null,
            newTerm: "",
            newDefinition: "",
            newComment: "",
            newFrontImg:null,
            newBackImg:null,
            newCardOpen: false,
            newCardReview:false,
            featureCard:null,
            featureCardId:null
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.addCard = this.addCard.bind(this);
        this.setFeatureCard = this.setFeatureCard.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.toggleFlip = this.toggleFlip.bind(this);
        this.switchFeatureCard = this.switchFeatureCard.bind(this);
        this.addReview = this.addReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
    }

    componentWillMount() {
        for (let col of this.props.collection) {
            if (col.title === this.props.match.params.collection) {
                this.setState({
                    currentCollection: col,
                    featureCard: col.cards[0],
                    featureCardId: 0
                })
                break;
            }
        }
    }

    onChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }

    toggleModal() {
        this.setState({
            newCardOpen: !this.state.newCardOpen,
            newTerm: "",
            newDefinition: "",
            newComment: "",
        });
    }

    addCard() {
        $(".feature-card-inner.flipped").toggleClass("flipped");
        const newCard = {
            term: this.state.newTerm,
            definition: this.state.newDefinition,
            comment: this.state.newComment,
            frontImg: this.state.newFrontImg && this.state.newFrontImg.length ? this.state.newFrontImg : null,
            backImg: this.state.newBackImg && this.state.newBackImg.length ? this.state.newBackImg : null,
            review: false,
            reviewInd: -1,
            collection:this.state.currentCollection.title
        };
        this.props.addCard(newCard);
        this.setState({
            newTerm: "",
            newDefinition: "",
            newComment: "",
            newFrontImg:null,
            newBackImg:null
        }, () => {
            this.toggleModal();
            this.setFeatureCard(newCard, this.state.currentCollection.cards.length-1);
            $('.carousel-container-inner').animate({ scrollLeft: "+=200px" }, "medium");
        });
    }

    setFeatureCard(card, id) {
        this.setState({
            featureCard: card,
            featureCardId: id,
        });
    }

    editCard(card, id) {
        
        if (card.review) {
            this.props.editReview(card);
        }
        
        return this.props.editCard(card, id)
        .then(() => {

            this.setState({
                featureCard:card
            });
        })
    }

    deleteCard(card, id) {
        $(".feature-card-inner.flipped").toggleClass("flipped");
        this.props.deleteCard(card, id)
        .then(() => {
            if (card.review) {
                return this.props.deleteReview(card);
            }
            return Promise.resolve();
        })
        .then(() => {
            const cards = this.state.currentCollection.cards;
            if (cards[id] === undefined) {
                if (cards.length >= 1) {
                    this.setState({
                        featureCard: cards[cards.length-1],
                        featureCardId:cards.length-1
                    });
                } else {
                    this.setState({
                        featureCard: null,
                        featureCardId:null
                    });
                }
            } else {
                this.setState({
                    featureCard: cards[id]
                })
            }
        })
    }

    addReview(card, id) {
        card.reviewInd = this.props.review.length;
        this.props.editCard(card, id)
        .then(() => {
            return this.props.addReview(card, id)
        })
        .then(()=> {
            this.setState({
                featureCard: card
            });
        })
    }

    deleteReview(card, id) {
        this.props.editCard(card, id)
        .then(() => {
            return this.props.deleteReview(card, id);
        })
        .then(() => {
            this.setState({
                featureCard: card
            });
        })
    }

    toggleFlip() {
        $(".flip-card-inner").toggleClass("flipped");
    }

    switchFeatureCard(prev) {
        const width = parseInt($(".carousel-item").first().css("width"))
            +parseInt($(".carousel-item").first().css("margin-left"))
            +parseInt($(".carousel-item").first().css("margin-right"))
        if (prev) {
            $(".feature-card-inner.flipped").toggleClass("flipped");
            this.setState({
                featureCard: this.state.currentCollection.cards[this.state.featureCardId-1],
                featureCardId: this.state.featureCardId-1
            })
            $('.carousel-container-inner').animate({ scrollLeft: `-=${width}px` }, "medium");
        } else {
            $(".feature-card-inner.flipped").toggleClass("flipped");
            this.setState({
                featureCard: this.state.currentCollection.cards[this.state.featureCardId+1],
                featureCardId: this.state.featureCardId+1
            })
            $('.carousel-container-inner').animate({ scrollLeft: `+=${width}px` }, "medium");
        }
    }
    render() {
        return (
            <div className="general-container">
                <div className="collection-header">
                    <h1>{this.state.currentCollection.title}</h1>
                </div>
                <hr />
                <Modal open={this.state.newCardOpen} closeOnDimmerClick={false} className="collection-modal">
                    <Modal.Header>Create a new card</Modal.Header>
                    <div className="flip-card-container">
                        <div className="flip-card-inner" onClick={this.toggleFlip}>
                            <div className="flip-card-front">
                                <div className="flip-card-text"><div>{this.state.newTerm}</div></div>
                            </div>
                            <div className="flip-card-back">
                                <div className="flip-card-text"><div>{this.state.newDefinition}</div></div>
                            </div>
                        </div>
                    </div>
                    <Form size="large">
                        <Form.Field>
                            <label>Term</label>
                            <input onChange={(e) => this.onChange(e, "newTerm")}/>
                            <span className="focus-border"></span>
                        </Form.Field>
                        <Form.Field>
                            <label>Image url for term</label>
                            <input onChange={(e) => this.onChange(e, "newFrontImg")}/>
                            <span className="focus-border"></span>
                        </Form.Field>
                        <Form.Field>
                            <label>Definition</label>
                            <input onChange={(e) => this.onChange(e, "newDefinition")}/>
                            <span className="focus-border"></span>
                        </Form.Field>
                        <Form.Field>
                            <label>Image url for definition</label>
                            <input onChange={(e) => this.onChange(e, "newBackImg")}/>
                            <span className="focus-border"></span>
                        </Form.Field>
                        <button className="button create-button" onClick={this.addCard}>Create</button>
                        <button className="button cancel-button" onClick={this.toggleModal}>Cancel</button>
                    </Form>
                </Modal>

                {/* feature card section */}
                {
                    this.state.featureCardId >= 1 ? 
                    <Icon size="huge" name="angle double left" className="prev-arrow" onClick={() => this.switchFeatureCard(true)}/> : 
                    <Icon size="huge" name="angle double left" className="prev-arrow invalid" />
                }
                {
                    this.state.featureCardId >= 0 && this.state.featureCardId < this.state.currentCollection.cards.length-1 ?
                    <Icon size="huge" name="angle double right" className="next-arrow" onClick={() => this.switchFeatureCard(false)}/> : 
                    <Icon size="huge" name="angle double right" className="next-arrow invalid" />
                }
                {
                    this.state.featureCard ? 
                    <FeatureCard 
                        featureCard={this.state.featureCard} 
                        id={this.state.featureCardId} 
                        editCard={this.editCard} 
                        deleteCard={this.deleteCard}
                        addReview={this.addReview}
                        deleteReview={this.deleteReview}
                    /> :
                    // <div className="empty-collection-container">You don't have any cards yet!</div>
                    <div className="feature-card-container" style={{background: "white"}}>
                        <div className="feature-card-inner">
                            <div className="feature-card-front">
                                <div className="feature-card-text"><div>You don't have any cards yet!</div></div>
                            </div>
                        </div> 
                    </div>
                }
                
                {/* carousel showing all cards in collection */}
                <div className="generic-container">
                    <div className="carousel-container-inner">
                        {
                            this.state.currentCollection.cards.map((card, id) => {
                                return (
                                    <CarouselCard 
                                        card={card} 
                                        setFeatureCard={this.setFeatureCard} 
                                        id={id} 
                                        featured={id === this.state.featureCardId}
                                    />
                                )
                            })
                        }
                        <div className="carousel-item" onClick={this.toggleModal}>
                            <div className="carousel-item-text"><Icon name="add" size="large" style={{color:"#215ca0"}}/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Collection;