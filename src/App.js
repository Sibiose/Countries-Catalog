import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header-components/Header";
import Home from "./Home";
import AboutTheProject from "./AboutTheProject";
import { DataProvider } from "./context/DataContext";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          {/*A router in order to switch between page components */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/AboutTheProject" element={<AboutTheProject />} />
          </Routes>
          <Footer />
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
