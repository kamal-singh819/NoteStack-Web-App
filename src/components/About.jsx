import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div className="about-div">
      <h1>Welcome to NoteStack - Your Ultimate Study Companion!</h1>
      <p>
        At <span>NoteStack</span>, we are passionate about empowering college
        students with the best study resources and tools to excel in their
        academic journey. We understand the challenges students face in finding
        comprehensive and reliable study materials, and that's why we've created
        this platform to provide a seamless and enriching learning experience.
      </p>
      <br />
      <h3>Our Vision</h3>
      <hr />
      <p>
        Our vision is to be the go-to platform for college students seeking
        high-quality <span> Study Notes</span>,{" "}
        <span>Previous Year Question Papers</span>, and a wide range of{" "}
        <span>PDF Books</span>. We aim to simplify the process of accessing
        academic resources and foster a community of learners who can support
        each other in their quest for knowledge.
      </p>
      <br />
      <br />
      <h3>Our Commitment to Excellence</h3>
      <hr />
      <p>
        At <span>NoteStack</span>, we are committed to ensuring that you have
        access to the best study materials, and we take pride in offering a
        seamless experience. We strive to be your trusted academic partner,
        providing you with the resources and tools you need to reach your full
        potential. <br />
        Join us at NoteStack, where learning is simplified and success becomes
        achievable. Start exploring now, and let's build a brighter future
        together!
        <br />
        <br />
        Happy learning,
        <br />
        <span id="last">The NoteStack Team.</span>
      </p>
    </div>
  );
};

export default About;
