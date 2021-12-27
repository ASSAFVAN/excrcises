import React from "react";
import "./App.css";
import Mockupapi from "./APIs/api";
import UsersList from "./Components/UsersList";
import InputText from "./Components/InputText";
import Button from "./Components/Button";

class App extends React.Component {
  state = { users: [], inputText: "" };

  componentDidMount() {
    this.getApiData();
  }

  getApiData = async () => {
    const response = await Mockupapi.get("");
    console.log(response);

    this.setState({ users: response.data });
  };

  handleOnChange = (event) => {
    this.setState({ inputText: event.target.value });
    console.log(this.state);
  };

  handleClick = (e) => {
    switch (e.target.name) {
      case "create":
        this.handleCreate();
        break;
      case "delete":
        const id = Number(e.target.id);

        this.handleDelete(id);
        break;
      case "edit":
        this.handleEdit();
        break;
      default:
        break;
    }
  };

  handleCreate = async () => {
    // this.state.inputText
    let data = this.state.users;
    const response = await Mockupapi.post("", {
      id: data.id,
      name: data.name,
      image: data.image,
    });
    this.setState((state) => {
      return { users: [...state.users, response.data] };
    });
  };
  handleDelete = async (id) => {
    await Mockupapi.delete(`${id}`);
    const data = this.state.users.filter((el) => el.id !== id);
    console.log(data);
    this.setState({ users: data });
  };
  handleEdit = () => {
    console.log("edit");
  };

  render() {
    return (
      <div className="app-container">
        <div>
          {/* <InputText
            value={this.state.inputText}
            changedValue={this.handleOnChange}
          /> */}
          <Button
            handleClick={this.handleClick}
            name="create"
            btnText="Add User"
          />
        </div>
        <div>
          <UsersList handleClick={this.handleClick} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
