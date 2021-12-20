import React from "react";
import "./App.css";
import { data } from "./data";
import Card from "./Components/Card";
import Name from "./Components/Name";

class App extends React.Component {
  state = { names: [], older: [] };

  componentDidMount() {
    const namesArr = data.map((user) => {
      return user.name;
    });
    const olderArr = data.filter((obj) => {
      const year = obj.birthday.slice(-4);
      return year < 1990;
    });
    // console.log(olderArr);
    this.setState({ names: namesArr, older: olderArr });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <div>
          <Name names={this.state.names} />
          <div>
            {this.state.older.length && <Card names={this.state.older} />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
