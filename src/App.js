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
        <Router>
          <Header />
          {/*A router in order to switch between page components */}
          <Routes>
<<<<<<< HEAD
            <Route exact path="/Countries-Catalog" element={<Home />} />
=======
            <Route exact path="" element={<Home />} />
>>>>>>> 0fd68b3773b4c3039a289d809e08c9bc107f1a22
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
