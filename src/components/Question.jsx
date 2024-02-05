
import styles from "./Question.module.css";
import { data_of_questions } from "../data/data.js";
import { useState } from "react";

export function Question({ user, users, onChangePage }) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const hanlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const currentQuestion = data_of_questions.questions[currentQuestionIndex];

  if (!currentQuestion) {
    onChangePage(3);
    // All questions have been answered
    return (
      <div className={styles["questions-container"]}>
        <h1>Quiz Completed</h1>
        <button className="button">To Page Results</button>
        {/* Display quiz results or any other completion message */}
      </div>
    );
  }

  return (
    <>
      <div className={styles["questions-container"]}>
        <h1>QUIZ QUESTIONS</h1>
        <h2 className={styles["rounds-counter"]}>{currentQuestion.id}/4</h2>
        <div className={styles["questions"]}>
          <h2>{currentQuestion.question.text}</h2>
          <form>
            {currentQuestion.answers.map((answer) => (
              <label key={answer.number} className={styles["answer"]}>
                <input
                  type="checkbox"
                  value={answer.text}
                  checked={""}
                  // Add onChange handler if you need to handle user selections
                />
                {answer.text}
              </label>
            ))}
          </form>
        </div>
        <div className={styles["buttons-contanier"]}>
          <button className="button" onClick={() => {
                    hanlePreviousQuestion();
                }}>Back</button>
          <button className="button" onClick={() => {
                    handleNextQuestion();
                }}>Next</button>
        </div>
      </div>
    </>
  );
}
