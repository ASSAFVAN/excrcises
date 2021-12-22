import React from "react";
import "./App.css";
import Mockupapi from "./APIs/api";
import UsersList from "./Components/UsersList";

class App extends React.Component {
  state = { users: [] };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const response = await Mockupapi.get("");
    console.log(response);

    this.setState({ users: response.data });
  };

  render() {
    return (
      <div className="app-container">
        <div>
          <UsersList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
