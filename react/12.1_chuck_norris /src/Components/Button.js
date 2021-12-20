import React from "react";
import axios from "axios";

if (module.hot) {
  module.hot.accept();
}
class Button extends React.Component {
  // state = { jokes: "" };

  // handleClick = async () => {
  //   const response = await axios.get("https://api.chucknorris.io/jokes/random");
  //   this.setState({ jokes: response.data.value });
  // };

  state = { categories: [], joke: "" };
  getCategories = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    this.setState({ categories: response.data });
  };

  getCategoryJoke = async (e) => {
    const response2 = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${e.target.innerText}`
    );
    this.setState({ joke: response2.data.value });
  };

  render() {
    const categoriesArr = this.state.categories;

    return (
      <div>
        {/* <button onClick={this.handleClick}>Click for a random joke</button>
        <div>{this.state.jokes}</div> */}
        <button onClick={this.getCategories}>
          Click to get jokes categories
        </button>
        <div>
          {categoriesArr &&
            categoriesArr.map((category, i) => (
              <>
                <button key={i} onClick={this.getCategoryJoke}>
                  {category}
                </button>
              </>
            ))}
        </div>
        <div>{this.state.joke}</div>
      </div>
    );
  }
}
export default Button;
