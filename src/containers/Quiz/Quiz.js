import React, { Component } from "react";
import classes from "./Quiz.module.css";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "Во сколько ты ложишьсяспать?",
        rightAnswer: 2,
        id: 1,
        answers: [
          { text: "До 4 утра", id: 1 },
          { text: "До 5 утра", id: 2 },
          { text: "До 9 утра", id: 3 },
          { text: "До полудня", id: 4 },
        ],
      },
      {
        question: "Кем был Наполеон?",
        rightAnswer: 4,
        id: 2,
        answers: [
          { text: "Букашкой", id: 1 },
          { text: "Таракашкой", id: 2 },
          { text: "Королем Фрации", id: 3 },
          { text: "Императором Франции", id: 4 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    console.log("answer id", answerId);

    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswer === answerId) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results: results,
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results: results,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Балаган какой-та</h1>
          {this.state.isFinished ? (
            <FinishedQuiz results={this.state.results} quiz={this.state.quiz} />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              title={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              answerState={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
