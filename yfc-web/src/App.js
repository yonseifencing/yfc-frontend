import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import HomePage from "./pages/home/home";
import RecruitPage from "./pages/recruit/recruit";
import LoginPage from "./pages/login/login";
import SignUpPage from "./pages/signup/signup";

function App() {
  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
  });
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
