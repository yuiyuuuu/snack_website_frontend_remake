import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, error } from "../../store";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
/**
 * COMPONENT
 */
const AuthForm = ({ formName }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate(userName, password, formName));
    history.push("/home");
  };

  const classes = useStyles();
  return (
    <div className={classes.content}>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input
            name="username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
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
    </div>
  );
};

export default AuthForm;
