import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database/firebase";
import { Link , Navigate} from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null)
  const userLocal = localStorage.getItem("user");
  const handlerClick = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log("User created successfully");
        console.log(user);
          setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mx-auto my-7 max-w-5xl border-gray-500 rounded-md ">
      <h3 className="text-red-500 text-center">Create account</h3>
      {user && (
          <Navigate to="/" replace={true} />
      )}
      {userLocal && <Navigate to="/home" replace={true} />}
      <form onSubmit={handlerClick} className="flex flex-col items-center ">
        <input
          placeholder="username"
          className=" m-2 p-2 bg-blue-50 outline-none"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="email"
          className="m-2 p-2 bg-blue-50 outline-none "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          className="m-2 p-2 bg-blue-50 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className=" rounded-md bg-blue-500 p-2 text-white m-2" type="submit">Sign Up</button>
      </form>
      <div className="flex justify-center items-center">
        <p className="mr-2">Have an account? </p>
        <Link to="/login" className="font-bold text-blue-500">Click here...</Link>
      </div>
    </div>
  );
}

export default Register;
