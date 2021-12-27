import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../store";

export default class Products extends Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data: data });
  }
  displayProducts() {
    return data.map((product) => {
      return (
        <Link
          to={`${this.props.location.pathname}/${product.id}`}
          key={product.id}
        >
          {product.title}
        </Link>
      );
    });
  }

  render() {
    return <div>{this.displayProducts()}</div>;
  }
}
