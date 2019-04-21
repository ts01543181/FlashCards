import React, { Component } from "react";
import { Modal, Button, Form } from "semantic-ui-react";

class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCollection: null,
            newTerm: "",
            newDefinition: "",
            newComment: "",
            newCardOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.addCard = this.addCard.bind(this);
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
    render() {
        return (
            <div className="general-container">
                <h1>{this.state.currentCollection.title}</h1>
                <Button onClick={this.toggleModal}>+ New Card</Button>
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
                        <Button onClick={this.addCard}>Create</Button>
                    </Form>
                </Modal>

                {/* carousel showing all cards in collection */}
                {
                    this.state.currentCollection.cards.map(card => {
                        return (
                            <div>{card.term}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Collection;