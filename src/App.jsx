import LandingPage from "./Pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYou from "./Pages/ThankYou";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
