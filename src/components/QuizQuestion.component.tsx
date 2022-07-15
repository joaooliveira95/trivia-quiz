import parse from "html-react-parser";
import { IAnswer } from "../types/quiz.types";
import { ReactElement } from "react";

interface IQuizQuestion {
  numberOfQuestions: number;
  onNextQuestion: (answer: string) => void;
  question: IAnswer;
  quizStep: number;
}

export default function QuizQuestion({
  question,
  onNextQuestion,
  quizStep,
  numberOfQuestions,
}: IQuizQuestion): ReactElement {
  return (
    <div>
      <div>
        <h2 className="title is-2 is-size-3-mobile is-spaced">
          {question?.category}
        </h2>
        <h4 className="subtitle is-4 is-size-5-mobile	">
          {parse(question?.question)}
        </h4>
      </div>

      <div className="buttons is-flex is-justify-content-center my-6">
        <button
          className="button is-medium is-success mx-2"
          onClick={() => onNextQuestion("True")}
        >
          True
        </button>
        <button
          className="button is-medium is-danger mx-2"
          onClick={() => onNextQuestion("False")}
        >
          False
        </button>
      </div>

      <div>
        <p>{`${quizStep} of ${numberOfQuestions}`}</p>
      </div>
    </div>
  );
}
