import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home";
import AboutDetailPage from "./pages/about/about_detail";
import ActDetailPage from "./pages/act/act_detail";
import RecruitDetailPage from "./pages/recruit/recruit._detail";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/signup/signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutDetailPage />} />
        <Route path="/act" element={<ActDetailPage />} />
        <Route path="/recruit" element={<RecruitDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
