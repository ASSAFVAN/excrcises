import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <Link to="/">Homepage</Link>
        <Link to="/products">Products</Link>
      </div>
    </div>
  );
}
