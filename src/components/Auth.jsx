import { useRef } from "react";
import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "./../store/auth";

const Auth = () => {
  const emailAddress = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    const emailValue = emailAddress.current.value;
    const passwordValue = password.current.value;

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={emailAddress} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={password} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
