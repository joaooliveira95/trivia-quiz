import { toast } from "react-toastify";
import { DEFAULT_NUMBER_OF_QUESTIONS } from "../constants/quiz.constants";

export const getTriviaQuestions = async (
  amount = DEFAULT_NUMBER_OF_QUESTIONS
) => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${amount}&difficulty=hard&type=boolean`
    );
    return await response.json();
  } catch (error) {
    toast.error("Unable to load the quiz. Please try again.")
    return {
      responseCode: -1,
      results: [],
    };
  }
};
