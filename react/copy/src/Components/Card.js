import React from "react";
class Card extends React.Component {
  displayCards = () => {
    const cardsObj = this.props.names;
    return cardsObj.map((person, i) => {
      return (
        <div key={i}>
          <div>{person.name}</div>
          <div>{person.birthday}</div>
          <div>{person.favoriteFoods.meats.join(" ")}</div>
          <div>{person.favoriteFoods.fish.join(" ")}</div>
          <br />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div>{this.displayCards()}</div>
      </div>
    );
  }
}
export default Card;
