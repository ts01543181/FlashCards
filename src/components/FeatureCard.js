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
            comment: "",
            frontImg:null,
            backImg:null
        }

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
        const { term, definition, comment, frontImg, backImg } = this.props.featureCard;
        this.setState({
            term, definition, comment, frontImg, backImg
        });
    }

    componentWillReceiveProps(newProps) {
        // this will update featureCard whenever there's an update been made (edit/delete)
        if (!newProps.featureCard) return;
        const { term, definition, comment, frontImg, backImg } = newProps.featureCard;
        if (newProps.featureCard) {
            this.setState({
                term, definition, comment, frontImg, backImg
            });
        }
    }

    toggleFlip(feature) {
        if (feature) {
            $(".feature-card-inner").toggleClass("flipped");
            if ($(".feature-card-inner").hasClass("flipped")) {

                $(".feature-card-back").toggleClass("display-none");
                
                setTimeout(() => {
                    $(".feature-card-back").toggleClass("display-none");
                },0);
            }
        } else {
            $(".flip-card-inner").toggleClass("flipped");
        }
    }

    toggleEditModal() {
        const card = this.props.featureCard;
        this.setState({
            editModalOpen: !this.state.editModalOpen,
            term: card.term,
            definition: card.definition,
            comment: card.comment,
            frontImg:card.frontImg,
            backImg:card.backImg
        });
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
            reviewInd: this.props.featureCard.reviewInd,
            frontImg: this.state.frontImg && this.state.frontImg.length ? this.state.frontImg : null,
            backImg: this.state.backImg && this.state.backImg.length ? this.state.backImg : null,
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
        this.props.editCard(this.props.featureCard, this.props.id);
    }

    render() {
        return (
            <div className="feature-card-outer">
                {/* edit modal */}
                <Modal open={this.state.editModalOpen} closeOnDimmerClick={false}>
                    <Modal.Header>Edit Card</Modal.Header>
                    <div className="flip-card-container">
                        <div className="flip-card-inner" onClick={() => this.toggleFlip(false)}>
                            <div className="flip-card-front">
                                {
                                    this.state.frontImg && this.state.frontImg.length ? 
                                    <div className="feature-card-img" style={{height:"100%", width:`${this.state.term.length ? "50%" : "100%"}`, float:"left"}}>
                                        <img src={this.state.frontImg} alt="invalid"/>
                                    </div>
                                    : null
                                }
                                <div className="flip-card-text"><div>{this.state.term}</div></div>
                            </div>
                            <div className="flip-card-back">
                                {
                                    this.state.backImg && this.state.backImg.length ? 
                                    <div className="feature-card-img" style={{height:"100%", width:`${this.state.definition.length ? "50%" : "100%"}`, float:"left"}}>
                                        <img src={this.state.backImg} alt="invalid"/>
                                    </div>
                                    : null
                                }
                                
                                <div className="flip-card-text">
                                    <div>
                                        {this.state.definition}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Form size="large">
                        <Form.Field>
                            <label>Term</label>
                            <input value={this.state.term} onChange={(e) => this.onChange(e, "term")}/>
                            <span className="focus-border"></span>
                        </Form.Field>
                        <Form.Field>
                            <label>Image url for term</label>
                            <input  value={this.state.frontImg} onChange={(e) => this.onChange(e, "frontImg")}/>
                            <span className="focus-border"></span>
                        </Form.Field>
                        <Form.Field>
                            <label>Definition</label>
                            <input  value={this.state.definition} onChange={(e) => this.onChange(e, "definition")}/>
                            <span className="focus-border"></span>
                        </Form.Field>
                        <Form.Field>
                            <label>Image url for definition</label>
                            <input   value={this.state.backImg} onChange={(e) => this.onChange(e, "backImg")}/>
                            <span className="focus-border"></span>
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
                            {
                                this.props.featureCard.frontImg && this.props.featureCard.frontImg.length ? 
                                <div className="feature-card-img" style={{height:"100%", width:`${this.props.featureCard.term.length ? "50%" : "100%"}`, float:"left"}}>
                                    <img src={this.props.featureCard.frontImg} alt="invalid"/>
                                </div>
                                : null
                            }
                            {
                                this.props.featureCard.term.length ? 
                                <div className="feature-card-text" style={this.props.featureCard.frontImg && this.props.featureCard.frontImg.length ? {height:"100%", width:"50%", float:"right", overflow:"hidden"} : null}><div>{this.props.featureCard.term}</div></div>
                                :
                                null
                            }
                        </div>
                        <div className="feature-card-back">
                            {
                                this.props.featureCard.backImg && this.props.featureCard.backImg.length ? 
                                <div className="feature-card-img" style={{height:"100%", width:`${this.props.featureCard.definition.length ? "50%" : "100%"}`, float:"left"}}>
                                    <img  src={this.props.featureCard.backImg} alt="invalid"/>
                                </div>
                                : null
                            }
                            {
                                this.props.featureCard.definition.length ? 
                                <div className="feature-card-text" style={this.props.featureCard.backImg && this.props.featureCard.backImg.length ? {height:"100%", width:"50%", float:"right", overflow:"hidden"} : null}>
                                    <div>
                                    {this.props.featureCard.definition}
                                    </div>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                    : 
                    null
                }
                {/* feature card buttons */}
                {
                    this.props.featureCard && this.state.toggle ? 
                    <div className="feature-card-button">
                        <Popup trigger={<div className="feature-button" onClick={() => this.toggleFlip(true)}><Icon name="exchange"/></div>}
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
                            <Popup trigger={<div className="feature-button" onClick={this.deleteReview}><Icon name="star" className="starred"/></div> }
                                content="Add/Remove Review"
                                position="right center"
                                size="mini"
                            />:
                            <Popup trigger={<div className="feature-button" onClick={this.addReview}><Icon name="star outline"/></div> }
                                content="Add/Remove Review"
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