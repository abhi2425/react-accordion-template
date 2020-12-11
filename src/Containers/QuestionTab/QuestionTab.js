import React from "react";
import "./QuestionTab.css";
import Question from "../../Components/Question/Question";

const questionTab = ({ questions }) => {
  const question = questions.map((question, qIndex) => {
    return (
      <Question
        key={question.id}
        heading={question.title}
        text={question.info}
      />
    );
  });
  return <section className="questionTab">{question}</section>;
};

export default questionTab;
