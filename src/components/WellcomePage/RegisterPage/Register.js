import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database/firebase";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handlerClick = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log("User created successfully");
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3>Create account</h3>
      <form onSubmit={handlerClick}>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
