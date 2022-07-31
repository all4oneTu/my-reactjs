import React from "react";
import {  Navigate } from "react-router-dom";
function HomePage() {
   const userLocal = localStorage.getItem("user");

  return (
    <div>
      {!userLocal && <Navigate to="/login" replace={true} />}
      <div>HomePage</div>
    </div>
  );
}

export default HomePage;
