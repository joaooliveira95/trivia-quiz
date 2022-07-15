import Confetti from "react-confetti";
import LoadingCard from "../components/Loading.component";
import QuizQuestion from "../components/QuizQuestion.component";
import QuizResults from "../components/QuizResults.component";
import { IAnswer } from "../types/quiz.types";
import { getTriviaQuestions } from "../api/api";
import { useEffect, useState } from "react";

export default function QuizPage() {
  const [loading, setLoading] = useState(true);
  const [quizStep, setQuizStep] = useState(0);
  const [quiz, setQuiz] = useState<IAnswer[]>([]);
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const score = answers.reduce((acc, answer) => {
    return answer.answer === answer.correct_answer ? acc + 1 : acc;
  }, 0);

  useEffect(() => {
    const getQuiz = async (): Promise<void> => {
      const response = await getTriviaQuestions();
      setQuiz(response.results);
      setLoading(false);
    };
    getQuiz();
  }, []);

  const onNextQuestion = (answer: string): void => {
    setAnswers([...answers, { ...quiz[quizStep], answer }]);
    setQuizStep(quizStep + 1);
  };

  return (
    <>
      {!!quiz.length && score === quiz.length && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="container is-max-desktop">
        <div className="card has-text-centered px-6">
          {loading && <LoadingCard />}
          {!loading && (
            <>
              {quizStep < quiz.length ? (
                <QuizQuestion
                  question={quiz[quizStep]}
                  onNextQuestion={onNextQuestion}
                  quizStep={quizStep + 1}
                  numberOfQuestions={quiz.length}
                />
              ) : (
                <QuizResults answers={answers} score={score} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
