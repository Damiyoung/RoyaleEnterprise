import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Response from "./components/Response/Response";

const App = () => {
  return (
    <Router>
      <div className=" bg-gray-100">
        <NavBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/responses" element={<Response />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
