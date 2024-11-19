import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfoundContainer">
      <div class="newtons-cradle">
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
        <div class="newtons-cradle__dot"></div>
      </div>
      <div className="notfound">
        <h4>Page not found - 404 -</h4>
        <Link to={"/"}>
          <h6>Go to home page</h6>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;