import React, { Component } from "react";
import { Container, Button, List, Modal, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collectionName:"",
            collectionDescription: "",
            open: false
        };
        this.addCollection = this.addCollection.bind(this);
        this.onChange = this.onChange.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    onChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }


    addCollection() {
        this.props.addCollection({
            title: this.state.collectionName,
            description: this.state.collectionDescription,
            cards: []
        })
        .then(() => {
            this.toggleModal();
        })
    }

    toggleModal() {
        this.setState({
            open: !this.state.open,
            collectionName:"",
            collectionDescription:""
        });
    }

    render() {
        return (
            <Container>
                <h1>SalesCard</h1>
                <Button onClick={this.toggleModal}>Add collection</Button>
                <Modal open={this.state.open} closeOnDimmerClick={false}>
                    <Modal.Header>Create a new collection</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Title *required</label>
                                <input placeholder="Name for your collection" onChange={(e) => this.onChange(e, "collectionName")}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <input placeholder="Description for your collection" onChange={(e) => this.onChange(e, "collectionDescription")}/>
                            </Form.Field>
                            <Button onClick={this.toggleModal}>Cancel</Button>
                            <Button onClick={this.addCollection}>Create</Button>
                        </Form>
                    </Modal.Content>
                </Modal>
                <div className="collection-container">
                    {
                        this.props.collection.map(col => {
                            return (
                            <div className="collection-item">
                                <h3><Link to={`/card/${col.title}`}>{col.title}</Link></h3>
                                <span>{col.description}</span>
                                <hr className="collection-item-hr"/>
                            </div>
                            )
                        })
                    }
                </div>
                
            </Container>
        )
    }
}

export default Home;