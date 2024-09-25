import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import NotFound from "./NotFound";
import CategoryPage from "./components/second_page/CategoryPage";
import LoginSignUpPage from "./components/login_sign_up/SignUpPage";
import FirstLoginSignUpPage from "./components/login_sign_up/FirstLoginSignUpPage";
import ChatBot from "./components/chatbot/ChatBot";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/login_page" element={<FirstLoginSignUpPage />} />
          <Route path="/login_signup" element={<LoginSignUpPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router> */}

      <ChatBot/>
    </>
  );
}

export default App;
