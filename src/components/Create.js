// Create.js

import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            price: '',
            amount: ''

        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:5555/item/add/', {
          name: this.state.name,
          description: this.state.description,
          price: this.state.price,
          amount: this.state.amount
        })
        .then(res => console.log(res.data));

        this.setState({
            name: '',
            port: ''
        });
    }

    render() {
        return (
          <div>
            <h2>AddItem</h2>
            <ul>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange = {this.onChangeName} />
              <label htmlFor="description">Description</label>
              <input type="text" name="description" id="description" onChange = {this.onChangeDescription} />
              <label htmlFor="price">Price</label>
              <input type="text" name="price" id="price" onChange = {this.onChangePrice} />
              <label htmlFor="amount">Amount</label>
              <input type="text" name="amount" id="amount" onChange = {this.onChangeAmount} />
              <button>Add new item</button>
            </form>
            </ul>
            </div>
        )
    }
}
