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
    setFeedback(""); // Reset feedback for the next question
  };


  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    setFeedback(""); // Reset feedback for the previous question
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

    let tempCheckBoxState;

    if (currentQuestionIndex < checkBoxState.length) {

      tempCheckBoxState = checkBoxState.map((state, index) => {
        if (currentQuestionIndex === index) {
          return Number(value);
        } else {
          return state;
        }
      })
      setCheckBoxState(
        tempCheckBoxState
      );

    } else {
      setCheckBoxState([...checkBoxState, Number(value)]);
    }

    alert(tempCheckBoxState);

/*
    if(correct_){
      setFeedback(languageList[language].Questions.text_correct);
    }else{
      setFeedback(languageList[language].Questions.text_incorrect);
    }
*/
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

    
    onStartWithUser({
      username,
      avatar,
      answers,
      totalScore,
    });
 
    
    console.log(checkBoxState)
    console.log(answers)

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
                checked={
                  checkBoxState[currentQuestionIndex] == key ? true : false
                }
                onChange={(event) => {
                  onCheckAnswer(event.target.value);
                }}
                disabled={
                  checkBoxState[currentQuestionIndex] >= 0 &&
                  checkBoxState[currentQuestionIndex] !== key
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
