import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailState_handler = (state, action) => {
  if (action.type === "onChange") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  else if (action.type === "onBlur") {
    return { value: state.value, isValid: action.value.includes("@") };
  }
  return { value: "", isValid: false };
}

const passwordState_handler = (state, action) => {
  if (action.type === "onChange") {
    return { value: action.value, isValid: action.value.trim().length > 6 }
  }
  else if (action.type === "onBlur") {
    return { value: state.value, isValid: action.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();

  const [emailState, dispatchEmail] = useReducer(emailState_handler, {
    value: "",
    isValid: null
  })

  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [passwordState, dispatchPasswordState] = useReducer(passwordState_handler, {
    value: "",
    isValid: null
  })

  const [enteredCollege, setEnteredCollege] = useState("");
  const [collegeIsValid, setCollegeIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   const emailTimer = setTimeout(() => {
  //     setFormIsValid(
  //       enteredPassword.trim().length > 6 && enteredEmail.includes('@') && enteredCollege.trim().length > 0
  //     );
  //   }, 500);

  //   return () => {
  //     clearTimeout(emailTimer);
  //   }
  // }, [enteredEmail, enteredPassword, enteredCollege])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "onChange", value: event.target.value })

    setFormIsValid(emailState.isValid === true && passwordState.isValid === true && enteredCollege.trim().length > 0)
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "onBlur", value: emailState.value })
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({ type: "onChange", value: event.target.value });

    setFormIsValid(emailState.isValid === true && passwordState.isValid === true && enteredCollege.trim().length > 0)
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: "onBlur", value: passwordState.value })
  };

  const collegeChangeHandler = (event) => {
    setEnteredCollege(event.target.value);

    setFormIsValid(emailState.isValid === true && passwordState.isValid === true && enteredCollege.trim().length > 0)
  }

  const validateCollegeHandler = () => {
    setCollegeIsValid(enteredCollege.trim().length > 0);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.enteredEmail, passwordState.value, enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={`${classes.control} ${collegeIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollegeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
