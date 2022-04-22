import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header-components/Header";
import Home from "./Home";
import AboutTheProject from "./AboutTheProject";
import Contact from "./Contact";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Header />
          {/*A router in order to switch between page components */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutTheProject" element={<AboutTheProject />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
