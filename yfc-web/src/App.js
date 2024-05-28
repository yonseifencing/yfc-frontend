import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import HomePage from "./pages/home/home";
import RecruitDetailPage from "./pages/recruit/recruit.js";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/signup/signup";
import InnerHomePage from "./pages/innerpages/innerhome/innerhome.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruit" element={<RecruitDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/inner" element={<InnerHomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
