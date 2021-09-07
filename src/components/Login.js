import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "John",
              age: 20,
              email: "john@gmail.com",
            })
          )
        }
      >
        login
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  );
}

export default Login;
