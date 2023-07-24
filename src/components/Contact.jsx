import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted.");
  };

  return (
    <div className="con">
      <form method="post" onSubmit={handleSubmit}>
        <h1>
          Contact <span>Here</span>
        </h1>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={data.name}
          placeholder="Enter Your Name"
          required
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={data.email}
          placeholder="Enter Your Email"
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={data.message}
          placeholder="Enter Your Message"
        ></textarea>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default Contact;
