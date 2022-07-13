import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { getTriviaQuestions } from "../api/api";
import QuizQuestionCard from "../components/QuizQuestionCard.component";
import QuizResultsCard from "../components/QuizResultsCard.component";
import { IAnswer } from "../types/quiz.types";

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
      {quiz.length && score === quiz.length && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="container is-max-desktop">
        {!loading && (
          <>
            {quizStep < quiz.length ? (
              <QuizQuestionCard
                question={quiz[quizStep]}
                onNextQuestion={onNextQuestion}
                quizStep={quizStep + 1}
                numberOfQuestions={quiz.length}
              />
            ) : (
              <QuizResultsCard answers={answers} score={score} />
            )}
          </>
        )}
      </div>
    </>
  );
}
