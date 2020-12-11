import React, { Component } from "react";
import "./App.css";
import QuestionTab from "./Containers/QuestionTab/QuestionTab";
import questions from "./data";
import data from "./data";

class App extends Component {
  state = {
    questions: data,
  };

  render() {
    return (
      <div className="app">
        <main>
          <header className="title">
            <h1>Question and answers about login</h1>
          </header>
          <QuestionTab questions={questions} />
        </main>
      </div>
    );
  }
}
export default App;
