import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home";
import RecruitPage from "./pages/recruit/recruit.js";
import RecruitResultPage from "./pages/recruit/recruitresuit/recruitresult.js";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/signup/signup";
import InnerHomePage from "./pages/innerpages/innerhome/innerhome.js";
import AttendPage from "./pages/attend/attend.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/recruit/result" element={<RecruitResultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/inner" element={<InnerHomePage />} />
        <Route path="/attend" element={<AttendPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
