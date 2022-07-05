import Button from "../components/Layout/Button";
import classes from "./Login.module.css";

const Login = () => {
  const formSubmissionHandler = () => {
    localStorage.setItem("token", "1234");
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
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username here..."
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password here..."
            />
          </div>
          <Button type="submit">Log in</Button>
        </form>
      </div>
    </>
  );
};

export default Login;
