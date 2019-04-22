import React, { Component } from "react";
import { Modal, Button, Form } from "semantic-ui-react";
import CarouselCard from "./CarouselCard";
import FeatureCard from "./FeatureCard";

class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCollection: null,
            newTerm: "",
            newDefinition: "",
            newComment: "",
            newCardOpen: false,
            featureCard:null,
            featureCardId:null
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.addCard = this.addCard.bind(this);
        this.setFeatureCard = this.setFeatureCard.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    componentWillMount() {
        for (let col of this.props.collection) {
            if (col.title == this.props.match.params.collection) {
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
            newCardOpen: !this.state.newCardOpen
        });
    }

    addCard() {
        const newCard = {
            term: this.state.newTerm,
            definition: this.state.newDefinition,
            comment: this.state.newComment,
            collection:this.state.currentCollection.title
        };
        this.props.addCard(newCard);
        this.setState({
            newTerm: "",
            newDefinition: "",
            newComment: ""
        }, () => {
            this.toggleModal();
            this.setFeatureCard(newCard, this.state.currentCollection.cards.length-1);
        });
    }

    setFeatureCard(card, id) {
        this.setState({
            featureCard: card,
            featureCardId: id
        });
    }

    editCard(card, id) {
        return this.props.editCard(card, id)
        .then(() => {
            this.setState({
                featureCard:card
            });
        })
    }

    deleteCard(card, id) {
        this.props.deleteCard(card, id);
        const cards = this.state.currentCollection.cards;
        if (cards[id] == undefined) {
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
    }
    render() {
        return (
            <div className="general-container">
                <div className="collection-header">
                    <h1>{this.state.currentCollection.title}</h1>
                    <button className="button create-button" onClick={this.toggleModal}>+ New Card</button>
                </div>
                <hr />
                <Modal open={this.state.newCardOpen} closeOnDimmerClick={false}>
                    <Modal.Header>Create a new card</Modal.Header>
                    <div className="flip-card-container">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <div>{this.state.newTerm}</div>
                            </div>
                            <div className="flip-card-back">
                                <div>{this.state.newDefinition}</div>
                            </div>
                        </div>
                    </div>
                    <Form>
                        <Form.Field>
                            <label>Term</label>
                            <input placeholer="term" onChange={(e) => this.onChange(e, "newTerm")}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Definition</label>
                            <input placeholer="definition" onChange={(e) => this.onChange(e, "newDefinition")}/>
                        </Form.Field>
                        <button className="button cancel-button" onClick={this.toggleModal}>Cancel</button>
                        <button className="button" type="submit" onClick={this.addCard}>Create</button>
                    </Form>
                </Modal>

                {/* feature card section */}
                {
                    this.state.featureCard ? 
                    <FeatureCard 
                        featureCard={this.state.featureCard} 
                        id={this.state.featureCardId} 
                        editCard={this.editCard} 
                        deleteCard={this.deleteCard}
                    /> :
                    <div className="empty-collection-container">You don't have any cards yet!</div>
                }
                
                {/* carousel showing all cards in collection */}
                <div className="generic-container">
                    <div className="carousel-container-inner">
                        {
                            this.state.currentCollection.cards.map((card, id) => {
                                return (
                                    <CarouselCard card={card} setFeatureCard={this.setFeatureCard} id={id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Collection;