import React, { Component } from "react";
import classes from "./Auth.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

export default class Auth extends Component {
  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className={classes.Auth}>
        <div className={classes.Auth__container}>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler}>
            <Input label="Email" />
            <Input label="Пароль" errorMessage="Test" />
            <Button type="success" onClick={this.loginHandler}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registerHandler}>
              Зарегестрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
