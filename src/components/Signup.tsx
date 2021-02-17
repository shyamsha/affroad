import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

interface Props {
  history: any;
}

export default function Signup(props: Props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {}, []);

  const changeName = (e: { target: { value: string } }) => {
    setName(e.target.value);
  };

  const changeLastName = (e: { target: { value: string } }) => {
    setLastName(e.target.value);
  };

  const changePassword = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  const changeEmail = (e: { target: { value: string } }) => {
    setEmail(e.target.value);
  };

  const submitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/signup", {
        firstname: name,
        lastname: lastName,
        email: email,
        password,
      })
      .then((response) => {
        if (response.data.result === "registration successful!") {
          props.history.push("/login")
          console.log(response)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
console.log(name)
  return (
    <div>
      <input type="text" placeholder="firstName" onChange={changeName} />
      <br />
      <input type="text" placeholder="lastName" onChange={changeLastName} />
      <br />

      <input type="text" placeholder="email" onChange={changeEmail} />
      <br />
      <input type="text" placeholder="password" onChange={changePassword} />

      <br />

      <button onClick={submitForm}>Submit</button>
    </div>
  );
}
