import React, { useState } from "react";
import "./Question.css";

const Question = ({ heading, text }) => {
  const [toggle, setToggle] = useState(false);
  let info = null;
  if (toggle) {
    info = <p className="text"> {text} </p>;
  }
  return (
    <article className="questionContainer">
      <header className="question">
        <h3>{heading}</h3>
        <button className="btn" onClick={() => setToggle(!toggle)}>
          {toggle ? "-" : "+"}
        </button>
      </header>
      {info}
    </article>
  );
};
export default Question;
