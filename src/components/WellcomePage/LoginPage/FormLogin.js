import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../database/firebase";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const userLocal = localStorage.getItem("user");
  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("start login ....");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login success");
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto my-7 max-w-5xl border-gray-500 rounded-md">
      <h3 className="text-red-500 text-center">Login</h3>
      {user && <Navigate to="/" replace={true} />}
      {userLocal && <Navigate to="/" replace={true} />}
      {/* form login  */}
      <form onSubmit={handleLogin} className="flex flex-col items-center ">
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className=" m-2 p-2 bg-blue-50 outline-none"
        />
        <input
          placeholder="password"
          className=" m-2 p-2 bg-blue-50 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className=" rounded-md bg-blue-500 p-2 text-white m-2"
        >
          Login
        </button>
      </form>
      <div className="flex justify-center items-center">
        <p className="mr-2">Dont have an account? </p>
        <Link to="/register" className="font-bold text-blue-500">
          Click here...
        </Link>
      </div>
    </div>
  );
}

export default FormLogin;
