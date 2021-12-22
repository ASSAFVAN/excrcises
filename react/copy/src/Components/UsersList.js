import React from "react";
import UserItem from ".//UserItem";
import "../App.css";

export default function UsersList({ users }) {
  const renderList = users.map((user) => {
    return (
      <div className="card-container">
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
        />
        <div className="btn-wrap">
          <button>Edit User</button>
          <button>Delete User</button>
        </div>
      </div>
    );
  });

  return <div className="card-list-container">{renderList}</div>;
}
