import React, { Component } from "react";
import { Container, Button, List } from "semantic-ui-react";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCollection: null
        };
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

    addCard() {
        this.props.addCard()
    }

    render() {
        return (
            <Container>
                <h1>SalesCard</h1>
                <h3>{this.state.currentCollection.title}</h3>
                <Button onClick={this.addCard}>+ New Card</Button>
            </Container>
        )
    }
}

export default Card;