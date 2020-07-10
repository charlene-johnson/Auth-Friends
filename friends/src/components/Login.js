import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/friendlist");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={login}>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChanges}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <button>Login</button>
      </form>
    </div>
  );
}
