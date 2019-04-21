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
            featureCard:null
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.addCard = this.addCard.bind(this);
        this.setFeatureCard = this.setFeatureCard.bind(this);
    }

    componentWillMount() {
        for (let col of this.props.collection) {
            if (col.title == this.props.match.params.collection) {
                this.setState({
                    currentCollection: col
                });
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
        this.props.addCard({
            term: this.state.newTerm,
            definition: this.state.newDefinition,
            comment: this.state.newComment,
            collection:this.state.currentCollection.title
        })
        this.setState({
            newTerm: "",
            newDefinition: "",
            newComment: ""
        });
        this.toggleModal();
    }

    setFeatureCard(card) {
        this.setState({
            featureCard: card
        });
    }
    render() {
        return (
            <div className="general-container">
                <h1>{this.state.currentCollection.title}</h1>
                <hr />
                <div><button className="button create-button" onClick={this.toggleModal}>+ New Card</button></div>
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
                        <button className="button" onClick={this.addCard}>Create</button>
                    </Form>
                </Modal>
                {/* feature card section */}
                <FeatureCard featureCard={this.state.featureCard}/>
                {/* carousel showing all cards in collection */}
                <div className="generic-container">
                    <div className="carousel-container-inner">
                        {
                            this.state.currentCollection.cards.map(card => {
                                return (
                                    <CarouselCard card={card} setFeatureCard={this.setFeatureCard}/>
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