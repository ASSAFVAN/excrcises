import React, { Component } from "react";
import data from "../store";
import { Link } from "react-router-dom";

export default class ProductDetail extends Component {
  state = { product: null };

  componentDidMount() {
    const productID = Number(this.props.match.params.id);
    const matchingProduct = data.find((product) => {
      return product.id === productID;
    });
    this.setState({ product: matchingProduct });
  }
  clickBack = () => {
    this.props.history.goBack();
  };

  render() {
    const displayProduct = () => {
      return (
        <div>
          <button onClick={this.clickBack}>Back</button>
          <h3>{this.state.product.title}</h3>
          <img src={`${this.state.product.imageUrl}`} />
          <h2>{this.state.product.price}</h2>
          <h2>{this.state.product.size}</h2>
        </div>
      );
    };

    return (
      <div>
        <div>{this.state.product && displayProduct()}</div>
      </div>
    );
  }
}
