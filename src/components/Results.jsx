import React, { useState, useEffect } from "react";
import styles from "./Results.module.css";

export function Results({
  users,
  user,
  onChangePage,
  userAnswers,
  onStartWithUser,
}) {
  const [totalScore, setTotalScore] = useState(0);
  const [message, setMessage] = useState({ text: "", color: "" });

  useEffect(() => {
    if (userAnswers && userAnswers.length > 0) {
      const score = userAnswers.reduce(
        (acc, value) => acc + (value ? 1 : 0),
        0
      );
      setTotalScore(score);

      const maxScore = userAnswers.length;
      const percentage = (score / maxScore) * 100;
      const resultAnimation = animationForResult(percentage);

      setMessage(resultAnimation);
    }
  }, [userAnswers]);

  return (
    <>
      <div className={styles["results-main-container"]}>
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
        <div className={styles.userExample}>
          <h3>Olexi:</h3>
          <div>
            <p>{"Avatar:🥳"}</p>
            <p>{"totalscore:67"}</p>
          </div>
          <h3>Quis:</h3>
          <div>
            <p>{"Avatar:🫢"}</p>
            <p>{"totalscore:67"}</p>
          </div>
          <h3>Raghd:</h3>
          <div>
            <p>{"Avatar:🥳"}</p>
            <p>{"totalscore:100"}</p>
          </div>
        </div>
        <div className={`${styles.funText} ${styles.funnyAnimation}`}>
          Having Fun with us!
        </div>
      </div>
      <div className={styles.messageContainer1}>
        <h1>
          {
            "Wow, youre a quiz master! Are you sure you havent secretly been eating a dictionary for breakfast?"
          }
        </h1>
      </div>
      <button
        className={styles.button}
        onClick={() => {
          onChangePage(1);
        }}
      >
        Play again
      </button>

      <div
        className={`${styles.messageContainer}${
          message.color && styles[message.color]
        }`}
        style={{ opacity: 0.8, color: message.color }}
      >
        <h2>{message.text}</h2>
      </div>
      <div className={styles.message}>
        {userAnswers
          ? `${user.username} scored ${totalScore} out of ${userAnswers.length}!`
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
