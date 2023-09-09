"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [formValues, setFormValues] = useState({
    email: "example@gmail.com",
    password: "123",
  });
  const route = useRouter();

  const handleChange = (name, value) => {
    setFormValues((formValues) => ({
      ...formValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formValues);
    const config = { method: "POST", body: JSON.stringify(formValues) };
    const response = await fetch("/api/registration", config);
    let json = await response.json();
    console.log(json["status"]);

    if (json["status"] === true) {
      console.log("hi");
      route.replace(`/pages/login?email=${formValues.email}`);
    } else {
      alert(json["msg"]);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            handleChange("email", e.target.value);
          }}
          value={formValues.email}
          placeholder="email"
          required=""
        />
        <br />
        <input
          onChange={(e) => {
            handleChange("password", e.target.value);
          }}
          value={formValues.password}
          placeholder="password"
          required=""
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default page;
