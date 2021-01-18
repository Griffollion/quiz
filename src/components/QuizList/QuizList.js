import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuilList.module.css";

export default class QuizList extends Component {
  renderQuizes() {
    return [1, 2, 3].map((quiz, index) => {
      return (
        <li key={index}>
          <NavLink to={"/quiz/" + quiz}>Тест {index}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Quiz List</h1>
          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}
