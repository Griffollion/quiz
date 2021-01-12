import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = (props) => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          answerState={props.answerState ? props.answerState[answer.id] : null}
          key={index}
        />
      );
    })}
  </ul>
);

export default AnswerList;
