import classNames from "classnames";
import parse from "html-react-parser";
import { IAnswer } from "../types/quiz.types";
import { Link } from "react-router-dom";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

interface IQuizResultsCard {
  answers: IAnswer[];
  score: number;
}

export default function QuizResultsCard({
  answers,
  score,
}: IQuizResultsCard): ReactElement {
  return (
    <div className="card has-text-centered px-6">
      <div>
        <h2 className="title is-2 is-size-3-mobile is-spaced">You Scored</h2>
        <h4 className="subtitle is-4 is-size-5-mobile">{`${score}/${answers.length}`}</h4>
        <div className="columns is-multiline has-text-left">
          {answers.map((answer) => (
            <div
              className={classNames({
                column: true,
                "is-full": true,
                "mt-2": true,
                "has-background-success-light":
                  answer.answer === answer.correct_answer,
                "has-background-danger-light":
                  answer.answer !== answer.correct_answer,
              })}
            >
              <p>
                <span className="mr-2">
                  {answer.answer === answer.correct_answer ? (
                    <FontAwesomeIcon icon={solid("circle-check")} />
                  ) : (
                    <FontAwesomeIcon icon={solid("circle-xmark")} />
                  )}
                </span>
                <b>{parse(answer.question)}</b>
              </p>
              <br />
              <p>
                <span>
                  <b>Correct Answer:</b> {answer.correct_answer}
                </span>
              </p>
            </div>
          ))}
        </div>
        <Link to={"/"} className="button is-medium is-primary is-fullwidth">
          PLAY AGAIN?
        </Link>
      </div>
    </div>
  );
}
