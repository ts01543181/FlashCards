import React, { Component } from "react";
import { Icon, Popup, Modal, Form } from "semantic-ui-react";
import $ from "jquery";

class FeatureCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: true,
            editModalOpen: false,
            term: "",
            definition: "",
            comment: ""
        }
        
        this.toggleButtonsOn = this.toggleButtonsOn.bind(this);
        this.toggleButtonsOff = this.toggleButtonsOff.bind(this);
        this.editCard = this.editCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.toggleEditModal = this.toggleEditModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.addReview = this.addReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
    }

    componentDidMount() {
        // this is to prevent error when Collection component doesn't have any featureCard yet (when collection was first made)
        if (!this.props.featureCard) {
            return;
        } 
        const { term, definition, comment } = this.props.featureCard;
        this.setState({
            term, definition, comment
        });
    }

    componentWillReceiveProps(newProps) {
        // this will update featureCard whenever there's an update been made (edit/delete)
        if (!newProps.featureCard) return;
        const { term, definition, comment } = newProps.featureCard;
        if (newProps.featureCard) {
            this.setState({
                term,
                definition,
                comment
            });
        }
    }

    toggleFlip() {
        $(".feature-card-inner").toggleClass("flipped");
        $(".flip-card-inner").toggleClass("flipped");
    }

    toggleEditModal() {
        this.setState({
            editModalOpen: !this.state.editModalOpen
        });
    }
    toggleButtonsOn() {
        if (!this.props.featureCard) return;
        this.setState({
            toggle: true
        })
    }

    toggleButtonsOff() {
        if (!this.props.featureCard) return;
        this.setState({
            toggle: false
        })
    }

    onChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }

    editCard() {
        this.props.editCard({
            term: this.state.term,
            definition: this.state.definition,
            comment: this.state.comment,
            review: this.props.featureCard.review,
            collection: this.props.featureCard.collection
        }, this.props.id)
        .then(() => {
            this.toggleEditModal();
        })

    }

    deleteCard() {
        $(".feature-card-inner.flipped").toggleClass("flipped");
        if (this.props.featureCard.review) {
            this.deleteReview();
        }
        this.props.deleteCard(this.props.featureCard, this.props.id);
    }

    addReview() {
        this.props.featureCard.review = true;
        this.props.addReview(this.props.featureCard, this.props.id);
    }

    deleteReview() {
        this.props.featureCard.review = false;
        this.props.deleteReview(this.props.featureCard, this.props.id);
    }
    render() {
        return (
            <div className="feature-card-outer">
                {/* edit modal */}
                <Modal open={this.state.editModalOpen} closeOnDimmerClick={false}>
                    <Modal.Header>Edit Card</Modal.Header>
                    <div className="flip-card-container">
                        <div className="flip-card-inner" onClick={this.toggleFlip}>
                            <div className="flip-card-front">
                                <div className="flip-card-text"><div>{this.state.term}</div></div>
                            </div>
                            <div className="flip-card-back">
                                <div className="flip-card-text"><div>{this.state.definition}</div></div>
                            </div>
                        </div>
                    </div>
                    <Form>
                        <Form.Field>
                            <label>Term</label>
                            <input placeholder="Term" value={this.state.term} onChange={(e) => this.onChange(e, "term")}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Definition</label>
                            <input placeholder="Definition" value={this.state.definition} onChange={(e) => this.onChange(e, "definition")}/>
                        </Form.Field>
                        <button className="button create-button" onClick={this.editCard}>Confirm</button>
                        <button className="button cancel-button" onClick={this.toggleEditModal}>Cancel</button>
                    </Form>
                </Modal>
                
                {/* feature section */}
                <div className="feature-card-container">
                {
                    this.props.featureCard ? 
                    <div className="feature-card-inner">
                        <div className="feature-card-front">
                            <div className="feature-card-text"><div>{this.props.featureCard.term}</div></div>
                        </div>
                        <div className="feature-card-back">
                            <div className="feature-card-text"><div>{this.props.featureCard.definition}</div></div>
                        </div>
                    </div>
                    : null
                }

                {/* feature card buttons */}
                {
                    this.props.featureCard && this.state.toggle ? 
                    <div className="feature-card-button">
                        <Popup trigger={<div className="feature-button" onClick={this.toggleFlip}><Icon name="exchange"/></div>}
                            content="Flip"
                            position="right center"
                            size="mini"
                        />
                        <Popup trigger={<div className="feature-button" onClick={this.toggleEditModal}><Icon name="edit outline"/></div>}
                            content="Edit"
                            position="right center"
                            size="mini"
                        />
                        <Popup trigger={<div className="feature-button" onClick={this.deleteCard}><Icon name="trash alternate outline"/></div> }
                            content="Delete"
                            position="right center"
                            size="mini"
                        />
                        {
                            this.props.featureCard.review ?
                            <Popup trigger={<div className="feature-button" onClick={this.deleteReview}><Icon name="star"/></div> }
                                content="Remove review"
                                position="right center"
                                size="mini"
                            />:
                            <Popup trigger={<div className="feature-button" onClick={this.addReview}><Icon name="star outline"/></div> }
                                content="Review"
                                position="right center"
                                size="mini"
                            />
                        }
                    </div> :
                    null
                }
                </div>
            </div>
        )
    }
}

export default FeatureCard;