import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
// import { auth } from "../../firebase"; // Make sure to import your firebase instance here
import fireDB from "../../firebase";

const Authen = () => {
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    // fireDB.auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     // Redirect to the Admin Dashboard on successful sign-in
    //     history.push("/upload");
    //   })
    //   .catch((error) => {
    //     // Handle sign-in errors here
    //     console.log(error);
    //   });
    try {
      await fireDB.auth().signInWithEmailAndPassword(email, password);
      // Redirect to the desired page after successful sign-in
      window.location.href = "/upload"; // Replace '/admin' with your desired route
    } catch (error) {
      console.error(error);
      // Handle sign-in error
    }
  };

  return (
    <div>
      {/* Your authentication form */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default Authen;
