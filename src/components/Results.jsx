import React, { useState, useEffect } from "react";
import styles from "./Results.module.css";

export function Results(props) {
  const [totalScore, setTotalScore] = useState(0);
  const [message, setMessage] = useState({ text: "", backgroundColor: "" });

  const maxScore = 8;

  useEffect(() => {
    const score = props.userAnswers.reduce(
      (accumulator, currentValue) => accumulator + (currentValue ? 1 : 0),
      0
    );
    setTotalScore(score);

    const percentage = (score / maxScore) * 100;
    const resultAnimation = animationForResult(percentage);

    setMessage(resultAnimation);
  }, [props.userAnswers]);

  return (
    <>
      <div className={styles.root}>
        <h1
          className={`${styles.score} ${
            totalScore >= 80
              ? styles.highScore
              : totalScore >= 50
              ? styles.mediumScore
              : styles.lowScore
          }`}
        >
          Your results
        </h1>
        <div
          className={`${styles.messageContainer} ${
            message.backgroundColor && styles[message.backgroundColor]
          }`}
          style={{ opacity: 1, backgroundColor: message.backgroundColor }}
        >
          <h2>{message.text}</h2>
        </div>
      </div>

      <div className={styles.message}>
        You scored {totalScore} out of {props.userAnswers.length}!
      </div>
      <button
        className={styles.button}
        onClick={() => window.location.reload()}
      >
        Retry 🦥🌝
      </button>
    </>
  );
}

function animationForResult(percentage) {
  if (percentage >= 80) {
    return {
      text: "Wow, you're a quiz master! Are you sure you haven't secretly been eating a dictionary for breakfast?",
      backgroundColor: "green",
    };
  } else if (percentage >= 50) {
    return {
      text: "Well done! You're almost at the top. A little more practice, and you'll conquer the quiz crown!",
      backgroundColor: "orange",
    };
  } else {
    return {
      text: "Not bad! Remember: every master was once a beginner. On to the next try!",
      backgroundColor: "red",
    };
  }
}
