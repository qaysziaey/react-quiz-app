import styles from "./Question.module.css";
import { data_of_questions } from "../data/data.js";
import { useState } from "react";

export function Question({ user, users, onChangePage, onStartWithUser }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [checkBoxState, setCheckBoxState] = useState([]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const { username, avatar } = user;

  const answers = data_of_questions.questions.map((question, index) => {
    if (checkBoxState[index] === undefined) {
      return -1;
    }
    if (question.answers[checkBoxState[index]].correct) {
      return question.question.points_for_right_answer;
    } else {
      return 0;
    }
  });

  const totalScore = answers.reduce((acc, cur) => {
    return acc + (cur >= 0 ? cur : 0);
  }, 0);

  const onCheckAnswer = (value) => {
    if (currentQuestionIndex < checkBoxState.length) {
      setCheckBoxState((prevState) =>
        prevState.map((state, index) => {
          if (currentQuestionIndex === index) {
            return Number(value);
          } else {
            return state;
          }
        })
      );
    } else {
      setCheckBoxState([...checkBoxState, Number(value)]);
    }

    onStartWithUser({
      username,
      avatar,
      answers,
      totalScore,
    });
  };

  const currentQuestion = data_of_questions.questions[currentQuestionIndex];

  if (currentQuestionIndex > data_of_questions.questions.length - 1) {
    let new_user = true;

    const userIndex = users.findIndex(
      (value) => value.username === username && value.avatar === avatar
    );

    if (userIndex !== -1) {
      users[userIndex].answers = answers;
      users[userIndex].result = totalScore;
      new_user = false;
    } else {
      users.push({
        username,
        avatar,
        answers,
        result: totalScore,
      });
    }

    onChangePage(3);

    return null;
  }

  const temp_answers = currentQuestion.answers;

  return (
    <>
      <h1>Questions</h1>
      <h2 className={styles["rounds-counter"]}>
        {currentQuestion.id}/{data_of_questions.questions.length}
      </h2>
      <h2>{currentQuestion.question.text}</h2>
      <div className={styles["questions"]}>
        <form>
          {temp_answers.map((answer, key) => (
            <label key={answer.number} className={styles["answer"]}>
              <input
                name="forQuestion"
                type="radio"
                value={key}
                checked={checkBoxState[currentQuestionIndex] === key}
                onChange={(event) => {
                  onCheckAnswer(event.target.value);
                }}
              />
              {answer.text}
            </label>
          ))}
        </form>
      </div>

      <div className={styles["buttons-container"]}>
        <button
          className="button"
          onClick={() => {
            if (currentQuestionIndex <= 0) {
              onChangePage(1);
            } else {
              handlePreviousQuestion();
            }
          }}
        >
          {currentQuestionIndex <= 0 ? "Main" : "Back"}
        </button>
        <button
          className="button"
          onClick={() => {
            handleNextQuestion();
          }}
        >
          {currentQuestionIndex >= data_of_questions.questions.length - 1
            ? "Finish"
            : "Next"}
        </button>
      </div>
    </>
  );
}
