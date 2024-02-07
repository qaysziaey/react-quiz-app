import React, { useState, useEffect } from "react";
import styles from "./Results.module.css";
import { data_of_questions } from "../data/data.js";
import { languageList } from "../data/language.js";

let Max_points =
  data_of_questions.prizes_by_points[
    data_of_questions.prizes_by_points.length - 1
  ].end;
let resultPriseText = "";


export function Results({ users, user, onChangePage, language }) {
  data_of_questions.prizes_by_points.forEach((prize, index) => {
    if (user.result >= prize.start && user.result <= prize.end) {
      resultPriseText = prize.text[language];
    }
  });

  const [message, setMessage] = useState({ text: {}, color: "" });

//  console.log(user);

  useEffect(() => {
    if (user.result && Max_points > 0) {
      const percentage = (user.result / Max_points) * 100;
 //     console.log(percentage, user.result, Max_points);
 //     console.log(message);
      const resultAnimation = animationForResult(percentage);

      setMessage(resultAnimation);
    }
  }, [user.result]);

  users.sort((a, b) => b.result - a.result);

  return (
    <>
      <div className={styles["results-main-container"]}>
        <h1>
        Dier <span>{user.username}</span> ({user.avatar})
        <div>Your results:</div>
          </h1>
          <h2
          className={`${styles.score} ${
            user.result >= 80
              ? styles.heightScore
              : user.result >= 50
              ? styles.mediumScore
              : styles.lowScore
          } ${user.result >= 80 ? styles.monkey : ""}`}
        >
          {user.result > 0 ? user.result : languageList[language].Results.text_no_answers}
        </h2>
        <div>{resultPriseText}</div>
        <span className={styles.notice}>(Maximum {Max_points})</span>
      </div>
      <div
        className={`${styles.messageContainer} ${
          message.color && styles[message.color]
        }`}
        style={{ opacity: 0.8, color: message.color }}
      >
        <h2>{message.text[language]}</h2>
      </div>
      <div className={styles.table_of_results}>
        {users.map((person) => {
          return (
            <div
              className={
                styles.table_person +
                " " +
                (person.avatar == user.avatar &&
                person.username == user.username
                  ? styles.thisUser
                  : "")
              }
            >
              <div className={styles.personAvatar}>{person.avatar}</div>
              <div className={styles.personUsername}>{person.username}</div>
              <div className={styles.personResult}>{person.result}</div>
            </div>
          );
        })}
      </div>
      <div className={`${styles.funText} ${styles.funnyAnimation}`}>
        {languageList[language].Results.text_have_fun}
      </div>
      <button
        className="button"
        onClick={() => {
          onChangePage(1);
        }}
      >
        {languageList[language].Results.btn_play_again}
      </button>
    </>
  );


  function animationForResult(percentage) {
    if (percentage >= 80) {
      return {
        text: languageList[language].Results.text_80,
        color: "green",
      };
    } else if (percentage >= 50) {
      return {
        text: languageList[language].Results.text_50,
        color: "orange",
      };
    } else {
      return {
        text: languageList[language].Results.text_0,
        color: "red",
      };
    }
  }

}

