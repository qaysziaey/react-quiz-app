import React, { useState, useEffect } from "react";
import styles from "./Results.module.css";

export function Results(props) {
  const [totalScore, setTotalScore] = useState(0);
  const [message, setMessage] = useState({ text: "", color: "" });

  useEffect(() => {
    if (props.userAnswers && props.userAnswers.length > 0) {
      const score = props.userAnswers.reduce(
        (acc, value) => acc + (value ? 1 : 0),
        0
      );
      setTotalScore(score);

      const maxScore = props.userAnswers.length;
      const percentage = (score / maxScore) * 100;
      const resultAnimation = animationForResult(percentage);

      setMessage(resultAnimation);
    }
  }, [props.userAnswers]);

  return (
    <>
      <div className={styles.root}>
        <h1
          className={`${styles.score} ${
            totalScore >= 80
              ? styles.heightScore
              : totalScore >= 50
              ? styles.mediumScore
              : styles.lowScore
          }${totalScore >= 80 ? styles.monkey : ""}`}
        >
          Your results
        </h1>
        <div className={`${styles.funText} ${styles.funnyAnimation}`}>
          Having Fun with us!
        </div>
      </div>
      <div
        className={`${styles.messageContainer}${
          message.color && styles[message.color]
        }`}
        style={{ opacity: 0.8, color: message.color }}
      >
        <h2>{message.text}</h2>
      </div>
      <div className={styles.message}>
        {props.userAnswers
          ? `You scored ${totalScore} out of ${props.userAnswers.length}!`
          : "No answers provided"}
      </div>
    </>
  );
}

function animationForResult(percentage) {
  if (percentage >= 80) {
    return {
      text: "Wow, you're a quiz master! Are you sure you haven't secretly been eating a dictionary for breakfast?",
      color: "green",
    };
  } else if (percentage >= 50) {
    return {
      text: "Well done! You're almost at the top. A little more practice, and you'll conquer the quiz crown!",
      color: "orange",
    };
  } else {
    return {
      text: "Not bad! Remember: every master was once a beginner. On to the next try!",
      color: "red",
    };
  }
}
