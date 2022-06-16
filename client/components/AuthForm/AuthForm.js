import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, error } from "../../store";
import { useHistory, Link } from "react-router-dom";

import useStyles from "./styles";
/**
 * COMPONENT
 */
const AuthForm = ({ formName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate(email, password, formName));
    history.push("/");
  };

  const classes = useStyles();
  return (
    <div className={classes.content}>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">{formName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>

      <div>
        {formName === "login" ? (
          <Link to="/signup">Create Account</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
