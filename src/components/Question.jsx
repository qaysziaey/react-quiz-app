import styles from "./Question.module.css";
import { data_of_questions } from "../data/data.js";
import { languageList } from "../data/language.js";
import { useState } from "react";

export function Question({ user, users, onChangePage, onStartWithUser, language }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(
    Array(data_of_questions.questions.length).fill(-1)
  );
  const [totalScore, setTotalScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setFeedback(""); // Reset feedback for the next question
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setFeedback(""); // Reset feedback for the previous question
  };

  const username = user.username;
  const avatar = user.avatar;

  const onCheckAnswer = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = parseInt(value);
    setAnswers(newAnswers);

    let temp_total_Score = 0;
    newAnswers.forEach((value, index) => {
      if (value >= 0) {
        temp_total_Score += value;
      }
    });
    setTotalScore(temp_total_Score);

    // Check if the answer is correct and set feedback
    const correctAnswerIndex = data_of_questions.questions[
      currentQuestionIndex
    ].answers.findIndex((answer) => answer.correct);
    if (parseInt(value) === correctAnswerIndex) {
      setFeedback(languageList[language].Questions.text_correct);
    } else {
      setFeedback(languageList[language].Questions.text_incorrect);
    }

    onStartWithUser({
      username,
      avatar,
      answers: newAnswers,
      totalScore: temp_total_Score,
    });

  };

  const currentQuestion = data_of_questions.questions[currentQuestionIndex];

  if (currentQuestionIndex > data_of_questions.questions.length - 1) {
    // TODO: in diese Platz machen users-add
/*
    onStartWithUser({
      username,
      avatar,
      answers,
      totalScore,
    });    
*/
    onChangePage(3);
    return false;

  }

  const temp_answers = currentQuestion.answers;

  return (
    <div className={styles["questions-container"]}>
      <h1>{languageList[language].Questions.Title}</h1>
      <h2 className={styles["rounds-counter"]}>
        {currentQuestion.id}/{data_of_questions.questions.length}
      </h2>
      <div className={styles["questions"]}>
        <h2>{currentQuestion.question.text[language]}</h2>
        <form>
          {temp_answers.map((answer, key) => (
            <label key={answer.number} className={styles["answer"]}>
              <input
                name="forQuestion"
                type="radio"
                value={key}
                checked={answers[currentQuestionIndex] === key}
                onChange={(event) => {
                  onCheckAnswer(event.target.value);
                }}
                disabled={
                  answers[currentQuestionIndex] >= 0 &&
                  answers[currentQuestionIndex] !== key
                }
              />
              {answer.text[language]}
            </label>
          ))}
        </form>
        {feedback && (
          <p
            className={
              feedback === languageList[language].Questions.text_correct ? styles["correct"] : styles["incorrect"]
            }
          >
            {feedback}
          </p>
        )}
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
          {currentQuestionIndex <= 0 ? languageList[language].Questions.btn_main : languageList[language].Questions.btn_back}
        </button>
        <button
          className="button"
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
  );
}
