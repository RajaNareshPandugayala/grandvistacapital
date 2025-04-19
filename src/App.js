import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Elements/ScrollToTop/scroll_top";

import "./App.css";
import Header from "./Elements/Header/header";
import Footer from "./Elements/Footer/footer";
import Home from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import LeadershipPage from "./pages/Leadership";
import ContactUsPage from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/grandvistacapital">
        {/* <BrowserRouter> */}
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investment-portfolio" element={<PortfolioPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
