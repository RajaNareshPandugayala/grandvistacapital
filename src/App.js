import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Elements/ScrollToTop/scroll_top";

import "./App.css";
import Header from "./Elements/Header/header";
import Footer from "./Elements/Footer/footer";
import Home from "./pages/Home";
// import Purchase from "./pages/Purchase/purchase";
// import PaperWork from "./pages/Paperwork/paper-work";
// import QuickQuote from "./pages/QuickQuote/quick-quote";
// import FHA from "./pages/FHA_Loans/fha";
// import VALoans from "./pages/VA_Loans/va-loans";
// import MonthlyPaymentMortgageCalculator from "./pages/MonthlyPaymentCalculator/what-will-my-monthly-payment-be-calculator";
// import AffordabilityCalculator from "./pages/AffordabilityCalculator/how-much-can-i-afford-calculator";
// import Refinancing from "./pages/Refinancing/refinancing";
// import CashOutRefinance from "./pages/CashOutRefinance/cash-out-refinance";
// import FhaVaStreamline from "./pages/FhaVaStreamlineRefinance/fha-va-streamline";
// import TheLoanProcess from "./pages/TheLoanProcess/the-loan-process";
// import GlossaryOfMortgageTerms from "./pages/GlossaryOfMortgageTerms/glossary-terms";
// import AboutUs from "./pages/AboutUs/about-us";
// import ContactUs from "./pages/ContactUs/contact-us";
// import GetInformativeFreeReports from "./pages/GetInformativeFreeReports/free-reports";
// import MeetOurStaff from "./pages/MeetOurStaff/our-staff";
// import RefinanceAnalysisCalculator from "./pages/RefinanceAnalysisCalculator/refinance-analysis-calculator";
// import DebtConsolidationCalculator from "./pages/ConsolidationCalculator/debt-consolidation-calculator";
// import RentingVsBuyingCalculator from "./pages/RentingVsBuyingCalculator/renting-versus-buying-calculator";
// import AdaAccessibilityStatement from "./pages/adaAccessibilityStatement/ada-accessibility-statement";
// import PrivacyPolicyStatement from "./pages/PrivacyStatement/privacy-policy";
// import TestimonialsReview from "./pages/TestimonialReview/testimonials";
// import RightLoanForYou from "./pages/WhichLoanIsRightForYou/which-loan-is-right-for-me";
// import TappingYourEquityAfterRateCuts from "./pages/blogPages/TappingYourEquityAfterRateCuts/tapping_your_equity_after_rate_cuts";
// import FederalReserveRateCuts from "./pages/blogPages/FederalReserveRateCuts/federal_reserve_rate_cuts";
// import RefiIntoA15YearMortgage from "./pages/blogPages/RefiIntoA15YearMortgage/refi_into_a_15_year_mortgage";
// import HowTheFedAffectsMortgageRates from "./pages/blogPages/HowTheFedAffectsMortgageRates/how_the_fed_affects_mortgage_rates";
// import WhatIsAZombieMortgage from "./pages/blogPages/WhatIsAZombieMortgage/what_is_a_zombie_mortgage";
// import TeamMemberFullDetails from "./pages/StaffDetails/teamMemberFullDetails";

// // import TeatingGmailFormPage from './pages/Form/ExampleGmailForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/grandvistacapital">
        {/* <BrowserRouter> */}
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/paper-work" element={<PaperWork />} />
          <Route path="/quick-quote" element={<QuickQuote />} />
          <Route
            path="/how-much-can-i-afford-calculator"
            element={<AffordabilityCalculator />}
          />
          <Route
            path="/what-will-my-monthly-payment-be-calculator"
            element={<MonthlyPaymentMortgageCalculator />}
          />
          <Route path="/fha" element={<FHA />} />
          <Route path="/va-loans" element={<VALoans />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/refinancing" element={<Refinancing />} />
          <Route path="/cash-out-refinance" element={<CashOutRefinance />} />
          <Route
            path="/refinance-analysis-calculator"
            element={<RefinanceAnalysisCalculator />}
          />
          <Route
            path="/debt-consolidation-calculator"
            element={<DebtConsolidationCalculator />}
          />
          <Route
            path="/renting-versus-buying-calculator"
            element={<RentingVsBuyingCalculator />}
          />
          <Route path="/fha-va-streamline" element={<FhaVaStreamline />} />
          <Route path="/the-loan-process" element={<TheLoanProcess />} />
          <Route path="/free-reports" element={<GetInformativeFreeReports />} />
          <Route path="/glossary-terms" element={<GlossaryOfMortgageTerms />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-staff" element={<MeetOurStaff />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/testimonials" element={<TestimonialsReview />} />
          <Route
            path="/which-loan-is-right-for-me"
            element={<RightLoanForYou />}
          />
          <Route
            path="/ada-accessibility-statement"
            element={<AdaAccessibilityStatement />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyStatement />} />
          <Route
            path="/tapping_your_equity_after_rate_cuts"
            element={<TappingYourEquityAfterRateCuts />}
          />
          <Route
            path="/federal_reserve_rate_cuts"
            element={<FederalReserveRateCuts />}
          />
          <Route
            path="/refi_into_a_15_year_mortgage"
            element={<RefiIntoA15YearMortgage />}
          />
          <Route
            path="/how_the_fed_affects_mortgage_rates"
            element={<HowTheFedAffectsMortgageRates />}
          />
          <Route
            path="/what_is_a_zombie_mortgage"
            element={<WhatIsAZombieMortgage />}
          />

          <Route path="/our-staff/:id" element={<TeamMemberFullDetails />} /> */}

          {/* <Route path="/test-mail-through-form" element={<TeatingGmailFormPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
