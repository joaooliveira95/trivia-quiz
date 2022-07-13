import { Link } from "react-router-dom";

export default function IntroPage() {
  return (
    <div className="container is-max-desktop">
      <div className="card has-text-centered px-6">
        <h2 className="title is-2 is-size-3-mobile is-spaced">
          Welcome to the Trivia Challenge
        </h2>
        <h4 className="subtitle is-4 is-size-5-mobile	">
          You will be presented with 10 True or False questions.
        </h4>
        <h4 className="subtitle is-4 is-size-5-mobile">Can you score 100%?</h4>
        <Link to={"/quiz"} className="button is-success">
          BEGIN
        </Link>
      </div>
    </div>
  );
}
