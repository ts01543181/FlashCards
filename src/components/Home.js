import React, { Component } from "react";
import { Icon, Button, List, Modal, Form } from "semantic-ui-react";

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
        if (!this.state.collectionName.length) {

        }
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
            <div className="general-container">
                <div className="home-header">
                    <h1>Your collections</h1>
                </div>
                <hr />
                <Modal open={this.state.open} closeOnDimmerClick={false}>
                    <Modal.Header>Create a new collection</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <label>Title</label>
                                <input placeholder="Name for your collection" onChange={(e) => this.onChange(e, "collectionName")} value={this.state.collectionName}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <input placeholder="Description for your collection" onChange={(e) => this.onChange(e, "collectionDescription")} value={this.state.collectionDescription}/>
                            </Form.Field>
                            <button className="button create-button" onClick={this.addCollection}>Create</button>
                            <button className="button cancel-button" onClick={this.toggleModal}>Cancel</button>
                        </Form>
                    </Modal.Content>
                </Modal>
                <div className="collection-container">

                    {   
                        this.props.collection.length ?
                        this.props.collection.map(col => {
                            return (
                            <div className="collection-item" onClick={() => this.props.history.push(`/collection/${col.title}`)}>
                                <div>{col.title}</div>
                            </div>
                            )
                        }) :
                        <div className="collection-item" onClick={this.toggleModal}>
                            <div style={{color:"#032e61"}}>+ New Collection</div>
                        </div>
                    }
                    {
                        this.props.collection.length ?
                        <div className="collection-item" onClick={this.toggleModal}>
                            <div style={{color: "#032e61"}}>+ New Collection</div>
                        </div>
                        : null
                    }
                </div>
                
            </div>
        )
    }
}

export default Home;