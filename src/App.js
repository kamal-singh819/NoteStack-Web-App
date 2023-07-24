import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Notes from "./components/GetNotes/Notes";
import About from "./components/About";
import Upload from "./components/Admin/Upload";
import FileUpload from "./components/Admin/FileUpload";
import GetPdf from "./components/GetNotes/GetPdf";
import Authen from "./components/Admin/Authen";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/contact.scss";

function App() {
  // const isAuthenticated = false;

  return (
    // <Router>
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/file_upload" element={<FileUpload />} />
        <Route path="/get_pdf" element={<GetPdf />} />
        <Route path="/authen" element={<Authen />} />
      </Routes>
    </>
    // </Router>
  );
}

export default App;
