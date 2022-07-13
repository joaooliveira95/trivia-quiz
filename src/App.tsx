import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/Intro.page";
import QuizPage from "./pages/Quiz.page";
import "./app.styles.scss";

function App() {
  return (
    <section className="hero is-fullheight">
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
