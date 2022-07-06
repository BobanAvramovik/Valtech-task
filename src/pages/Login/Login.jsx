import Button from "../../components/Button/Button";
import classes from "./Login.module.css";
import { useState } from "react";

const Login = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const passwordHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    props.handleLogin(true);

    if (enteredName === "valtech" && enteredPassword === "valtech") {
      return localStorage.setItem("token", "1234");
    }
  };

  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>
          <h1 className={classes.h1}>Join our stock community!</h1>
          <p className={classes.subHeading}>
            Preview free photos powered by the best photographers.
          </p>
        </header>
        <form className={classes.form} onSubmit={formSubmissionHandler}>
          <div>
            <label htmlFor="username">Username &nbsp;</label>
            <input
              onChange={usernameHandler}
              type="text"
              id="username"
              placeholder="Enter username here..."
            />
          </div>
          <div>
            <label htmlFor="password">Password &nbsp;</label>
            <input
              onChange={passwordHandler}
              type="password"
              id="password"
              placeholder="Enter password here..."
            />
          </div>
          <p className={classes.description}>
            (Username is valtech / Password is valtech)
          </p>
          <Button type="submit">Log in</Button>
        </form>
      </div>
    </>
  );
};

export default Login;
