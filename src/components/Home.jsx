import React from "react";

const para =
  "Embrace the era of digital education and unlock a world of limitless learning possibilities. Access a vast array of digital notes on various subjects, empowering you to study anytime, anywhere. Experience the convenience and flexibility of digital education with our comprehensive collection of online resources. Access interactive digital notes that enhance your understanding and retention of key concepts. Say goodbye to bulky textbooks and welcome the era of digital notes. Enjoy the ease of carrying your entire study material in a digital format, enabling efficient organization and seamless access to information.";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Welcome to NoteStack!</h1>
          <p id="quote">{para}</p>
        </main>
      </div>
      <footer>
        <div>
          <h4>&copy; 2023 Apply. All rights reserved.</h4>
          <h4 className="divh4">Kamal Singh</h4>
        </div>
        <div>
          <h4>Terms - Privacy Policy</h4>
        </div>
      </footer>
    </>
  );
};

export default Home;
