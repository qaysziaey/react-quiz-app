import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./Results.module.css";

export function Results(props) {
  const [totalScore, setTotalScore] = useState(0);
  const [message, setMessage] = useState({ text: "", backgroundColor: "" });

  const maxScore = 10;

  const calculatePercentage = useCallback((score) => {
    return (score / maxScore) * 100;
  }, []);

  useEffect(() => {
    const score = props.userAnswers.reduce(
      (accumulator, currentValue) => accumulator + (currentValue ? 1 : 0),
      0
    );
    setTotalScore(score);

    const percentage = calculatePercentage(score);
    const resultAnimation = animationForResult(percentage);

    setMessage(resultAnimation);
  }, [props.userAnswers, calculatePercentage]);

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
        <Message
          message={message.text}
          backgroundColor={message.backgroundColor}
        />
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

function Message(props) {
  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <animated.div
      className={`${styles.messageContainer} ${
        props.backgroundColor && styles[props.backgroundColor]
      }`}
      style={{
        ...animation,
        backgroundColor: props.backgroundColor,
      }}
    >
      <h2>{props.message}</h2>
    </animated.div>
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
