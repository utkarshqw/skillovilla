import React from "react";
import "../style.css";

const SingleComment = ({ email, username, body, createdAt }) => {
  return (
    <div className="singlecomment-container">
      <div>
        <p>User: {username}</p>
        <p>Date: {createdAt}</p>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default SingleComment;
