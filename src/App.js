import React from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Quiz from "./containers/Quiz/Quiz";
import QuizCreator from "./components/QuizCreator/QuizCreator";
import QuizList from "./components/QuizList/QuizList";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/"   component={QuizList} />
        <Route path="/auth" component={Auth} />
        <Route path="/quiz-creator" component={QuizCreator} />
        <Route path="/quiz/:id" component={Quiz} />
      </Switch>
    </Layout>
  );
}

export default App;
