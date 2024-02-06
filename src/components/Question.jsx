import styles from "./Question.module.css";
import { data_of_questions } from "../data/data.js";
import { useState } from "react";

export function Question({ user, users, onChangePage, onStartWithUser }) {
  //   console.log(user)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [checkBoxState, setCheckBoxState] = useState([]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const hanlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  let temp_user_answers = [];
  let temp_checkBoxState = [];
  let username = user.username;
  let avatar = user.avatar;
  let temp_total_Score = 0;

  // console.log(currentQuestionIndex)

  if (answers[0] == undefined) {
    data_of_questions.questions.forEach((value, index) => {
      temp_user_answers.push(-1);
    });

    data_of_questions.questions[currentQuestionIndex].answers.forEach(
      (value, index) => {
        temp_checkBoxState.push(-1);
      }
    );
    setAnswers(temp_user_answers);
  } else {
    temp_user_answers = answers;
    temp_checkBoxState = checkBoxState;
  }

  //  console.log(temp_user_answers)

  const onCheckAnswer = (value) => {
    temp_checkBoxState[currentQuestionIndex] = value;
    if (
      data_of_questions.questions[currentQuestionIndex].answers[value].richtich
    ) {
      temp_user_answers[currentQuestionIndex] =
        data_of_questions.questions[
          currentQuestionIndex
        ].question.points_for_right_answer;
    } else {
      temp_user_answers[currentQuestionIndex] = 0;
    }

    setAnswers(temp_user_answers);
    setCheckBoxState(temp_checkBoxState);

    temp_total_Score = 0;
    temp_user_answers.forEach((value, index) => {
      if (value >= 0) {
        temp_total_Score += value;
      }
    });

    setTotalScore(temp_total_Score);

    console.log(temp_total_Score);

    onStartWithUser({
      username,
      avatar,
      answers: temp_user_answers,
      totalScore: temp_total_Score,
    });

    //setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
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

  // console.log(temp_user_answers)

  return (
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
                  temp_checkBoxState[currentQuestionIndex] == key ? true : false
                }
                disabled={temp_user_answers[currentQuestionIndex] !== -1} // Disable if an answer is already selected
                onChange={(event) => {
                  onCheckAnswer(event.target.value);
                }}
              />
              {answer.text}
            </label>
          ))}
        </form>
        {/* Display feedback is hereeeeeeeee*/}
        {temp_user_answers[currentQuestionIndex] !== -1 && (
          <p className={styles["feedback"]}>
            {temp_user_answers[currentQuestionIndex] > 0
              ? "Correct Bravooooooooo💃🏻!"
              : "Incorrect!!! 🤬"}
          </p>
        )}
      </div>
      <div className={styles["buttons-contanier"]}>
        <button
          className="button"
          onClick={() => {
            if (currentQuestionIndex <= 0) {
              onChangePage(1);
            } else {
              hanlePreviousQuestion();
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
  );
}
