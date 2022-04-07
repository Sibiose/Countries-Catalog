import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header-components/Header";
import Home from "./Home";
import AboutTheProject from "./AboutTheProject";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutTheProject" element={<AboutTheProject />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
