import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="center container">
      <h1>Home Page</h1>
      <div className="home-items">
        <Link href="/pages/registration">
          <div className="home-div">
            <p>Register</p>
          </div>
        </Link>

        <Link href="/pages/dashboard">
          <div className="home-div">
            <p>Dashboard</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
