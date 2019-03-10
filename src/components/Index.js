import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      waiting: true
    };
  }

  componentWillMount() {
    axios.get("http://localhost:5555/list", {}).then(res => {
      this.setState({
        cartList: res.data,
        waiting: false
      });
    });
  }

  render() {
    const { cartList, waiting } = this.state;
    return (
      <React.Fragment>
        <table>
          <tbody>
            {!waiting ? (
              cartList.map(object => {
                const { id, name, description, price, amount } = object;
                return (
                  <tr key={id}>
                    <td> {name}</td>
                    <td> {description} </td>
                    <td> {price} </td>
                    <td> {amount}</td>
                  </tr>
                );
              })
            ) : (
              <tr />
            )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
