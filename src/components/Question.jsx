import styles from "./Question.module.css";
import { data_of_questions } from "../data/data.js";
import { useState } from "react";

export function Question({ user, pull_of_questions, onChangePage }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleSelection = (event) => {
    // Handle user selections here
  };

  const currentQuestion = data_of_questions.questions[currentQuestionIndex];

  if (!currentQuestion) {
    if (typeof onChangePage === "function") {
      onChangePage(3);
    } else {
      console.error("onChangePage is not a function");
    }
    // All questions have been answered
    return (
      <div className={styles["questions-container"]}>
        <h1>Quiz Completed</h1>
        <button
          className="button"
          onClick={() => {
            if (typeof onChangePage === "function") {
              onChangePage(4);
            } else {
              console.error("onChangePage is not a function");
            }
          }}
        >
          To Page Results
        </button>
        {/* Display quiz results or any other completion message */}
      </div>
    );
  }

  return (
    <>
      <div className={styles["questions-container"]}>
        <h1>Questions</h1>
        <h2 className={styles["rounds-counter"]}>{currentQuestion.id}/4</h2>

        <div className={styles["questions"]}>
          <h2>{currentQuestion.question.text}</h2>
          <form>
            {currentQuestion.answers.map((answer) => (
              <label key={answer.number} className={styles["answer"]}>
                <input
                  type="radio"
                  name="answer"
                  value={answer.text}
                  checked
                  onChange={handleSelection}
                />
                {answer.text}
              </label>
            ))}
          </form>
        </div>
        <div className={styles["buttons-contanier"]}>
          <button
            className="button"
            onClick={() => {
              handlePreviousQuestion();
            }}
          >
            &#8592; &nbsp;Back
          </button>
          <button
            className="button"
            onClick={() => {
              handleNextQuestion();
            }}
          >
            Next&nbsp; &#8594;
          </button>
        </div>
      </div>
    </>
  );
}
