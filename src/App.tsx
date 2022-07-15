import "./app.styles.scss";
import "react-toastify/dist/ReactToastify.css";
import IntroPage from "./pages/Intro.page";
import QuizPage from "./pages/Quiz.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <section className="hero is-fullheight">
      <ToastContainer />
      <Router>
        <div className="hero-body">
          <Routes>
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/" element={<IntroPage />} />
          </Routes>
        </div>
      </Router>
    </section>
  );
}

export default App;
