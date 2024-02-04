import React, { useState } from "react";
import styles from "./Results.module.css";

export function Results(props) {
  const [totalScore, setTotalScore] = useState(0);
  const [message, setMessage] = useState({
    text: "",
    backgroundColor: "",
    animation: "",
  });

  const maxscore = 10;
  const score = 0;
  const percentage = (score / maxscore) * 100;

  function handleSubmitScoreAndName() {
    setTotalScore(
      totalScore.reduce(
        (accumlator, currentElement) => accumlator + currentElement
      ),
      0
    );
  }

  return;
  <></>;
}
