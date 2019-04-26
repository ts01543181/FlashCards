import React, { Component } from "react";
import { Modal, Dropdown, Form } from "semantic-ui-react";

const times = [
    {text:"1 mins", value:1},
    {text:"15 mins", value:15},
    {text:"30 mins", value:30},
    {text:"45 mins", value:45},
    {text:"60 mins", value:60},
];

class Mock extends Component {
    interval_id;
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            min: null,
            collection:null,
            result: null,
            start: false,
            sec:0,
            secStr:"00",
            resultOpen: false,
            collectionInd:0,
            answer: "",
            answerArr:[]
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.startMock = this.startMock.bind(this);
        this.countDown = this.countDown.bind(this);
        this.onChange = this.onChange.bind(this);
        this.nextCard = this.nextCard.bind(this);
        this.closeResult = this.closeResult.bind(this);
    }
    closeResult() {
        this.setState({
            resultOpen: false,
            start: false,
            open:false,
            collectionInd:0,
            answer:"",
            answerArr:[]
        });
    }
    nextCard() {
        if (this.state.collectionInd + 1 == this.state.collection.cards.length) {
            this.setState({
                resultOpen: true
            })
        } else {
            let correct = this.state.answer === this.state.collection.cards[this.state.collectionInd].definition;

            this.setState({
                collectionInd: this.state.collectionInd+1,
                answer: "",
                answerArr: [...this.state.answerArr, correct]
            });
        }
    }
    onChange(e) {
        this.setState({
            answer: e.target.value
        });
    }

    onSelect(e, data) {
        this.setState({
            min: data.value
        })
    }
    toggleModal(e) {
        let title = e.target.getAttribute("data-title");
        if (!title) {
            title = e.target.innerHTML;
        }
        let col;
        for (let c of this.props.collection) {
            if (c.title == title) {
                col = c;
                break;
            }
        }
        this.setState({
            open: !this.state.open,
            collection: col
        })
    }
    
    countDown() {
        if (this.state.sec == 0) {
            if (this.state.min == 0) {
                clearInterval(this.interval_id);
                this.setState({
                    resultOpen:true
                });
            } else {
                let newSec = 59;
                this.setState({
                    sec: newSec,
                    secStr: "59",
                    min: this.state.min-1
                });
      
            }
        } else {
            let newSec = this.state.sec-1;
            this.setState({
                sec:newSec,
                secStr: (newSec < 10 ? "0" : "") + newSec
            });
        }
    }

    startMock() {
        this.setState({start: true}, () => {
            this.interval_id = setInterval(this.countDown, 1000);
        })
    }
    render() {
        if (this.state.start) {
            const cards = this.state.collection.cards;
            let i = this.state.collectionInd;
            return (
                <div className="general-container">
                    <div className="timer-container">
                        <div className="timer">
                            {this.state.min < 10 ? "0" + this.state.min : this.state.min} : {this.state.secStr}
                        </div>
                    </div>
                    <Modal open={this.state.resultOpen}>
                        <Modal.Header>Times up! Here's your result!</Modal.Header>
                        <div className="result-container">
                            <ul>
                                {
                                    cards.map((card, i) => {
                                        return (
                                            <li>
                                                <div>
                                                    <span>{card.term}</span>
                                                    <div>{this.state.answerArr[i] == undefined ? "Wrong" : (this.state.answerArr[i] ? "Correct" : "Wrong")}</div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <button className="button cancel-button" onClick={this.closeResult}>Close</button>
                    </Modal>

                    <div className="feature-card-container">
                        <div className="feature-card-inner">
                            <div className="feature-card-front">
                                {
                                    cards[i].frontImg && cards[i].frontImg.length ? 
                                    <div className="feature-card-img" style={{height:"100%", width:"50%", float:"left"}}>
                                        <img src={cards[i].frontImg}/>
                                    </div>
                                    : null
                                }
                                <div className="feature-card-text" style={cards[i].frontImg && cards[i].frontImg.length ? {height:"100%", width:"50%", float:"right", overflow:"hidden"} : null}><div>{cards[i].term}</div></div>
                            </div>
                        </div>
                    </div>
                    
                    <Form size="large">
                        <Form.Field>
                            <label>Answer</label>
                            <input value={this.state.answer} onChange={this.onChange} />
                            <span className="focus-border"></span>
                        </Form.Field>
                        <button className="button create-button" onClick={this.nextCard}>Next</button>
                    </Form>
                    {/* <div className="answer-container">
                        <div className="answer-input">
                            <label>Answer</label>
                            <input value={this.state.answer} onChange={this.onChange} />
                            <span className="focus-border"></span>
                        </div>
                        <div></div>
                        
                        
                    </div> */}
                </div>
            )
        }
        return (
            <div className="general-container">
                <div className="collection-header">
                    <h1>CHOOSE A COLLECTION BELOW</h1>
                </div>
                <hr />
                <Modal open={this.state.open} closeOnDimmerClick={false}>
                    <Modal.Header>Set your timer</Modal.Header>
                    <div className="mock-dropdown-container">
                        <Dropdown 
                            onChange={this.onSelect}
                            selection
                            options={times}
                            placeholder="Set timer"
                        />
                        <button className="button create-button" onClick={this.startMock}>Start</button>
                        <button className="button cancel-button" onClick={this.toggleModal}>Cancel</button>
                    </div>
                </Modal>

                {
                    this.props.collection.length ? 
                    
                    this.props.collection.map(col => {
                        return (
                            <div className="collection-item-wrapper" onClick={this.toggleModal} >
                                <div className="collection-item" data-title={col.title}>
                                    <div>{col.title}</div>
                                </div>
                            </div>
                        )
                    }):null
                }
                {
                    this.props.review.length ? 
                    <div className="collection-item-wrapper" onClick={this.toggleModal}>
                        <div className="collection-item" data-title="review">
                            <div>REVIEW SET</div>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default Mock;