import React, {Component} from "react";
import classes from "./Auth.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import is from 'is_js'

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Введите Email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        label: "Password",
        errorMessage: "Введите Password",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        },
      },
    },
  };

  loginHandler = () => {
  };

  registerHandler = () => {
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) {
      return true
    }

    let isValid = true

    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }

    if (validation.email) {
      isValid = is.email(value) && isValid
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controlName) => {
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}
    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)
    formControls[controlName] = control

    let isFormValid = true

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          value={control.value}
          type={control.type}
          label={control.label}
          errorMessage={control.errorMessage}
          valid={control.valid}
          shouldValidate={!!control.validation}
          touched={control.touched}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        />
      )
    })
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div className={classes.Auth__container}>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderInputs()}
            <Button type="success" onClick={this.loginHandler} disabled = {!this.state.isFormValid}>
              Войти
            </Button>
            <Button type="primary" onClick={this.registerHandler} disabled = {!this.state.isFormValid}>
              Зарегестрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
