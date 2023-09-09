"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [formValues, setFormValues] = useState();
  const route = useRouter();
  let params = useSearchParams();
  let email = params.get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formValues);
    const config = {
      method: "POST",
      body: JSON.stringify({ token: formValues, email: email }),
    };
    const response = await fetch("/api/login", config);
    let json = await response.json();
    console.log(json["status"]);

    if (json["status"] === true) {
      console.log("hi");
      route.replace("/pages/dashboard");
    } else {
      alert(json["message"]);
    }
  };

  return (
    <div className="center container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputbox">
          <input
            type="text"
            onChange={(e) => {
              setFormValues(e.target.value);
            }}
            placeholder="Code on Email"
          />
        </div>
        <div className="inputbox">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
