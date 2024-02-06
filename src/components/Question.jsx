import styles from "./Question.module.css";
import { data_of_questions } from "../data/data.js";
import { useState } from "react";

export function Question({ user, users, onChangePage, onStartWithUser }) {
  //   console.log(user)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [checkBoxState, setCheckBoxState] = useState([]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  let username = user.username;
  let avatar = user.avatar;

  // Derived state

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
      setCheckBoxState(
        checkBoxState.map((state, index) => {
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
    // TODO: in diese Platz machen users-add

    let new_user = true;

    users.forEach((value, index) => {
      if (value.username == username && value.avatar == avatar) {
        users[index].answers = answers;
        users[index].result = totalScore;
        new_user = false;
        return false;
      }
    });

    if (new_user) {
      users.push({
        username: username,
        avatar: avatar,
        answers: answers,
        result: totalScore,
      });
    }

    onChangePage(3);

    return false;
    // All questions have been answered
    /*
        return (
        <div className={styles["questions-container"]}>
            <h1>Quiz Completed</h1>
            <button className="button">To Page Results</button>
            // Display quiz results or any other completion message
        </div>
        );
     */
  }

  let temp_answers = currentQuestion.answers;

  // Calculate derived state

  // console.log(temp_user_answers)

  return (
    <>
      <div className={styles["questions-container"]}>
        <h1>QUIZ QUESTIONS</h1>
        <h2 className={styles["rounds-counter"]}>
          {currentQuestion.id}/{data_of_questions.questions.length}
        </h2>
        <div className={styles["questions"]}>
          <h2>{currentQuestion.question.text}</h2>
          <form>
            {temp_answers.map((answer, key) => (
              <label key={answer.number} className={styles["answer"]}>
                <input
                  name="forQuestion"
                  type="radio"
                  value={key}
                  checked={
                    checkBoxState[currentQuestionIndex] == key ? true : false
                  }
                  onChange={(event) => {
                    onCheckAnswer(event.target.value);
                  }}
                  // Add onChange handler if you need to handle user selections
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
      </div>
    </>
  );
}
