import styles from "./Question.module.css";
import { data_of_questions } from "../data/data.js";
import { languageList } from "../data/language.js";
import { useState } from "react";

export function Question({ user, onChangePage, onStartWithUser, language }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [checkBoxState, setCheckBoxState] = useState([]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (checkBoxState[currentQuestionIndex] == undefined) {
      let temp_checkbox = checkBoxState;
      temp_checkbox.push(-1);
      setCheckBoxState(temp_checkbox);
    }

    setFeedback(""); // Reset feedback for the next question
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setFeedback(""); // Reset feedback for the previous question
  };

  const { username, avatar } = user;

  const answers = data_of_questions.questions.map((question, index) => {
    if (checkBoxState[index] == undefined) {
      return -1;
    }

    if (
      question.answers[checkBoxState[index]] !== undefined &&
      question.answers[checkBoxState[index]].correct
    ) {
      return question.question.points_for_right_answer;
    } else {
      return 0;
    }
  });

  const onCheckAnswer = (value) => {
    if (currentQuestionIndex < checkBoxState.length - 1) {
      console.log(
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

    const totalScore = answers.reduce((acc, cur) => {
      return acc + (cur >= 0 ? cur : 0);
    }, 0);

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

    console.log(answers);

    const totalScore = answers.reduce((acc, cur) => {
      return acc + (cur >= 0 ? cur : 0);
    }, 0);

    console.log(totalScore);

    onStartWithUser({
      username,
      avatar,
      answers,
      totalScore,
    });

    /*
    console.log(checkBoxState)
    console.log(answers)
*/
    onChangePage(3, {
      username,
      avatar,
      answers,
      totalScore,
    });

    return false;
  }

  const temp_answers = currentQuestion.answers;

  console.log(checkBoxState);

  return (
    <>
      <div className={styles["questions-container"]}>
        <div>
          <h1>{languageList[language].Questions.Title}</h1>
          <h2 className={styles["rounds-counter"]}>
            {currentQuestion.id}/{data_of_questions.questions.length}
          </h2>
        </div>
        {feedback && (
          <div
            className={
              feedback === languageList[language].Questions.text_correct
                ? styles["baloon_correct"]
                : styles["baloon_incorrect"]
            }
          >
            {feedback}
          </div>
        )}
        <div className={styles["questions"]}>
          <form>
            <h2>{currentQuestion.question.text[language]}</h2>
            {temp_answers.map((answer, index) => (
              <label
                key={index}
                className={
                  styles[
                    checkBoxState[currentQuestionIndex] == undefined
                      ? ""
                      : index == checkBoxState[currentQuestionIndex] &&
                        answer.correct
                      ? "enabled_label"
                      : answer.correct
                      ? "enabled_label"
                      : "disabled_label"
                  ]
                }
              >
                <input
                  name="forQuestion"
                  type="radio"
                  value={index}
                  checked={
                    checkBoxState[currentQuestionIndex] == index ? true : false
                  }
                  onChange={(event) => {
                    onCheckAnswer(event.target.value);
                    if (answer.correct) {
                      setFeedback(
                        languageList[language].Questions.text_correct
                      );
                    } else {
                      setFeedback(
                        languageList[language].Questions.text_incorrect
                      );
                    }
                  }}
                  disabled={
                    checkBoxState[currentQuestionIndex] >= 0 &&
                    checkBoxState[currentQuestionIndex] !== index
                  }
                />
                {answer.text[language]}
              </label>
            ))}
          </form>
        </div>
        <div className={styles["buttons-container"]}>
          <button
            className={styles.button}
            onClick={() => {
              if (currentQuestionIndex <= 0) {
                onChangePage(1);
              } else {
                handlePreviousQuestion();
              }
            }}
          >
            {currentQuestionIndex <= 0
              ? languageList[language].Questions.btn_main
              : languageList[language].Questions.btn_back}
          </button>
          <button
            className={styles.button}
            onClick={() => {
              handleNextQuestion();
            }}
          >
            {currentQuestionIndex >= data_of_questions.questions.length - 1
              ? languageList[language].Questions.btn_finish
              : languageList[language].Questions.btn_next}
          </button>
        </div>
      </div>
    </>
  );
}
